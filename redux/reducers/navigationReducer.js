import * as navigation from '../consts/navigation'

const initialState = {
  from: null,
  to: null,
  result: null,
  text_to_input: '',
  text_from_input: '',
  result_select: 'fastest',
  response_status: true,
  type_input: true,
  type_latlong: '',
  info_restaurant: false
}

export default function navigationReducer(state = initialState, action) {
  switch (action.type) {

    case navigation.NAVIGATION_FROM_REQUEST:
      return {
        ...state,
        from: action.place,
        text_from_input: action.text,
      }

    case navigation.NAVIGATION_TO_REQUEST:
      return {
        ...state,
        to: action.place,
        text_to_input: action.text,
      }

    case navigation.SWAP_REQUEST:
      const tmp = state.from;
      const tmp_text = state.text_from_input;
      return {
        ...state,
        from: state.to,
        to: tmp,
        text_from_input: state.text_to_input,
        text_to_input: tmp_text
      }

    case navigation.NAVIGATION_SUCCESS:
      return { ...state, result: action.result, response_status: true }

    case navigation.NAVIGATION_FAIL:
      return { ...state, result: action.result, response_status: false }

    case navigation.NAVIGATION_SELECT_RESULT_REQUEST:
      return { ...state, result_select: action.roadWay }

    case navigation.CLEAR_RESULT_REQUEST:
      return { ...state, result: null }

    case navigation.CLEAR_REQUEST:
      return { ...initialState }

    case navigation.TYPE_INPUT:
      return { ...state, type_input: action.type_input }
    case navigation.TYPE_LATLONG:
      return { ...state, type_latlong: action.type_latlong }
    case navigation.INFO_RESTAURANT:
      return { ...state, info_restaurant: action.info_restaurant }
    default:
      return { ...state }
  }
}