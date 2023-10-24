import React from "react";
import TemperatureInput from "./TemperatureInput";

class Temperature extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scale: "c",
      temperature: 45,
    };
  }
  toCelsius = (fahrenheit) => {
    return ((fahrenheit - 32) * 5) / 9;
  };
  toFahrenheit = (celsius) => {
    return (celsius * 9) / 5 + 32;
  };

  onCelsiusChange = (value) => {
    let temperature = value === "" ? 0 : value;
    this.setState({ scale: "c", temperature: parseFloat(temperature) });
  };
  onFahrenheitChange = (value) => {
    let temperature = value === "" ? 0 : value;
    this.setState({ scale: "f", temperature: parseFloat(temperature) });
  };
  render() {
    const celsius =
      this.state.scale === "f"
        ? this.toCelsius(this.state.temperature)
        : this.state.temperature;
    const fahrenheit =
      this.state.scale === "c"
        ? this.toFahrenheit(this.state.temperature)
        : this.state.temperature;
    return (
      <div className="temperature-input">
        <TemperatureInput
          scale={this.state.scale}
          temperature={celsius}
          onTemperatureChange={this.onCelsiusChange}
        />
        <TemperatureInput
          scale={this.state.scale}
          temperature={fahrenheit}
          onTemperatureChange={this.onFahrenheitChange}
        />
      </div>
    );
  }
}

export default Temperature;
