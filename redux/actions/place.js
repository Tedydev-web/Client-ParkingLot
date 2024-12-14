import * as place from '../consts/place';

export const getDetailByIdAction = (pid) => {
  return {
    type: place.GET_DETAIL_BY_ID_REQUEST,
    pid
  }
};

export const getDetailByLatLngAction = (latLng) => {
  return {
    type: place.GET_DETAIL_BY_LATLNG_REQUEST,
    latLng
  }
};

export const getDetailAroundPlace = (id) => {
  return {
    type: place.GET_DETAIL_AROUND_PLACE_REQUEST,
    id
  }
};

export const setMapViewportAction = (viewport) => {
  return {
    type: place.SET_MAP_VIEWPORT_REQUEST,
    viewport
  }
}

export const setCenterLatLngAction = (latLng) => {
  return {
    type: place.SET_CENTER_LATLNG_REQUEST,
    latLng
  }
}

export const setMyLocationAction = (latLng) => {
  return {
    type: place.SET_MY_LOCATION,
    latLng
  }
}

export const resetLocationAction = () => {
  return {
    type: place.RESET_LOCATION
  }
}