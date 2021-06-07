import counterReducer from "./counter";
import loggedReducer from "./isLogged";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  //can name this whatever, just need to put the actual value you're importing as the key value of the property you've created/named
  counterReducer,
  loggedReducer,
});

export default rootReducer;
