import React, { Component } from 'react';

export default class extends Component {
    render() {
        return (
            <div className="guide-step-wrap step-1">
                <div className="guide-content">假设今天的价格是$8000，请您判断一下在接下来的一周时间内BTC价格是上涨还是下跌？</div>
                <div className="guide-btn-wrap">
                    <button
                        className="guide-btn up"
                        onClick={() => this.props.stepForward('up', { type: 'up' })}
                    >目测会涨</button>
                    <button
                        className="guide-btn down"
                        onClick={() => this.props.stepForward('down', { type: 'down' })}
                    >目测会跌</button>
                </div>
            </div>
        );
    }
}
