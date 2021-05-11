import { sample } from "lodash";
import {
  SET_COLORS,
  REORDER_COLORS,
  DELETE_COLOR,
  UPDATE_COLOR,
  SET_VISIBLE_SHADES,
} from "../actions/newPaletteActions";

const initialPalette = {
  name: "",
  colors: [],
  isFavorite: false,
  visibleShades: null,
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

    case UPDATE_COLOR:
      return {
        ...state,
        visibleShades: null,
        colors: state.colors.map((c, idx) => {
          return idx === action.payload.index
            ? { ...c, value: action.payload.value }
            : c;
        }),
      };

    case SET_VISIBLE_SHADES:
      return {
        ...state,
        visibleShades: action.payload.color,
      };

    default:
      return state;
  }
};
