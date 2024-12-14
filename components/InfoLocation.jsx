import React, { useEffect, useState } from "react";
import { Divider, Button, Tooltip, Row, Col, Card, List, message } from "antd";
import { connect } from "react-redux";
import {
  BookOutlined,
  ShareAltOutlined,
  EnterOutlined,
  EnvironmentOutlined,
  DownOutlined,
} from "@ant-design/icons";
import images from "../utils/images";
import {
  getDetailByIdAction,
  setMapViewportAction,
} from "../redux/actions/place";
import {
  navigationFromAction,
  navigationToAction,
  setTypeInput,
} from "../redux/actions/navigation";
import SearchingBox from "./SearchingBox";
import {
  setBoxVisibleAction,
  setRedMarkerAction,
  setPopupRightClick,
} from "../redux/actions/boxVisble";
import {
  clearSearchAroundAction,
  searchAroundAction,
} from "../redux/actions/search";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Request from "../utils/request";
import ShareLocation from "./ShareLocation";
import { useTranslation } from "react-i18next";
import { getImageByType } from "../utils/image_type_location";
import DetailsRestaurant from "./DetailsRestaurant";
import { isMobile } from "react-device-detect";
import { setInfoRestaurant } from "../redux/actions/navigation";
// import DownOutlined from "@ant-design/icons";
const InfoLocation = (props) => {
  // ----------------------------------Màn Mobile--------------------------------------------------
  const [isFullscreen, setIsFullscreen] = useState(false);

  const handleClick = (event) => {
    // Kiểm tra nếu phần tử được click là input hoặc là bên trong thẻ input thì không làm gì cả

    if (event.target.tagName.toLowerCase() === "input") {
      console.log('-------98899889')
      return;
    }
    setIsFullscreen(!isFullscreen);
  };

  // ----------------------------------------------------------------------------------------------------
  const { current_place, near_places, info_restaurant } = props;
  const [showPopup, setShowPopup] = useState(false);

  const { t } = useTranslation("common");

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  useEffect(() => {
    if (
      props.current_place &&
      current_place &&
      current_place.place_id !== props.current_place.place_id
    ) {
      props.dispatch(clearSearchAroundAction());
    }
  }, [current_place]);

  const selectNearPlace = (pid) => {
    props.dispatch(setInfoRestaurant(false))
    props.dispatch(getDetailByIdAction(pid));
    props.dispatch(setBoxVisibleAction("info"))
    props.dispatch(clearSearchAroundAction());
  };

  const closeInfoRestaurant = () => {
    props.dispatch(setInfoRestaurant(false))
  }

  const searchAround = (place) => {
    const viewport = {
      longitude: place.geometry.location.lng,
      latitude: place.geometry.location.lat,
      zoom: 15,
    };

    const location = {
      lat: place.geometry.location.lat,
      lng: place.geometry.location.lng,
    };

    props.dispatch(setMapViewportAction(viewport));
    props.dispatch(searchAroundAction(location, props.viewport.zoom));
    props.dispatch(setRedMarkerAction(true, location));
    props.dispatch(setPopupRightClick(false));
  };

  const navigationTo = async (place) => {
    // console.log('------------------------to', place)
    const selectedPlaceId = place.id || place.place_id;
    const response = await Request.place_detail(selectedPlaceId);
    const selectedPlace = response.data?.result;
    if (selectedPlace) {
      const viewport = {
        longitude: selectedPlace.geometry.location.lng,
        latitude: selectedPlace.geometry.location.lat,
        zoom: 15,
      };
      props.dispatch(setMapViewportAction(viewport));
      // props.dispatch(setTypeInput(false));
      props.dispatch(setBoxVisibleAction("navigation"));
      props.dispatch(
        navigationToAction(
          selectedPlace,
          `${selectedPlace.name} - ${selectedPlace.formatted_address}`
        )
      );
      props.dispatch(setRedMarkerAction(false));
      props.dispatch(setPopupRightClick(false));
    } else {
      message.error("Không tìm thấy vị trí của bạn!");
    }

    try {
      const my_location = props.my_location;
      if (my_location) {
        const response = await Request.geocode(my_location);
        if (response.data.results.length > 0) {
          props.dispatch(
            navigationFromAction(
              {
                ...response.data.results[0],
                name: response.data.results[0].address_components[0].long_name,
              },
              "Vị trí của bạn"
            )
          );
        }
      }
    } catch (error) {
      throw error;
    }
  };

  const saveToBookmark = (e) => {
    e.stopPropagation();
    if (window.sidebar && window.sidebar.addPanel) {
      // Firefox <23
      window.sidebar.addPanel(document.title, window.location.href, "");
      message.success("Đã lưu vào bookmark !");
    } else if (window.external && "AddFavorite" in window.external) {
      // Internet Explorer
      window.external.AddFavorite(location.href, document.title);
      message.success("Đã lưu vào bookmark !");
    } else if (
      (window.opera && window.print) ||
      (window.sidebar && !(window.sidebar instanceof Node))
    ) {
      // Opera <15 and Firefox >23
      const triggerBookmark = document.createElement("a");
      triggerBookmark.setAttribute("rel", "sidebar");
      triggerBookmark.setAttribute("title", document.title);
      triggerBookmark.setAttribute("href", window.location.href);
      message.success("Đã lưu vào bookmark !");
    } else {
      // For other browsers (mainly WebKit)
      message.info(
        "Bạn có thể lưu địa điểm này vào dấu trang bằng cách nhấn " +
        (navigator.userAgent.toLowerCase().indexOf("mac") !== -1
          ? "Command/Cmd"
          : "CTRL") +
        " + D trên bàn phím.",
        5
      );
    }
  };

  const saveToClipBoard = () => {
    const currentUrl = window.location.href;

    navigator.clipboard.writeText(currentUrl).then(function () {
      message.success(t("copy_to_climb"))
    }, function (err) {
      console.error('Không thể lưu URL vào clipboard: ', err);
    });
  }

  let titleAddress;

  if (current_place) {
    titleAddress = (
      <div className="addressDetail" onClick={handleClick}>
        <Tooltip
          title={
            current_place.name || current_place.address_components[0].long_name
          }
          trigger={["hover"]}
        >
          <span>
            {current_place.name ||
              current_place.address_components[0].long_name}
          </span>
        </Tooltip>
        <Tooltip title={current_place.formatted_address}>
          <h5>{current_place.formatted_address}</h5>
        </Tooltip>
      </div>
    );
  }

  return (
    <div>
      {!isMobile && (
        <div className="info_location_web" style={!info_restaurant ? { height: "100vh" } : { height: "100%", borderRadius: "16px" }}>
          <Card
            className="infor-box"
            bodyStyle={{ padding: 0, flexDirection: "column" }}
            placement="left"
          >
            <div
              style={{
                padding: 16,
                backgroundImage: `url(${current_place ? getImageByType(current_place.types[0]) : null
                  })`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                height: 240,
                position: "relative",
              }}
            >
              <div className="search-box">
                {!info_restaurant &&
                  <SearchingBox place={current_place} />
                }
                {info_restaurant &&
                  <div onClick={closeInfoRestaurant} className="close-info-restaurant">X</div>
                }
              </div>
            </div>

            <Divider style={{ marginTop: 0, marginBottom: 0 }} />
            {titleAddress}
            <Divider style={{ marginTop: 0, marginBottom: 0 }} />
            <div className="actions-info-wrapp">
              <div className="actions-icon">
                {!info_restaurant &&
                  <div
                    onClick={() => {
                      navigationTo(current_place);
                      props.dispatch(clearSearchAroundAction());
                    }}
                  >
                    <div className="icon-fist">
                      <i
                        className="fas fa-directions"
                        style={{
                          cursor: "pointer",
                          color: "#FFFFFF",
                          fontSize: 18,
                        }}
                      ></i>
                    </div>
                    <div className="text">{t("way")}</div>
                  </div>}
                <div onClick={saveToBookmark}>
                  <div className="icon">
                    <i
                      className="far fa-bookmark"
                      style={{
                        cursor: "pointer",
                        color: "#1A73E8",
                        fontSize: 18,
                      }}
                    ></i>
                  </div>
                  {/* </Tooltip> */}
                  <div className="text">{t("save")}</div>
                </div>
                <div onClick={togglePopup}>
                  <div className="icon">
                    <ShareAltOutlined
                      key="share"
                      style={{ fontSize: 18, color: "#1A73E8" }}
                    />
                  </div>
                  <div className="text">{t("share")}</div>
                </div>
              </div>
            </div>
            <Divider style={{ marginBottom: 0, marginTop: 0 }} />
            <div className="captionRow">
              <span>{t("related_locations")}</span>
            </div>
            <Divider style={{ marginBottom: 0, marginTop: 0 }} />
            <div style={{ flex: 1, padding: "0 5px" }}>
              <List
                className="list-near-places"
                itemLayout="horizontal"
                dataSource={near_places}
                renderItem={(item) => (
                  <List.Item
                    style={{ cursor: "pointer" }}
                    onClick={() => selectNearPlace(item.place_id)}
                  >
                    <Tooltip
                      title={
                        <div>
                          <h4 style={{ color: "white" }}>
                            {item.structured_formatting.main_text}
                          </h4>
                          <h4 style={{ color: "white" }}>
                            {item.structured_formatting.secondary_text}
                          </h4>
                        </div>
                      }
                    >
                      <Row style={{ width: "100%", padding: "0 16px" }}>
                        <Col
                          span={20}
                          push={3}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            paddingLeft: 16,
                          }}
                        >
                          <div className="addressNear">
                            <span>{item.structured_formatting.main_text}</span>
                            <h5
                              style={{
                                whiteSpace: "nowrap",
                                textOverflow: "ellipsis",
                                overflow: "hidden",
                              }}
                            >
                              {item.structured_formatting.secondary_text}
                            </h5>
                          </div>
                        </Col>
                        <Col
                          span={4}
                          pull={21}
                          style={{
                            backgroundImage: `url(${getImageByType(
                              item.types[0]
                            )})`,
                            backgroundPosition: "center",
                            backgroundSize: "cover",
                          }}
                        ></Col>
                      </Row>
                    </Tooltip>
                  </List.Item>
                )}
              />
            </div>
          </Card>
          <ShareLocation
            show={showPopup}
            handleClose={togglePopup}
            place={current_place}
          ></ShareLocation>
        </div>
      )}
      {isMobile && (
        <div
          className={`info_location_mobi ${isFullscreen ? "fullscreen" : ""}`}
        // onClick={handleClick}
        >
          <Card
            className="infor-box"
            bodyStyle={{ padding: 0, flexDirection: "column" }}
            placement="left"
          >
            {" "}
            <div class="pull-down-the-screen">
              <span>
                <DownOutlined id="pull-down-the-screen--icon" />
              </span>
              {/* <span>
                {" "}
                <ShareAltOutlined
                  id="pull-down-the-screen--icon--share"
                  key="share"
                ></ShareAltOutlined>
              </span> */}
            </div>
            <div class="pull--card--content">
              <div class="pull--card--title"></div>
            </div>
            <Divider
              style={{ marginTop: 0, marginBottom: 0, borderTop: "0px" }}
            />
            {titleAddress}
            <Divider
              style={{ marginTop: 0, marginBottom: 0, borderTop: "0px" }}
            />
            <Row id="row-col-17-icon-button--infolocation">
              <Col span={21} id="Mobile-button-select--infolocation">
                <div className="actions-info-wrapp">
                  <div className="actions-icon--info--mobi">
                    <div
                      onClick={() => {
                        navigationTo(current_place);
                        props.dispatch(clearSearchAroundAction());
                      }}
                    >
                      <div className="icon-fist--mobi">
                        <span>
                          <i
                            id="icon-fist--mobi--direction"
                            className="fas fa-directions"
                            style={{
                              cursor: "pointer",
                              color: "#FFFFFF",
                              fontSize: 18,
                              // paddingTop:'5px',
                            }}
                          ></i>
                        </span>
                        <div className="text--mobi--info">{t("way")}</div>
                      </div>
                    </div>
                    <div onClick={saveToClipBoard}>
                      <Col span={4}></Col>
                      <div className="icon-fist--mobi--save">
                        <i
                          className="far fa-bookmark"
                          style={{
                            cursor: "pointer",
                            color: "#1890ff",
                            fontSize: 18,
                          }}
                        ></i>
                        <div className="text--mobi--info--save">
                          {t("save")}
                        </div>
                      </div>
                      {/* </Tooltip> */}
                    </div>
                    <div onClick={togglePopup}>
                      <Col span={4}></Col>
                      <div className="icon-fist--mobi--save">
                        <ShareAltOutlined
                          key="share"
                          id="icon-fist--mobi--save--share"
                        />
                        <div className="text--mobi--info--save">
                          {t("share")}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
            <Divider
              style={{ marginBottom: 0, marginTop: 0, borderTop: "0px" }}
            />
            <div className="captionRow_mobi">
              <div
                style={{
                  padding: 16,
                  backgroundImage: `url(${current_place
                    ? getImageByType(current_place.types[0])
                    : null
                    })`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  height: 240,
                  position: "relative",
                }}
              >
                {!isFullscreen && (
                  <div className="search-box--mobile">
                    <SearchingBox place={current_place} />

                  </div>
                )}
              </div>
              <span>{t("related_locations")}</span>
            </div>
            <Divider
              style={{ marginBottom: 0, marginTop: 0 }}
              id="divier-antd--mobi"
            />
            <div style={{ flex: 1, padding: "0 5px" }}>
              <List
                className="list-near-places"
                itemLayout="horizontal"
                dataSource={near_places}
                renderItem={(item) => (
                  <List.Item
                    style={{ cursor: "pointer" }}
                    onClick={() => selectNearPlace(item.place_id)}
                  >
                    <Tooltip
                      title={
                        <div>
                          <h4 style={{ color: "white" }}>
                            {item.structured_formatting.main_text}
                          </h4>
                          <h4 style={{ color: "white" }}>
                            {item.structured_formatting.secondary_text}
                          </h4>
                        </div>
                      }
                    >
                      <Row style={{ width: "100%", padding: "0 16px" }}>
                        <Col
                          span={20}
                          push={3}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            paddingLeft: 16,
                          }}
                        >
                          <div className="addressNear">
                            <span>{item.structured_formatting.main_text}</span>
                            <h5
                              style={{
                                whiteSpace: "nowrap",
                                textOverflow: "ellipsis",
                                overflow: "hidden",
                              }}
                            >
                              {item.structured_formatting.secondary_text}
                            </h5>
                          </div>
                        </Col>
                        <Col
                          span={4}
                          pull={21}
                          style={{
                            backgroundImage: `url(${getImageByType(
                              item.types[0]
                            )})`,
                            backgroundPosition: "center",
                            backgroundSize: "cover",
                          }}
                        ></Col>
                      </Row>
                    </Tooltip>
                  </List.Item>
                )}
              />
            </div>
          </Card>
          <ShareLocation
            show={showPopup}
            handleClose={togglePopup}
            place={current_place}
          ></ShareLocation>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    current_place: state.placeReducer.current_place,
    near_places: state.placeReducer.near_places,
    my_location: state.placeReducer.my_location,
    viewport: state.placeReducer.viewport,
    markerSelect: state.boxVisibleReducer.red_marker_visible,
    info_restaurant: state.navigationReducer.info_restaurant,
  };
};

export default connect(mapStateToProps)(InfoLocation);
