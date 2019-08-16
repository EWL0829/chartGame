import React, { Component } from 'react';
import './index.less';

export default class extends Component {
    render() {
        return (
            <div className="guide-step-wrap" style={{width: '60%'}}>
                <div className="flex">
                    <div className="flex-box">
                        <div className="guide-content">明智之选！下面我们来计算收益：</div>
                        <div className="guide-content">买入时支付的期权费用：0.0005 BTC</div>
                        <div className="guide-content">卖出时收到的期权费用：0.0005 BTC</div>
                        <div className="guide-content">本次模拟开仓，您的盈亏平衡，稳健离场！</div>
                    </div>
                    <div className="flex-box">img</div>
                </div>
            </div>
        );
    }
}
