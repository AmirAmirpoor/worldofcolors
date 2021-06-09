import { CLOSE_PANEL } from "../actions/mobilePanelActions";
import { OPEN_PANEL } from "../actions/mobilePanelActions";

import { SELECT_PALETTE } from "../actions/selectedPaletteActions";

import { REMOVE_FROM_PALETTES } from "../actions/palettesActions";

export const mobilePanelReducer = (state = false, action) => {
  switch (action.type) {
    case REMOVE_FROM_PALETTES:
    case CLOSE_PANEL:
      return false;
    case OPEN_PANEL:
    case SELECT_PALETTE:
      return true;
    default:
      return state;
  }
};
