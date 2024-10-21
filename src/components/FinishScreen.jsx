function FinishScreen({ points, maxPoints, highscore, dispatch }) {
  const percentage = (points / maxPoints) * 100;
  let emoji;
  if (percentage === 100) emoji = "🥇";
  if (percentage >= 80 && percentage < 100) emoji = "🎉";
  if (percentage >= 50 && percentage < 80) emoji = "🙃";
  if (percentage >= 0 && percentage < 50) emoji = "🤨";
  if (percentage === 0) emoji = "🤦‍♂️";
  return (
    <>
      <p className="result">
        <span>{emoji}</span>you scored <strong>{points}</strong> out of{" "}
        {maxPoints} ( {Math.ceil(percentage)}% )
      </p>
      <p className="highscore">(high : {highscore})</p>
      <button className="btn " onClick={() => dispatch({ type: "restart" })}>
        restart
      </button>
    </>
  );
}

export default FinishScreen;
