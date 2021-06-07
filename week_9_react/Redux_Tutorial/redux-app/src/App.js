import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./Actions/index";

//useSelector is required for accessing the state in the component
function App() {
  const counter = useSelector((state) => state.counterReducer);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Counter: {counter}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
}

export default App;
