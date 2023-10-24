import React from "react";

const scaleNames = {
  c: "Celsius",
  f: "Fahrenheit",
};
function TemperatureInput({ scale, temperature, onTemperatureChange }) {
  const onChangeHandle = (event) => {
    onTemperatureChange(event.target.value);
  };
  return (
    <fieldset className="label">
      <label>Enter the temperature in {scaleNames[scale]}</label>
      <div className="input">
        <input type="text" value={temperature} onChange={onChangeHandle} />
      </div>
    </fieldset>
  );
}

export default TemperatureInput;
