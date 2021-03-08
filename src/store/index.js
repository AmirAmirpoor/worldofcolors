import { createStore, combineReducers } from "redux";

import { snackbarReducer } from "./reducers/snackbarReducer";

const rootReducer = combineReducers({
  snackbar: snackbarReducer,
});

const store = createStore(rootReducer);

export default store;
