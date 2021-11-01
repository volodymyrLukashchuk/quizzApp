import React from "react";

const Start = (props) => {
  return (
    <div className="start">
      <h3>
        Tell Us Your Favorite Foods And We’ll Guess What Type Of Personality You
        Have
      </h3>
      <button
        className="waves-effect waves-light btn pulse"
        onClick={() => props.setShow(!props.show)}
      >
        Start Quiz
      </button>
    </div>
  );
};

export default Start;
