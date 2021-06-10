import React, { Component } from "react";
import { connect } from "react-redux";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";
// import axios from "axios";
import { setSearchField } from "./actions";

import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { monsters } = this.state;
    const { searchField, handleChange } = this.props;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLocaleLowerCase())
    );
    return (
      <div className="App">
        <h1> Cats Rolodex</h1>
        <SearchBox placeholder="search cats!" handleChange={handleChange} />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    searchField: state.searchCats.searchField,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    handleChange: (event) => dispatch(setSearchField(event.target.value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
