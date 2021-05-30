import { SHOW_FULLSCREEN } from "../actions/fullScreenActions";
import { HIDE_FULLSCREEN } from "../actions/fullScreenActions";

const initialState = {
  isVisible: false,
  color: "",
};

export const fullScreenReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_FULLSCREEN:
      const { color } = action.payload;
      return { ...state, isVisible: true, color };
    case HIDE_FULLSCREEN:
      return { ...state, isVisible: false };
    default:
      return state;
  }
};
