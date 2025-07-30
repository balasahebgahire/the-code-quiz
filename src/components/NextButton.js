function NextButton({dispatch, answer, index, numQuestions}) {
    if(answer === null) return null;

  if(index < numQuestions - 1) return (
    <div className="w-2/5 m-auto text-center">
    <button onClick={() => dispatch({type: "nextQuestion"})} className="bg-sky-400 py-2 px-5 rounded-full mt-4 text-white">Next</button>
    </div>
  );


  if(index === numQuestions - 1) return (
    <div className="w-2/5 m-auto text-center">
    <button onClick={() => dispatch({type: "finish"})} className="bg-sky-400 py-2 px-5 rounded-full mt-4 text-white">Finish</button>
    </div>
  );
}

export default NextButton;
