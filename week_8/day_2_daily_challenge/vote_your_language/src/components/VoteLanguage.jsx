import React from "react";

class VoteLanguage extends React.Component {
  constructor() {
    super();
    this.state = {
      count1: 0,
      count2: 0,
      count3: 0,
      count4: 0,
    };
  }
  incrementCount = () => {
    this.setState({
      count1: this.state.count1 + 1,
    });
  };
  incrementCount2 = () => {
    this.setState({
      count2: this.state.count2 + 1,
    });
  };
  incrementCount3 = () => {
    this.setState({
      count3: this.state.count3 + 1,
    });
  };
  incrementCount4 = () => {
    this.setState({
      count4: this.state.count4 + 1,
    });
  };
  render() {
    let { count1, count2, count3, count4 } = this.state;
    return (
      <div className="LanguageVote">
        <div>
          {count1} {this.props.languagename}{" "}
          <div>
            <button onClick={this.incrementCount}>click me!</button>
          </div>
        </div>
        <div>
          {count2} {this.props.languagename2}{" "}
          <div>
            <button onClick={this.incrementCount2}>click me!</button>
          </div>
        </div>
        <div>
          {count3} {this.props.languagename3}{" "}
          <div>
            <button onClick={this.incrementCount3}>click me!</button>
          </div>
        </div>
        <div>
          {count4} {this.props.languagename4}{" "}
          <div>
            <button onClick={this.incrementCount4}>click me!</button>
          </div>
        </div>
      </div>
    );
  }
}

export default VoteLanguage;
