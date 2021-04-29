import {
  SET_PALETTES,
  ADD_TO_PALETTES,
  REMOVE_FROM_PALETTES,
} from "../actions/palettesActions";

const initialState = [
  { id: 10, name: "hot and cool", colors: ["red", "orange"] },
  { id: 20, name: "haha", colors: ["black", "pink"] },
  { id: 30, name: "sugar", colors: ["navy", "green"] },
];

export const palettesReducer = (state = initialState, action) => {
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
