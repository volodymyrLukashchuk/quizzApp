import React from "react";

const Answers = (props) => {
  return (
    <div className="answer-section">
      {props.questions[props.currentQuestion].answerOptions.map(
        (answerOption) => (
          <button
            className="btn1"
            onClick={() => props.onAdd(answerOption.isCorrect)}
            key={answerOption.id}
          >
            {answerOption.answerText}
            <img className="img1" src={answerOption.imgSrc} alt="food" />
          </button>
        )
      )}
    </div>
  );
};

export default Answers;
