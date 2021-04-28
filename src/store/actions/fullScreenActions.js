export const SHOW_FULLSCREEN = "SHOW_FULLSCREEN";
export const HIDE_FULLSCREEN = "HIDE_FULLSCREEN";

export const show_fullscreen = (color) => {
  return {
    type: SHOW_FULLSCREEN,
    payload: { color },
  };
};

export const hide_fullscreen = () => {
  return {
    type: HIDE_FULLSCREEN,
  };
};
