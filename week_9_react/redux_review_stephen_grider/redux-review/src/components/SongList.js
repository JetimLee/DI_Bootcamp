import React, { Component } from "react";
import { connect } from "react-redux";

import { selectSong } from "../actions";

class SongList extends Component {
  renderList() {
    return this.props.songs.map((song) => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button
              onClick={() => this.props.selectSong(song)}
              className="ui button primary"
            >
              Select
            </button>
          </div>
          <div className="content">{song.title}</div>
        </div>
      );
    });
  }
  render() {
    return <div className="ui divided list">{this.renderList()}</div>;
  }
}

//this is convention to name the function this way
//we are going to take all of the data in our state and make it show up as props inside of the component
const mapeStateToProps = (state) => {
  console.log(state);
  return { songs: state.songs };
};

export default connect(mapeStateToProps, { selectSong })(SongList);
