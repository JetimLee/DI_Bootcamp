import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import PrintHello from "./Components/PrintHello";
import BootstrapCard from "./Components/BootstrapCard";
import CreateJumbotron from "./Components/Jumbotron";
ReactDOM.render(
  <React.StrictMode>
    <App />
    <PrintHello />
    <BootstrapCard
      title="McCartney"
      imgsrc="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Paul_McCartney_in_October_2018.jpg/240px-Paul_McCartney_in_October_2018.jpg"
      buttonLabel="Go to Wikipedia"
      buttonURL="https://en.wikipedia.org/wiki/Paul_McCartney"
      description="Sir James Paul McCartney CH MBE (born 18 June 1942) is an English singer, songwriter, musician, composer, and record and film producer who gained worldwide fame as co-lead vocalist and bassist for the Beatles."
    />
    <CreateJumbotron name="React" />
  </React.StrictMode>,
  document.getElementById("root")
);
