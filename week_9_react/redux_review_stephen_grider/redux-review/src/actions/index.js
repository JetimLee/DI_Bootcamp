//an action is just a function that manages the state
//an action creator must return a plain javascript object - action, must have a type property and can optionally have a payload
//the song we are trying to select is passed into the action creator as a parameter
export const selectSong = (song) => {
  return {
    type: "SONG_SELECTED",
    payload: song,
  };
};

//named export allows us to export many different named functions from the same file
//to do a named export you place the export directly in front of the named declaration

//for example

export const movieSelector = (movie) => {
  return {
    type: "MOVIE_SELECTED",
    payload: movie,
  };
};
