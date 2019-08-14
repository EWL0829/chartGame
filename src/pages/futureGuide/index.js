import React, { Component } from 'react';
import Chart from '../../component/Chart';
import Operation from '../../component/Operation';
import { message } from "../../utils/Messenger";
import Prediction from '../../component/Prediction';
import SelectTradeRoute from '../../component/SelectTradeRoute';
import Order from '../../component/Order';
import PayAction from '../../component/PayAction';
import FirstSelect from '../../component/FirstSelect';
import './index.less';

export default class extends Component {
    state = {
        step: 0, // 当前步数排序
        type: '', // 交易大致类型 上涨/下跌
        tradeType:'', // 交易具体类型
        tradeNum: 0, // 交易的BTC数量
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
        ], // chart绘制区域定义域/值域
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
                    deletePart: [
                        { cls: 'path-line', isAll: true, }
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
                    deletePart: [],
                },
                {
                    lineData: [
                        { date: new Date('2019-09-14T00:00'), value: 8804 },
                        { date: new Date('2019-09-15T00:00'), value: 9000 },
                        { date: new Date('2019-09-16T00:00'), value: 6500 },
                    ],
                    deletePart: [],
                },
                {
                    lineData: [],
                    deletePart: [],
                },
                {
                    lineData: [],
                    deletePart: [],
                }
            ],
        }
    };

    // 前进一步，byPassedStep表示特殊步数的处理，例如分叉路段
    stepForward = (routeName, config = {}) => {
        const { step } = this.state;
        const { byPassedStep, type, tradeType, tradeNum } = config;
        let newStep = byPassedStep || step + 1;

        // 超出操作步数时
        if (newStep > (this.operationData.length - 1)) {
            return;
        }

        message.postMessage('stepForward', { routeName, type, tradeType });

        this.setState({
            step: newStep,
            type,
            tradeType,
            tradeNum: tradeNum || this.state.tradeNum,
        });
    };

    // 退后一步
    stepBackward = (routeName, config = {}) => {
        const { step } = this.state;
        const { byPassedStep, type, tradeType } = config;
        let newStep = byPassedStep || step - 1;

        // 小于0时
        if (newStep < 0) {
            return;
        }

        message.postMessage('stepBackward', { routeName, type, tradeType });

        this.setState({
            step: newStep,
            type,
            tradeType,
        });
    };

    renderCurStep = (step) => {
        const { type, tradeType, tradeNum } = this.state;

        this.operationData = [
            { htmlFrag: <Prediction stepForward={this.stepForward.bind(this)} type={type} tradeType={tradeType} />, },
            { htmlFrag: <SelectTradeRoute stepForward={this.stepForward.bind(this)} type={type} tradeType={tradeType} />, },
            { htmlFrag: <Order stepForward={this.stepForward.bind(this)} type={type} tradeType={tradeType} />, },
            { htmlFrag: <PayAction stepForward={this.stepForward.bind(this)} type={type} tradeType={tradeType} tradeNum={tradeNum} /> },
            { htmlFrag: <FirstSelect stepForward={this.stepForward.bind(this)} type={type} tradeType={tradeType} tradeNum={tradeNum} /> },
        ];

        return this.operationData[step];
    };

    render() {
        const { step, data, axisRangeData, type } = this.state;
        const { deletePart, lineData } = data.chartData[step];
        const curStep = this.renderCurStep(step);

        return (
            <div className="future-guide-wrap guide-wrap">
                {/* 图表展示区域 */}
                <Chart deletePart={deletePart} chartData={lineData} axisRangeData={axisRangeData} />

                {/* 操作区域 */}
                <Operation operationData={curStep}/>

                {/* 返回上一关 */}
                <div className="back-prev" onClick={() => this.stepBackward(type, { type })}>
                    <span className="back-prev-text">&lt;&lt;我后悔了</span>
                </div>
            </div>
        )
    }
}
