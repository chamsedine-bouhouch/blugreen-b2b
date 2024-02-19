// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import "./quizz.css";

// function Quizz() {
//   const [jsonData, setJsonData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const [userResponses, setUserResponses] = useState({});
//   const [quizSubmitted, setQuizSubmitted] = useState(false);
//   const [selectedResponses, setSelectedResponses] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch("/question-answers.json");
//         const data = await response.json();
//         setJsonData(data);
//         setLoading(false);
//       } catch (error) {
//         console.error("Error fetching JSON data: ", error);
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   const handleNextQuestion = () => {
//     if (selectedResponses.length > 0) {
//       setUserResponses({
//         ...userResponses,
//         [jsonData[currentQuestionIndex].key]: selectedResponses,
//       });
//       setSelectedResponses([]);

//       if (currentQuestionIndex === jsonData.length) {
//         handleSubmitQuiz();
//       } else {
//         setCurrentQuestionIndex(currentQuestionIndex + 1);
//       }
//     } else {
//       alert("Please select at least one response");
//     }
//   };

//   const handleResponseChange = (event, e) => {
//     const questionKey = jsonData[currentQuestionIndex].key;
//     const responseKey = e.target.value;
//     const responseTags = jsonData[currentQuestionIndex].answers.find(
//       (answer) => answer.key === responseKey
//     )?.tags;
//     if (event) {
//       event.stopPropagation();
//     }

//     const updatedResponses = selectedResponses.includes(responseKey)
//       ? selectedResponses.filter((key) => key !== responseKey)
//       : [...selectedResponses, responseKey];
//     setUserResponses({
//       ...userResponses,
//       [questionKey]: { responseKey, responseTags },
//     });
//     setSelectedResponses(updatedResponses);
//   };

//   const handleSubmitQuiz = () => {
//     const answeredQuestions = Object.keys(selectedResponses).length;

//     console.log("Answered Questions:", answeredQuestions);
//     console.log("Total Questions:", jsonData.length);
//     console.log("User Responses:", userResponses);

//     if (answeredQuestions === jsonData.length) {
//       console.log("All questions answered. Submitting quiz...");
//       setQuizSubmitted(true);
//       navigate("/quiz-result", { state: { userResponses: userResponses } });
//     } else {
//       console.log("Not all questions answered.");
//       alert("Please answer all questions before submitting.");
//     }
//   };

//   return (
//     <div className="container">
//       {loading ? (
//         <p>Loading...</p>
//       ) : (
//         <div>
//           {!quizSubmitted && currentQuestionIndex < jsonData.length + 1 && (
//             <div className="question">
//               <h2>
//                 {jsonData[currentQuestionIndex].key}:{" "}
//                 {jsonData[currentQuestionIndex].text.en}
//               </h2>
//               <div className="answers">
//                 {jsonData[currentQuestionIndex].answers.map((answer) => (
//                   <div
//                     key={answer.id}
//                     className={`card ${
//                       selectedResponses.includes(answer.key) ? "selected" : ""
//                     }`}
//                     onClick={() =>
//                       handleResponseChange(
//                         answer.key,
//                         answer.tags,
//                         answer.children
//                       )
//                     }
//                   >
//                     <div className="card-content">
//                       <input
//                         type="checkbox"
//                         id={answer.id}
//                         name={jsonData[currentQuestionIndex].key}
//                         value={answer.key}
//                         checked={selectedResponses.includes(answer.key)}
//                         onChange={() => {}}
//                         style={{ display: "none" }}
//                       />
//                       {answer && answer.text && (
//                         <label htmlFor={answer.id}>{answer.text.en}</label>
//                       )}
//                     </div>
//                     {answer.children && (
//                       <div className="child-container">
//                         {answer.children.map((child) => (
//                           <div
//                             key={child.id}
//                             className={`card ${
//                               selectedResponses.includes(child.key)
//                                 ? "selected"
//                                 : ""
//                             }`}
//                             onClick={(event) =>
//                               handleResponseChange(
//                                 child.key,
//                                 child.tags,
//                                 child.children,
//                                 event
//                               )
//                             }
//                           >
//                             <div className="card-content">
//                               <input
//                                 type="checkbox"
//                                 id={child.id}
//                                 name={jsonData[currentQuestionIndex].key}
//                                 value={child.key}
//                                 checked={selectedResponses.includes(child.key)}
//                                 onChange={() => {}}
//                                 style={{ display: "none" }}
//                               />
//                               {child && child.text && (
//                                 <label
//                                   htmlFor={child.id}
//                                   className="card-label"
//                                 >
//                                   {child.text.en}
//                                 </label>
//                               )}
//                             </div>
//                           </div>
//                         ))}
//                       </div>
//                     )}
//                   </div>
//                 ))}
//               </div>

//               {currentQuestionIndex === jsonData.length - 1 ? (
//                 <button onClick={handleSubmitQuiz}>Submit Quiz</button>
//               ) : (
//                 <button onClick={handleNextQuestion}>Next</button>
//               )}
//             </div>
//           )}
//         </div>
//       )}
//     </div>
//   );
// }

// export default Quizz;
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./quizz.css";

function Quizz() {
  const [jsonData, setJsonData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userResponses, setUserResponses] = useState({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
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

  const handleResponseChange = (
    responseKey,
    responseTags,
    hasChildren,
    event
  ) => {
    if (event) {
      event.stopPropagation(); // Stop event propagation
    }

    const questionKey = jsonData[currentQuestionIndex].key;
    setUserResponses({
      ...userResponses,
      [questionKey]: { responseKey, responseTags, hasChildren },
    });
    setSelectedCard(responseKey);
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
              <div className="answers">
                {jsonData[currentQuestionIndex].answers.map((answer) => (
                  <div
                    key={answer.id}
                    className={`card ${
                      selectedCard === answer.key ? "selected" : ""
                    }`}
                    onClick={() =>
                      handleResponseChange(
                        answer.key,
                        answer.tags,
                        answer.children
                      )
                    }
                  >
                    <div className="card-content">
                      <input
                        type="radio"
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
                        {answer.key}{" "}
                        {answer.children.map((child) => (
                          <div
                            key={child.id}
                            className={`card ${
                              selectedCard === child.key ? "selected" : ""
                            }`}
                            onClick={(event) =>
                              handleResponseChange(
                                child.key,
                                child.tags,
                                child.children,
                                event
                              )
                            }
                          >
                            <div className="card-content">
                              <input
                                type="radio"
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
              </div>

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
