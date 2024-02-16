import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./quizz.css";

function Quizz() {
  const [jsonData, setJsonData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userResponses, setUserResponses] = useState({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/question-answers.json");
        const data = await response.json();
        setJsonData(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching JSON data: ", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleNextQuestion = () => {
    if (userResponses[jsonData[currentQuestionIndex].key]) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      alert("Please select a response");
    }
  };

  const handleResponseChange = (e) => {
    const questionKey = jsonData[currentQuestionIndex].key;
    const responseKey = e.target.value;
    const responseTags = jsonData[currentQuestionIndex].answers.find(
      (answer) => answer.key === responseKey
    )?.tags;
    setUserResponses({
      ...userResponses,
      [questionKey]: { responseKey, responseTags },
    });
  };

  const handleSubmitQuiz = () => {
    const answeredQuestions = Object.keys(userResponses).length;
    if (answeredQuestions === jsonData.length) {
      setQuizSubmitted(true);
      navigate("/quiz-result", { state: { userResponses: userResponses } });
    } else {
      alert("Please answer all questions before submitting.");
    }
  };

  return (
    <div className="container">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {!quizSubmitted && currentQuestionIndex < jsonData.length && (
            <div className="question">
              <h2>
                {jsonData[currentQuestionIndex].key}:{" "}
                {jsonData[currentQuestionIndex].text.en}
              </h2>
              <form className="answers">
                {jsonData[currentQuestionIndex].answers.map((answer) => (
                  <div key={answer.id}>
                    <input
                      type="radio"
                      id={answer.id}
                      name={jsonData[currentQuestionIndex].key}
                      value={answer.key}
                      checked={
                        userResponses[jsonData[currentQuestionIndex].key]
                          ?.responseKey === answer.key
                      }
                      onChange={handleResponseChange}
                    />

                    {answer && answer.text && (
                      <label htmlFor={answer.id}>{answer.text.en}</label>
                    )}
                  </div>
                ))}
              </form>
              {currentQuestionIndex === jsonData.length - 1 ? (
                <button onClick={handleSubmitQuiz}>Submit Quiz</button>
              ) : (
                <button onClick={handleNextQuestion}>Next</button>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Quizz;
