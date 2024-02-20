import React from "react";
import { useLocation } from "react-router-dom";

function QuizResult() {
  const location = useLocation(); // Get state from previous route
  const { userResponses } = location.state; // Get user responses from state { state: { userResponses: userResponses } }
  console.log(userResponses);

  return (
    <div className="container">
      <h1>Quiz Result</h1>
      <table>
        <thead>
          <tr>
            <th>Question</th>
            <th>Response</th>
            <th>Tags</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(userResponses).map(([questionKey, response]) => (
            <tr key={questionKey}>
              <td>{questionKey}</td>
              <td>
                <table>
                  <tbody>
                    {response.responseKeys &&
                      response.responseKeys.map((key, index) => (
                        <tr key={index}>
                          <td>{key}</td>
                        </tr>
                      ))}
                  </tbody>
                </table>
                {response.textInputValue && (
                  <span>{response.textInputValue}</span>
                )}
              </td>
              <td>
                {response.responseTags &&
                  response.responseTags.map((tag, index) => (
                    <span key={index}>{tag}</span>
                  ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default QuizResult;
