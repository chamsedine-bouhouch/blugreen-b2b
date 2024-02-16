import React from "react";
import { useLocation } from "react-router-dom";

function QuizResult() {
  const location = useLocation(); // Get state from previous route
  const { userResponses } = location.state; // Get user responses from state { state: { userResponses: userResponses } }

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
          {Object.entries(userResponses).map(
            ([questionKey, { responseKey, responseTags }]) => (
              <tr key={questionKey}>
                <td>{questionKey}</td>
                <td>{responseKey}</td>
                <td>{responseTags}</td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
}

export default QuizResult;
