import React, { Component } from 'react';
import { constant } from '../../constants';

export default class extends Component {
    render() {
        const { tradeType, type } = this.props;
        const isUp = type === 'up';
        const isLittle = tradeType === 'upLittle' || tradeType === 'downLittle';
        const { littlePrice, largePrice, marketAction, marketTrend, secondChangeLittlePrice, secondChangeLargePrice, expectTrend } = constant[type];

        return (
            <div className="guide-step-wrap step-6">
                {/* 过渡文案 */}
                <div className="guide-transition-content">OK 让我们看看市场行情</div>
                {/* 正式文案 */}
                <div className="guide-content">第三天市场出现了{marketAction}，BTC{marketTrend}到了{isLittle ? secondChangeLittlePrice : secondChangeLargePrice}……</div>
                <div className="guide-content">
                    <span>您所持有的</span>
                    <span className={`underline ${isUp ? 'up-text' : 'down-text'}`}>BTCUSD-当周-{isLittle ? littlePrice : largePrice}-{expectTrend}</span>
                    <span>合约市场价回落到了{}BTC</span>
                </div>
            </div>
        );
    }
}
