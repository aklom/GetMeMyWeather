import React, { Component, Dispatch } from "react";
import "./App.css";
import { Temperature } from "./Temperature";
import { WindSpeed } from "./WindSpeed";
import { stateInterface, Unit, AppInterface } from "./interfaces";
import { connect } from "react-redux";
import { setUnit } from "./functions";
import { ToggleSwitch } from "./ToggleSwitch";

class App extends Component<AppInterface> {
  componentDidMount() {
    setUnit(Unit.METRIC, this.props.dispatch);
  }

  render() {
    return (
      <div>
        <Temperature />
        <WindSpeed />
        <div> {this.props.weather}</div>
        <ToggleSwitch />
      </div>
    );
  }
}

function mapStateToProps(state: AppInterface) {
  return {
    weather: state.weather,
    unit: state.unit
  };
}

export default connect(mapStateToProps)(App);
