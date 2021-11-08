import React from "react";
import { useHistory } from "react-router";

const Start = () => {
  const history = useHistory();

  return (
    <div className="start">
      <h3>
        Tell Us Your Favorite Foods And We’ll Guess What Type Of Personality You
        Have
      </h3>
      <button
        className="waves-effect waves-light btn pulse"
        onClick={() => history.push("/quiz")}
      >
        Start Quiz
      </button>
    </div>
  );
};

export default Start;
