import { SET_COLORS } from "../actions/newPaletteActions";

const initialPalette = {
  name: "",
  colors: [
    { id: 0, value: "#5a189a" },
    { id: 1, value: "#7b2cbf" },
    { id: 2, value: "#9d4edd" },
    { id: 3, value: "#c77dff" },
  ],
  isFavorite: false,
};

export const newPaletteReducer = (state = initialPalette, action) => {
  switch (action.type) {
    case SET_COLORS:
      return {
        ...state,
        colors: action.payload.colors,
      };
    default:
      return state;
  }
};
