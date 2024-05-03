import "../../App.css";
import React, { useState } from "react";
import Button from "../../components/button";
import Input from "../../components/input";
import FormDataDisplay from "../../components/DataDisplay";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const form = [
  [
    "Nom",
    "Prénom",
    "Mail",
    "Mot de passe",
    "Code de parrainage",
    "Numéro de téléphone",
  ],
];

function Register() {
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
    <div className="app-container">
      <Navbar />
      <div className="content">
        <Input
          form={form[currentStep]}
          inputData={inputData}
          onInputChange={handleInputChange}
        />
        {/* {currentStep === form.length - 1 ? (
          <Button
            onClick={() => {
              handleSubmit();
              setCurrentStep(0);
            }}
            label="Sign In"
          />
        ) : (
          <Button onClick={handleNextStep} label="Next" />
        )} */}

        {formDataArray.length > 0 && (
          <FormDataDisplay formDataArray={formDataArray} />
        )}
      </div>

      <Footer />
    </div>
  );
}

export default Register;
