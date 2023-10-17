import { useState } from "react";
import "./Calculator.css";
import Button from "./Button";

const Calculator = ({calcImc}) => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");

  const clearForm = (e) => {
    e.preventDefault();
    setHeight("");
    setWeight("");
  };

  const validDigits = (text) => {
    return text.replace(/[^0-9,]/g, "");
  }

  const handleHeightChange = (e) => {
    const updatedValue = validDigits(e.target.value);
    
    setHeight(updatedValue);
  }

  const handleWeightChange = (e) => {
    const updatedValue = validDigits(e.target.value);
    
    setWeight(updatedValue);
  }

  return (
    <div className="Calculator">
      <h1>IMC Calculator</h1>
      <form id="imc-form">
        <div className="form-inputs">
          <div className="form-control">
            <label htmlFor="height">Height: </label>
            <input
              type="text"
              name="height"
              id="height"
              placeholder="Exemple 1,75"
              onChange={(e) => handleHeightChange(e)}
              value={height}
            />
          </div>
          <div className="form-control">
            <label htmlFor="weight">Weight: </label>
            <input
              type="text"
              name="weight"
              id="weight"
              placeholder="Exemple 70.5"
              onChange={(e) => handleWeightChange(e)}
              value={weight}
            />
          </div>
        </div>
        <div className="action-control">
          <Button id="calc-btn" text="Calculate" action={(e) => calcImc(e, height, weight)}/>
          <Button id="clear-btn" text="Clear" action={clearForm}/>
        </div>
      </form>
    </div>
  );
}

export default Calculator;
