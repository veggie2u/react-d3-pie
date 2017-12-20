import React, { Component } from 'react';
import { LabeledArc } from './LabeledArc';
import { pie } from 'd3-shape';
import { scaleOrdinal, schemeCategory10 } from 'd3-scale'

class Piechart extends Component {
    constructor() {
      super();
      this.pie = pie().value((d) => d.value);
      this.colors = scaleOrdinal(schemeCategory10);
    }
 
    arcGenerator(d, i) {
      return (
        <LabeledArc key={`arc-${i}`}
                    data={d}
                    innerRadius={this.props.innerRadius}
                    outerRadius={this.props.outerRadius}
                    color={this.colors(i)} />
      );
    }
 
    render() {
      let radius = this.props.outerRadius;
      let pie = this.pie(this.props.data);
      let translate = `translate(${radius}, ${radius})`;
 
        return (
          <svg width={radius * 2} height={radius * 2}>
            <g transform={translate}>
                {pie.map((d, i) => this.arcGenerator(d, i))}
            </g>
          </svg>
        )
    }
}
 
export default Piechart;
