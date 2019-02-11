import React, { Dispatch } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { stateInterface, promiseInterface, Unit } from "./interfaces";
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

class ToggleSwitch extends React.Component<{
  unit: string;
  changeUnit: (unit: string) => Promise<promiseInterface>;
}> {
  render() {
    return (
      <Container>
        <Button
          selected={this.props.unit == Unit.METRIC}
          onClick={e => this.props.changeUnit(Unit.METRIC)!}
        >
          Metric
        </Button>
        <Button
          selected={this.props.unit == Unit.IMPERIAL}
          onClick={e => this.props.changeUnit(Unit.IMPERIAL)!}
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

const mapDispatchToProps = (dispatch: Dispatch<any>) => {
  return {
    changeUnit: (unit: string) => setUnit(unit, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ToggleSwitch);
