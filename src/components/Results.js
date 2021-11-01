import React from "react";

const result = [
  { score: 0, message: "Please try again!" },
  {
    score: 1,
    message:
      "Outgoing - You’re a perfect mix of funny, chill, and intelligence!",
  },
  { score: 2, message: "Funny - You have a wicked sense of humour!" },
  { score: 3, message: "Shy - You’re shy and reserved!" },
  { score: 4, message: "Stern - You’re a very serious person!" },
  { score: 5, message: "Stern - You’re a very serious person!" },
];

const Results = (props) => {
  const currentResult = result.find((r) => r.score === props.score);

  return (
    <div className="score-section">
      {currentResult.message}
      <button
        onClick={props.onStart}
        className="btn2 waves-effect waves-light btn pulse"
      >
        Start Over
      </button>
    </div>
  );
};

export default Results;
