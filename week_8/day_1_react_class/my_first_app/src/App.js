import "./App.css";
import Card from "./Card";

function App() {
  return (
    <div className="myFlex">
      <div>
        <Card name={"Gavin"} email={"gavin@gmail.com"} id={"1"} />
      </div>
      <div>
        <Card name={"Jetim"} email={"jetim@gmail.com"} id={"2"} />
      </div>
    </div>
  );
}

export default App;
