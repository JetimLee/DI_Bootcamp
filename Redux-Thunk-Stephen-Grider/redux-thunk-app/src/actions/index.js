import jsonplaceholder from "../apis/jsonplaceholder";

export const fetchPosts = () => {
  console.log("action creator called");
  //with redux thunk you receive dispatch and getState as arguments in this function
  //you can send actions through the dispatch and it will be sent through the middlewares and then reducers
  return async function (dispatch, getState) {
    const response = await jsonplaceholder.get("/posts");
    // return {
    //   type: "FETCH_POSTS",
    //   payload: promise,
    // };

    dispatch({ type: "FETCH_POSTS", payload: response.data });
  };
  //bad approach, this breaks the rules of redux - of an action creator
  //the bad approach is to try and use an async/await inside of your action creator - it won't work, at least not without thunk, as done above
};
