// QuestionCard receives data through "props" — like function arguments
// Props are how parent components pass data DOWN to child components

function QuestionCard({ question, options, onAnswer, selectedAnswer, correctAnswer }) {
  return (
    <div className="question-card">
      <h2 className="question-text">{question}</h2>

      <div className="options-grid">
        {options.map((option, index) => {
          // Determine button styling based on state
          let btnClass = "option-btn";

          if (selectedAnswer) {
            // After answering: show green for correct, red for wrong
            if (option === correctAnswer) {
              btnClass += " correct";
            } else if (option === selectedAnswer && option !== correctAnswer) {
              btnClass += " wrong";
            } else {
              btnClass += " dimmed";
            }
          }

          return (
            <button
              key={index}
              className={btnClass}
              onClick={() => onAnswer(option)}
              disabled={selectedAnswer !== null}
            >
              {option}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default QuestionCard;
