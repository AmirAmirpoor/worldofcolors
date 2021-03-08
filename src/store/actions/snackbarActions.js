export const SHOW_SNACKBAR = "SHOW_SNACKBAR";
export const HIDE_SNACKBAR = "HIDE_SNACKBAR";

export const show_snackbar = (snackbarType, snackbarText) => {
  return {
    type: SHOW_SNACKBAR,
    payload: {
      type: snackbarType,
      text: snackbarText,
    },
  };
};

export const hide_snackbar = () => {
  return {
    type: HIDE_SNACKBAR,
  };
};
