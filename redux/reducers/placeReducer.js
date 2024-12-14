import * as place from '../consts/place'
import Router from 'next/router';

const initialState = {
  current_place: null,
  near_places: [],
  center: {
    latitude: 21.013722,
    longitude: 105.798232
  },
  viewport: {
    latitude: 21.013722,
    longitude: 105.798232,
    zoom: 12
  },
  my_location: null
}

export default function searchReducer(state = initialState, action) {
  switch (action.type) {
    case place.GET_DETAIL_BY_ID_SUCCESS:
      const pid = action.pid || action.data.place_id;
      if (pid) {
        Router.push({
          pathname: `/`,
          query: { pid: `${pid}` }
        });
      } else {
        Router.push({
          pathname: `/`,
          query: { location: `${action.data.geometry.location.lat},${action.data.geometry.location.lng}` }
        });
      }
      return { ...state, current_place: action.data, near_places: action.nearPlaces }

    case place.RESET_LOCATION:
      return { ...state, current_place: initialState.current_place, near_places: initialState.near_places }

    case place.SET_MAP_VIEWPORT_REQUEST:
      return { ...state, viewport: action.viewport }

    case place.SET_CENTER_LATLNG_REQUEST:
      return { ...state, center: action.latLng }

    case place.GET_DETAIL_AROUND_PLACE_SUCCESS:
      const pid_around = action.pid || action.data.place_id;;
      if (pid_around) {
        Router.push({
          pathname: `/`,
          query: { pid_around }
        });
      }
      return { ...state, current_place: action.data, near_places: action.nearPlaces }
    
    case place.SET_MY_LOCATION:
      return { ...state, my_location: action.latLng }

    default:
      return { ...state }
  }
}