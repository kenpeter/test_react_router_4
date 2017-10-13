// Need store and middleware
import { createStore, applyMiddleware } from "redux";
// Async
import thunk from "redux-thunk";

import rootReducer from "../reducers/rootReducer";

// Define a const var, then value is func
const configureStore = () => {
  // middle ware is array of tool
  const middlewares = [ thunk ];

  return createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware( ...middlewares )
  );
};

export default configureStore;
