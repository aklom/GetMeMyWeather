import React, { Component } from "react";
import { stateInterface, Unit } from "./interfaces";
import { connect } from "react-redux";

class Temperature_ extends Component<{ temperature: number; unit: string }> {
  render() {
    return (
      <div>
        {this.props.temperature}{" "}
        {this.props.unit == Unit.METRIC ? " °C" : " °F"}
      </div>
    );
  }
}

function mapStateToProps(state: stateInterface) {
  return {
    unit: state.unit,
    temperature: state.temperature
  };
}

export const Temperature = connect(mapStateToProps)(Temperature_);
