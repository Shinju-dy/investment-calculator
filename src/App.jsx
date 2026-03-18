import { useState } from "react";
import Header from "./components/header.jsx";
import Inputs from "./components/inputs.jsx";
import Results from "./components/results.jsx";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 0,
    duration: 0,
  });

  const inputIsValid = userInput.duration >= 1;

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue,
      };
    });
  }

  return (
    <>
      <Header />
      <Inputs userInput={userInput} onChange={handleChange} />
      {!inputIsValid && (
        <p className="center">Please enter a duration greater than zero</p>
      )}
      {inputIsValid && <Results input={userInput} />}
    </>
  );
}

export default App;
