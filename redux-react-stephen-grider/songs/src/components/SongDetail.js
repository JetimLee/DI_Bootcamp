import React from "react";
import { connect } from "react-redux";

const SongDetail = (props) => {
  console.log(props);
  return (
    <div>
      {props.song ? <p>{props.song.title}</p> : <p>no song selected</p>}
    </div>
  );
};

const mapStateToProps = (state) => {
  // console.log(`state from map state to props ${JSON.stringify(state)}`);
  return { song: state.selectedSong };
  //this object will show up as props inside of the component
};

export default connect(mapStateToProps)(SongDetail);
