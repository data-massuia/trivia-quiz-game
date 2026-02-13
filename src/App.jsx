import { useState } from "react";
import questions from "./data/questions";
import QuestionCard from "./components/QuestionCard";
import ProgressBar from "./components/ProgressBar";
import ResultScreen from "./components/ResultScreen";
import "./App.css";

function App() {
  // ---- STATE ----
  // useState returns [currentValue, functionToUpdateIt]
  // When you call the update function, React RE-RENDERS the component
  // (redraws the UI to reflect the new data)

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);

  // ---- DERIVED VALUES ----
  // These are calculated from state — no need for separate useState
  const question = questions[currentQuestion];
  const isLastQuestion = currentQuestion === questions.length - 1;

  // ---- EVENT HANDLERS ----

  function handleAnswer(option) {
    // Record the selected answer (triggers re-render to show correct/wrong)
    setSelectedAnswer(option);

    // Update score if correct
    if (option === question.answer) {
      setScore(score + 1);
    }

    // After a short delay, move to next question or show results
    setTimeout(() => {
      if (isLastQuestion) {
        setShowResult(true);
      } else {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null); // Reset for next question
      }
    }, 1200);
  }

  function handleRestart() {
    setCurrentQuestion(0);
    setScore(0);
    setSelectedAnswer(null);
    setShowResult(false);
  }

  // ---- RENDER ----
  // This is what gets displayed. React calls this function every time
  // state changes, and efficiently updates only what changed in the DOM.

  return (
    <div className="app">
      <h1 className="title">Trivia Quest</h1>

      {showResult ? (
        // If quiz is done, show the result screen
        <ResultScreen
          score={score}
          total={questions.length}
          onRestart={handleRestart}
        />
      ) : (
        // Otherwise show the current question
        <>
          <ProgressBar
            current={currentQuestion + 1}
            total={questions.length}
            score={score}
          />
          <QuestionCard
            question={question.question}
            options={question.options}
            correctAnswer={question.answer}
            selectedAnswer={selectedAnswer}
            onAnswer={handleAnswer}
          />
        </>
      )}
    </div>
  );
}

export default App;
