import React, { Component } from 'react';
import { constant } from '../../constants';
import './index.less';

const duration = 2000;
export default class extends Component {
    state = {
        showTransition: true, // 是否展示过渡文案
        showMainCon: false, // 是否展示正式文案
    };

    componentDidMount() {
        this.timer = setTimeout(() => {
            this.setState({
                showTransition: false,
                showMainCon: true,
            });
        }, duration);
    }

    componentWillUnmount() {
        clearTimeout(this.timer);
    }

    render() {
        const { tradeType, type } = this.props;
        const { showTransition, showMainCon } = this.state;

        const isUp = type === 'up';
        const isLittle = tradeType === 'upLittle' || tradeType === 'downLittle';
        const {
            littlePrice, largePrice, marketAction, marketTrend, secondChangeLittlePrice, secondChangeLargePrice, expectTrend, secondChangeLargeCurPrice,
            secondChangeLittleCurPrice
        } = constant[type];

        return (
            <div className="guide-step-wrap step-6">
                {/* 过渡文案 */}
                <div className={`guide-transition-content ${showTransition ? 'show' : 'hide'}`}>OK 让我们看看市场行情</div>
                {/* 正式文案 */}
                <div className={`guide-transition-content ${showMainCon ? 'show' : 'hide'}`}>
                    <div className="guide-content">第三天市场出现了{marketAction}，BTC{marketTrend}到了{isLittle ? secondChangeLittlePrice : secondChangeLargePrice}……</div>
                    <div className="guide-content">
                        <span>您所持有的</span>
                        <span className={`underline ${isUp ? 'up-text' : 'down-text'}`}>BTCUSD-当周-{isLittle ? littlePrice : largePrice}-{expectTrend}</span>
                        <span>合约市场价回落到了{isLittle ? secondChangeLittleCurPrice : secondChangeLargeCurPrice}BTC</span>
                    </div>
                    <div className="guide-btn-wrap">
                        <div className="guide-btn large-size" onClick={() => this.props.stepForward(type, { type, tradeType, byPassedStep: 8 })}>立即卖出，止损离场</div>
                        <div className="guide-btn large-size keep-going-btn" onClick={() => this.props.stepForward(type, { type, tradeType })}>继续持有，坚信自己的判断</div>
                    </div>
                </div>
            </div>
        );
    }
}
