import React from "react";

const Questions = (props) => {
  return (
    <div className="question-count">
      <span>Question {props.currentQuestion + 1}</span>/{props.questions.length}
      <div className="question-section">
        <div className="question-text">
          {props.questions[props.currentQuestion].questionText}
        </div>
      </div>
    </div>
  );
};

export default Questions;
