import React, { Component } from "react";
import { STYLE_URL } from "../consts";
import Marker from "./Marker";
import { connect } from "react-redux";
import BottomInfoLocation from "./BottomInfoLocation";
import MenuRightClick from "./MenuRightCLick";
import { getDetailLatLngService } from "../redux/sagas/placeSaga";
import { message, Avatar } from "antd";
import equal from "fast-deep-equal/es6/react";
import {
  setMapViewportAction,
  getDetailByLatLngAction,
  setCenterLatLngAction,
  setMyLocationAction,
  getDetailByIdAction
} from "../redux/actions/place";
import {
  searchAroundAction,
  clearSearchAroundAction,
  selectAroundPlaceAction,
} from "../redux/actions/search";
import {
  selectResultAction,
  navigationFromAction,
  navigationToAction,
  clearResultAction,
  navigationAction
} from "../redux/actions/navigation";
import MarkerNavigation from "./MarkerNavigation";
import {
  setRedMarkerAction,
  setCollapsedInfoBoxAction,
  setPopupRightClick,
  setBoxVisibleAction,
} from "../redux/actions/boxVisble";
import normal_map_img from "../static/images/normal_map.png";
import satellite_img from "../static/images/satellite.jpeg";
import ReactDOMServer from "react-dom/server";
import Axios from "axios";
import Div100vh from "react-div-100vh";
import Request from "../utils/request";
import { Mile_Travel } from "../consts";
import { isMobile } from "react-device-detect";
import images from '../utils/images';
// import { STYLE_KEY } from "../config.dev";

class Map extends Component {
  constructor(props) {
    super(props);
    this._mapRef = React.createRef();
    this.map = null;
    this.redMarker = null;
    this.popupRightClick = null;
    this.popup_navigation = [];
    this.state = {
      style: STYLE_URL.NORMAL + STYLE_KEY,
      styleNormal: STYLE_URL.NORMAL + STYLE_KEY,
      styleEarth: STYLE_URL.SATELITE + STYLE_KEY,
      bottomInfoVisible: false,
      value: localStorage.getItem('search_history') || '',
    };
    this.list = [];
    this.listRestaurant = [];
    this.listHistories = [];
    this.view = null;
    this.navigationView = null
  }

  _onViewportChange = (viewport) => {
    this.props.dispatch(setMapViewportAction(viewport));
  };

  _onMouseClick = (e) => {
    this.props.dispatch(setPopupRightClick(false));
    if (this.props.boxVisible !== "iframe") {
      this.props.dispatch(setRedMarkerAction(false));
    }
    // if (this.props.boxVisible === "info") this.props.dispatch(setBoxVisibleAction('search'))
    // this.markerWhatIs ? this.markerWhatIs.remove() : null;
    this.props.dispatch(selectAroundPlaceAction(null));
    this.removeMarkerWhatIs();
    this.setState({
      bottomInfoVisible: false,
    });
  };

  _onRightClick = (e) => {
    const position = { lat: e.lngLat.lat, lng: e.lngLat.lng };
    if (this.props.boxVisible !== "iframe") {
      this.props.dispatch(setRedMarkerAction(true, position));
      this.props.dispatch(setPopupRightClick(true, position, "normal"));
    }
  };

  _onClickMenu = (evt) => {
    const parent = evt.target.parentElement;

    if (
      evt.target.className &&
      evt.target.className.toString().includes("what-is-this")
    ) {
      this.handleWhatIs();
    } else if (
      evt.target.className &&
      evt.target.className.toString().includes("from-here")
    ) {
      this.handleFromHere();
    } else if (
      evt.target.className &&
      evt.target.className.toString().includes("to-here")
    ) {
      this.handleToHere();
    } else if (
      evt.target.className &&
      evt.target.className.toString().includes("delete-location")
    ) {
      this.handleDeleteLocation();
    } else if (
      evt.target.className &&
      evt.target.className.toString().includes("search-around")
    ) {
      this.handleSearchAround();
    } else if (
      evt.target.className &&
      evt.target.className.toString().includes("to-around-place")
    ) {
      this.handleToAroundPlace();
    } else if (
      evt.target.className &&
      evt.target.className.toString().includes("what-is-navigation")
    ) {
      this.handleWhatIs(false);
    }
    if (
      parent?.className &&
      parent?.className.toString().includes("menu-right-click")
    ) {
      if (
        evt.target.className &&
        !evt.target.className.toString().includes("what-is-this")
      ) {
        this.props.dispatch(clearSearchAroundAction());
      }
      this.props.dispatch(setPopupRightClick(false));
      this.removeMarkerWhatIs();
    }
  };

  changeVisibleBottomInfo = (visible) => {
    this.setState({
      bottomInfoVisible: visible,
    });
  };

  _getInforPlace = async (
    lat = this.props.position_popup?.lat,
    lng = this.props.position_popup?.lng
  ) => {
    const latLng = {
      latitude: lat,
      longitude: lng,
    };

    try {
      const response = await getDetailLatLngService(latLng);
      if (response.data.results.length > 0) {
        const place_response = response.data.results[0];
        return {
          ...place_response,
          name: place_response.address_components[0].long_name,
          formatted_address: this.getAddressGeocode(place_response),
        };
      } else {
        message.error("Không tìm thấy địa điểm !!");
        return null;
      }
    } catch (error) {
      throw error;
    }
  };

  selectPlace = async (
    lat = this.props.positionMarkerSelect?.lat,
    lng = this.props.positionMarkerSelect?.lng,
    redMarkerVisible = true
  ) => {
    const place = await this._getInforPlace(lat, lng);

    if (place) {
      const viewport = {
        longitude: lng,
        latitude: lat,
        zoom: 15,
      };
      this.props.dispatch(setMapViewportAction(viewport));
      this.setState({
        bottomInfoVisible: true,
        placeMouseClick: place,
      });
      if (redMarkerVisible) {
        if (this.markerWhatIs) {
          this.markerWhatIs.setLngLat({ lat, lng }).addTo(this.map);
        } else {
          const el = document.createElement("div");
          el.innerHTML = ReactDOMServer.renderToStaticMarkup(
            <Marker size={22} />
          );
          this.markerWhatIs = new maplibregl.Marker(el, { anchor: "bottom" })
            .setLngLat({ lat, lng })
            .addTo(this.map);
        }
        this.markerWhatIs.getElement().addEventListener("contextmenu", (e) => {
          e.stopPropagation();
          e.preventDefault();
          this.props.dispatch(setRedMarkerAction(false));
          this.props.dispatch(
            setPopupRightClick(true, { lat, lng }, "popupCurrentPlace")
          );
        });
        this.props.dispatch(setRedMarkerAction(false));
      }
      // redMarkerVisible ? this.props.dispatch(setRedMarkerAction(true, { lat, lng })) : null;
    } else {
      message.error("Không tìm thấy địa điểm !!");
    }
  };

