import React, { Component } from 'react';
import { constant } from '../../constants';

export default class extends Component {
    generateTipText = (price) => {
        return `标的为BTCUSD指数，行权日期为当周结算日,行权价格为${price}美金的看跌期权合约`;
    };

    render() {
        const { type } = this.props;
        const { littlePrice, largePrice, priceTrend, expectTrend } = constant[type];
        const littlePriceTips = this.generateTipText(littlePrice);
        const largePriceTips = this.generateTipText(largePrice);

        return (
            <div className="guide-step-wrap step-2">
                <div className="guide-content">若您认为一周内价格会{priceTrend}，那么您可以买入当周的{expectTrend}期权合约！</div>
                <div className="guide-content">请选择具体合约（教程中两种合约仅作为举例）</div>
                <div className="guide-btn-wrap">
                    <div
                        className={`guide-btn large-size ${type}`}
                        onClick={() => this.props.stepForward(type, { type, tradeType: `${type}Little` })}
                    >
                        BTCUSD-当周-{littlePrice}-{expectTrend} 合约
                        <i className="tips-icon"  data-text={littlePriceTips}>i</i>
                    </div>
                    <div
                        className={`guide-btn large-size ${type}`}
                        onClick={() => this.props.stepForward(type, { type, tradeType: `${type}Large` })}
                    >
                        BTCUSD-当周-{largePrice}-{expectTrend} 合约
                        <i className="tips-icon" data-text={largePriceTips}>i</i>
                    </div>
                </div>
            </div>
        );
    }
}
