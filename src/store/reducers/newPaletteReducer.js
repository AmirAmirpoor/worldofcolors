import {
  SET_COLORS,
  REORDER_COLORS,
  DELETE_COLOR,
} from "../actions/newPaletteActions";

const initialPalette = {
  name: "",
  colors: [],
  isFavorite: false,
};

export const newPaletteReducer = (state = initialPalette, action) => {
  switch (action.type) {
    case SET_COLORS:
      return {
        ...state,
        colors: action.payload.colors,
      };

    case REORDER_COLORS:
      const updatedColors = [...state.colors];
      const movedColor = updatedColors.splice(action.payload.oldIndex, 1)[0];
      updatedColors.splice(action.payload.newIndex, 0, movedColor);

      return {
        ...state,
        colors: updatedColors,
      };

    case DELETE_COLOR:
      return {
        ...state,
        colors: state.colors.filter(
          (color) => color.id !== action.payload.colorId
        ),
      };

    default:
      return state;
  }
};
