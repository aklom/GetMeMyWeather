import React, { Component } from "react";
import { getWeatherData } from "./api";
import { ToggleSwitch } from "./ToggleSwitch";

import "./App.css";
import { Temperature } from "./Temperature";
import { WindSpeed } from "./WindSpeed";
import { stateInterface } from "./interfaces";

import { createStore } from "redux";
import { reducer } from "./reducers";
export const store = createStore(reducer);

class App extends Component<{}, stateInterface> {
  state = {
    temperature: 100,
    weather: "",
    windSpeed: 0,
    unit: "metric"
  };

  componentDidMount() {
    getWeatherData(store.getState().unit).then(
      ({ temperature, weather, wind_speed }) =>
        this.setState({
          temperature,
          weather,
          windSpeed: wind_speed
        })
    );
  }

  onUnitChange2 = (unit: string) => {
    getWeatherData(unit).then(data => {
      this.setState({
        temperature: data.temperature,
        weather: data.weather,
        windSpeed: data.wind_speed,
        unit: unit
      });
    });
  };

  render() {
    return (
      <div>
        <Temperature
          value={store.getState().temperature}
          unit={store.getState().unit === "metric" ? " °C" : " °F"}
        />
        <WindSpeed
          value={store.getState().windSpeed}
          unit={store.getState().unit === "metric" ? "km / h" : "mi / h"}
        />
        <div> {store.getState().weather}</div>
        <ToggleSwitch
          unit={store.getState().unit}
          onUnitChange={this.onUnitChange2}
        />
      </div>
    );
  }
}

export default App;
