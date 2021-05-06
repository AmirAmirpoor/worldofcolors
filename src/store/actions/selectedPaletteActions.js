export const SELECT_PALETTE = "SELECTE_PALETTE";
export const SELECT_COLOR = "SELECT_COLOR";

export const select_palette = (palette) => {
  return {
    type: SELECT_PALETTE,
    payload: { palette },
  };
};

export const select_color = (idx) => {
  return {
    type: SELECT_COLOR,
    payload: { index: idx },
  };
};
