import React from "react";
import Homepage from "./components/Homepage";
import "./styling/app.css";
import Navbar from "./components/Navbar";
const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Homepage />
    </div>
  );
};

export default App;
