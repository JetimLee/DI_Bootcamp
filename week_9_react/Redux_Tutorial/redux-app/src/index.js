import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createStore } from "redux";
import rootReducer from "./Reducers/index";
import { Provider } from "react-redux";
//providers connects the store to the app

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
// import counterReducer from "./Reducers/counter";
// import loggedReducer from "./Reducers/isLogged";

//cannot add two reducers, so you combine them
// const store = createStore(counterReducer, loggedReducer);

//store - is a globalized state
//action is an event - it describes what you want to do

//must pass in the store via the provider
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
