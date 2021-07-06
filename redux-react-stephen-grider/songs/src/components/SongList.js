import React, { useState } from "react";
import { connect } from "react-redux";

//must configure connect with map state to props
const SongList = (props) => {
  //   console.log(`here is props ${JSON.stringify(props)}`);

  const renderList = () => {
    return props.songs.map((song) => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button className="ui button primary">Select</button>
          </div>
          <div className="content">{song.title}</div>
        </div>
      );
    });
  };
  return <div>{renderList()}</div>;
};

const mapStateToProps = (state) => {
  //   console.log(state);
  //this object will show up as props inside of the component
  return { songs: state.songs };
};

export default connect(mapStateToProps)(SongList);
