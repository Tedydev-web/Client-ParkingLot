import * as search from '../consts/search'

const initialState = {
  places: [],
  around_places: [],
  around_place_select: null,
  search_history: true,
  search_data: [],
  restaurant_data: [],
  search_local_storage: []
}

export default function searchReducer(state = initialState, action) {
  switch (action.type) {
    case search.SEARCH_SUCCESS:
      return { ...state, places: action.places }
    case search.SEARCH_AROUND_SUCCESS:
      return { ...state, around_places: action.around_places, around_place_center: action.center_location }
    case search.SEARCH_CLEAR_REQUEST:
      return { ...state, places: initialState.places }
    case search.CLEAR_SEARCH_AROUND_REQUEST:
      return { ...state, around_places: initialState.around_places, around_place_select: null }
    case search.SELECT_AROUND_PLACE_MARKER:
      return { ...state, around_place_select: action.place }
    case search.SEARCH_HISTORY:
      return { ...state, search_history: action.search_history }
    case search.SEARCH_DATA:
      return { ...state, search_data: action.search_data }
    case search.RESTAURANT_DATA:
      return { ...state, restaurant_data: action.restaurant_data }
    case search.SEARCH_LOCAL_STORAGE:
      return { ...state, search_local_storage: action.search_local_storage }
    default:
      return { ...state }
  }
}