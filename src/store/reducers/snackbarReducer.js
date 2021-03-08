import { SHOW_SNACKBAR, HIDE_SNACKBAR } from "../actions/snackbarActions";

const initialState = {
  isVisible: false,
  text: "palette generated successfully",
  type: "error", // success, error
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
