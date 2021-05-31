import React from "react";
import ReactDOM from "react-dom";
// import App from "./App";
import NewComp from "./components/ClassComponent";

ReactDOM.render(
  <React.StrictMode>
    <NewComp name="Gavin" id="123" />
  </React.StrictMode>,
  document.getElementById("root")
);
