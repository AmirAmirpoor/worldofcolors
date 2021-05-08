export const SET_COLORS = "SET_COLORS";
export const ADD_COLOR = "ADD_COLOR";
export const DELETE_COLOR = "DELETE_COLOR";
export const UPDATE_COLOR = "UPDATE_COLOR";

export const set_colors = (colors) => {
  return {
    type: SET_COLORS,
    payload: { colors },
  };
};
