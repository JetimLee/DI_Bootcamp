import React from "react";

import "./App.css";
import Card from "./components/Card";
import CardsList from "./components/Cardslist";

class App extends React.Component() {
  constructor(){
    super()
    this.state={
      robots: []
    }
  }
  render() {
    const {robots} = {this.state}

    return (
      <div>
        <CardsList robots={robots} />
      </div>
    );
  }
}

export default App;
