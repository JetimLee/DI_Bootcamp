import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    //this is the only time we do a direct assignment to this.state, any other time you MUST use this.setState
    this.state = {
      lat: null,
      errorMessage: "",
    };
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        //must call setState and pass in the state stuff you want to update by putting the object inside of the brackets
        this.setState({ lat: position.coords.latitude });
      },
      (error) => {
        this.setState({ errorMessage: error.message });
      }
    );
  }
  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>{this.state.errorMessage.toString()}</div>;
    }
    if (!this.state.errorMessage && this.state.lat) {
      return <div>{this.state.lat}</div>;
    }
    return <div>loading</div>;
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
