//tnis creates the action that will be sent to dispatch

export const selectSong = (song) => {
  return {
    type: "SONG_SELECTED",
    payload: song,
  };
};
