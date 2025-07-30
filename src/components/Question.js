import Options from "./Options";

function Question({question, dispatch, answer}) {
  return (
    
    <div className="w-2/5 m-auto p-4 rounded-md bg-white shadow-lg border border-gray-100 border-solid">
   <h4 className="font-bold">{question.question}</h4>

   <Options question={question} dispatch={dispatch} answer={answer} />
   
    </div>
    
  );
}

export default Question;
