import React from "react";
import "semantic-ui-css/semantic.min.css";

function ApprovalCard() {
  return (
    <div className="ui card">
      <div className="content">are you sure?</div>
      <div className="extra content">
        <div className="ui two buttons">
          <div className="ui basic green button">Approve</div>
          <div className="ui basic red button">Reject</div>
        </div>
      </div>
    </div>
  );
}

export default ApprovalCard;
