import { useState } from "react";
import Header from "./components/header";
import Inputs from "./components/inputs";
import Results from "./components/results";
import type { InvestmentFormInput, InvestmentInput } from "./util/investment";

function App() {
  const [userInput, setUserInput] = useState<InvestmentFormInput>({
    initialInvestment: "0",
    annualInvestment: "0",
    expectedReturn: "0",
    duration: "0",
    country: "United States",
  });

  const investmentInput: InvestmentInput = {
    initialInvestment: +userInput.initialInvestment,
    annualInvestment: +userInput.annualInvestment,
    expectedReturn: +userInput.expectedReturn,
    duration: +userInput.duration,
    country: userInput.country,
  };

  const inputIsValid = investmentInput.duration >= 1;

  function handleChange(
    inputIdentifier: keyof InvestmentFormInput,
    newValue: string
  ) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: newValue,
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
      {inputIsValid && <Results input={investmentInput} />}
    </>
  );
}

export default App;