  removeMarkerWhatIs = () => {
    this.markerWhatIs ? this.markerWhatIs.remove() : null;
  };

  _getInforPlaceAround = async (id) => {
    try {
      const response = await Axios.get(
        `https://napi.goong.io/v1/marker/get_marker_detail/${id}`
      );

      if (response.data.data) {
        return response.data.data;
      } else {
        message.error("Không tìm thấy địa điểm !!");
        return null;
      }
    } catch (error) {
      message.error("Không tìm thấy địa điểm !");
      throw error;
    }
  };

  selectAroundPlace = async (id) => {
    const place = await this._getInforPlaceAround(id);
    if (place) {
      const viewport = {
        longitude: Number(place.lng_lat[0]),
        latitude: Number(place.lng_lat[1]),
        zoom: 15,
      };
      this.props.dispatch(setMapViewportAction(viewport));
      this.setState({
        bottomInfoVisible: true,
        placeMouseClick: place,
      });
      this.props.dispatch(setPopupRightClick(false));
    } else {
      message.error("Không tìm thấy địa điểm !!");
    }
  };

  handleWhatIs = (redMarkerVisible = true) => {
    const { position_popup, isSmallScreen } = this.props;
    if (isSmallScreen) {
      this.props.dispatch(
        getDetailByLatLngAction({
          latitude: position_popup.lat,
          longitude: position_popup.lng,
        })
      );

      this.props.dispatch(setBoxVisibleAction("info"));
      this.props.dispatch(clearSearchAroundAction());
      this.props.dispatch(setPopupRightClick(false));
      this.removeMarkerWhatIs();
    } else {
      this.selectPlace(
        position_popup.lat,
        position_popup.lng,
        redMarkerVisible
      );
    }
  };

  handleFromHere = async (lat, lng) => {

    let place;
    if (!lat || !lng) place = await this._getInforPlace();
    else {
      place = await this._getInforPlace(lat, lng);
    }
    if (place) {
      const viewport = {
        longitude: place.geometry.location.lng,
        latitude: place.geometry.location.lat,
        zoom: 15,
      };
      !this.props.to_place &&
        this.props.dispatch(setMapViewportAction(viewport));
      this.props.dispatch(setBoxVisibleAction("navigation"));
      this.props.dispatch(
        navigationFromAction(
          place,
          `${place.name} - ${place.formatted_address}`
        )
      );


      this.props.dispatch(setRedMarkerAction(false));
      this.changeVisibleBottomInfo(false);
    }
  };

  handleToHere = async (lat, lng) => {
    let place;
    if (!lat || !lng) place = await this._getInforPlace();
    else {
      place = await this._getInforPlace(lat, lng);
    }
    if (place) {
      this.props.dispatch(setBoxVisibleAction("navigation"));
      const viewport = {
        longitude: place.geometry.location.lng,
        latitude: place.geometry.location.lat,
        zoom: 15,
      };
      const my_location = this.props.my_location;
      if (
        my_location &&
        (this.props.boxVisible === "search" || this.props.boxVisible === "info")
      ) {
        try {
          const response = await Request.geocode(my_location);
          if (response.data.results.length > 0) {
            this.props.dispatch(
              navigationFromAction(
                {
                  ...response.data.results[0],
                  name: response.data.results[0].address_components[0]
                    .long_name,
                },
                "Vị trí của bạn"
              )
            );
          }
        } catch (error) {
          throw error;
        }
      }
      !this.props.from_place &&
        this.props.dispatch(setMapViewportAction(viewport));
      this.props.dispatch(
        navigationToAction(place, `${place.name} - ${place.formatted_address}`)
      );
      this.props.dispatch(setBoxVisibleAction("navigation"));
      this.props.dispatch(setRedMarkerAction(false));
      this.changeVisibleBottomInfo(false);
    }
  };

  handleDeleteLocation = () => {
    const { type_popup } = this.props;
    if (type_popup === "popupFromPlace") {
      this.props.dispatch(navigationFromAction(null, ""));
    } else if (type_popup === "popupToPlace") {
      this.props.dispatch(navigationToAction(null, ""));
    }
    this.props.dispatch(clearResultAction());
  };

  handleSearchAround = async () => {
    const place = await this._getInforPlace();
    if (place) {
      const viewport = {
        longitude: place.geometry.location.lng,
        latitude: place.geometry.location.lat,
        zoom: 15,
      };
      const location = {
        lat: place.geometry.location.lat,
        lng: place.geometry.location.lng,
      };
      this.props.dispatch(setBoxVisibleAction("search"));
      this.props.dispatch(setMapViewportAction(viewport));
      this.props.dispatch(
        searchAroundAction(location, this.props.viewport.zoom)
      );
      this.setState({
        bottomInfoVisible: false,
      });
    }
  };

  _selectAroundPlace = (type, place) => {
    if (type !== "center") {
      this.props.dispatch(selectAroundPlaceAction(place));
      this.selectAroundPlace(place?.id);
    } else {
      this.props.dispatch(selectAroundPlaceAction(place));
      this.selectPlace(
        place.geometry.location.lat,
        place.geometry.location.lng,
        false
      );
    }
  };

