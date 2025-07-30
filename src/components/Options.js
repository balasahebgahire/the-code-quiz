
function Options({question, dispatch, answer}) {

    const hasAnswered = answer !== null;

  return (
    <div className="w-full flex flex-col mt-2">
    {question.options.map((option, index) => <button onClick={() => dispatch({type: "newAnswer", payload: index})} className={`btnNormal ${index === answer ? 'btnActive' : ''} ${hasAnswered ? index === question.correctOption ? 'btnActive' : 'btnWrong' : ''}`} key={option} disabled={hasAnswered}>{option}</button>)}
   </div>
  );
}

export default Options;
