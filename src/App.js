import "./App.css";
import React, { useState } from "react";
import Button from "./components/button";
import Header from "./components/header";
import Input from "./components/input";
import FormDataDisplay from "./components/DataDisplay";

const menu = ["Home", "Contact us", "Sign in", "Sign up"];

const form = [
  ["Name", "Last name", "Email", "Phone"],
  ["Address", "Age", "Institution"],
];

function App() {
  const [currentStep, setCurrentStep] = useState(0);
  const [inputData, setInputData] = useState({});
  const [formDataArray, setFormDataArray] = useState([]);

  const handleInputChange = (event, inputName) => {
    setInputData({
      ...inputData,
      [inputName]: event.target.value,
    });
  };

  const handleNextStep = () => {
    if (currentStep === 0) {
      setFormDataArray([...formDataArray, inputData]);
    } else {
      setFormDataArray((prevDataArray) => {
        const updatedDataArray = [...prevDataArray];
        updatedDataArray[updatedDataArray.length - 1] = {
          ...updatedDataArray,
          ...inputData,
        };
        return updatedDataArray;
      });
    }
    setCurrentStep(currentStep + 1);
    setInputData({});
  };

  const handleSubmit = () => {
    if (currentStep === 0) {
      setFormDataArray([...formDataArray, inputData]);
    } else {
      setFormDataArray((prevDataArray) => {
        const updatedDataArray = [...prevDataArray];
        updatedDataArray[updatedDataArray.length - 1] = {
          ...updatedDataArray[updatedDataArray.length - 1],
          ...inputData,
        };
        return updatedDataArray;
      });
    }
    setCurrentStep(form.length);
    setInputData({});
  };

  return (
    <div className="App">
      <Header menu={menu} />
      <Input
        form={form[currentStep]}
        inputData={inputData}
        onInputChange={handleInputChange}
      />
      {currentStep === form.length - 1 ? (
        <Button
          onClick={() => {
            handleSubmit();
            setCurrentStep(0);
          }}
          label="Sign In"
        />
      ) : (
        <Button onClick={handleNextStep} label="Next" />
      )}

      {formDataArray.length > 0 && (
        <FormDataDisplay formDataArray={formDataArray} />
      )}
    </div>
  );
}

export default App;
