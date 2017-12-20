import React, { Component } from 'react';
import { arc } from 'd3-shape';
 
export class Arc extends Component {
  constructor() {
      super();
      this.arc = arc();
  }

  componentWillMount() {
      this.updateD3(this.props);
  }1

  componentWillReceiveProps(newProps) {
      this.updateD3(newProps);
  }

  updateD3(newProps) {
    this.arc.innerRadius(newProps.innerRadius);
    this.arc.outerRadius(newProps.outerRadius);
  }

  render() {
    return (
      <path d={this.arc(this.props.data)}
            style={{fill: this.props.color}}>
      </path>
    );
  }
}
 
export default Arc;