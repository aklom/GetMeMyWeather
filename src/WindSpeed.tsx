import React, { Component } from "react";
import { connect } from "react-redux";
import { stateInterface, Unit } from "./interfaces";

class WindSpeed_ extends Component<{ value: number; unit: string }> {
  render() {
    return (
      <div>
        {this.props.value} {this.props.unit == Unit.METRIC ? " km/h" : " mi/h"}
      </div>
    );
  }
}

const mapStateToProps = (state: stateInterface) => {
  return {
    value: state.windSpeed,
    unit: state.unit
  };
};

export const WindSpeed = connect(mapStateToProps)(WindSpeed_);
