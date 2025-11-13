import "/src/styles/ResultDisplay.css";

function ResultDisplay({ result }) {
  let message = "";
  if (result === "win") message = "You win!";
  else if (result === "lose") message = "You lose!";
  else if (result === "tie") message = "It's a tie!";

  return (
    <section className="result-display" aria-live="polite">
      <p>{message || "Make your move to start a round."}</p>
    </section>
  );
}

export default ResultDisplay;
