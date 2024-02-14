import React from "react";
import "./DataDisplay.css";

function FormDataDisplay({ formDataArray }) {
  const input = formDataArray.reduce((acc, formData) => {
    return { ...acc, ...formData };
  }, {});

  const fieldsKeys = Object.keys(input);

  return (
    <div className="table-container">
      <h2>Form Data:</h2>
      <table>
        <thead>
          <tr>
            {fieldsKeys.map((key, index) => (
              <th key={index}>{key}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {formDataArray.map((data, index) => (
            <tr key={index}>
              {fieldsKeys.map((key, index) => (
                <td key={index}>{data[key]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default FormDataDisplay;
