import { CLOSE_PANEL } from "../actions/mobilePanelActions";
import { SELECT_PALETTE } from "../actions/selectedPaletteActions";

export const mobilePanelReducer = (state = false, action) => {
  switch (action.type) {
    case CLOSE_PANEL:
      return false;
    case SELECT_PALETTE:
      return true;
    default:
      return state;
  }
};
