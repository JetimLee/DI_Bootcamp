import React, { useState } from "react";
import { connect } from "react-redux";

//this comes from the actions here, it will be dispatched here
import { selectSong } from "../actions/index";

//must configure connect with map state to props
const SongList = (props) => {
  // console.log(props);
  //   console.log(`here is props ${JSON.stringify(props)}`);

  const renderList = () => {
    return props.songs.map((song) => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button
              onClick={() => props.selectSong(song)}
              className="ui button primary"
            >
              Select
            </button>
          </div>
          <div className="content">{song.title}</div>
        </div>
      );
    });
  };
  return <div>{renderList()}</div>;
};

const mapStateToProps = (state) => {
  console.log(state);
  //   console.log(state);
  //this object will show up as props inside of the component
  return { songs: state.songs };
};

//passing in the action creator this way passes the action creator into the component as a prop
export default connect(mapStateToProps, {
  selectSong,
})(SongList);
