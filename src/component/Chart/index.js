import React, { Component } from 'react';
import * as d3 from 'd3';
import './index.less';

export default class extends Component {
    state = {
        margin: {
            top: 20,
            right: 30,
            bottom: 30,
            left: 40,
        },
        width: 960,
        height: 500,
        data: [],
    };

    componentDidMount() {
        const { chartData } = this.props;
        const { lineData } = chartData;

        this.setState({
            data: lineData
        }, () => {
            this.drawChart(lineData);
        });
    }

    componentWillReceiveProps(nextProps) {
        const { chartData } = this.props;
        const { lineData } = chartData;
        const newLineData = nextProps.chartData.lineData;

        const oldDataLen = lineData.length;
        const newDataLen = newLineData.length;

        if (newDataLen !== oldDataLen) {
            this.setState({
                data: newLineData
            }, () => {
                this.updateChart(newLineData);
            });
        }
    }

    drawChart = (data) => {
        const { margin, width, height } = this.state;

        const svg = d3.select('#mainChart').append('svg')
            .attr('class', 'svg-wrap')
            .attr('width', width)
            .attr('height', height);

        const x = d3.scaleTime()
            .domain(d3.extent(this.props.axisRangeData, d => d.date))
            .range([margin.left, width - margin.right]);

        const xAxis = g => g
            .attr("transform", `translate(0,${height - margin.bottom})`)
            .call(d3.axisBottom(x).ticks(width / 80).tickSizeOuter(0));

        const y = d3.scaleLinear()
            .domain([0, d3.max(this.props.axisRangeData, d => d.value)]).nice()
            .range([height - margin.bottom, margin.top]);

        const yAxis = g => g
            .attr("transform", `translate(${margin.left},0)`)
            .call(d3.axisLeft(y))
            .call(g => g.select(".tick:last-of-type text").clone()
                .attr("x", 3)
                .attr("text-anchor", "start")
                .attr("font-weight", "bold")
                .text(data.y));

        const line = d3.line()
            .defined(d => !isNaN(d.value))
            .x(d => x(d.date))
            .y(d => y(d.value));

        // 添加横轴
        svg.append('g')
            .call(xAxis);

        // 添加纵轴
        svg.append("g")
            .call(yAxis);

        svg.append("path")
            .attr('class', 'path-line')
            .datum(data)
            .attr("fill", "none")
            .attr("stroke", "steelblue")
            .attr("stroke-width", 1.5)
            .attr("stroke-linejoin", "round")
            .attr("stroke-linecap", "round")
            .attr("d", line);
    };

    updateChart = (data) => {
        const { margin, width, height } = this.state;

        const x = d3.scaleTime()
            .domain(d3.extent(this.props.axisRangeData, d => d.date))
            .range([margin.left, width - margin.right]);

        const y = d3.scaleLinear()
            .domain([0, d3.max(this.props.axisRangeData, d => d.value)]).nice()
            .range([height - margin.bottom, margin.top]);

        const line = d3.line()
            .defined(d => !isNaN(d.value))
            .x(d => x(d.date))
            .y(d => y(d.value));

        d3.select('.svg-wrap')
            .append('path')
            .attr('class', 'new-path-line')
            .datum(data)
            .attr("fill", "none")
            .attr("stroke", "steelblue")
            .attr("stroke-width", 1.5)
            .attr("stroke-linejoin", "round")
            .attr("stroke-linecap", "round")
            .attr("d", line);
    };

    render() {
        return (
            <div className="chart-wrap" id="mainChart"></div>
        );
    }
}
