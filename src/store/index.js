import { createStore, applyMiddleware, combineReducers } from "redux";
import { productsReducer } from "./productsReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  productsReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
