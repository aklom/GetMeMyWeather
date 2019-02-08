import React, { Component } from "react";

export class WindSpeed extends Component<{ value: number; unit: string }> {
  render() {
    return (
      <div>
        {this.props.value} {this.props.unit}
      </div>
    );
  }
}
