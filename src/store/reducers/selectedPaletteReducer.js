import {
  SELECT_PALETTE,
  SELECT_COLOR,
} from "../actions/selectedPaletteActions";

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
    default:
      return state;
  }
};
