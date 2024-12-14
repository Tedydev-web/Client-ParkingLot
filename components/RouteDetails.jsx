import React, { useEffect, useState, useCallback, useMemo } from "react";
import { useDispatch, connect } from "react-redux";
import {
  ArrowLeftOutlined,
  ShareAltOutlined,
  RightOutlined,
} from "@ant-design/icons";
import {
  swapAction,
  navigationAction,
  selectResultAction,
  clearResultAction,
  clearAction,
} from "../redux/actions/navigation";
import { searchClearAction } from "../redux/actions/search";
import {
  setBoxVisibleAction,
  setPopupRightClick,
  setRedMarkerAction,
} from "../redux/actions/boxVisble";
import { getRouteDetailsIcon } from "../config/route_details_icon";
import ShareLocation from "./ShareLocation";
import { Mile_Travel } from "../consts";
import {
  navigationFromAction,
  navigationToAction,
  setTypeInput,
} from "../redux/actions/navigation";
import { useRouter } from "next/router";
import Request from "../utils/request";
import {
  getDetailByIdAction,
  setMapViewportAction,
} from "../redux/actions/place";
import { useTranslation } from "react-i18next";
// import { setBoxVisibleAction, setRedMarkerAction, setPopupRightClick } from '../redux/actions/boxVisble';

