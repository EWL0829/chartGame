import React, { Component } from 'react';
import { constant } from '../../constants';

export default class extends Component {
    render() {
        const { tradeNum, type, tradeType } = this.props;
        const isLittle = tradeType === 'upLittle' || tradeType === 'downLittle';
        const isUp = type === 'up';
        const { littlePrice, largePrice, littleCurPrice, largeCurPrice, expectTrend } = constant[type];

        const tradeNumber = Number(tradeNum);
        const littleCurPriceNumber = Number(littleCurPrice);
        const largeCurPriceNumber = Number(largeCurPrice);
        const curUserNeedPay = isLittle ? littleCurPriceNumber * tradeNumber : largeCurPriceNumber * tradeNumber;

        const textStyleUponTrend = `underline ${isUp ? 'up-text' : 'down-text'}`;

        return (
            <div className="guide-step-wrap step-4">
                <div className="guide-content">
                    <span>您准备买入</span>
                    <span className={textStyleUponTrend}>{tradeNumber * 10}</span>
                    <span>张</span>
                    <span className={textStyleUponTrend}>BTCUSD-当周-{isLittle ? littlePrice : largePrice}-{expectTrend}</span>
                    <span className="tips mg-l-10">1BTC=10张</span>
                </div>
                <div className="guide-content">
                    <span>该合约当前市场价为：{isLittle ? littleCurPrice : largeCurPrice}</span>
                    <span>您所需支付的期权费用为: {curUserNeedPay}</span>
                </div>
                <div className="tips">注：合约市场报价是根据一个BTC的数量进行报价的，即10张合约的价值</div>
                <div className="guide-btn-wrap">
                    <div className="guide-btn large-size" onClick={() => this.props.stepForward(type, { type, tradeType })}>
                        <span>支付</span>
                        <span className="mg-lr-10">{curUserNeedPay}</span>
                        <span>BTC</span>
                    </div>
                </div>
            </div>
        )
    }
}
