
function FinishScreen({points, maxPossiblePoints, dispatch}) {

    const percentage = (points / maxPossiblePoints) * 100;

  return (
    <div className="w-2/5 m-auto text-center">
    <p className="w-full">
      You scored <strong>{points}</strong> out of {maxPossiblePoints} ({Math.ceil(percentage)}%)
    </p>
    <button onClick={() => dispatch({type: "restart"})} className="bg-sky-400 py-2 px-5 rounded-full mt-4 text-white">Restart Quiz</button>
    </div>
  );
}

export default FinishScreen;