const RouteDetails = (props) => {
  const [showPopup, setShowPopup] = useState(false);
  const dispatch = useDispatch();
  const [visibleGroup, setVisibleGroup] = useState(0);
  const [groupedSteps, setGroupedSteps] = useState([]);
  const [visibleIndex, setVisibleIndex] = useState(null);
  const { from_place, to_place, result, result_select, current_place } = props;
  const [duration, setDuration] = useState("");
  const [distance, setDistance] = useState("");
  const router = useRouter();
  const { t } = useTranslation("common"); // Use the hook here only
  useEffect(() => {
    setDuration(props.result.fastest[0].legs[0].duration.text);
    console.log("typeDistance");
    if (localStorage.getItem("unit") === "KILOMETERS") {
      setDistance(
        `${(props.result.fastest[0].legs[0].distance.value / 1000).toFixed(
          1
        )} KM`
      );
    } else if (localStorage.getItem("unit") === "MILES") {
      setDistance(
        `${(
          (result.fastest[0].legs[0].distance.value / 1000) *
          Mile_Travel.MILES
        ).toFixed(1)} ${t("option_units_miles")}`
      );
    } else {
      setDistance(
        `${(props.result.fastest[0].legs[0].distance.value / 1000).toFixed(
          1
        )} KM`
      );
    }
  }, []);

  const calculateDurationAndDistance = useMemo(() => {
    if (result) {
      return {
        duration: result.fastest[0].legs[0].duration.text,
        distance: result.fastest[0].legs[0].distance.text,
      };
    }
    return { duration: null, distance: null };
  }, [result]);
  const calculateGroupedSteps = useMemo(() => {
    if (result) {
      const steps = result[result_select][0].legs[0].steps;
      const grouped = [];
      for (let i = 0; i < steps.length; i += 10) {
        grouped.push(steps.slice(i, i + 10));
      }
      return grouped;
    }
    return [];
  }, [result, result_select]);

  useEffect(() => {
    if (
      calculateDurationAndDistance.duration &&
      calculateDurationAndDistance.distance
    ) {
      setDuration(calculateDurationAndDistance.duration);
      // setDistance(calculateDurationAndDistance.distance);
    }

    setGroupedSteps(calculateGroupedSteps);
  }, [calculateDurationAndDistance, calculateGroupedSteps]);

  const closeBox = async () => {
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
    // window.location.href = window.location.href;
  };

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const handleToggleVisibility = (index) => {
    setVisibleIndex(visibleIndex === index ? null : index);
  };

  const zoomStep = (location) => {
    const viewport = {
      longitude: location.lng,
      latitude: location.lat,
      zoom: 16,
    };
    props.dispatch(setMapViewportAction(viewport));
  }

  return (
    <div className="content-routedetails">
      <div className="route_mainroad">
        <button className="route_mainroad--seclect" onClick={closeBox}>
          <ArrowLeftOutlined id="arrowclose" />
          <div className="route_combeack--tooltip">{t("route_combeack_i18")}</div>
        </button>
        <span className="route_mainroad--content">
          <div className="route_mainroad--smallcontent">
          {t("route_mainroad_1_i18")}{" "}
            <span className="route-siste">
            {from_place?.formatted_address || t("route-siste_i18")}
            </span>
          </div>
          <div className="route_mainroad--smallcontent">
          {t("route_mainroad_2_i18")}{" "}
            <span className="route-siste">
              {to_place?.formatted_address || t("route-siste_i18")}
            </span>
          </div>
        </span>
      </div>

      <div className="passing_routes">
        <div className="landmark-location-scrool">
          <div className="sharing-icon">
            <div className="sharing-icon-share">
              <button
                className="icon-share--information"
                id="icon-share--move"
                onClick={togglePopup}
              >
                <ShareAltOutlined id="share--information" />
              </button>
            </div>
          </div>
          <div className="passing_routes--content">
            <div>
              <h1 className="passing_routes--time">
                <span>
                  <span className="delay-medium">{duration}</span>{" "}
                  <span className="Calculate-km">({distance})</span>
                </span>
              </h1>
            </div>
            <div>
              <h1
                className="travel-the--fastest"
                id="travel-the--fastest--margin"
              >
                {result_select === "fastest" ? t("roadWay_text_1") : t("roadWay_text_2")}
              </h1>
            </div>
          </div>

          <div className="landmark-location-distance-traversed">
            <div>
              <div className="landmark-location--body">
                <div className="landmark-location--content">
                  <div className="first-line">
                    <h2 id="first-line-landmark">
                      {from_place?.formatted_address || t("route-siste_i18")}
                    </h2>
                  </div>
                  <div className="second-line">
                    {from_place?.compound?.province || t("route-siste_i18")}
                  </div>
                </div>
              </div>
            </div>

            {result && (
              <div>
                {groupedSteps.map((group, groupIndex) => (
                  <div key={groupIndex}>
                    <div
                      class="group-content-title--current"
                      onClick={() => handleToggleVisibility(groupIndex)}
                    >
                      <div className="location-route-content--directions">
                        <button className="location-route-content--directions--icon">
                          <RightOutlined id="current-content--right" />
                        </button>
                        <div className="location-route-content--small--directions">
                          <span>
                            {group[0].html_instructions} {t("route_mainroad_2_i18")}{" "}
                            {group[group.length - 1].html_instructions}
                          </span>
                        </div>
                      </div>
                      <div className="Details-of-route--time--title">
                        <div className="directions-mode-distance-time">
                          {group[0].distance.text}{" "}
                          <span>({group[0].duration.text})</span>
                        </div>
                        <div className="Details-of-route--border"></div>
                      </div>
                    </div>
                    {visibleIndex === groupIndex && (
                      <div>
                        {group.map((item, index) => (
                          <div
                            key={index}
                            className="Details-of-route-current--content"
                            onClick={() => { zoomStep(item.end_location) }}
                          >
                            <div className="Details-of-route-to-take">
                              <div className="Details-of-route-to-take-image">
                                <img
                                  src={getRouteDetailsIcon(item.maneuver)}
                                  id="turning-directions"
                                  alt="Direction Icon"
                                />
                              </div>
                              <p id="Details-of-route-to-take-text">
                                {item.html_instructions}
                              </p>
                            </div>
                            <div className="Details-of-route--time">
                              <div className="directions-mode-distance-time">
                              {item.distance.text} 
                                <span>({item.duration.text})</span>
                              </div>
                              <div className="Details-of-route--border"></div>
                              {/* {selectedIndex === index && (
                             <div className="selected"></div>
                           )} */}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
            <div>
              <div className="landmark-location--body--bottom">
                <div className="landmark-location--content--bottom">
                  <div className="first-line">
                    <h2 id="first-line-landmark">
                      {to_place?.formatted_address || t("route-siste_i18")}
                    </h2>
                  </div>
                  <div className="second-line fontBodyMedium">
                    {to_place?.compound?.province || t("route-siste_i18")}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ShareLocation
        handleClose={togglePopup}
        show={showPopup}
        // place={current_place}
        fromPlace={props.from_place}
        toPlace={props.to_place}
      />
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

});

export default connect(mapStateToProps)(RouteDetails);
