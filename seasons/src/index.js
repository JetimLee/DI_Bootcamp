import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: null,
    };
  }
  render() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => console.log(position),
      (error) => console.log(error)
    );
    return <div>{this.state.lat}</div>;
  }
}

// const App = () => {
//   window.navigator.geolocation.getCurrentPosition(
//     (position) => console.log(position),
//     (err) => console.log(err)
//     //called success callback because this is the one that works when everything goes according to plan
//     //second one is called the error callback because it catches the error
//   );
//   return <div>Hi there!</div>;
// };

ReactDOM.render(<App />, document.querySelector("#root"));
