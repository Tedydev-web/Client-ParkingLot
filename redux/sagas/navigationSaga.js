import { takeLatest, call, put, all } from 'redux-saga/effects';
import * as navigation from '../consts/navigation';
import Request from '../../utils/request';
import { message } from 'antd'

export default function* navigationSaga() {
  yield all([
    takeLatest(navigation.NAVIGATION_REQUEST, navigationRequestSaga),
  ]);
}

function directionService(params) {
  return Request.direction(params);
}

function* navigationRequestSaga(action) {
  try {  
    const { from_place, to_place, vehicle } = action;
    let params = {
      origin: { latitude: from_place.geometry.location.lat, longitude: from_place.geometry.location.lng },
      destination: { latitude: to_place.geometry.location.lat, longitude: to_place.geometry.location.lng },
      vehicle
    }
    const response = yield call(directionService, params);

    if (response.status == 200 && response.data.routes.length > 0) {
      const shortest = response.data?.routes?.sort((r1,r2) => {
        return r1.legs[0].distance.value - r2.legs[0].distance.value;
      })[0];
      const fastest = response.data?.routes?.sort((r1,r2) => {
        return r1.legs[0].duration.value - r2.legs[0].duration.value;
      })[0];
      const result = {
        fastest: [fastest],
        shortest: [shortest]
      };
      yield put({
        type: navigation.NAVIGATION_SUCCESS,
        result: result
      })
    } else {
      message.error("Không tìm thấy đường đi !");
      yield put({
        type: navigation.NAVIGATION_FAIL,
        result: null
      })
    }

  } catch (error) {
    message.error("Không tìm thấy đường đi !");
    yield put({
      type: navigation.NAVIGATION_FAIL,
      result: null
    })
    throw error;
  }
}
