import React, { Component } from 'react';

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
        const { showTransition, showMainCon } = this.state;

        return (
            <div className="guide-step-wrap step-7" style={{width: '50%'}}>
                <div className={`guide-transition-content ${showTransition ? 'show' : 'hide'}`}>
                    <div className="guide-content keep-focus-con">让我们继续关注市场行情</div>
                </div>
                <div className={`guide-transition-content ${showMainCon ? 'show' : 'hide'}`}>
                    <div className="guide-content">
                        <span>到了行权日，BTC已经跌到了$6000！系统已为您</span>
                        <span className="underline">自动行权</span>
                        <span>，让我们来计算行权收益：</span>
                    </div>
                    <div className="guide-content flex">
                        <div className="guide-content-item">
                            <span className="label">合约行权价：</span>
                            <span className="value">test</span>
                        </div>
                        <div className="guide-content-item">
                            <span className="label">买入时支付的期权费用：</span>
                            <span className="value">test</span>
                        </div>
                    </div>
                    <div className="guide-content flex">
                        <div className="guide-content-item">
                            <span className="label">实际交割价：</span>
                            <span className="value">test</span>
                        </div>
                        <div className="guide-content-item">
                            <span className="label">行权方向：</span>
                            <span className="value">test</span>
                        </div>
                    </div>
                    <div className="guide-content flex">
                        <div className="guide-content-item">
                            <span className="label">合约行权数量：</span>
                            <span className="value">test</span>
                        </div>
                    </div>
                    <div className="guide-content">本次模拟开仓，您实现盈利：（$7000-$6000）/$6000-0.0100 BTC= 0.1567 BTC </div>
                    <div className="final-flag">img</div>
                </div>
            </div>
        );
    }
}
