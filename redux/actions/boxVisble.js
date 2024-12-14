import * as box from '../consts/boxVisible'

export const setBoxVisibleAction = (type_visible) => {
  return { type: box.SHOW_VISBLE_BOX, type_visible }
};

export const setRedMarkerAction = (visible, location) => {
  return { type: box.SET_RED_MARKER, visible, location }
}

export const setCollapsedInfoBoxAction = (collapsed) => {
  return { type: box.SET_COLLAPSED_INFO_BOX, collapsed }
}

export const setPopupRightClick = (visible, location, type_popup) => {
  return { type: box.SET_POPUP_RIGHT_CLICK, visible, location, type_popup }
}