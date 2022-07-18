import { combineReducers, applyMiddleware } from "redux";
import { createStore } from "redux";
import thunk from "redux-thunk";

import counter from "./reducer";

const reducers = combineReducers({
  counter
});

export const store = createStore(reducers, applyMiddleware(thunk));