  handleToAroundPlace = async () => {
    let place = null;
    this.props.around_places.map((item) => {
      if (
        item.lng_lat[0] * 1 === this.popupRightClick.getLngLat().lng &&
        item.lng_lat[1] * 1 === this.popupRightClick.getLngLat().lat
      ) {
        place = item;
      }
    });
    if (place) {
      try {
        this.props.dispatch(setPopupRightClick(false));
        const place_center = this.props.around_place_center;
        this.props.dispatch(
          navigationFromAction(
            place_center,
            `${place_center.name} - ${place_center.formatted_address}`
          )
        );
        const response = await Axios.get(
          `https://napi.goong.io/v1/marker/get_marker_detail/${place.id}`
        );

        place = response.data?.data;
        place = {
          ...place,
          place_id: place._id,
          geometry: {
            location: {
              lat: Number(place.lng_lat[1]),
              lng: Number(place.lng_lat[0]),
            },
          },
          formatted_address: place.description.address,
        };
        this.props.dispatch(
          navigationToAction(
            place,
            `${place.name} - ${place.formatted_address}`
          )
        );
        this.props.dispatch(setBoxVisibleAction("navigation"));
      } catch (error) {
        message.error("Không tìm thấy địa điểm !");
      }
    } else {
      message.error("Không tìm thấy địa điểm !");
    }
  };

  removeMarkerPopup = () => {
    if (this.markerCurrentPlace) this.markerCurrentPlace.remove();
    if (this.popupRightClick) this.popupRightClick.remove();
    if (this.props.around_places)
      this.props.dispatch(clearSearchAroundAction());
    if (this.redMarker) this.redMarker.remove();
  };

  getAddressGeocode = (place) => {
    let result = [];
    place.address_components?.slice(1).map((item) => {
      result.push(item.long_name);
    });
    return result.join(",");
  };

