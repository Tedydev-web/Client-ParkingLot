import * as search from '../consts/search';

export const searchAction = (query, location) => {
  return {
    type: search.SEARCH_REQUEST,
    query,
    location
  }
};

export const searchAroundAction = (location, zoom) => {
  return {
    type: search.SEARCH_AROUND_REQUEST,
    location,
    zoom
  }
};

export const searchClearAction = () => {
  return {
    type: search.SEARCH_CLEAR_REQUEST,
  }
};

export const clearSearchAroundAction = () => {
  return {
    type: search.CLEAR_SEARCH_AROUND_REQUEST
  }
};

export const selectAroundPlaceAction = (place) => {
  return {
    type: search.SELECT_AROUND_PLACE_MARKER,
    place
  }
};

export const setHistoryBox = (search_history) => {
  return {
    type: search.SEARCH_HISTORY,
    search_history
  };
}

export const setSearchData = (search_data) => {
  return {
    type: search.SEARCH_DATA,
    search_data
  }
};

export const setRestaurantData = (restaurant_data) => {
  return {
    type: search.RESTAURANT_DATA,
    restaurant_data
  }
};

export const setSearchLocalStorage = (search_local_storage) => {
  return {
    type: search.SEARCH_LOCAL_STORAGE,
    search_local_storage
  }
};