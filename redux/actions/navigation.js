import * as navigation from '../consts/navigation'

export const navigationFromAction = (place, text) => {
  return { type: navigation.NAVIGATION_FROM_REQUEST, place, text }
};

export const swapAction = () => {
  return { type: navigation.SWAP_REQUEST }
};

export const navigationToAction = (place, text) => {
  return { type: navigation.NAVIGATION_TO_REQUEST, place, text }
};

export const navigationAction = (from_place, to_place, vehicle) => {
  return { type: navigation.NAVIGATION_REQUEST, from_place, to_place, vehicle }
};

export const selectResultAction = (type) => {
  return { type: navigation.NAVIGATION_SELECT_RESULT_REQUEST, roadWay: type }
}

export const clearResultAction = () => {
  return { type: navigation.CLEAR_RESULT_REQUEST }
};

export const clearAction = () => {
  return { type: navigation.CLEAR_REQUEST }
};
export const setTypeLatlong = (type_latlong) => {
  return {
    type: navigation.TYPE_LATLONG,
    type_latlong
  }
};
export const setTypeInput = (type_input) => {
  return {
    type: navigation.TYPE_INPUT,
    type_input
  }
};

export const setInfoRestaurant = (info_restaurant) => {
  return {
    type: navigation.INFO_RESTAURANT,
    info_restaurant
  }
};