  componentDidUpdate(prevProps) {
    if (this.props.isSmallScreen !== prevProps.isSmallScreen) {
      if (!this.props.isSmallScreen && !this.navigation) {
        this.navigation = new maplibregl.NavigationControl();
        this.map.addControl(this.navigation);
      } else if (this.props.isSmallScreen && this.navigation) {
        this.map.removeControl(this.navigation);
        this.navigation = null;
      }
    }

    if (
      !equal(prevProps.positionMarkerSelect, this.props.positionMarkerSelect) &&
      this.props.positionMarkerSelect
    ) {
      if (this.redMarker) {
        this.redMarker = this.redMarker
          .setLngLat(this.props.positionMarkerSelect)
          .addTo(this.map);
      } else {
        const el = document.createElement("div");
        el.innerHTML = ReactDOMServer.renderToStaticMarkup(
          <Marker size={22} />
        );
        // Marker chuột phải
        this.redMarker = new maplibregl.Marker({ anchor: "bottom", element: el })
          .setLngLat(this.props.positionMarkerSelect)
          .addTo(this.map);

        this.redMarker.getElement().addEventListener("contextmenu", (e) => {
          e.stopPropagation();
          e.preventDefault();
          this.props.dispatch(
            setPopupRightClick(true, this.props.positionMarkerSelect, "normal")
          );
        });
      }
    }

    if (prevProps.markerSelect !== this.props.markerSelect) {
      if (!this.props.markerSelect) {
        this.redMarker?.remove();
      }
    }

    if (
      this.props.popup_visible &&
      (!equal(prevProps.position_popup, this.props.position_popup) ||
        this.props.type_popup !== prevProps.type_popup) &&
      this.props.position_popup
    ) {
      this.popupRightClick = this.popupRightClick
        ? this.popupRightClick
          .setLngLat([
            this.props.position_popup.lng,
            this.props.position_popup.lat,
          ])
          .addTo(this.map)
          .setHTML(
            ReactDOMServer.renderToStaticMarkup(
              <MenuRightClick
                dispatch={this.props.dispatch}
                position_popup={this.props.position_popup}
                type_popup={this.props.type_popup}
              />
            )
          )
        : new maplibregl.Popup({
          closeButton: false,
          anchor: "top",
          closeOnClick: false,
          offset: [0, 5],
        })
          .setLngLat([
            this.props.position_popup.lng,
            this.props.position_popup.lat,
          ])
          .setHTML(
            ReactDOMServer.renderToStaticMarkup(
              <MenuRightClick
                dispatch={this.props.dispatch}
                position_popup={this.props.position_popup}
                type_popup={this.props.type_popup}
              />
            )
          )
          .addTo(this.map);
    }

    if (this.popupRightClick && !this.props.popup_visible) {
      this.popupRightClick.remove();
    }

    if (
      !equal(prevProps.current_place, this.props.current_place) &&
      this.props.current_place
    ) {
      const selectedPlace = this.props.current_place;

      this.map.flyTo({
        center: [
          selectedPlace.geometry.location.lng,
          selectedPlace.geometry.location.lat,
        ],
        zoom: 15,
        speed: 1.5,
        curve: 1,
      });
      this.props.dispatch(setCollapsedInfoBoxAction(false));
      this.props.dispatch(setRedMarkerAction(false));
      this.setState({
        bottomInfoVisible: false,
      });
    }

    if (
      !equal(prevProps.viewport, this.props.viewport) &&
      this.props.viewport
    ) {
      this.map.flyTo({
        center: [this.props.viewport.longitude, this.props.viewport.latitude],
        zoom: this.props.viewport.zoom,
        speed: 2,
      });
    }

    if (!equal(prevProps.around_place_center, this.props.around_place_center)) {
      this.props.dispatch(setRedMarkerAction(false));
    }

    if (
      !equal(prevProps.boxVisible, this.props.boxVisible) &&
      this.props.boxVisible === "navigation"
    ) {
      this.removeMarkerPopup();
    }

    if (
      !equal(prevProps.result_select, this.props.result_select) ||
      !equal(prevProps.result_navigation, this.props.result_navigation)
    ) {
      const {
        result_select,
        result_navigation,
        boxVisible,
        from_place,
        to_place,
      } = this.props;
      let dashedLineGeoJSON = [],
        polylineGeoJSON = [];
      this.result_navigation = [];

      if ((boxVisible !== "navigation" && boxVisible !== "iframe") || !result_navigation) {
        // Remove cac layer/source
        if (this.map.getLayer(`route-layer-fastest`))
          this.map.removeLayer(`route-layer-fastest`);
        if (this.map.getLayer(`route-layer-shortest`))
          this.map.removeLayer(`route-layer-shortest`);
        if (this.map.getLayer(`walk-layer-0`))
          this.map.removeLayer(`walk-layer-0`);
        if (this.map.getLayer(`walk-layer-1`))
          this.map.removeLayer(`walk-layer-1`);

        if (this.map.getSource(`route-source-fastest`))
          this.map.removeSource(`route-source-fastest`);
        if (this.map.getSource(`route-source-shortest`))
          this.map.removeSource(`route-source-shortest`);
        if (this.map.getSource(`walk-source-0`))
          this.map.removeSource(`walk-source-0`);
        if (this.map.getSource(`walk-source-1`))
          this.map.removeSource(`walk-source-1`);

        this.popup_navigation[0]?.remove();
        this.popup_navigation[1]?.remove();
      } else {
        if (result_navigation) {
          let distance = "";
          if (localStorage.getItem("unit") === "KILOMETERS") {
            distance = `${(
              result_navigation.fastest[0].legs[0].distance.value / 1000
            ).toFixed(1)} KM`;
          } else if (localStorage.getItem("unit") === "MILES") {
            distance = `${(
              (result_navigation.fastest[0].legs[0].distance.value / 1000) *
              Mile_Travel.MILES
            ).toFixed(1)} Dặm`;
          } else {
            distance = `${(
              result_navigation.fastest[0].legs[0].distance.value / 1000
            ).toFixed(1)} KM`;
          }
          let coordinateObject1 = {};
          coordinateObject1.coordinates = this.decodePolyline(
            result_navigation.fastest[0].overview_polyline.points
          );
          coordinateObject1.type = "LineString";
          polylineGeoJSON.push(coordinateObject1);
          polylineGeoJSON[0].roadWay = "fastest";
          let coordinateObject2 = {};
          coordinateObject2.coordinates = this.decodePolyline(
            result_navigation.shortest[0].overview_polyline.points
          );
          coordinateObject2.type = "LineString";
          polylineGeoJSON.push(coordinateObject2);
          polylineGeoJSON[1].roadWay = "shortest";

          dashedLineGeoJSON.push({
            type: "LineString",
            coordinates: [
              [
                polylineGeoJSON[0].coordinates[0][0],
                polylineGeoJSON[0].coordinates[0][1],
              ],
              [
                from_place?.geometry.location.lng,
                from_place?.geometry.location.lat,
              ],
            ],
          });
          dashedLineGeoJSON.push({
            type: "LineString",
            coordinates: [
              [
                polylineGeoJSON[0].coordinates[
                polylineGeoJSON[0].coordinates.length - 1
                ][0],
                polylineGeoJSON[0].coordinates[
                polylineGeoJSON[0].coordinates.length - 1
                ][1],
              ],
              [
                to_place?.geometry.location.lng,
                to_place?.geometry.location.lat,
              ],
            ],
          });

          polylineGeoJSON.map((item, i) => {
            // Layer dan duong
            if (this.map.getLayer(`route-layer-${item.roadWay}`))
              this.map.removeLayer(`route-layer-${item.roadWay}`);
            if (this.map.getSource(`route-source-${item.roadWay}`))
              this.map.removeSource(`route-source-${item.roadWay}`);
            this.map.addSource(`route-source-${item.roadWay}`, {
              type: "geojson",
              data: {
                type: "Feature",
                properties: {},
                geometry: item,
              },
            });
            this.map.addLayer({
              id: `route-layer-${item.roadWay}`,
              type: "line",
              source: `route-source-${item.roadWay}`,
              layout: {
                "line-join": "round",
                "line-cap": "round",
              },
              paint: {
                "line-color": "rgb(24, 144, 255)",
                "line-width": 7,
                "line-opacity": item.roadWay === result_select ? 1 : 0.5,
              },
            });
            // Layer di bo

            if (this.map.getLayer(`walk-layer-${i}`))
              this.map.removeLayer(`walk-layer-${i}`);
            if (this.map.getSource(`walk-source-${i}`))
              this.map.removeSource(`walk-source-${i}`);
            this.map.addSource(`walk-source-${i}`, {
              type: "geojson",
              data: {
                type: "Feature",
                properties: {},
                geometry: dashedLineGeoJSON[i],
              },
            });
            this.map.addLayer({
              id: `walk-layer-${i}`,
              type: "line",
              source: `walk-source-${i}`,
              layout: {
                "line-join": "round",
                "line-cap": "round",
              },
              paint: {
                "line-color": "rgb(133, 135, 126)",
                "line-opacity": 1,
                "line-width": 6,
                "line-dasharray": [0.2, 2],
              },
            });
            // Add Popup hien ket qua

            if (this.popup_navigation[i]) {
              this.popup_navigation[i]?.remove();
              this.popup_navigation[i] = null;
            }
            this.popup_navigation[i] = new maplibregl.Popup({
              closeButton: false,
              anchor: "top",
              closeOnClick: false,
              className:
                item.roadWay === result_select
                  ? "popup-z-index1"
                  : "popup-z-index2",
            })
              .setLngLat([
                i === 0
                  ? item.coordinates[
                  Math.trunc(0.75 * item.coordinates.length)
                  ][0]
                  : item.coordinates[
                  Math.trunc(0.25 * item.coordinates.length)
                  ][0],
                i === 0
                  ? item.coordinates[
                  Math.trunc(item.coordinates.length * 0.75)
                  ][1]
                  : item.coordinates[
                  Math.trunc(item.coordinates.length * 0.25)
                  ][1],
              ])
              .setHTML(
                ReactDOMServer.renderToStaticMarkup(
                  <div
                    className="tooltipNavigation"
                    id={`popup-${item.roadWay}`}
                  >
                    <p>{distance}</p>
                    <p>
                      {result_navigation[item.roadWay][0].legs[0].duration.text}
                    </p>
                  </div>
                )
              )
              .setMaxWidth("300px")
              .addTo(this.map);
            document
              .getElementById(`popup-${item.roadWay}`)
              .addEventListener("click", () => {
                this.props.dispatch(selectResultAction(item.roadWay));
              });
            const normalizeBounds = (bounds) => {
              const [firstPoint, secondPoint] = bounds;

              const minLat = Math.min(firstPoint[1], secondPoint[1]);
              const maxLat = Math.max(firstPoint[1], secondPoint[1]);

              const minLng = Math.min(firstPoint[0], secondPoint[0]);
              const maxLng = Math.max(firstPoint[0], secondPoint[0]);

              return [
                [minLng, minLat],
                [maxLng, maxLat]
              ];
            };
            const bound = normalizeBounds([item.coordinates[0], item.coordinates[item.coordinates.length - 1]])
            if (isMobile) {
              this.navigationView = this.map.cameraForBounds(bound, {
                padding: { top: 10, bottom: 25, left: 24, right: 24 }
              })
            } else {
              this.navigationView = this.map.cameraForBounds(bound, {
                padding: { top: 40, bottom: 40, left: 200, right: 40 }
              })
            }
          });

          this.view = {
            latitude: this.navigationView.center.lat,
            longitude: this.navigationView.center.lng,
            zoom: this.navigationView.zoom
          }
        }
      }

      this.props.dispatch(setMapViewportAction(this.view))
    }
    if (!equal(prevProps.from_place, this.props.from_place)) {
      const place = this.props.from_place;
      if (place) {
        const popup = new maplibregl.Popup({
          offset: [0, -18],
          className: "tooltip-marker",
          closeButton: false,
        })
          .setHTML(
            `<div class="ant-tooltip-inner tooltip-info-location">${place.name}</div>`
          )
          .setMaxWidth("150px");
        if (this.start_marker) {
          this.start_marker = this.start_marker
            .setLngLat(place.geometry.location)
            .setPopup(popup)
            .addTo(this.map);
        } else {
          const marker_start = document.createElement("div");
          marker_start.innerHTML = ReactDOMServer.renderToStaticMarkup(
            <div className='marker-start'>
              <img src={images.button} style={{ width: 12 }} alt="" />
            </div>
          );
          this.start_marker = new maplibregl.Marker({
            anchor: "center",
            element: marker_start,
          })
            .setPopup(popup)
            .setLngLat(place.geometry.location)
            .addTo(this.map);
          this.start_marker
            .getElement()
            .addEventListener("contextmenu", (e) => {
              e.stopPropagation();
              e.preventDefault();
              const lngLat = this.start_marker.getLngLat();
              this.props.dispatch(
                setPopupRightClick(true, lngLat, "popupFromPlace")
              );
              this.props.dispatch(setRedMarkerAction(false));
            });
          this.start_marker.getElement().addEventListener("click", () => {
            if (popup.isOpen()) {
              this.start_marker.togglePopup();
            }
          });
          this.start_marker
            .getElement()
            .addEventListener("mouseenter", () =>
              this.start_marker.togglePopup()
            );
          this.start_marker
            .getElement()
            .addEventListener("mouseleave", () =>
              this.start_marker.togglePopup()
            );
        }
      } else {
        if (equal(this.start_marker.getLngLat(), this.props.position_popup)) {
          this.props.dispatch(setPopupRightClick(false));
        }
        if (
          equal(
            prevProps.from_place?.place_id,
            this.state.placeMouseClick?.place_id
          )
        ) {
          this.changeVisibleBottomInfo(false);
        }
        this.changeVisibleBottomInfo(false);
        this.start_marker ? this.start_marker.remove() : null;
      }
    }

    if (!equal(prevProps.to_place, this.props.to_place)) {
      const place = this.props.to_place;
      if (place) {
        const popup = new maplibregl.Popup({
          offset: [0, -18],
          className: "tooltip-marker",
          closeButton: false,
        })
          .setHTML(
            `<div class="ant-tooltip-inner tooltip-info-location">${place.name}</div>`
          )
          .setMaxWidth("150px");
        if (this.end_marker) {
          this.to_place = this.end_marker
            .setPopup(popup)
            .setLngLat(place.geometry.location)
            .addTo(this.map);
        } else {
          const marker_end = document.createElement("div");
          marker_end.innerHTML = ReactDOMServer.renderToStaticMarkup(
            <div className='marker-end'>
              <div>
                <img src={images.marker} alt="" />
              </div>
            </div>
          );
          this.end_marker = new maplibregl.Marker({
            anchor: "center",
            element: marker_end,
          })
            .setPopup(popup)
            .setLngLat(place.geometry.location)
            .addTo(this.map);
          this.end_marker.getElement().addEventListener("contextmenu", (e) => {
            e.stopPropagation();
            e.preventDefault();
            const lngLat = this.end_marker.getLngLat();
            this.props.dispatch(
              setPopupRightClick(true, lngLat, "popupToPlace")
            );
            this.props.dispatch(setRedMarkerAction(false));
          });
          this.end_marker.getElement().addEventListener("click", () => {
            if (popup.isOpen()) {
              this.end_marker.togglePopup();
            }
          });
          this.end_marker
            .getElement()
            .addEventListener("mouseenter", () =>
              this.end_marker.togglePopup()
            );
          this.end_marker
            .getElement()
            .addEventListener("mouseleave", () =>
              this.end_marker.togglePopup()
            );
        }
      } else {
        if (equal(this.start_marker?.getLngLat(), this.props.position_popup)) {
          this.props.dispatch(setPopupRightClick(false));
        }

        if (
          equal(
            prevProps.to_place?.place_id,
            this.state.placeMouseClick?.place_id
          )
        ) {
          this.changeVisibleBottomInfo(false);
        }
        this.end_marker ? this.end_marker.remove() : null;
      }
    }

    if (
      !equal(prevProps.around_places, this.props.around_places) ||
      !equal(prevProps.around_place_select, this.props.around_place_select)
    ) {
      if (this.list_marker_around?.length > 0) {
        this.list_marker_around.forEach((item) => {
          item.remove();
        });
        this.list_marker_around = [];
      }
      const { around_places, around_place_center } = this.props;
      if (around_places.length > 0) {
        this.list_marker_around = [];
        let el = document.createElement("div");
        el.innerHTML = ReactDOMServer.renderToStaticMarkup(
          <Marker id="marker-center" type="center" />
        );
        this.list_marker_around[0] = new maplibregl.Marker(el, {
          anchor: "bottom",
        })
          .setPopup(
            new maplibregl.Popup({
              offset: [0, -32],
              className: "tooltip-marker",
              closeButton: false,
            })
              .setHTML(
                `<div class="ant-tooltip-inner tooltip-info-location">${around_place_center.name}</div>`
              )
              .setMaxWidth("150px")
          )
          .setLngLat(around_place_center.geometry.location)
          .addTo(this.map);
        const markerCenterDiv = this.list_marker_around[0].getElement();

        markerCenterDiv.addEventListener("click", () => {
          this._selectAroundPlace("center", around_place_center);
          this.props.dispatch(setRedMarkerAction(false));
          if (this.list_marker_around[0].getPopup().isOpen()) {
            this.list_marker_around[0].togglePopup();
          }
        });

        markerCenterDiv.addEventListener("contextmenu", (e) => {
          e.stopPropagation();
          e.preventDefault();
          this.props.dispatch(setRedMarkerAction(false));
          this.props.dispatch(
            setPopupRightClick(
              true,
              around_place_center.geometry.location,
              "normal"
            )
          );
        });

        markerCenterDiv.addEventListener("mouseenter", () =>
          this.list_marker_around[0].togglePopup()
        );
        markerCenterDiv.addEventListener("mouseleave", () =>
          this.list_marker_around[0].togglePopup()
        );

        around_places.forEach((item, i) => {
          const popup = new maplibregl.Popup({
            offset: [0, -32],
            className: "tooltip-marker",
            closeButton: false,
            anchor: "bottom",
          })
            .setHTML(
              `<div class="ant-tooltip-inner tooltip-info-location">${item.name}</div>`
            )
            .setMaxWidth("150px");
          el = document.createElement("div");
          el.innerHTML = ReactDOMServer.renderToStaticMarkup(
            <Marker
              type="around"
              place={item}
              place_select={this.props.around_place_select}
              id={`marker-around-${i}`}
            />
          );
          this.list_marker_around.push(
            new maplibregl.Marker(el, { anchor: "bottom" })
              .setPopup(popup)
              .setLngLat([item.lng_lat[0] * 1, item.lng_lat[1] * 1])
              .addTo(this.map)
          );
          const markerDiv = this.list_marker_around[i + 1].getElement();

          markerDiv.addEventListener("click", (e) => {
            e.stopPropagation();
            this.props.dispatch(setRedMarkerAction(false));
            this._selectAroundPlace("around", item);
            if (popup.isOpen()) {
              this.list_marker_around[i + 1].togglePopup();
            }
          });

          markerDiv.addEventListener("contextmenu", (e) => {
            e.stopPropagation();
            e.preventDefault();
            this.props.dispatch(
              setPopupRightClick(
                true,
                { lng: item.lng_lat[0] * 1, lat: item.lng_lat[1] * 1 },
                "around"
              )
            );
            this.props.dispatch(setRedMarkerAction(false));
          });

          markerDiv.addEventListener("mouseenter", () =>
            this.list_marker_around[i + 1].togglePopup()
          );
          markerDiv.addEventListener("mouseleave", () =>
            this.list_marker_around[i + 1].togglePopup()
          );
        });
      }
    }

    if (this.props.boxVisible === "info" && this.props.current_place) {
      if (!this.markerCurrentPlace) {
        const el = document.createElement("div");
        el.innerHTML = ReactDOMServer.renderToStaticMarkup(
          // <Marker type="normal" />
          <div className='marker-histories'>
            <div>
              <img src={images.marker} alt="" />
            </div>
          </div>
        );
        // Marker info
        this.markerCurrentPlace = new maplibregl.Marker({
          anchor: "bottom", element: el
        })
          .setLngLat(this.props.current_place?.geometry?.location)
          .addTo(this.map);
        this.markerCurrentPlace
          .getElement()
          .addEventListener("contextmenu", (e) => {
            e.stopPropagation();
            e.preventDefault();
            const lngLat = this.markerCurrentPlace.getLngLat();
            this.props.dispatch(
              setPopupRightClick(true, lngLat, "popupCurrentPlace")
            );
          });
      } else {
        this.markerCurrentPlace
          .setLngLat(this.props.current_place.geometry.location)
          .addTo(this.map);
      }
    }

    if (this.props.boxVisible !== "info" && this.markerCurrentPlace) {
      this.markerCurrentPlace.remove();
      this.markerCurrentPlace = null;
    }
    if (this.props.boxVisible === "detailsrestaurant" && this.props.restaurantData) {
      if (this.props.restaurantData.length !== 0) {
        for (let item of this.props.restaurantData) {
          const marker_restaurant = document.createElement("div");
          marker_restaurant.innerHTML = ReactDOMServer.renderToStaticMarkup(
            // <MarkerNavigation id="end-marker" type="histories" />
            <div className='marker-histories'>
              <div>
                <img src={images.marker} alt="" />
              </div>
            </div>
          );
          this.restaurant_marker = new maplibregl.Marker({
            anchor: "center",
            element: marker_restaurant,
          })
            // .setPopup(popup)
            .setLngLat(item.geometry.location)
            .addTo(this.map);
          this.listRestaurant.push(this.restaurant_marker)
        }
      } else {
        // console.log('Có')
        for (let marker of this.listRestaurant) {
          marker.remove()
        }
        this.listRestaurant = []
      }
    }

    if (this.props.boxVisible === "history") {
      for (let marker of this.listHistories) {
        marker.remove()
      }
      for (let item of this.props.searchLocalStorage) {
        const marker_history = document.createElement("div");
        marker_history.innerHTML = ReactDOMServer.renderToStaticMarkup(
          <div className='marker-histories'>
            <div>
              <img src={images.marker} alt="" />
            </div>
          </div>
        );
        this.history_marker = new maplibregl.Marker({
          anchor: "center",
          element: marker_history,
        })
          .setLngLat(item.location)
          .addTo(this.map);
        this.listHistories.push(this.history_marker)
      }

    } else {
      for (let marker of this.listHistories) {
        marker.remove()
      }
    }


    // if (this.props.boxVisible === "details") {
    if (this.props.result_navigation && this.props.boxVisible === "details") {
      for (let step of this.props.result_navigation.fastest[0].legs[0].steps) {
        const popup = new maplibregl.Popup({ offset: [0, -32], className: "tooltip-marker", closeButton: false, anchor: 'bottom' })
          .setHTML(`<div class="ant-tooltip-inner tooltip-info-location">${step.html_instructions}</div>`)
          .setMaxWidth("150px");
        const marker_step = document.createElement('div');
        marker_step.innerHTML = ReactDOMServer.renderToStaticMarkup(<div className='marker-details'></div>);
        this.step_marker = new maplibregl.Marker({ anchor: 'center', element: marker_step })
          .setPopup(popup)
          .setLngLat(step.end_location)
          .addTo(this.map);
        this.list.push(this.step_marker)
      }
    }
    else {
      for (let marker of this.list) {
        marker.remove()
      }
      this.list = []
    }
    // }
    if (this.props.boxVisible === "navigation" && isMobile) {
      if (this.props.result_navigation) {
        for (let step of this.props.result_navigation.fastest[0].legs[0].steps) {
          const popup = new maplibregl.Popup({ offset: [0, -32], className: "tooltip-marker", closeButton: false, anchor: 'bottom' })
            .setHTML(`<div class="ant-tooltip-inner tooltip-info-location">${step.html_instructions}</div>`)
            .setMaxWidth("150px");
          const marker_step = document.createElement('div');
          marker_step.innerHTML = ReactDOMServer.renderToStaticMarkup(<div className='marker-details'></div>);
          this.step_marker = new maplibregl.Marker({ anchor: 'center', element: marker_step })
            .setPopup(popup)
            .setLngLat(step.end_location)
            .addTo(this.map);
          this.list.push(this.step_marker)
        }
      }
      else {
        for (let marker of this.list) {
          marker.remove()
        }
        this.list = []
      }
    }
  }

