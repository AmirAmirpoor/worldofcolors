export const SET_PALETTES = "SET_PALETTES";
export const ADD_TO_PALETTES = "ADD_TO_PALETTES";
export const REMOVE_FROM_PALETTES = "REMOVE_FROM_PALETTES";
export const ADD_TO_FAVORITES = "ADD_TO_FAVORITES";
export const REMOVE_FROM_FAVORITES = "REMOVE_FROM_FAVORITES";

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

export const add_to_favorites = (id) => {
  return {
    type: ADD_TO_FAVORITES,
    payload: { paletteId: id },
  };
};

export const remove_from_favorites = (id) => {
  return {
    type: REMOVE_FROM_FAVORITES,
    payload: { paletteId: id },
  };
};
