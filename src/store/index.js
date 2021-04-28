import { createStore, combineReducers } from "redux";

import { snackbarReducer } from "./reducers/snackbarReducer";
import { fullScreenReducer } from "./reducers/fullScreenReducer";

const rootReducer = combineReducers({
  snackbar: snackbarReducer,
  fullScreen: fullScreenReducer,
});

const store = createStore(rootReducer);

export default store;
