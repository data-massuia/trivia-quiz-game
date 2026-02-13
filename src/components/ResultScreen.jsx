function ResultScreen({ score, total, onRestart }) {
  const percentage = Math.round((score / total) * 100);

  // Different messages based on performance
  let message, emoji;
  if (percentage === 100) {
    message = "Perfect score! You're a coding genius!";
    emoji = "🏆";
  } else if (percentage >= 70) {
    message = "Great job! You really know your stuff!";
    emoji = "🌟";
  } else if (percentage >= 50) {
    message = "Not bad! Keep learning and you'll ace it!";
    emoji = "💪";
  } else {
    message = "Keep studying! You'll get there!";
    emoji = "📚";
  }

  return (
    <div className="result-screen">
      <div className="result-emoji">{emoji}</div>
      <h2>Quiz Complete!</h2>
      <div className="result-score">
        <span className="score-number">{score}</span>
        <span className="score-divider">/</span>
        <span className="score-total">{total}</span>
      </div>
      <p className="result-percentage">{percentage}%</p>
      <p className="result-message">{message}</p>
      <button className="restart-btn" onClick={onRestart}>
        Play Again
      </button>
    </div>
  );
}

export default ResultScreen;
