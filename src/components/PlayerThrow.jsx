import "/src/styles/PlayerThrow.css";

const THROWS = ["rock", "paper", "scissors"];

function PlayerThrow({ selected, onSelect }) {
  return (
    <section className="player-throw">
      <h2>Select a Hand</h2>
      <div className="throw-options">
        {THROWS.map((throwName) => (
          <button
            key={throwName}
            type="button"
            className={
              "throw-button" +
              (selected === throwName ? " throw-button--selected" : "")
            }
            onClick={() => onSelect(throwName)}
          >
            <img
              src={`public/images/${throwName}.png`}
              alt={throwName}
            />
          </button>
        ))}
      </div>
    </section>
  );
}

export default PlayerThrow;
