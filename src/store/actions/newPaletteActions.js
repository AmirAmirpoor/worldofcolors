export const SET_COLORS = "SET_COLORS";
export const REORDER_COLORS = "REORDER_COLORS";
export const DELETE_COLOR = "DELETE_COLOR";
export const UPDATE_COLOR = "UPDATE_COLOR";
export const SET_VISIBLE_SHADES = "SET_VISIBLE_SHADES";
export const TOGGLE_LOCK = "TOGGLE_LOCK";
export const CHANGE_COLOR_IN_COLORPICKER = "CHANGE_COLOR_IN_COLORPICKER";

export const set_colors = (colors) => {
  return {
    type: SET_COLORS,
    payload: { colors },
  };
};

export const reorder_colors = (oldIndex, newIndex) => {
  return {
    type: REORDER_COLORS,
    payload: {
      oldIndex,
      newIndex,
    },
  };
};

export const delete_color = (colorId) => {
  return {
    type: DELETE_COLOR,
    payload: { colorId },
  };
};

export const update_color = (value, index) => {
  // value: hex value, index
  return {
    type: UPDATE_COLOR,
    payload: {
      value,
      index,
    },
  };
};

export const set_visible_shades = (color) => {
  return {
    type: SET_VISIBLE_SHADES,
    payload: { color },
  };
};

export const toggle_lock = (colorId) => {
  return {
    type: TOGGLE_LOCK,
    payload: { colorId },
  };
};

export const change_color_in_colorpicker = (color) => {
  return {
    type: CHANGE_COLOR_IN_COLORPICKER,
    payload: { color },
  };
};
