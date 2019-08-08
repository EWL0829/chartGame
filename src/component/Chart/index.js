import React, { Component } from 'react';
import './index.less';

export default class extends Component {
    render() {
        return (
            <div className="chart-wrap" id="mainChart">
                {this.props.chartData}
            </div>
        );
    }
}
