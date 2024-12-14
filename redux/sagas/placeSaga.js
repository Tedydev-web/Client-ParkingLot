import { takeLatest, call, put, all } from 'redux-saga/effects';
import * as place from '../consts/place';
import Request from '../../utils/request';
import { message } from 'antd'
import { searchService } from './searchSaga'
import Axios from "axios";

export default function* placeSaga() {
  yield all([
    takeLatest(place.GET_DETAIL_BY_ID_REQUEST, getDetailIdSaga),
    takeLatest(place.GET_DETAIL_BY_LATLNG_REQUEST, getDetailLatLngSaga),
    takeLatest(place.GET_DETAIL_AROUND_PLACE_REQUEST, getDetailAroundPlaceSaga)
  ]);
}

export function getDetailIdService(pid) {
  return Request.place_detail(pid);
}

export function getDetailLatLngService(latLng) {
  return Request.geocode(latLng);
}

export function getDetailAroundPlaceService(id) {
  return Axios.get(`https://napi.goong.io/v1/marker/get_marker_detail/${id}`);
}

function* getDetailIdSaga(action) {
  try {
    const response = yield call(getDetailIdService, action.pid);

    const latLng = {
      latitude: response.data.result.geometry.location.lat,
      longitude: response.data.result.geometry.location.lng
    }
    const getByLatLng = yield call(getDetailLatLngService, latLng);
    if (response.data.status == 'OK' && getByLatLng.data.results.length > 0) {
      const location = response.data.result.geometry.location.lat + "," + response.data.result.geometry.location.lng;
      const response_search = yield call(searchService, response.data.result.name, location, 11, 10);
      const near_places = response_search.data.predictions?.filter(i => i.place_id !== action.pid);
      yield put({ type: place.GET_DETAIL_BY_ID_SUCCESS, data: response.data.result, nearPlaces: near_places, pid: action.pid })
    } else {
      message.error('Không tìm thấy địa điểm !')
    }
  } catch (error) {
    throw error
  }
}

function* getDetailLatLngSaga(action) {
  try {
    const response = yield call(getDetailLatLngService, action.latLng);
    if (response.data.status == 'OK' && response.data.results.length > 0) {
      const place_return = response.data.results[0];
      const name_place = place_return.address_components[0].long_name;

      const location = place_return.geometry.location.lat + "," + place_return.geometry.location.lng;
      const response_search = yield call(searchService, name_place, location, 11, 10);
      const near_places = response_search.data.predictions?.filter(i => i.place_id !== place_return.place_id);
      const return_data = {
        ...place_return,
        name: name_place,
        formatted_address: getAddressGeocode(place_return)
      }
      yield put({ type: place.GET_DETAIL_BY_ID_SUCCESS, data: return_data, nearPlaces: near_places })
    } else {
      message.error('Không tìm thấy địa điểm !')
    }

  } catch (error) {
    throw error
  }
}

function* getDetailAroundPlaceSaga(action) {
  try {
    const response = yield call(getDetailAroundPlaceService, action.id);
    const data = response.data.data;
    if (data) {
      const return_data = {
        ...data,
        place_id: data._id,
        geometry: {
          location: {
            lat: Number(data.lng_lat[1]),
            lng: Number(data.lng_lat[0]),
          }
        },
        formatted_address: data.description.address
      }
      const name_place = return_data.name;
      const location = return_data.geometry.location.lat + "," + return_data.geometry.location.lng;
      const response_search = yield call(searchService, name_place, location, 10, 10);
      const near_places = response_search.data.predictions;
      yield put({ type: place.GET_DETAIL_AROUND_PLACE_SUCCESS, data: return_data, nearPlaces: near_places })
    } else {
      message.error('Không tìm thấy địa điểm !')
    }
  } catch (error) {
    throw error
  }
}

export function getAddressGeocode(place) {
  let result = [];
  place.address_components.slice(1).map(item => {
    result.push(item.long_name);
  })
  return result.join(',')
}