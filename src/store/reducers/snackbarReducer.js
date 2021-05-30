import { SHOW_SNACKBAR } from "../actions/snackbarActions";
import { HIDE_SNACKBAR } from "../actions/snackbarActions";

const initialState = {
  isVisible: false,
  text: "",
  type: "success", // success, error
};

export const snackbarReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SHOW_SNACKBAR:
      return {
        ...state,
        isVisible: true,
        type: payload.type,
        text: payload.text,
      };
    case HIDE_SNACKBAR:
      return { ...state, isVisible: false };
    default:
      return state;
  }
};
