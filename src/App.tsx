import React, { Component, Dispatch } from "react";
import ToggleSwitch from "./ToggleSwitch";
import "./App.css";
import { Temperature } from "./Temperature";
import { WindSpeed } from "./WindSpeed";
import { stateInterface, Unit } from "./interfaces";
import { connect } from "react-redux";
import { setUnit } from "./functions";

class App extends Component<
  { weather: string; unit: string; setInitialState: (unit: string) => {} },
  stateInterface
> {
  componentDidMount() {
    this.props.setInitialState(Unit.IMPERIAL);
  }

  render() {
    return (
      <div>
        <Temperature />
        <WindSpeed />
        <div> {this.props.weather}</div>
        <ToggleSwitch
          changeUnit={() => {
            return new Promise(() => console.log("Heyyy"));
          }}
        />
      </div>
    );
  }
}

function mapStateToProps(state: stateInterface) {
  return {
    weather: state.weather,
    unit: state.unit
  };
}

const mapDispatchToProps = (dispatch: Dispatch<any>) => {
  return {
    setInitialState: (unit: string) => setUnit(unit, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
