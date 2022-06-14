import { createStore } from "redux";
import RootReducers from "./reducers/root-reducers";
import { composeWithDevTools } from "redux-devtools-extension";

// const intitalState = {};

export const store = createStore(RootReducers, {}, composeWithDevTools());
