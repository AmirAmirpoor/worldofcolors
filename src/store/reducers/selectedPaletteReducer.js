import { SELECT_PALETTE } from "../actions/selectedPaletteActions";
import { SELECT_COLOR } from "../actions/selectedPaletteActions";

import { REMOVE_FROM_LIKED_PALETTES } from "../actions/palettesActions";
import { REMOVE_FROM_PALETTES } from "../actions/palettesActions";
import { LIKE_PALETTE } from "../actions/palettesActions";

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

    case REMOVE_FROM_PALETTES:
      return initialState;

    default:
      return state;
  }
};
