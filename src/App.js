import React, { useState } from "react";
import Results from "./components/Results";
import Questions from "./components/Questions";
import Answers from "./components/Answer";
import Start from "./components/Start";

export default function App() {
  const questions = [
    {
      questionText: "Pick some food",
      answerOptions: [
        { answerText: "Caesar Salad", isCorrect: false },
        { answerText: "Burger", isCorrect: false },
        { answerText: "Chicken Sandwich", isCorrect: true },
        { answerText: "Nuggets", isCorrect: false },
      ],
    },
    {
      questionText: "Pick a healthy choice",
      answerOptions: [
        { answerText: "Fruit", isCorrect: false },
        { answerText: "Pasta Salad", isCorrect: true },
        { answerText: "Salad", isCorrect: false },
        { answerText: "Parfait", isCorrect: false },
      ],
    },
    {
      questionText: "Pick a movie snack",
      answerOptions: [
        { answerText: "M&M’s", isCorrect: true },
        { answerText: "Caramel Popcorn", isCorrect: false },
        { answerText: "Ice Cream", isCorrect: false },
        { answerText: "Traditional Popcorn", isCorrect: false },
      ],
    },
    {
      questionText: "Pick a fast-food spot",
      answerOptions: [
        { answerText: "Dunkin’ Donuts", isCorrect: false },
        { answerText: "Wendy’s", isCorrect: false },
        { answerText: "Burger King", isCorrect: false },
        { answerText: "McDonald’s", isCorrect: true },
      ],
    },
    {
      questionText: "Pick some more food",
      answerOptions: [
        { answerText: "Pasta", isCorrect: false },
        { answerText: "Chicken", isCorrect: false },
        { answerText: "Sandwich", isCorrect: false },
        { answerText: "Pizza", isCorrect: true },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [show, setShow] = useState(false);

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion >= questions.length) {
      setShowScore(true);
    }
    setCurrentQuestion(nextQuestion);
  };

  const startOver = () => {
    setShow(!show);

    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
  };

  return (
    <>
      {show ? (
        <div>
          {currentQuestion === 5 ? (
            " "
          ) : (
            <Questions
              show={show}
              setShow={setShow}
              questions={questions}
              currentQuestion={currentQuestion}
            />
          )}

          <div className="app">
            {showScore ? (
              <Results
                onStart={startOver}
                show={show}
                setShow={setShow}
                score={score}
              />
            ) : (
              <Answers
                currentQuestion={currentQuestion}
                questions={questions}
                onAdd={handleAnswer}
              />
            )}
          </div>
        </div>
      ) : (
        <Start show={show} setShow={setShow} />
      )}
    </>
  );
}
