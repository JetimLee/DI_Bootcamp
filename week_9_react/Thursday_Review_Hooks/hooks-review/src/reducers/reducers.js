import { INIT_MOVIE, MOVIE_SELECTED } from "../actions/actions";
let initState = {
  movies: [],
  details: "",
};

export const reducer = (state = initState, action = {}) => {
  switch (action.type) {
    case INIT_MOVIE:
      return { ...state, movies: action.payload };

      break;
    case MOVIE_SELECTED:
      return { ...state, details: action.payload };
      break;
    default:
      return {
        ...state,
      };
  }
};

//combined reducers
