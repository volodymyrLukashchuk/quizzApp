import React, { useEffect, useState } from "react";
import Results from "../components/Results";
import Questions from "../components/Questions";
import Answers from "../components/Answer";

const Quiz = () => {
  const [answer, setAnswers] = useState([]);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const getScores = async () => {
      const scoreFromServer = await fetchScore();
      setFinalScore(scoreFromServer);
    };

    getScores();
  }, []);

  const fetchScore = async () => {
    const res = await fetch(
      "https://my-json-server.typicode.com/volodymyrLukashchuk/quizzApp/scores"
    );
    const data = await res.json();
    return data;
  };

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchQuestions();
      setAnswers(tasksFromServer);
    };
    if (!isInitialized) {
      getTasks().then(() => setIsInitialized(true));
    }

    getTasks();
  }, [isInitialized, setAnswers, setIsInitialized]);

  const fetchQuestions = async () => {
    const res = await fetch(
      "https://my-json-server.typicode.com/volodymyrLukashchuk/quizzApp/questions"
    );
    const data = await res.json();
    return data;
  };

  const [finalScore, setFinalScore] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [show, setShow] = useState(false);

  const currentResult = finalScore.find((r) => r.score === score);

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion >= answer.length) {
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

  if (!isInitialized) {
    return null;
  }
  return (
    <>
      <div>
        {currentQuestion === 5 ? (
          " "
        ) : (
          <Questions
            show={show}
            setShow={setShow}
            questions={answer}
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
              currentResult={currentResult}
            />
          ) : (
            <Answers
              currentQuestion={currentQuestion}
              questions={answer}
              onAdd={handleAnswer}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Quiz;
