import {
  SET_PALETTES,
  ADD_TO_PALETTES,
  REMOVE_FROM_PALETTES,
} from "../actions/palettesActions";

const initialState = [
  {
    id: 10,
    name: "hot and cool",
    colors: [
      { id: 0, value: "#10002b" },
      { id: 1, value: "#240046" },
      { id: 2, value: "#3c096c" },
      { id: 3, value: "#5a189a" },
      { id: 4, value: "#7b2cbf" },
      { id: 5, value: "#9d4edd" },
      { id: 6, value: "#c77dff" },
      { id: 7, value: "#e0aaff" },
    ],
    isFavorite: false,
  },
  {
    id: 20,
    name: "pinkie",
    colors: [
      { id: 0, value: "#006466" },
      { id: 1, value: "#065a60" },
      { id: 2, value: "#0b525b" },
      { id: 3, value: "#144552" },
      { id: 4, value: "#1b3a4b" },
      { id: 5, value: "#212f45" },
      { id: 6, value: "#272640" },
      { id: 7, value: "#312444" },
      { id: 8, value: "#3e1f47" },
      { id: 9, value: "#4d194d" },
    ],
    isFavorite: true,
  },
  {
    id: 30,
    name: "amazing",
    colors: [
      { id: 0, value: "#355070" },
      { id: 1, value: "#6d597a" },
      { id: 2, value: "#b56576" },
      { id: 3, value: "#e56b6f" },
      { id: 4, value: "#eaac8b" },
    ],
    isFavorite: true,
  },
  {
    id: 40,
    name: "light",
    colors: [
      { id: 0, value: "#f191ac" },
      { id: 1, value: "#f6a6bb" },
      { id: 2, value: "#f4bbc9" },
      { id: 3, value: "#fae6e7" },
      { id: 4, value: "#f7eeed" },
    ],
    isFavorite: false,
  },
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
