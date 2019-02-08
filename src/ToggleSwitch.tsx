import React from "react";
import styled from "styled-components";

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

export class ToggleSwitch extends React.Component<{
  unit: string;
  onUnitChange: (clickedButton: string) => void;
}> {
  render() {
    return (
      <Container>
        <Button
          selected={this.props.unit == "metric"}
          onClick={e => this.props.onUnitChange("metric")}
        >
          Metric
        </Button>
        <Button
          selected={this.props.unit == "imperial"}
          onClick={e => this.props.onUnitChange("imperial")}
        >
          Imperial
        </Button>
      </Container>
    );
  }
}