  decodePolyline(encoded) {
    var points = [];
    var index = 0,
      len = encoded.length;
    var lat = 0,
      lng = 0;

    while (index < len) {
      var b,
        shift = 0,
        result = 0;
      do {
        b = encoded.charAt(index++).charCodeAt(0) - 63;
        result |= (b & 0x1f) << shift;
        shift += 5;
      } while (b >= 0x20);
      var dlat = result & 1 ? ~(result >> 1) : result >> 1;
      lat += dlat;

      shift = 0;
      result = 0;
      do {
        b = encoded.charAt(index++).charCodeAt(0) - 63;
        result |= (b & 0x1f) << shift;
        shift += 5;
      } while (b >= 0x20);
      var dlng = result & 1 ? ~(result >> 1) : result >> 1;
      lng += dlng;

      points.push([lng * 1e-5, lat * 1e-5]);
    }

    return points;
  }

  changeStyle = () => {
    const { style } = this.state;
    if (style === STYLE_URL.SATELITE + STYLE_KEY) {
      this.setState({
        style: STYLE_URL.NORMAL + STYLE_KEY,
      });
      this.map.setStyle(STYLE_URL.NORMAL + STYLE_KEY);
    } else {
      this.setState({
        style: STYLE_URL.SATELITE + STYLE_KEY,
      });
      this.map.setStyle(STYLE_URL.SATELITE + STYLE_KEY);
    }
  };

