import React, { Dispatch } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { stateInterface, Unit, ToggleSwitchInterface } from "./interfaces";
import { setUnit } from "./functions";

const Container = styled.div`
  position: absolute;
  width: 200px;
  height: 40px;
  font-size: 0.6em;
  letter-spacing: 0.2em;
`;

const Button = styled.button<{ selected: boolean }>`
  width: 50%;
  height: inherit;
  background: ${props => (props.selected ? "#00BAD0" : "white")};
  border: "white";
  outline: none;
`;

class ToggleSwitch_ extends React.Component<ToggleSwitchInterface> {
  render() {
    return (
      <Container>
        <Button
          selected={this.props.unit == Unit.METRIC}
          onClick={e => setUnit(Unit.METRIC, this.props.dispatch)}
        >
          Metric
        </Button>
        <Button
          selected={this.props.unit == Unit.IMPERIAL}
          onClick={e => setUnit(Unit.IMPERIAL, this.props.dispatch)}
        >
          Imperial
        </Button>
      </Container>
    );
  }
}

const mapStateToProps = (state: stateInterface) => {
  return {
    unit: state.unit
  };
};

export const ToggleSwitch = connect(mapStateToProps)(ToggleSwitch_);
