import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Input, message, Divider } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import {
  searchAction,
  searchClearAction,
  setSearchData,
} from "../redux/actions/search";
import { navigationFromAction, navigationToAction, clearResultAction } from '../redux/actions/navigation';
import { setMapViewportAction } from '../redux/actions/place';
import Request from '../utils/request';
import { connect } from "react-redux";
import { isMobile } from 'react-device-detect';
import _ from 'lodash';

const InputNavigation = (props) => {
  const {
    autofocus,
    places,
    text_from_input,
    text_to_input,
    latLngCenter,
  } = props;
  const dispatch = useDispatch();

  const [value, setValue] = useState("");
  const [focused, setFocused] = useState(false);

  useEffect(() => {
    setValue(props.type === "start_input" ? text_from_input : text_to_input);
  }, [text_from_input, text_to_input]);

  const debouncedSearch = useCallback(
    _.debounce((text, latLngStr) => {
      props.dispatch(searchAction(text, latLngStr));
    }, 500),
    []
  );
  const onChange = (newValue) => {
    setValue(newValue);
    if (props.type === "start_input") {
      dispatch(navigationFromAction(null, newValue));
    } else {
      dispatch(navigationToAction(null, newValue));
    }
    dispatch(clearResultAction());

    const latLngStr = `${latLngCenter.latitude}, ${latLngCenter.longitude}`;
    debouncedSearch(newValue, latLngStr);
  };

  const onOptionSelect = async (place, option) => {
    const selectedPlaceId = option.id || option.place_id;
    try {
      const response = await Request.place_detail(selectedPlaceId);
      const selectedPlace = response.data?.result;
      if (selectedPlace) {
        const viewport = {
          longitude: selectedPlace.geometry.location.lng,
          latitude: selectedPlace.geometry.location.lat,
          zoom: 14,
        };
        dispatch(searchClearAction());
        if (props.type === "start_input") {
          dispatch(
            navigationFromAction(
              selectedPlace,
              `${selectedPlace.name} - ${selectedPlace.formatted_address}`
            )
          );
          !props.to_place && dispatch(setMapViewportAction(viewport));
        } else {
          dispatch(
            navigationToAction(
              selectedPlace,
              `${selectedPlace.name} - ${selectedPlace.formatted_address}`
            )
          );
          !props.from_place && dispatch(setMapViewportAction(viewport));
        }
      } else {
        message.error("Không tìm thấy địa điểm!");
      }
    } catch (error) {
      message.error("Không tìm thấy địa điểm!");
    }
  };

  const onPressEnter = async () => {
    const value =
      props.type === "start_input" ? text_from_input : text_to_input;
    if (places.length > 0) {
      onOptionSelect(null, places[0]);
    } else {
      if (value.includes(",")) {
        const [lat, lng] = value.split(",");
        if (
          Number(lat) > 90 ||
          Number(lat) < -90 ||
          Number(lng) > 180 ||
          Number(lng) < -180
        ) {
          message.error("Tọa độ không chính xác");
        } else {
          try {
            const response = await Request.geocode({
              latitude: Number(lat),
              longitude: Number(lng),
            });
            if (response.data.results.length > 0) {
              onOptionSelect(null, response.data.results[0]);
              message.info("Địa điểm được lấy từ dữ liệu geocode");
            } else {
              message.error("Không tìm thấy địa điểm từ tọa độ !");
            }
          } catch (error) {
            message.error("Không tìm thấy địa điểm từ tọa độ !");
          }
        }
      } else if (value.includes("&")) {
        const [lat, lng] = value.split("&");
        if (
          Number(lat) > 90 ||
          Number(lat) < -90 ||
          Number(lng) > 180 ||
          Number(lng) < -180
        ) {
          message.error("Tọa độ không chính xác");
        } else {
          try {
            const response = await Request.geocode({
              latitude: Number(lat),
              longitude: Number(lng),
            });
            if (response.data.results.length > 0) {
              onOptionSelect(null, response.data.results[0]);
              message.info("Địa điểm được lấy từ dữ liệu geocode");
            } else {
              message.error("Không tìm thấy địa điểm từ tọa độ !");
            }
          } catch (error) {
            message.error("Không tìm thấy địa điểm từ tọa độ !");
          }
        }
      }
    }
  };


  const renderTitle = (title, place) => (
    <span id={place.place_id} onClick={() => onOptionSelect(null, place)}>
      {title}
    </span>
  );


  const renderItem = (content, id, count) => ({
    id: id,
    value: (
      <div style={{ width: "100%", color: "black", fontSize: 15 }}>
        <span>{content}</span>
        <br />
        <span
          style={{
            fontSize: 12,
            display: "inline-block",
            width: "100%",
            overflow: "hidden",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
          }}
        >
          {count}
        </span>
        {count === places.length - 1 ? null : <Divider style={{ margin: 0 }} />}
      </div>
    ),
    key: `${id}-${count}`,
  });


  useEffect(() => {
    let options = null;
    if (places) {
      props.dispatch(setSearchData(places));
      options = places.map((item, i) =>
        item.has_children && item.children?.length
          ? {
            label: renderTitle(
              item.structured_formatting.main_text,
              item
            ),
            options: item.children.map((child, j) =>
              renderItem(child.content, child.pid, j)
            ),
            key: `${item.pid}-${i}`,
            name: `${item.structured_formatting.main_text} - ${item.structured_formatting.secondary_text}`,
          }
          : {
            value: (
              <div style={{ width: "100%", color: "black", fontSize: 15 }}>
                <span>{item.structured_formatting.main_text}</span>
                <br />
                <span
                  style={{
                    fontSize: 12,
                    display: "inline-block",
                    width: "100%",
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                    textOverflow: "ellipsis",
                  }}
                >
                  {item.structured_formatting.secondary_text}
                </span>
                {i === places.length - 1 ? null : (
                  <Divider style={{ margin: 0 }} />
                )}
              </div>
            ),
            id: item.place_id,
            key: `${item.pid}-${i}`,
            name: `${item.structured_formatting.main_text} - ${item.structured_formatting.secondary_text}`,
          }
      );
    }
  }, [])

  const suffix_searching = value ? null : (
    <>
      <div className="SearchIcon_top">
        <SearchOutlined
          style={{ fontSize: "21px" }}
          className="Search_Out"
        />
        <div className="Tooltip_icon">Tìm Kiếm</div>
      </div>
    </>
  );

  const styleInput = !isMobile ?
    {
      width: "270px",
      borderRadius: "8px",
      height: "38px",
      border: focused ? "none" : "1px solid #70757A",
      boxShadow: focused ? "0 0 0 2px #1980ff" : "none",
      // marginLeft: "8px",
      outline: "none",
    } :
    {
      // border:'1px solid grey',
      // borderRadius:'4px',
      // width: "60vw",
      borderRadius: "8px",
      // height: "38px",
      border: focused ? "none" : "1px solid #70757A",
      boxShadow: focused ? "0 0 0 2px #1980ff" : "none",
      // marginLeft: "8px",
      // outline: "none",
    }
  return (

    <Input
      style={styleInput}
      placeholder={props.placeholder}
      value={value}
      suffix={suffix_searching}
      allowClear={true}
      onChange={(e) => onChange(e.target.value)}
      onPressEnter={onPressEnter}
      autoFocus={autofocus}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
    />

  );
};
const mapStateToProps = (state) => ({
  places: state.searchReducer.places,
  typeInput: state.navigationReducer.type_input,
  from_place: state.navigationReducer.from,
  to_place: state.navigationReducer.to,
  text_from_input: state.navigationReducer.text_from_input,
  text_to_input: state.navigationReducer.text_to_input,
  latLngCenter: state.placeReducer.center,
});

export default connect(mapStateToProps)(InputNavigation)