  componentDidMount() {
    window.addEventListener('storage', this.handleStorageChange);
    // console.log(STYLE_URL.NORMAL)
    const selectedPlace = this.props.current_place;
    this.map = new maplibregl.Map({
      container: "map", // container id
      style: STYLE_URL.NORMAL + STYLE_KEY,
      center: selectedPlace
        ? [
          selectedPlace.geometry.location.lng,
          selectedPlace.geometry.location.lat,
        ]
        : [DEFAULT_VIEWPORT.longitude, DEFAULT_VIEWPORT.latitude], // starting position [lng, lat]
      zoom: DEFAULT_VIEWPORT.zoom, // starting zoom
    });
    if (selectedPlace)
      this.props.dispatch(
        setRedMarkerAction(true, selectedPlace.geometry.location)
      );

    this.navigation = new maplibregl.NavigationControl();
    this.geolocateControl = new maplibregl.GeolocateControl({
      positionOptions: {
        enableHighAccuracy: true,
      },
      // Bật tắt hiển bị vị trí
      trackUserLocation: true,
      // Hiển thị
      showUserLocation: true,
      // Tắt vòng tròn to
      showAccuracyCircle: false,
      // Điều chỉnh mức zoom đến vị trí của mình
      fitBoundsOptions: {
        maxZoom: 15,
      },
    });

    this.geolocateControl.on("error", () => {
      message.warning("Goong không thể lấy địa điểm hiện tại của bạn !");
    });

    this.geolocateControl.on("geolocate", (e) => {
      this.props.dispatch(
        setMyLocationAction({
          latitude: e.coords.latitude,
          longitude: e.coords.longitude,
        })
      );
    });

    !isMobile && this.map.addControl(this.navigation);
    !isMobile && this.map.addControl(this.geolocateControl);

    this.map.on("click", this._onMouseClick);
    this.map.on("contextmenu", this._onRightClick);
    this.map.on("load", () => {
      this.map.resize();

      const pid = new URLSearchParams(window.location.search).get("pid");
      const location = new URLSearchParams(window.location.search)
        .get("location")
        ?.split(",");
      const pid_around = new URLSearchParams(window.location.search).get(
        "pid_around"
      );
      const direction_infor = new URLSearchParams(window.location.search).get(
        "direction"
      );
      if (
        !direction_infor &&
        !pid &&
        !location &&
        !pid_around &&
        !this.props.current_place
      )
        this.geolocateControl?.trigger();
      else {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition((position) => {
            this.props.dispatch(
              setMyLocationAction({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
              })
            );
          });
        }
      }
    });

