import { takeLatest, call, put, all } from 'redux-saga/effects';
import * as search from '../consts/search';
import Request from '../../utils/request';
import Axios from 'axios';
import { message } from 'antd';
import { getDetailLatLngService, getAddressGeocode } from './placeSaga'

let searchRequest = null;
export default function* searchSaga() {
  yield all([
    takeLatest(search.SEARCH_REQUEST, searchRequestSaga),
    takeLatest(search.SEARCH_AROUND_REQUEST, searchAroundSaga),

  ]);
}

export function searchService(query, location, radius, limit) {
  if (searchRequest) searchRequest.cancel();
  searchRequest = Request.autocomplete(query, location, radius, limit);
  return searchRequest;
}

function searchAroundService(location, zoom) {
  return Axios.post('https://napi.goong.io/v1/marker/get_markers_in_bear', {
    "lat": location.lat,
    "lng": location.lng,
    "distance": 1000,
    "type_code": ["SUGGESTION"], //or "cat_code":["GT_STATIC"]
    "bearing": 0,
    "angle": 360,
    "limit": 50,
    "page": 0,
    "zoom": zoom
  });
}

function* searchRequestSaga(action) {
  if (action.query.trim() === '') {
    yield put({ type: search.SEARCH_SUCCESS, places: [] });
  }
  else {
    try {
      const response = yield call(searchService, action.query, action.location);
      if (response.data.status == 'OK') {
        const places = response.data.predictions || [];
        yield put({ type: search.SEARCH_SUCCESS, places: places });
      } else {
        yield put({ type: search.SEARCH_SUCCESS, places: [] });
      }
    } catch (error) {
    }
  }
}

function* searchAroundSaga(action) {
  if (action.location.lat && action.location.lng) {
    const response = yield call(searchAroundService, action.location, action.zoom);
    if (response.data.length > 0) {
      const response_center = yield call(getDetailLatLngService, { latitude: action.location.lat, longitude: action.location.lng });
      const place_center = response_center.data.results[0];
      const place_center_return = {
        ...place_center,
        name: place_center.address_components[0].long_name,
        formatted_address: getAddressGeocode(place_center)
      }
      yield put({ type: search.SEARCH_AROUND_SUCCESS, around_places: response.data, center_location: place_center_return });
    } else {
      message.error('Không có địa điểm nào quanh đây !')
    }
  }
}