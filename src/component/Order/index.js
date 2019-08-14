import React, { Component } from 'react';
import { constant } from "../../constants";
import './index.less';

export default class extends Component {
    state = {
        tradeNum: 1,
        pieceNum: 10,
        inputValue: 1,
    };

    handleChangeInput = (e) => {
        const value = Number(e.target.value);

        if (typeof value !== 'number' || Number.isNaN(value)) {
            return;
        }
        if (value > 10 || value < 0) {
            return;
        }

        this.setState({
            tradeNum: value || 1,
            inputValue: value || '',
            pieceNum: 10 * value || 10,
        });
    };

    render() {
        const { type, tradeType } = this.props;
        const { inputValue, pieceNum } = this.state;
        const isLittle = tradeType === 'upLittle' || tradeType === 'downLittle';
        const { littlePrice, largePrice, expectTrend, littleCurPrice, largeCurPrice } = constant[type];

        return (
            <div className="guide-step-wrap step-3">
                <div className="guide-content">
                    <span className={`underline ${type === 'up' ? 'up-text' : 'down-text'}`}>BTCUSDT-当周-{isLittle ? littlePrice : largePrice}-{expectTrend}</span>
                    <span>合约当前市场报价为：</span>
                    <span className="underline">{isLittle ? littleCurPrice : largeCurPrice}</span>
                    <i className="tips-icon"
                       style={{ verticalAlign: 'text-bottom', marginLeft: '10px' }}
                       data-text="期权的价格，是综合了标的物价格、行权价格、距离行权日期远近等多项因素而得到的一个市场公允价格，但核心影响因素还是标的物价格；
一般情况下，看涨期权的价格会随着标的物价格升高而上涨，看跌期权则相反"
                    >i</i>
                </div>
                <div className="guide-content">请您输入买入数量（教程数据最多支持10BTC）</div>
                <div className="guide-content input-line">
                    <div className="input-line-item input-wrap">
                        <input placeholder="1" type="text" className="guide-input" value={inputValue} onChange={this.handleChangeInput} />
                        <span className="input-unit">BTC</span>
                    </div>
                    <div className="input-line-item">={pieceNum}张</div>
                </div>
                <div className="guide-btn-wrap">
                    <div className="guide-btn large-size" onClick={() => this.props.stepForward(type, { type, tradeType, tradeNum: inputValue })}>确认买入数量</div>
                </div>

            </div>
        )
    }
}
