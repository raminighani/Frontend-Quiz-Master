function Options({ questions, dispatch, answer }) {
  return (
    <div className="options">
      {questions.options.map((item, index) => (
        <button
          key={item}
          className={`btn btn-option ${index === answer ? "answer" : ""} ${
            answer !== null
              ? index === questions.correctOption
                ? "correct"
                : "wrong"
              : ""
          }`}
          onClick={() => dispatch({ type: "newAnswer", payload: index })}
          disabled={answer !== null}
        >
          <p>{item}</p>
        </button>
      ))}
    </div>
  );
}

export default Options;
