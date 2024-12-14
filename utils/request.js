import { GET } from "./base_request";
import { API_URL } from "../consts/api_url";
import Axios from "axios";
export default {
  geocode: (location, options) => {
    return GET(API_URL.GEOCODE, {
      latlng: `${location.latitude},${location.longitude}`
    }, options);
  },
  autocomplete: (input, location, limit, radius, has_children, options) => {
    return GET(API_URL.AUTOCOMPLETE, {
      input,
      location,
      radius: radius || 3000,
      limit: limit || 10,
      has_children: has_children || false
    }, options);
  },
  direction: (params, options) => {
    return GET(API_URL.DIRECTION, {
      origin: `${params.origin.latitude},${params.origin.longitude}`,
      destination: `${params.destination.latitude},${params.destination.longitude}`,
      vehicle: params.vehicle || 'car'
    }, options);
  },
  distancematrix: (params, options) => {
    return GET(API_URL.DISTANCEMATRIX, {
      origins: `${params.origin.latitude},${params.origin.longitude}`,
      destinations: `${params.destination.latitude},${params.destination.longitude}`,
      vehicle: `${params.vehicle}`
    }, options);
  },
  place_detail: (placeid, options) => {
    return GET(API_URL.PLACE_DETAIL, {
      placeid
    }, options);
  },
  get_weather: (latitude, longitude) => {
    return Axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&lang=vi&appid=${WEATHER_API}`)
  }
}
