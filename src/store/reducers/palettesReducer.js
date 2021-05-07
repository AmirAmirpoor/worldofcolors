import {
  SET_PALETTES,
  ADD_TO_PALETTES,
  REMOVE_FROM_PALETTES,
  LIKE_PALETTE,
  REMOVE_FROM_LIKED_PALETTES,
} from "../actions/palettesActions";

import { PALETTES } from "../../helpers/constants";

export const palettesReducer = (state = PALETTES, action) => {
  switch (action.type) {
    case SET_PALETTES:
      const { palettes } = action.payload;
      return palettes;

    case ADD_TO_PALETTES:
      const { palette } = action.payload;
      return [palette, ...state];

    case REMOVE_FROM_PALETTES:
      return state.filter((palette) => palette.id !== action.payload.paletteId);

    case LIKE_PALETTE:
      return state.map((p) =>
        p.id === action.payload.paletteId ? { ...p, isFavorite: true } : p
      );

    case REMOVE_FROM_LIKED_PALETTES:
      return state.map((p) =>
        p.id === action.payload.paletteId ? { ...p, isFavorite: false } : p
      );
    default:
      return state;
  }
};
