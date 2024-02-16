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
        // console.log(jsonData.[4][1].children);
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
    const hasChildren = jsonData[currentQuestionIndex].answers.find(
      (answer) => answer.children === responseKey
    );

    setUserResponses({
      ...userResponses,
      [questionKey]: { responseKey, responseTags, hasChildren },
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
                    {!answer.children ? ( // Check if answer has no children
                      <React.Fragment>
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
                      </React.Fragment>
                    ) : (
                      // Render children differently
                      <div key={answer.id} className="child-container">
                        {answer.key}{" "}
                        {answer.children.map((child) => (
                          <div key={child.id} className="child-answer">
                            <input
                              type="radio"
                              id={child.id}
                              name={jsonData[currentQuestionIndex].key}
                              value={child.key}
                              checked={
                                userResponses[
                                  jsonData[currentQuestionIndex].key
                                ]?.responseKey === child.key
                              }
                              onChange={handleResponseChange}
                            />
                            {child && child.text && (
                              <label htmlFor={child.id}>{child.text.en}</label>
                            )}
                          </div>
                        ))}
                      </div>
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
