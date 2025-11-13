import { useState, useEffect } from "react";
import PlayerThrow from "./components/PlayerThrow";
import ComputerThrow from "./components/ComputerThrow";
import ResultDisplay from "./components/ResultDisplay";
import ScoreBoard from "./components/Scoreboard"; 
import ResetButton from "./components/ResetButton"; 
import "./styles/App.css";

const THROWS = ["rock", "paper", "scissors"];

function App() {
  const [playerChoice, setPlayerChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState("");
  const [isAnimating, setIsAnimating] = useState(false);
  const [wins, setWins] = useState(0);
  const [losses, setLosses] = useState(0);
  const [ties, setTies] = useState(0);

  useEffect(() => {
    if (!isAnimating) return;

    let index = 0;
    const intervalId = setInterval(() => {
      setComputerChoice(THROWS[index % THROWS.length]);
      index++;
    }, 500);

    const timeoutId = setTimeout(() => {
      clearInterval(intervalId);
      const finalChoice = THROWS[Math.floor(Math.random() * THROWS.length)];
      setComputerChoice(finalChoice);
      setIsAnimating(false);

      if (playerChoice) {
        const outcome = getResult(playerChoice, finalChoice);
        setResult(outcome);
        if (outcome === "win") setWins((w) => w + 1);
        else if (outcome === "lose") setLosses((l) => l + 1);
        else if (outcome === "tie") setTies((t) => t + 1);
      }
    }, 3000);

    return () => {
      clearInterval(intervalId);
      clearTimeout(timeoutId);
    };
  }, [isAnimating, playerChoice]);

  const handlePlayerSelect = (choice) => {
    if (isAnimating) return; 
    setPlayerChoice(choice);
    setComputerChoice(null);
    setResult("");
    setIsAnimating(true);
  };

  const handleReset = () => {
    setPlayerChoice(null);
    setComputerChoice(null);
    setResult("");
    setWins(0);
    setLosses(0);
    setTies(0);
    setIsAnimating(false);
  };

  return (
    <main className="app">
      <h1>Rock, Paper, Scissors </h1>

      <PlayerThrow
        selected={playerChoice}
        onSelect={handlePlayerSelect}
      />

      <ComputerThrow
        choice={computerChoice}
        isAnimating={isAnimating}
      />

      <ResultDisplay result={result} />

      <ScoreBoard wins={wins} losses={losses} ties={ties} />

      <ResetButton onReset={handleReset} />
    </main>
  );
}

function getResult(player, computer) {
  if (player === computer) return "tie";
  if (
    (player === "rock" && computer === "scissors") ||
    (player === "paper" && computer === "rock") ||
    (player === "scissors" && computer === "paper")
  ) {
    return "win";
  }
  return "lose";
}

export default App;
