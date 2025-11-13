import "/src/styles/ResetButton.css";

function ResetButton({ onReset }) {
  return (
    <section className="reset-section">
      <button type="button" onClick={onReset}>
        Reset Game
      </button>
    </section>
  );
}

export default ResetButton;
