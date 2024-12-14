import React, { useEffect, useState, useCallback, useRef } from "react";
import { useDispatch, connect } from "react-redux";
import {
  ArrowLeftOutlined,
  SearchOutlined,
  EnvironmentOutlined,
  CloseOutlined,
} from "@ant-design/icons";
import _ from "lodash";
import request from "../utils/request";
import { useTranslation } from "react-i18next";
import { getImageByType } from "../utils/image_type_location";
import {
  navigationFromAction,
  navigationToAction,
  setTypeInput,
} from "../redux/actions/navigation";
import Request from "../utils/request";
import {
  getDetailByIdAction,
  setMapViewportAction,
} from "../redux/actions/place";
import {
  setBoxVisibleAction,
  setPopupRightClick,
  setRedMarkerAction,
} from "../redux/actions/boxVisble";
import {
  getDetailIdService,
  getDetailLatLngService,
} from "../redux/sagas/placeSaga";
import { setRestaurantData } from "../redux/actions/search";
import { clearAction } from "../redux/actions/navigation";
import { setInfoRestaurant } from "../redux/actions/navigation";

const DetailsRestaurant = (props) => {
  const [inputValue, setInputValue] = useState("");
  const [autocompleteResults, setAutocompleteResults] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const inputRef = useRef(null);
  const [isTooltipVisible, setTooltipVisible] = useState(false);

  const toggleTooltip = () => {
    setTooltipVisible(!isTooltipVisible);
  };
  const tooltipRef = useRef(null);
  const triggerRef = useRef(null);
  const handleClickOutside = (event) => {
    if (
      tooltipRef.current &&
      !tooltipRef.current.contains(event.target) &&
      !triggerRef.current.contains(event.target)
    ) {
      setTooltipVisible(false);
    }
  };

  useEffect(() => {
    if (isTooltipVisible) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isTooltipVisible]);

  const { t } = useTranslation("common");
  const debouncedSearch = useCallback(
    _.debounce((newValue, lat, long) => {
      fetchAutocompleteResults(newValue, lat, long);
    }, 500),
    []
  );

  const handleChange = (e) => {
    props.dispatch(setRestaurantData([]))
    const newValue = e.target.value;
    setInputValue(newValue);

    if (newValue && props.to_place && props.to_place.geometry) {
      const lat = props.to_place.geometry.location.lat;
      const long = props.to_place.geometry.location.lng;
      debouncedSearch(newValue, lat, long);
    }
  };

  const handleInputClick = () => {
    setShowSuggestions(true);
  };

  const fetchAutocompleteResults = async (input, lat, long) => {
    try {
      const newlatlong = `${lat},${long}`;
      const results = await request.autocomplete(input, newlatlong);
      setAutocompleteResults(results.data.predictions);
      let restaurantData = []
      for (let data of results.data.predictions) {
        const respone = await Request.place_detail(data.place_id)
        restaurantData.push(respone.data.result)
      }
      props.dispatch(setRestaurantData(restaurantData))

      const newSuggestions = results.data.predictions.map((item) => ({
        icon: <SearchOutlined />,
        text: item.structured_formatting.main_text,
        subtext: item.structured_formatting.secondary_text,
      }));
      setSuggestions(newSuggestions);
    } catch (error) {
      console.error("Error fetching autocomplete results:", error);
    }
  };

  // useEffect(() => {
  //   if (showSuggestions) {
  //     inputRef.current.style.borderBottomLeftRadius = "0";
  //     inputRef.current.style.borderBottomRightRadius = "0";
  //   } else {
  //     inputRef.current.style.borderBottomLeftRadius = "24px";
  //     inputRef.current.style.borderBottomRightRadius = "24px";
  //   }
  // }, [showSuggestions]);

  useEffect(() => {
    const lat = props.to_place?.geometry?.location?.lat;
    const long = props.to_place?.geometry?.location?.lng;
    const input = props.type_latlong;
    if (lat && long) {
      fetchAutocompleteResults(input, lat, long);
    }
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (inputRef.current && !inputRef.current.contains(event.target)) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const onTitleSelect = async (place) => {

    // props.dispatch(setRestaurantData([]))
    // props.dispatch(clearAction())
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
      // setValue(`${place.structured_formatting.main_text} - ${place.structured_formatting.secondary_text}`);
      // props.dispatch(setBoxVisibleAction("info"));
      props.dispatch(setInfoRestaurant(true))
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
      // setValue(`${place.structured_formatting.main_text} - ${place.structured_formatting.secondary_text}`);
      props.dispatch(setInfoRestaurant(true))
    }
  };

  const closeBox = async () => {
    props.dispatch(setRestaurantData([]))
    const toPlaceId = props.to_place.id || props.to_place.place_id;
    const responseToPlace = await Request.place_detail(toPlaceId);
    const toPlace = responseToPlace.data?.result;
    const fromPlaceId = props.from_place.id || props.from_place.place_id;
    const responseFromPlace = await Request.place_detail(fromPlaceId);
    const fromPlace = responseFromPlace.data?.result;
    if (toPlace && fromPlace) {
      const viewport = {
        longitude: toPlace.geometry.location.lng,
        latitude: toPlace.geometry.location.lat,
        zoom: 15,
      };
      props.dispatch(setMapViewportAction(viewport));
      // props.dispatch(setTypeInput(false));
      props.dispatch(setBoxVisibleAction("navigation"));
      props.dispatch(
        navigationToAction(
          toPlace,
          `${toPlace.name} - ${toPlace.formatted_address}`
        )
      );
      props.dispatch(
        navigationFromAction(
          fromPlace,
          `${fromPlace.name} - ${fromPlace.formatted_address}`
        )
      );
      props.dispatch(setRedMarkerAction(false));
      props.dispatch(setPopupRightClick(false));
    } else {
      message.error("Không tìm thấy vị trí của bạn!");
    }
  };

  useEffect(() => {
    if (props.to_place && props.to_place.geometry && props.type_latlong) {
      const lat = props.to_place.geometry.location.lat;
      const long = props.to_place.geometry.location.lng;
      const input = props.type_latlong;
      fetchAutocompleteResults(input, lat, long);
    }
  }, [props.to_place, props.type_latlong]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (inputRef.current && !inputRef.current.contains(event.target)) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const iconColor = inputValue ? "#1a73e8" : "inherit";

  return (
    <div className="content-servicedetails">
      <div className="id-omnibox-container">
        <div className="restaurant-omnibox">
          <div id="omnibox-singlebox">
            <div className="restaurant-omnibox-singlebox">
              <div className="restaurant-active">
                <span
                  id="restaurant-header--icon--back"
                  style={{ fontSize: "20px" }}
                  onClick={closeBox}
                >
                  <ArrowLeftOutlined id="restaurant--icon--top" />

                  <span className="tooltip--comeback--restaurant">
                    {t("route_combeack_i18")}
                  </span>
                </span>
              </div>
              <div
                className="restaurant-search--adress"
                id="searchbox"
                ref={inputRef}
              >
                <input
                  id="search--box--input"
                  placeholder={t("search_input")}
                  value={inputValue}
                  onChange={handleChange}
                  onClick={handleInputClick}
                  autoComplete="off"

                />
                {/* {showSuggestions && suggestions.length > 0 && (
                  <ul className="suggestions-list">
                    {suggestions.map((suggestion, index) => (
                      <li
                        key={index}
                        className="suggestion-item"
                        onClick={() =>
                          autocompleteResults &&
                          autocompleteResults[index] &&
                          onTitleSelect(autocompleteResults[index])
                        }
                      >
                        <span className="restaurant-search--adress--input--icon">
                          {suggestion.icon}
                        </span>
                        <div className="suggestion-content">
                          <span className="suggestion-text">
                            {suggestion.text}
                          </span>
                          {suggestion.subtext && (
                            <span className="suggestion-subtext">
                              {suggestion.subtext}
                            </span>
                          )}
                        </div>
                      </li>
                    ))}
                  </ul>
                )} */}
                {autocompleteResults && autocompleteResults.length > 0 && (
                  <div className="restaurant-search-results">
                    {autocompleteResults.map((item, index) => (
                      <div
                        className="restaurant-search-button-container"
                        key={index}
                      >
                        <button
                          className="restaurant-search-button"
                          id="searchbox-searchbutton"

                          onClick={() => {

                            onTitleSelect(item);
                          }}
                          disabled={!inputValue.trim()}
                        >
                          <span style={{ fontSize: "20px", color: iconColor }}>
                            <SearchOutlined id="searchbox-searchbutton--SearchOutlined" />
                          </span>
                        </button>
                        <span className="tooltip--search--restaurant">
                          {t("search_button_i18")}
                        </span>
                      </div>
                    ))}
                  </div>

                )}
                <div className="restaurant-clear-button-container">
                  <div className="restaurant-clear-button-wrapper">
                    <span
                      className="restaurant-icon"
                      style={{ fontSize: "15px" }}
                    >
                      <EnvironmentOutlined />
                    </span>
                    <div className="restaurant-clear-button--close"></div>
                    <div className="vertical-border">
                      <button
                        className="restaurant-clear-button"
                        onClick={closeBox}
                      >
                        <span style={{ fontSize: "13px" }}>
                          <CloseOutlined id="close--servicedetails" />
                        </span>
                      </button>
                      <span className="tooltip--Cancel--nearby--search">
                        {t("close_button_i18")}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="restaurant-results-header--top--scroll">
                <div className="restaurant-results-header--top">
                  <div className="restaurant-results-header">
                    <h1 className="restaurant-results-title">{t("results-title_button_i18")}</h1>
                    <span
                      className="restaurant-results-title--span"
                      onClick={toggleTooltip}
                      ref={triggerRef}
                    >
                      <img
                        src="static/images/info_gm_grey_18dp.png"
                        alt="info"
                      />
                    </span>
                  </div>
                </div>
                <div class="result--tooltip-search--button">
                  {isTooltipVisible && (
                    <div className="result--tooltip-search" ref={tooltipRef}>
                      <div className="result--tooltip-search--title">
                        {t("results-title_button_search_i18")}
                      </div>
                      <div className="result--tooltip-search--text">
                        {t("results-title_button_text_1_i18")}
                        <span style={{ color: "#1890FF" }}> {t("results-title_button_text_2_i18")} </span>
                        {t("results-title_button_text_3_i18")}
                      </div>
                    </div>
                  )}
                </div>

                {autocompleteResults &&
                  autocompleteResults.length > 0 &&
                  autocompleteResults.map((item, index) => (
                    <div
                      className="restaurant-list-item"
                      key={index}
                      onClick={() => onTitleSelect(item)}
                    >
                      <div className="text-content">
                        <h3>{item.structured_formatting.main_text}</h3>
                        <p>{item.structured_formatting.secondary_text}</p>
                      </div>
                      <a className="restaurant-item-image">
                        <img
                          src={getImageByType(item.types[0])}
                          width="80px"
                          height="80px"
                          alt={`Image of ${item.name}`}
                        />
                      </a>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  from_place: state.navigationReducer.from,
  to_place: state.navigationReducer.to,
  result: state.navigationReducer.result,
  result_select: state.navigationReducer.result_select,
  response_status: state.navigationReducer.response_status,
  my_location: state.placeReducer.my_location,
  typeInput: state.navigationReducer.type_input,
  current_place: state.placeReducer.current_place,
  type_latlong: state.navigationReducer.type_latlong,
  places: state.searchReducer.places,
  boxVisible: state.boxVisibleReducer.box_visible,
  info_box_collapsed: state.boxVisibleReducer.info_box_collapsed,
  latLngCenter: state.placeReducer.center,
  openHistory: state.searchReducer.search_history,
  searchData: state.searchReducer.search_data,
});

export default connect(mapStateToProps)(DetailsRestaurant);
