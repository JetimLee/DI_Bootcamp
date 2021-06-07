import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createStore } from "redux";
import { Provider } from "react-redux";

import { reducer } from "./reducer";
const gavin = createStore(reducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={gavin}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
