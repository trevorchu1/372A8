function ComputerThrow({ choice, isAnimating }) {
  const displayImage = choice || "question-mark";
  const label = isAnimating ? "Computer is thinking..." : "Computer's throw";

  return (
    <section className="computer-throw">
      <h2>{label}</h2>
      <img
        src={`public/images/${displayImage}.png`}
        alt={choice || "unknown choice"}
      />
    </section>
  );
}

export default ComputerThrow;
