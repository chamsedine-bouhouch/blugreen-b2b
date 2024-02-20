import React from "react";
import { useLocation } from "react-router-dom";

function QuizResult() {
  const location = useLocation();
  const { userResponses } = location.state;

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
                {response.responseKeys && response.responseKeys.length === 1 ? (
                  response.responseKeys[0]
                ) : (
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
                )}
                {response.textInputValue && (
                  <span>{response.textInputValue}</span>
                )}
              </td>
              <td>
                {response.responseTags && response.responseTags.length === 1 ? (
                  response.responseTags[0]
                ) : (
                  <table>
                    <tbody>
                      {response.responseTags &&
                        response.responseTags.map((tag, index) => (
                          <tr key={index}>
                            <td>{tag}</td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default QuizResult;
