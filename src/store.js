import { createStore, combineReducers, applyMiddleware } from "redux";
//Firebase
//import alertReducer from "./reducers/alertReducer";

//import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import languageReducer from "./reducers/languageReducer";

// Add firebase to reducers
const rootReducer = combineReducers({
  language: languageReducer,
});

const middleware = [];

// Create store with reducers and initial state
const initialState = {};

export const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

/* export const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance, // <- needed if using firestore
};
 */
