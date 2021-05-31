import React from "react";

let count = 0;
const add = () => {
  count = count + 1;
  //   console.log(count);
};

class NewComp extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
    console.log(`constructor`);
  }
  componentDidMount() {
    console.log(`component did mount`);
  }
  add = () => {
    let { count } = this.state;
    this.setState({ count: ++this.state.count });
    console.log(`component updated`);
  };
  render() {
    console.log(`render`);

    return (
      <div style={{ textAlign: "center" }}>
        <h1>Hii {this.props.name}</h1>
        <h2>another example of props in a class component {this.props.id}</h2>
        <h1>Current count {this.state.count}</h1>
        <button onClick={this.add}>add 1</button>
      </div>
    );
  }
}

export default NewComp;
