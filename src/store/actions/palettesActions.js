export const SET_PALETTES = "SET_PALETTES";
export const ADD_TO_PALETTES = "ADD_TO_PALETTES";
export const REMOVE_FROM_PALETTES = "REMOVE_FROM_PALETTES";
export const LIKE_PALETTE = "LIKE_PALETTE";
export const REMOVE_FROM_LIKED_PALETTES = "REMOVE_FROM_LIKED_PALETTES";

export const set_palettes = (palettes) => {
  return {
    type: SET_PALETTES,
    payload: { palettes },
  };
};

export const add_to_palettes = (palette) => {
  return {
    type: ADD_TO_PALETTES,
    payload: { palette: palette },
  };
};

export const remove_from_palettes = (id) => {
  return {
    type: REMOVE_FROM_PALETTES,
    payload: {
      paletteId: id,
    },
  };
};

export const like_palette = (id) => {
  return {
    type: LIKE_PALETTE,
    payload: { paletteId: id },
  };
};

export const remove_from_liked_palettes = (id) => {
  return {
    type: REMOVE_FROM_LIKED_PALETTES,
    payload: { paletteId: id },
  };
};
