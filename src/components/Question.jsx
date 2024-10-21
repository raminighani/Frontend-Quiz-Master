import Options from "./Options";

function Question({ questions, dispatch, answer }) {
  return (
    <div>
      <h4>{questions.question}</h4>

      <Options dispatch={dispatch} questions={questions} answer={answer} />
    </div>
  );
}

export default Question;
