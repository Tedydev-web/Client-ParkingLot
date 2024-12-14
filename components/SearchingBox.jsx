import { Input, AutoComplete, Divider, message } from "antd";
import { connect } from "react-redux";
import React, { useState, useEffect, useRef, useCallback } from "react";
import {
  searchAction,
  searchClearAction,
  setHistoryBox,
  setSearchData,
  setSearchLocalStorage
} from "../redux/actions/search";
import {
  getDetailByIdAction,
  getDetailByLatLngAction,
} from "../redux/actions/place";
import { SearchOutlined, CloseOutlined } from "@ant-design/icons";
import equal from "fast-deep-equal/es6/react";
import { setBoxVisibleAction } from "../redux/actions/boxVisble";
import {
  getDetailIdService,
  getDetailLatLngService,
} from "../redux/sagas/placeSaga";
import Request from "../utils/request";
import { useTranslation } from "react-i18next";
import _ from "lodash";
import { isMobile } from "react-device-detect";
// const config = require("../config." + (process.env.NODE_ENV || "dev") + ".js");
// import * as configDev from '../config.dev.js';
import { ArrowLeftOutlined } from "@ant-design/icons";
const SearchingBox = (props) => {
  const [value, setValue] = useState("");
  const [openDropdown, setOpenDropdown] = useState(true);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [place, setPlace] = useState(null);
  const [searchHistory, setSearchHistory] = useState([]);
  const searchBoxRef = useRef(null);

  const [openSearch2, setOpenSearch2] = useState(false);

  const [openHistory2, setOpenHistory2] = useState(false);
  // const [showIcon, setShowIcon] = useState(false);

  const { t } = useTranslation("common");

  useEffect(() => {
    props.dispatch(setHistoryBox(false));
    if (props.info_box_collapsed) {
      setOpenDropdown(false);
    }
    if (!equal(place, props.place)) {
      const value = props.place
        ? `${props.place?.name} - ${props.place?.formatted_address}`
        : "";
      setPlace(props.place);
      setValue(value);
    }

    const timer = setTimeout(() => {
      if (!isMobile) {
        props.dispatch(setHistoryBox(true));
      }
    }, 2000);
    return () => clearTimeout(timer);
  }, [props.info_box_collapsed, props.place, place]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        searchBoxRef.current &&
        !searchBoxRef.current.contains(event.target)
      ) {
        props.dispatch(setHistoryBox(false));
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const debouncedSearch = useCallback(
    _.debounce((text, latLngStr) => {
      props.dispatch(searchAction(text, latLngStr));
    }, 500),
    []
  );

  const onChange = (event) => {
    const text = event.target.value;
    if (!text) {
      props.dispatch(setBoxVisibleAction("search"));
      setValue(text);
    } else {
      setValue(text);
      props.dispatch(setHistoryBox(true));
      let data = JSON.parse(localStorage.getItem("search_history"));
      // console.log('-------data',data)
      const filtered =
        data != null
          ? data.filter((item) =>
            item.description.toLowerCase().includes(text.toLowerCase())
          )
          : null;
      props.dispatch(setSearchData(filtered));
    }
    const latLngStr = `${props.latLngCenter.latitude}, ${props.latLngCenter.longitude}`;
    debouncedSearch(text, latLngStr);
  };

  const onTitleSelect = async (place) => {
    let check = true;
    let data = JSON.parse(localStorage.getItem("search_history")) || [];
    if (!place.location) {
      const dataHistory = await getDetailIdService(place.place_id);
      if (check) {
        if (place != null && data.length < 100) {
          place.location = dataHistory.data.result.geometry.location;
          // place.place_id = "00000000000"
          data.push(place);
        } else if (place != null && data.length >= 100) {
          data.shift();
          data.push(place);
        }
      }
      window.localStorage.setItem("search_history", JSON.stringify(data));
      const pid = place.id || place.place_id;
      // console.log(pid)
      props.dispatch(getDetailByIdAction(pid));
      setValue(
        `${place.structured_formatting.main_text} - ${place.structured_formatting.secondary_text}`
      );
      props.dispatch(setBoxVisibleAction("info"));
    } else {
      const latLng = {
        latitude: place.location.lat,
        longitude: place.location.lng,
      };

      const response = (await getDetailLatLngService(latLng)).data.results;
      // console.log("respone______", response)
      for (let i = response.length - 1; i >= 0; i--) {
        if (
          place.location.lat === response[i].geometry.location.lat &&
          place.location.lng === response[i].geometry.location.lng &&
          place.structured_formatting.main_text === response[i].name &&
          place.place_id != response[i].place_id
        ) {
          for (let i = data.length - 1; i >= 0; i--) {
            if (data[i].place_id === place.place_id) {
              data.splice(i, 1);
              break;
            }
          }
          place.place_id = response[i].place_id;
          data.push(place);
          break;
        }
      }
      for (let i = data.length - 1; i >= 0; i--) {
        // Nếu có rồi thì đảo lại place đó lên
        if (data[i].place_id === place.place_id) {
          // place.location = dataHistory.data.result.geometry.location
          data.splice(i, 1);
          data.push(place);
          // check = false
          break;
        }
      }
      window.localStorage.setItem("search_history", JSON.stringify(data));
      const pid = place.id || place.place_id;
      props.dispatch(getDetailByIdAction(pid));
      setValue(
        `${place.structured_formatting.main_text} - ${place.structured_formatting.secondary_text}`
      );
      props.dispatch(setBoxVisibleAction("info"));
    }
  };

  const closeBox = (event) => {
    props.dispatch(searchClearAction());
    props.dispatch(setBoxVisibleAction("search"));
    props.dispatch(setSearchLocalStorage([]))
    setValue("");
    setOpenDropdown(false);
  };

  const clickSearch = () => {
    // setShowIcon(true); // Hiện icon khi nhấp vào search box
    // setOpenSearch2(true); // Hiện lịch sử tìm kiếm khi nhấp vào search box
    props.dispatch(setHistoryBox(true)); // Cập nhật trạng thái lịch sử tìm kiếm qua Redux
  };

  const closeSearch = () => {
    props.dispatch(setHistoryBox(false));
  };

  const clickShowHistory = () => {
    props.dispatch(setBoxVisibleAction("history"));
  };

  const deleteHistory = (place) => {
    let data = JSON.parse(localStorage.getItem("search_history"));
    for (let i = data.length - 1; i >= 0; i--) {
      if (data[i].place_id === place.place_id) {
        data.splice(i, 1);
        break;
      }
    }
    window.localStorage.setItem("search_history", JSON.stringify(data));
    setIsDropdownVisible(true);
    setSearchHistory(data.slice(-5).reverse());
  };

  const { places } = props;

  let data = JSON.parse(localStorage.getItem("search_history"));
  let history = data == null ? null : data.slice(-5).reverse();

  let numberSearchResult =
    5 - (props.searchData != null ? props.searchData.length : 0);
  let isHistory = true;
  if (places.length > 0) {
    isHistory = false;
  }
  let openHistory = true;
  if (props.boxVisible === "info") {
    openHistory = false;
  }

  let openSearch = true;
  if (props.boxVisible === "info" && value !== "") {
    openSearch = false;
  }

  if (props.boxVisible === "history" && value === "") {
    openSearch = false;
  }

  const suffixWeb =
    value || props.boxVisible === "history" ? (
      <div>
        <CloseOutlined
          style={{ cursor: "pointer", fontSize: 16 }}
          onClick={(e) => {
            e.stopPropagation();
            closeBox();
          }}
        />
      </div>
    ) : (
      <div>
        <SearchOutlined
          style={{ cursor: "pointer", fontSize: 17, color: "#1890ff" }}
        />
        <Divider type="vertical" style={{ fontSize: 16, background: "#ddd" }} />
        <i
          className="fas fa-directions"
          style={{ cursor: "pointer", color: "#1890ff", fontSize: 20 }}
          onClick={() => props.dispatch(setBoxVisibleAction("navigation"))}
        ></i>
      </div>
    );
  const suffixMobile =
    value || props.boxVisible === "history" ? (
      <div>
        <CloseOutlined
          style={{ cursor: "pointer", fontSize: 16 }}
          onClick={(e) => {
            e.stopPropagation();
            closeBox();
          }}
        />
      </div>
    ) : (
      <div>
        <SearchOutlined
          style={{ cursor: "pointer", fontSize: 17, color: "#1890ff" }}
        />
        <Divider type="vertical" style={{ fontSize: 16, background: "#ddd" }} />
        <i
          className="fas fa-directions"
          style={{ cursor: "pointer", color: "#1890ff", fontSize: 20 }}
          onClick={() => props.dispatch(setBoxVisibleAction("navigation"))}
        ></i>
      </div>
    );

  return (
    <div>
      {!isMobile && (
        <div
          className="search"
          ref={searchBoxRef}
          onClick={() => clickSearch()}
        >
          <div className="search_box">
            <input
              className="search_input"
              value={value}
              onChange={onChange}
              type="text"
              placeholder={t("search_placeholder")}
            />
            {suffixWeb}
          </div>

          {isHistory &&
            openHistory &&
            openSearch &&
            props.openHistory &&
            history && (
              <div className="search_history">
                {history.map((item, index) => (
                  <div
                    onClick={() => onTitleSelect(item)}
                    key={index}
                    style={{
                      borderTop: index === 0 ? "1px solid #ddd" : "none",
                    }}
                  >
                    <i className="fas fa-history"></i>
                    <span className="history_text">
                      <span className="title">
                        {item.structured_formatting.main_text + " "}
                      </span>
                      <span className="text">
                        {item.structured_formatting.secondary_text}
                      </span>
                    </span>
                    <CloseOutlined
                      className="hover-icon"
                      style={{ cursor: "pointer", fontSize: 20, color: "gray" }}
                      onClick={(e) => {
                        e.stopPropagation();
                        deleteHistory(item);
                      }}
                    />
                  </div>
                ))}
              </div>
            )}
          {!isHistory && props.openHistory && openSearch && (
            <div className="search_history">
              {props.searchData != null
                ? props.searchData.slice(0, 5).map((item, index) => (
                  <div
                    onClick={() => onTitleSelect(item)}
                    key={index}
                    style={{
                      borderTop: index === 0 ? "1px solid #ddd" : "none",
                    }}
                  >
                    <i className="fas fa-history"></i>
                    <span className="history_text">
                      <span className="title">
                        {item.structured_formatting.main_text + " "}
                      </span>
                      <span className="text">
                        {item.structured_formatting.secondary_text}
                      </span>
                    </span>
                  </div>
                ))
                : null}
              {(props.searchData != null ? props.searchData.length : 0) > 5
                ? null
                : places.slice(0, numberSearchResult).map((item, index) => (
                  <div
                    onClick={() => onTitleSelect(item)}
                    key={index}
                    style={{
                      borderTop:
                        index === 0 && numberSearchResult === 5
                          ? "1px solid #ddd"
                          : "none",
                    }}
                  >
                    <i className="fas fa-location-arrow"></i>
                    <span className="history_text">
                      <span className="title">
                        {item.structured_formatting.main_text + " "}
                      </span>
                      <span className="text">
                        {item.structured_formatting.secondary_text}
                      </span>
                    </span>
                  </div>
                ))}
            </div>
          )}
          {props.openHistory &&
            openSearch &&
            (data != null ? data.length : 0) > 5 && (
              <div className="locations" onClick={() => clickShowHistory()}>
                {t("location_content_text_i18search")}
              </div>
            )}
        </div>
      )}
      {/* --------------------------------------Màn Mobile------------------------------------------------------------------------- */}

      <div className="info--mobile">
        {isMobile && (
          <div
            className="search"
            ref={searchBoxRef}
            onClick={() => clickSearch()}
          >
            <div className="search_box">
              {props.openHistory && (
                <div
                  onClick={(e) => {
                    e.stopPropagation();
                    closeSearch();
                  }}
                >
                  <ArrowLeftOutlined id="info--arrow--back--mobile" />
                </div>
              )}
              <input
                className="search_input"
                value={value}
                onChange={onChange}
                type="text"
                placeholder={t("search_placeholder")}
              />
              {suffixMobile}
            </div>

            {/* Hiển thị lịch sử tìm kiếm */}
            {isHistory &&
              openHistory &&
              openSearch &&
              props.openHistory &&
              history && (
                <div className="search_history">
                  {data.slice(0, 10).reverse().map((item, index) => (
                    <div
                      onClick={() => onTitleSelect(item)}
                      key={index}
                      style={{
                        borderTop: index === 0 ? "1px solid #ddd" : "none",
                        padding: "0px 15px",
                      }}
                    >
                      <div className="history_item">
                        <i className="fas fa-history"></i>
                        <span className="history_text">
                          <span className="title">
                            {item.structured_formatting.main_text}
                          </span>
                          <p className="text">
                            {item.structured_formatting.secondary_text}
                          </p>
                        </span>
                      </div>
                      <CloseOutlined
                        className="hover-icon"
                        style={{
                          cursor: "pointer",
                          fontSize: 20,
                          color: "gray",
                        }}
                        onClick={(e) => {
                          e.stopPropagation();
                          deleteHistory(item);
                        }}
                      />
                    </div>
                  ))}

                </div>
              )}

            {/* Hiển thị gợi ý tìm kiếm */}
            {!isHistory && props.openHistory && openSearch && (
              <div className="search_history">
                {props.searchData?.slice(0, 10).map((item, index) => (
                  <div
                    onClick={() => onTitleSelect(item)}
                    key={index}
                    style={{
                      borderTop: index === 0 ? "1px solid #ddd" : "none",
                      padding: "0px 15px",
                    }}
                  >
                    <div className="history_item">
                      <i className="fas fa-location-arrow"></i>
                      <span className="history_text">
                        <span className="title">
                          {item.structured_formatting.main_text + " "}
                        </span>
                        <p className="text">
                          {item.structured_formatting.secondary_text}
                        </p>
                      </span>
                    </div>
                  </div>
                ))}
                {places.slice(0, numberSearchResult).map((item, index) => (
                  <div
                    onClick={() => onTitleSelect(item)}
                    key={index}
                    style={{
                      borderTop:
                        index === 0 && numberSearchResult === 5
                          ? "1px solid #ddd"
                          : "none",
                    }}
                  >
                    <div className="history_item">
                      <i className="fas fa-location-arrow"></i>
                      <span className="history_text">
                        <span className="title">
                          {item.structured_formatting.main_text + " "}
                        </span>
                        <p className="text">
                          {item.structured_formatting.secondary_text}
                        </p>
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    places: state.searchReducer.places,
    boxVisible: state.boxVisibleReducer.box_visible,
    info_box_collapsed: state.boxVisibleReducer.info_box_collapsed,
    latLngCenter: state.placeReducer.center,
    openHistory: state.searchReducer.search_history,
    searchData: state.searchReducer.search_data,
  };
};

export default connect(mapStateToProps)(SearchingBox);
