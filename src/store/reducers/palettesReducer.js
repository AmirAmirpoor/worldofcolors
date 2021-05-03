import {
  SET_PALETTES,
  ADD_TO_PALETTES,
  REMOVE_FROM_PALETTES,
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
      const { paletteId } = action.payload;
      return state.filter((palette) => palette.id !== paletteId);
    default:
      return state;
  }
};
