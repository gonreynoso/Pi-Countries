import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducer";
import thunkMiddleware from "redux-thunk";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  //? thunkMiddleware permite hacer las request a traves del applyMiddleware importado de redux
  composeEnhancer(applyMiddleware(thunkMiddleware))
);

export default store;
