import React, { Component } from 'react';

export default class extends Component {
    render() {
        return (
            <div className="guide-step-wrap">
                <div className="guide-title">Who do you Choose?</div>
                <div className="guide-btn-wrap">
                    <button className="guide-btn bz" onClick={() => this.props.stepForward('bz')}>白泽</button>
                    <button className="guide-btn gd" onClick={() => this.props.stepForward('gd')}>鬼灯</button>
                </div>
            </div>
        );
    }
}
