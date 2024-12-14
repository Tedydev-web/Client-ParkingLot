import * as box from '../consts/boxVisible'

const initialState = {
  box_visible: 'search',
  info_box_collapsed: false,
  red_marker_visible: false,
  position_red_marker: {},
  popup_visible: false,
  position_popup: {},
  type_popup: 'normal'
}

export default function boxVisibleReducer(state = initialState, action) {
  switch (action.type) {
    case box.SHOW_VISBLE_BOX:
      return { ...state, box_visible: action.type_visible }
    case box.SET_RED_MARKER:
      return { ...state, red_marker_visible: action.visible, position_red_marker: action.location }
    case box.SET_COLLAPSED_INFO_BOX:
      return { ...state, info_box_collapsed: action.collapsed }
    case box.SET_POPUP_RIGHT_CLICK:
      return { ...state, popup_visible: action.visible, position_popup: action.location, type_popup: action.type_popup }
    default:
      return { ...state }
  }
}