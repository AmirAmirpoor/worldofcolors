import { SHOW_SNACKBAR, HIDE_SNACKBAR } from "../actions/snackbarActions";

const initialState = {
  isVisible: false,
  text: "",
};

export const snackbarReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SHOW_SNACKBAR:
      return {
        ...state,
        isVisible: true,
        text: payload.snackbarText,
      };
    case HIDE_SNACKBAR:
      return { ...state, isVisible: false };
    default:
      return state;
  }
};
