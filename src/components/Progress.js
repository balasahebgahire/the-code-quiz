function Progress({index, numQuestions, points, maxPossiblePoints, answer}) {
  return (
    <header className="w-2/5 m-auto mb-4 ">
    <progress max={numQuestions} value={index + Number(answer !== null)} className="w-full" />

    <div className="flex items-center justify-between mt-2">
      <p>Question <strong>{index + 1}</strong> / {numQuestions}</p>
      <p><strong>{points}</strong> / {maxPossiblePoints}</p>
    </div>
    </header>
  );
}

export default Progress;
