import { useSelector, useDispatch } from "react-redux";
import { updateInput, calculateResult } from "../store/calculatorSlice";

function Calculator() {
  const { weight, height, result } = useSelector((state) => state.calculator);
  const dispatch = useDispatch();

  const handleInputChange = (field, value) => {
    dispatch(updateInput({ field, value }));
  };

  const handleCalculate = () => {
    dispatch(calculateResult());
  };

  return (
    <div className="calculator">
      <h2>BMI Calculator</h2>
      <div className="inputs">
        <div>
          <label>Weight (kg):</label>
          <input
            type="number"
            value={weight}
            onChange={(e) => handleInputChange("weight", e.target.value)}
          />
        </div>
        <div>
          <label>Height (cm):</label>
          <input
            type="number"
            value={height}
            onChange={(e) => handleInputChange("height", e.target.value)}
          />
        </div>
      </div>
      <button onClick={handleCalculate}>Calculate BMI</button>
      {result && (
        <div className="result">
          <h3>Your BMI: {result}</h3>
          <p>
            {result < 18.5
              ? "Underweight"
              : result < 25
              ? "Normal weight"
              : result < 30
              ? "Overweight"
              : "Obese"}
          </p>
        </div>
      )}
    </div>
  );
}

export default Calculator;
