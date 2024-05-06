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
      let prevQuestionIndex = currentQuestionIndex - 1;

      if (
        currentQuestionIndex === 4 &&
        userResponses[jsonData[0].key]?.responseKeys.includes(
          jsonData[0].answers[0].key
        )
      ) {
        prevQuestionIndex = 0;
      }

      setCurrentQuestionIndex(prevQuestionIndex);

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
    // Prevent event propagation if this is called within a click event
    if (event) {
      event.stopPropagation();
    }

    const currentQuestion = jsonData[currentQuestionIndex];
    const questionKey = currentQuestion.key;

    // Update logic for handling responses, including text input
    let updatedUserResponses = { ...userResponses };

    if (currentQuestion.type === "TEXT_INPUT") {
      updatedUserResponses[questionKey] = {
        ...updatedUserResponses[questionKey],
        textInputValue: textInputValue,
        responseKeys: textInputValue ? [questionKey] : [], // Mark as answered if text input is not empty
        responseTags: textInputValue ? [responseTags] : [],
      };
    } else {
      // For non-text input questions, toggle selections
      let updatedResponseKeys =
        updatedUserResponses[questionKey]?.responseKeys || [];
      let updatedResponseTags =
        updatedUserResponses[questionKey]?.responseTags || [];
      const index = updatedResponseKeys.indexOf(responseKey);

      if (index !== -1) {
        // Response is already selected, unselect it
        updatedResponseKeys.splice(index, 1);
        updatedResponseTags.splice(index, 1);
      } else {
        // Check if the number of allowed answers has been reached
        if (
          updatedResponseKeys.length < currentQuestion.numberOfAllowedAnswers
        ) {
          // Response is not selected, select it
          updatedResponseKeys.push(responseKey);
          updatedResponseTags.push(responseTags);
        } else {
          // Alert the user that they have reached the maximum allowed answers
          alert(
            `You can only select ${currentQuestion.numberOfAllowedAnswers} answers for this question.`
          );
          return; // Return here to prevent further execution
        }
      }

      updatedUserResponses[questionKey] = {
        ...updatedUserResponses[questionKey],
        responseKeys: updatedResponseKeys,
        responseTags: updatedResponseTags,
        hasChildren,
      };
    }

    setUserResponses(updatedUserResponses);
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
                {jsonData[currentQuestionIndex].answers.map(
                  (answer) =>
                    // Render only if the answer has no children
                    !answer.children && (
                      <div
                        key={answer.id}
                        className={`card ${
                          userResponses[
                            jsonData[currentQuestionIndex].key
                          ]?.responseKeys?.includes(answer.key)
                            ? "selected"
                            : ""
                        }`}
                        onClick={() =>
                          handleResponseChange(
                            answer.key,
                            answer.tags,
                            !!answer.children,
                            null,
                            null
                          )
                        }
                      >
                        <div className="card-content">
                          <input
                            type="checkbox"
                            id={answer.id}
                            name={jsonData[currentQuestionIndex].key}
                            value={answer.key}
                            style={{ display: "none" }}
                          />
                          {answer.text && (
                            <>
                              <label htmlFor={answer.id}>
                                {answer.text.en}
                              </label>
                              {answer.image && (
                                <img src={answer.image} alt={answer.text.en} />
                              )}
                            </>
                          )}
                        </div>
                      </div>
                    )
                )}
                {jsonData[currentQuestionIndex].answers.map(
                  (answer) =>
                    // Render only if the answer has children
                    answer.children && (
                      <div className="child-container">
                        {answer.name}
                        {answer.children.map((child) => (
                          <div
                            key={child.id}
                            className={`card ${
                              userResponses[
                                jsonData[currentQuestionIndex].key
                              ]?.responseKeys?.includes(child.key)
                                ? "selected"
                                : ""
                            }`}
                            onClick={(event) =>
                              handleResponseChange(
                                child.key,
                                child.tags,
                                !!child.children,
                                event,
                                null
                              )
                            }
                          >
                            <div className="card-content">
                              <input
                                type="checkbox"
                                id={child.id}
                                name={jsonData[currentQuestionIndex].key}
                                value={child.key}
                                style={{ display: "none" }}
                              />
                              <div className="card-content">
                                <label htmlFor={child.id}>
                                  {child.text.en}
                                </label>
                                {child.image && (
                                  <img src={child.image} alt={child.text.en} />
                                )}
                              </div>
                            </div>
                          </div>
                        ))}{" "}
                      </div>
                    )
                )}

                {jsonData[currentQuestionIndex].type === "TEXT_INPUT" && (
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
                          jsonData[currentQuestionIndex].key,
                          [],
                          false,
                          null,
                          e.target.value
                        )
                      }
                    />
                  </div>
                )}
              </div>

              <div className="quizz">
                {currentQuestionIndex > 0 && (
                  <button onClick={handlePreviousQuestion}>Back</button>
                )}
                {currentQuestionIndex < jsonData.length - 1 ? (
                  <button onClick={handleNextQuestion}>Next</button>
                ) : (
                  <button onClick={handleSubmitQuiz}>Submit Quiz</button>
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
