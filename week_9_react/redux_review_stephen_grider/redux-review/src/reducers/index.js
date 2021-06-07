//since a static item is being passed through you don't need to use an action
import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "No Scrubs", duration: "4:05" },
    { title: "Hit Me Baby One more Time", duration: "4:10" },
    { title: "All Star", duration: "3:10" },
    { title: "Hatikvah", duration: "4:45" },
  ];
};

const selectSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectSongReducer,
});
