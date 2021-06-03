import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";

if (module.hot) {
  module.hot.accept();
}

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail
        author="Sam"
        timeAgo="Today at 4:45pm"
        comment="props"
        imageURL={faker.image.image()}
      />
      <CommentDetail
        author="Alex"
        timeAgo="Today at 5:00pm"
        comment="yay"
        imageURL={faker.image.image()}
      />
      <CommentDetail
        imageURL={faker.image.image()}
        author="Jane"
        timeAgo="Yesterday at 4:40pm"
        comment="awesome"
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
