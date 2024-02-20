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

  if (!jsonData) {
    return <p>Loading...</p>;
  }

  const totalQuestions = jsonData.length;

  const handleNextQuestion = () => {
    const currentQuestion = jsonData[currentQuestionIndex];
    const currentQuestionKey = currentQuestion.key;
    const selectedResponse = userResponses[currentQuestionKey];

    if (selectedResponse || currentQuestion.type === "text") {
      let nextQuestionIndex;

      if (
        currentQuestionIndex === 0 &&
        selectedResponse?.responseKeys.includes(jsonData[0].answers[0].key)
      ) {
        nextQuestionIndex = 4;
      } else {
        nextQuestionIndex = currentQuestionIndex + 1;
      }

      setCurrentQuestionIndex(nextQuestionIndex);
    } else {
      alert("Please select a response before moving to the next question");
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      let prevQuestionIndex = currentQuestionIndex - 1; // Default previous question index

      if (
        currentQuestionIndex === 4 &&
        userResponses[jsonData[0].key]?.responseKeys.includes(
          jsonData[0].answers[0].key
        )
      ) {
        prevQuestionIndex = 0;
      }

      setCurrentQuestionIndex(prevQuestionIndex);

      // Reset user response for the current question
      const prevQuestionKey = jsonData[currentQuestionIndex].key;
      setUserResponses((prevResponses) => {
        const updatedResponses = { ...prevResponses };
        delete updatedResponses[prevQuestionKey];
        return updatedResponses;
      });
    }
  };

  const handleResponseChange = (
    responseKey,
    responseTags,
    hasChildren,
    event,
    textInputValue
  ) => {
    if (event) {
      event.stopPropagation();
    }

    const questionKey = jsonData[currentQuestionIndex].key;

    let updatedResponseKeys = [];
    let updatedResponseTags = []; // Initialize array to store tags

    if (userResponses[questionKey]?.responseKeys) {
      updatedResponseKeys = [...userResponses[questionKey].responseKeys];
      updatedResponseTags = [...userResponses[questionKey].responseTags]; // Copy existing tags
    }

    const index = updatedResponseKeys.indexOf(responseKey);
    if (index !== -1) {
      updatedResponseKeys.splice(index, 1);
      updatedResponseTags.splice(index, 1); // Remove tag if removing response
    } else {
      updatedResponseKeys.push(responseKey);
      updatedResponseTags.push(responseTags); // Push tag if adding response
    }

    setUserResponses({
      ...userResponses,
      [questionKey]: {
        responseKeys: updatedResponseKeys,
        responseTags: updatedResponseTags, // Set updated tags array
        hasChildren,
      },
    });
  };

  const handleSubmitQuiz = () => {
    const lastQuestionIndex = jsonData.length - 1;
    const lastQuestionKey = jsonData[lastQuestionIndex].key;

    if (
      currentQuestionIndex === lastQuestionIndex &&
      userResponses[lastQuestionKey]?.responseKeys.length > 0
    ) {
      setQuizSubmitted(true);
      navigate("/quiz-result", { state: { userResponses: userResponses } });
    } else {
      alert("Please answer the last question before submitting.");
    }
  };

  const progress = (currentQuestionIndex / totalQuestions) * 100;

  return (
    <div className="container">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <div className="progress-bar-container">
            <div
              className="progress-bar"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          {!quizSubmitted && currentQuestionIndex < jsonData.length && (
            <div className="question">
              <h2>
                {jsonData[currentQuestionIndex].key}:{" "}
                {jsonData[currentQuestionIndex].text.en}
              </h2>

              <div className="answers">
                {jsonData[currentQuestionIndex].answers.map((answer) => (
                  <div
                    key={answer.id}
                    className={`card ${
                      userResponses[
                        jsonData[currentQuestionIndex].key
                      ]?.responseKeys.includes(answer.key)
                        ? "selected"
                        : ""
                    }`}
                    onClick={() =>
                      handleResponseChange(
                        answer.key,
                        answer.tags,
                        answer.children,
                        null, // Pass null for event parameter
                        null // Pass null for text input value initially
                      )
                    }
                  >
                    <div className="card-content">
                      <input
                        type="checkbox"
                        id={answer.id}
                        name={jsonData[currentQuestionIndex].key}
                        value={answer.key}
                        defaultChecked={false}
                        style={{ display: "none" }}
                      />
                      {answer && answer.text && (
                        <label htmlFor={answer.id}>{answer.text.en}</label>
                      )}
                    </div>
                    {answer.children && (
                      <div className="child-container">
                        {answer.children.map((child) => (
                          <div
                            key={child.id}
                            className={`card ${
                              userResponses[
                                jsonData[currentQuestionIndex].key
                              ]?.responseKeys.includes(child.key)
                                ? "selected"
                                : ""
                            }`}
                            onClick={(event) =>
                              handleResponseChange(
                                child.key,
                                child.tags,
                                child.children,
                                event,
                                null // Pass null for text input value initially
                              )
                            }
                          >
                            <div className="card-content">
                              <input
                                type="checkbox"
                                id={child.id}
                                name={jsonData[currentQuestionIndex].key}
                                value={child.key}
                                defaultChecked={false}
                                style={{ display: "none" }}
                              />
                              {child && child.text && (
                                <label
                                  htmlFor={child.id}
                                  className="card-label"
                                >
                                  {child.text.en}
                                </label>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}

                <div className="card">
                  <div className="card-content">
                    <input
                      type="text"
                      placeholder="Enter your response"
                      value={
                        userResponses[jsonData[currentQuestionIndex].key]
                          ?.textInputValue || ""
                      }
                      onChange={(e) =>
                        handleResponseChange(
                          null, //responseKey since it's a text input
                          null, //  responseTags since it's a text input
                          null, //  event parameter
                          null,
                          e.target.value // text input value
                        )
                      }
                      key={`text-input-${jsonData[currentQuestionIndex].key}`} // Unique key for text input
                    />
                  </div>
                </div>
              </div>

              <div>
                {currentQuestionIndex > 0 && (
                  <button onClick={handlePreviousQuestion}>Back</button>
                )}
                {currentQuestionIndex === jsonData.length - 1 ? (
                  <button onClick={handleSubmitQuiz}>Submit Quiz</button>
                ) : (
                  <button onClick={handleNextQuestion}>Next</button>
                )}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Quizz;
