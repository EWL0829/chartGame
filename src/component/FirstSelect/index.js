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
        const isLittle = tradeType === 'upLittle' || tradeType === 'downLittle';
        const {
            littlePrice, largePrice, expectTrend, simplePriceTrend, firstChangeLargePrice, firstChangeLittlePrice,
            firstChangeLargeCurPrice, firstChangeLittleCurPrice
        } = constant[type];

        return (
            <div className="guide-step-wrap step-5">
                {/* 过场文案 */}
                <div className={`guide-transition-content ${showTransition ? 'show' : 'hide'}`}>成功买入，让我们看看市场行情……</div>

                {/* 正式展示 */}
                <div className={`guide-transition-content ${showMainCon ? 'show' : 'hide'}`}>
                    <div className="guide-content">恭喜，您的判断正确！第二天BTC就{simplePriceTrend}到了${isLittle ? firstChangeLittlePrice : firstChangeLargePrice}!</div>
                    <div className="guide-content">
                        <span>你所持有的</span>
                        <span className={`underline ${type === 'up' ? 'up-text' : 'down-text'}`}>BTCUSD-当周-{isLittle ? littlePrice : largePrice}-{expectTrend}</span>
                        <span>合约市场价已经涨到{isLittle ? firstChangeLittleCurPrice : firstChangeLargeCurPrice}</span>
                    </div>
                    <div className="guide-btn-wrap">
                        <div className="guide-btn large-size" onClick={() => this.props.stepForward(type, { type, tradeType, byPassedStep: 7 })}>立即卖出，锁定收益</div>
                        <div className="guide-btn large-size keep-going-btn" onClick={() => this.props.stepForward(type, { type, tradeType })}>继续持有，博取更高收益</div>
                    </div>
                </div>
            </div>
        );
    }
}