    this.map.on("move", () => {
      this.props.dispatch(
        setCenterLatLngAction({
          latitude: this.map.getCenter().lat,
          longitude: this.map.getCenter().lng,
        })
      );
    });
    this.map.on("style.load", () => {
      this.map?.addLayer({
        id: "3d-buildings",
        source: "composite",
        "source-layer": "VN_Building",
        filter: ["==", "extrude", "true"],
        type: "fill-extrusion",
        minzoom: 15,
        paint: {
          "fill-extrusion-color": "#aaa",
          "fill-extrusion-height": {
            type: "identity",
            property: "height",
          },
          "fill-extrusion-base": {
            type: "identity",
            property: "min_height",
          },
          "fill-extrusion-opacity": 0.4,
        },
      });
      if (this.props.result_navigation) {
        if (this.props.result_select === "fastest") {
          this.props.dispatch(selectResultAction("shortest"));
          this.props.dispatch(selectResultAction("fastest"));
        } else {
          this.props.dispatch(selectResultAction("fastest"));
          this.props.dispatch(selectResultAction("shortest"));
        }
      }
    });
    document.body.addEventListener("click", this._onClickMenu);
    // this.map.on('click', 'route-layer-fastest', (e) => {
    //   console.log(e, 'fastest');
    //   e.originalEvent.stopPropagation();
    //   e.originalEvent.preventDefault();
    // });

