import React, { Component } from 'react';
import Chart from '../../component/Chart';
import Operation from '../../component/Operation';
import { message } from "../../utils/Messenger";
import './index.less';

export default class extends Component {
    state = {
        step: 0,
        data: {
            chartData: [
                1,
                2,
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
        const { step, data } = this.state;

        return (
            <div className="future-guide-wrap guide-wrap">
                <Chart chartData={data.chartData[step]} />
                <Operation operationData={data.operationData[step]}/>
                <div className="back-prev" onClick={() => this.stepBackward()}>
                    <span className="back-prev-text">&lt;&lt;我后悔了</span>
                </div>
            </div>
        )
    }
}
