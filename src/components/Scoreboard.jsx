import "/src/styles/Scoreboard.css";

function ScoreBoard({ wins, losses, ties }) {
  return (
    <section className="score-board">
      <h2>Score</h2>
      <ul>
        <li>Wins: {wins}</li>
        <li>Losses: {losses}</li>
        <li>Ties: {ties}</li>
      </ul>
    </section>
  );
}

export default ScoreBoard;
