import {
  SELECT_PALETTE,
  SELECT_COLOR,
} from "../actions/selectedPaletteActions";

import {
  LIKE_PALETTE,
  REMOVE_FROM_LIKED_PALETTES,
} from "../actions/palettesActions";

const initialState = {
  palette: null,
  colorIndex: 0,
};

export const selectedPaletteReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_PALETTE:
      return { ...state, palette: action.payload.palette, colorIndex: 0 };
    case SELECT_COLOR:
      return { ...state, colorIndex: action.payload.index };
    case LIKE_PALETTE:
      return { ...state, palette: { ...state.palette, isFavorite: true } };
    case REMOVE_FROM_LIKED_PALETTES:
      return { ...state, palette: { ...state.palette, isFavorite: false } };
    default:
      return state;
  }
};
