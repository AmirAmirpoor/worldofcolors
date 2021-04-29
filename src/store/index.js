import { createStore, combineReducers } from "redux";

import { snackbarReducer } from "./reducers/snackbarReducer";
import { fullScreenReducer } from "./reducers/fullScreenReducer";
import { palettesReducer } from "./reducers/palettesReducer";

const rootReducer = combineReducers({
  snackbar: snackbarReducer,
  fullScreen: fullScreenReducer,
  palettes: palettesReducer,
});

const store = createStore(rootReducer);

export default store;
