import { combineReducers } from "redux";
export const songsReducer = () => {
  return [
    { title: "hit me baby one more time", duration: "4:05" },
    { title: "nothing else matters", duration: "3:05" },
    { title: "oops i did it again", duration: "2:05" },
    { title: "nobdy's listening", duration: "3:35" },
    { title: "never again", duration: "3:15" },
  ];
};

export const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
