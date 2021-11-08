import React from "react";
import { useHistory } from "react-router";

const Results = (props) => {
  const history = useHistory();

  return (
    <div className="score-section">
      {props.currentResult.message}
      <button
        onClick={() => history.push("/welcome")}
        className="btn2 waves-effect waves-light btn pulse"
      >
        Start Over
      </button>
    </div>
  );
};

export default Results;
