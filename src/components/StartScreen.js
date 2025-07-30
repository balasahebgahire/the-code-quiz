function StartScreen({numQuestions, dispatch}) {
    return (
        <div className="w-full text-center">
            <h2 className="text-2xl font-bold">Welcome to The CodeQuiz!</h2>
            <h3 className="font-bold mt-4">{numQuestions} questions to  test your React Mastery</h3>
            <button onClick={() => dispatch({type: "start"})} className="bg-sky-400 py-2 px-5 rounded-full mt-4 text-white">Let's Start</button>
        </div>
    )
}

export default StartScreen
