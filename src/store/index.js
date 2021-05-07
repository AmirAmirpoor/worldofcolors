import { createStore, combineReducers } from "redux";

import { snackbarReducer } from "./reducers/snackbarReducer";
import { fullScreenReducer } from "./reducers/fullScreenReducer";
import { palettesReducer } from "./reducers/palettesReducer";
import { selectedPaletteReducer } from "./reducers/selectedPaletteReducer";
import { mobilePanelReducer } from "./reducers/mobilePanelReducer";
import { confirmReducer } from "./reducers/confirmReducer";

const rootReducer = combineReducers({
  snackbar: snackbarReducer,
  fullScreen: fullScreenReducer,
  palettes: palettesReducer,
  selectedPalette: selectedPaletteReducer,
  mobilePanel: mobilePanelReducer,
  confirm: confirmReducer,
});

const store = createStore(rootReducer);

export default store;
