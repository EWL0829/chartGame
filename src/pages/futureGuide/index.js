import React, { Component } from 'react';
import Chart from '../../component/Chart';
import Operation from '../../component/Operation';
import { message } from "../../utils/Messenger";
import './index.less';

export default class extends Component {
    state = {
        step: 0,
        axisRangeData: [
            { date: new Date('2019-09-01T00:00'), value: 0 },
            { date: new Date('2019-09-02T00:00'), value: 10000 },
            { date: new Date('2019-09-03T00:00'), value: 10000 },
            { date: new Date('2019-09-04T00:00'), value: 10000 },
            { date: new Date('2019-09-05T00:00'), value: 10000 },
            { date: new Date('2019-09-06T00:00'), value: 10000 },
            { date: new Date('2019-09-07T00:00'), value: 10000 },
            { date: new Date('2019-09-08T00:00'), value: 10000 },
            { date: new Date('2019-09-09T00:00'), value: 10000 },
            { date: new Date('2019-09-10T00:00'), value: 10000 },
            { date: new Date('2019-09-11T00:00'), value: 10000 },
            { date: new Date('2019-09-12T00:00'), value: 10000 },
            { date: new Date('2019-09-13T00:00'), value: 10000 },
            { date: new Date('2019-09-14T00:00'), value: 10000 },
            { date: new Date('2019-09-15T00:00'), value: 10000 },
            { date: new Date('2019-09-16T00:00'), value: 10000 },
            { date: new Date('2019-09-17T00:00'), value: 10000 },
            { date: new Date('2019-09-18T00:00'), value: 10000 },
            { date: new Date('2019-09-19T00:00'), value: 10000 },
            { date: new Date('2019-09-20T00:00'), value: 10000 },
        ],
        data: {
            chartData: [
                {
                    lineData: [
                        { date: new Date('2019-09-01T00:00'), value: 1200 },
                        { date: new Date('2019-09-02T00:00'), value: 1800 },
                        { date: new Date('2019-09-03T00:00'), value: 1900 },
                        { date: new Date('2019-09-04T00:00'), value: 3200 },
                        { date: new Date('2019-09-05T00:00'), value: 7800 },
                        { date: new Date('2019-09-06T00:00'), value: 1700 },
                        { date: new Date('2019-09-07T00:00'), value: 2310 },
                        { date: new Date('2019-09-08T00:00'), value: 6500 },
                        { date: new Date('2019-09-09T00:00'), value: 5120 },
                    ],
                },
                {
                    lineData: [
                        { date: new Date('2019-09-09T00:00'), value: 5120 },
                        { date: new Date('2019-09-10T00:00'), value: 6090 },
                        { date: new Date('2019-09-11T00:00'), value: 1342 },
                        { date: new Date('2019-09-12T00:00'), value: 5401 },
                        { date: new Date('2019-09-13T00:00'), value: 7623 },
                        { date: new Date('2019-09-14T00:00'), value: 8804 },
                    ],
                },
                3,
                4,
                5,
            ],
            operationData: [
                {
                    htmlFrag: (
                        <div className="guide-step-wrap step-1">
                            <div className="guide-title">Who do you Choose?</div>
                            <div className="guide-btn-wrap">
                                <button className="guide-btn bz" onClick={() => this.stepForward('bz')}>白泽</button>
                                <button className="guide-btn gd" onClick={() => this.stepForward('gd')}>鬼灯</button>
                            </div>
                        </div>
                    ),
                },
                {
                    htmlFrag: (
                        <div className="guide-step-wrap step-2">
                            <div className="guide-title">You made a choice</div>
                            <div className="guide-content">content maybe changed ...</div>
                        </div>
                    ),
                }
            ],
        }
    };

    componentDidMount() {
        console.log('this.props', this.props); // eslint-disable-line
    }

    // 前进一步
    stepForward = (routeName) => {
        const { step } = this.state;
        let newStep = step + 1;

        message.postMessage('stepForward', { routeName });

        this.setState({
            step: newStep,
        });
    };

    // 退后一步
    stepBackward = (routeName) => {
        const { step } = this.state;
        let newStep = step - 1;

        if (newStep < 0) {
            return;
        }

        message.postMessage('stepBackward', { routeName });

        this.setState({
            step: newStep,
        });
    };

    render() {
        const { step, data, axisRangeData } = this.state;

        return (
            <div className="future-guide-wrap guide-wrap">
                <Chart chartData={data.chartData[step]} axisRangeData={axisRangeData} />
                <Operation operationData={data.operationData[step]}/>
                <div className="back-prev" onClick={() => this.stepBackward()}>
                    <span className="back-prev-text">&lt;&lt;我后悔了</span>
                </div>
            </div>
        )
    }
}