    // this.map.on('click', 'route-layer-shortest', (e) => {
    //   console.log(e)
    // });

    const direction_infor = new URLSearchParams(window.location.search).get(
      "direction"
    );
    const iframe = new URLSearchParams(window.location.search).get(
      "iframe"
    );
    if (direction_infor) {
      const coor_from = {
        lat: direction_infor.split("&")[0].split(",")[0],
        lng: direction_infor.split("&")[0].split(",")[1],
      };
      const coor_to = {
        lat: direction_infor.split("&")[1].split(",")[0],
        lng: direction_infor.split("&")[1].split(",")[1],
      };
      if (coor_from.lat && coor_from.lng && coor_to.lat && coor_to.lng) {
        // this.handleFromHere(coor_from.lat, coor_from.lng);
        // this.handleToHere(coor_to.lat, coor_to.lng);
        if (iframe != null) {
          this.navigationByURLIframe(coor_from, coor_to)
        } else {
          this.navigationByURL(coor_from, coor_to)
        }
      }
    }
  }

  navigationByURLIframe = async (from, to) => {
    this.props.dispatch(setBoxVisibleAction('iframe'));

    this.props.dispatch(setRedMarkerAction(false));
    this.changeVisibleBottomInfo(false);
    let fromplace;
    if (!from.lat || !from.lng) fromplace = await this._getInforPlace();
    else {
      fromplace = await this._getInforPlace(from.lat, from.lng);
    }
    await this.props.dispatch(
      navigationFromAction(
        fromplace,
        `${fromplace.name} - ${fromplace.formatted_address}`
      )
    );
    let toplace;
    if (!to.lat || !to.lng) toplace = await this._getInforPlace();
    else {
      toplace = await this._getInforPlace(to.lat, to.lng);
    }
    await this.props.dispatch(
      navigationToAction(
        toplace,
        `${toplace.name} - ${toplace.formatted_address}`
      )
    );
    this.props.dispatch(
      navigationAction(this.props.from_place, this.props.to_place, 'car')
    );
  }

  navigationByURL = async (from, to) => {
    this.props.dispatch(setBoxVisibleAction("navigation"));
    this.props.dispatch(setRedMarkerAction(false));
    this.changeVisibleBottomInfo(false);
    let fromplace;
    if (!from.lat || !from.lng) fromplace = await this._getInforPlace();
    else {
      fromplace = await this._getInforPlace(from.lat, from.lng);
    }
    await this.props.dispatch(
      navigationFromAction(
        fromplace,
        `${fromplace.name} - ${fromplace.formatted_address}`
      )
    );
    let toplace;
    if (!to.lat || !to.lng) toplace = await this._getInforPlace();
    else {
      toplace = await this._getInforPlace(to.lat, to.lng);
    }
    await this.props.dispatch(
      navigationToAction(
        toplace,
        `${toplace.name} - ${toplace.formatted_address}`
      )
    );
  }

  componentWillUnmount() {
    window.removeEventListener('storage', this.handleStorageChange);
    document.body.removeEventListener("click", this._onClickMenu);
  }

  handleStorageChange = (event) => {
    console.log('oppaopaopa')
    if (event.key === 'search_history') {
      this.setState({ value: event.newValue });
    }
  };

  render() {
    const { style, bottomInfoVisible, placeMouseClick } = this.state;

    return (
      <React.Fragment>
        <Div100vh>
          <div id="map"></div>
          <div>
            {!isMobile && (
              <Avatar
                shape="square"
                size={64}
                onClick={this.changeStyle}
                className="change-status-button"
                style={{
                  backgroundImage:
                    style === STYLE_URL.NORMAL + STYLE_KEY
                      ? `url(${satellite_img})`
                      : `url(${normal_map_img})`,
                }}
              />
            )}
            {isMobile && (
              <Avatar
                shape="square"
                size={64}
                onClick={this.changeStyle}
                className="change-status-button"
                // id='change-status-button--mobile'
                style={{
                  backgroundImage:
                    style === STYLE_URL.NORMAL + STYLE_KEY
                      ? `url(${satellite_img})`
                      : `url(${normal_map_img})`,
                }}
              />
            )}
          </div>
          {bottomInfoVisible && (
            <BottomInfoLocation
              changeVisibleBottomInfo={this.changeVisibleBottomInfo}
              lat={
                placeMouseClick.geometry?.location.lat ||
                Number(placeMouseClick.lng_lat[1])
              }
              lng={
                placeMouseClick.geometry?.location.lng ||
                Number(placeMouseClick.lng_lat[0])
              }
              name={
                placeMouseClick.name ||
                placeMouseClick.address_components[0].long_name
              }
              isMarkerAround={placeMouseClick.marker_type_id}
              place_id={placeMouseClick._id}
              address={
                this.getAddressGeocode(placeMouseClick) ||
                placeMouseClick.formatted_address ||
                placeMouseClick.description.address
              }
              removeMarker={this.removeMarkerWhatIs}
            />
          )}
        </Div100vh>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    current_place: state.placeReducer.current_place,
    from_place: state.navigationReducer.from,
    to_place: state.navigationReducer.to,
    boxVisible: state.boxVisibleReducer.box_visible,
    result_navigation: state.navigationReducer.result,
    viewport: state.placeReducer.viewport,
    result_select: state.navigationReducer.result_select,
    around_places: state.searchReducer.around_places,
    markerSelect: state.boxVisibleReducer.red_marker_visible,
    positionMarkerSelect: state.boxVisibleReducer.position_red_marker,
    around_place_center: state.searchReducer.around_place_center,
    popup_visible: state.boxVisibleReducer.popup_visible,
    position_popup: state.boxVisibleReducer.position_popup,
    type_popup: state.boxVisibleReducer.type_popup,
    around_place_select: state.searchReducer.around_place_select,
    my_location: state.placeReducer.my_location,
    restaurantData: state.searchReducer.restaurant_data,
    searchLocalStorage: state.searchReducer.search_local_storage,
  };
};
export default connect(mapStateToProps)(Map);
