import React from "react";
import { selectSong } from "../actions";
//the curly brackets mean we specifically want this named export
import SongList from "./SongList";

function App() {
  return (
    <div className="ui container grid">
      <div className="ui row">
        <div className="column eight wide">
          <SongList></SongList>
        </div>
      </div>
    </div>
  );
}

export default App;
