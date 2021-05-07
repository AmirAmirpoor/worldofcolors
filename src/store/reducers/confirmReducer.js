import { SHOW_CONFIRM, HIDE_CONFIRM } from "../actions/confirmActions";

const initialState = {
  isVisible: false,
  question: "Delete palette ?",
  type: "create",
  onConfirm: () => {},
};

export const confirmReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_CONFIRM:
      return {
        isVisible: true,
        question: action.payload.question,
        onConfirm: action.payload.onConfirm,
        type: action.payload.type,
      };
    case HIDE_CONFIRM: {
      return {
        isVisible: false,
        question: "",
        type: "default",
        onConfirm: () => {},
      };
    }
    default:
      return state;
  }
};
