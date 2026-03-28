import type { InvestmentFormInput } from "../util/investment";

const countries = [
  "Germany",
  "United Kingdom",
  "Ghana",
  "United States"
];

type InputsProps = {
  onChange: (inputIdentifier: keyof InvestmentFormInput, newValue: string) => void;
  userInput: InvestmentFormInput;
};

function handleNumberKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
  if (event.key === "e" || event.key === "E") {
    event.preventDefault();
  }
}

export default function Inputs({ onChange, userInput }: InputsProps) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            min={0}
            type="number"
            required
            value={userInput.initialInvestment}
            onKeyDown={handleNumberKeyDown}
            onChange={(event) =>
              onChange("initialInvestment", event.target.value)
            }
          />
        </p>

        <p>
          <label>Annual Investment</label>
          <input
            min={0}
            type="number"
            required
            value={userInput.annualInvestment}
            onKeyDown={handleNumberKeyDown}
            onChange={(event) =>
              onChange("annualInvestment", event.target.value)
            }
          />
        </p>
      </div>

      <div className="input-group">
        <p>
          <label>Growth Rate</label>
          <input
            min={0}
            type="number"
            required
            value={userInput.expectedReturn}
            onKeyDown={handleNumberKeyDown}
            onChange={(event) => onChange("expectedReturn", event.target.value)}
          />
        </p>

        <p>
          <label>Duration</label>
          <input
            min={0}
            type="number"
            required
            value={userInput.duration}
            onKeyDown={handleNumberKeyDown}
            onChange={(event) => onChange("duration", event.target.value)}
          />
        </p>
      </div>

      <div className="input-group">
        <p>
          <label>Country</label>
          <select
            required
            value={userInput.country}
            onChange={(event) => onChange("country", event.target.value)}
          >
            {countries.map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </select>
        </p>
      </div>
    </section>
  );
}
