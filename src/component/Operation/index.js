import React, { Component } from 'react';
import { message } from "../../utils/Messenger";
import './index.less';

export default class extends Component {
    state = {
        choseName: '',
    };

    componentDidMount() {
        this.stopForwardMessage = message.onMessage('stepForward', (data) => {
            const { routeName } = data;

            this.setState({
                choseName: routeName
            }, () => {
                // console.log('this.forward.state', this.state); // eslint-disable-line
            });
        });

        this.stopBackwardMessage = message.onMessage('stepBackward', (data) => {
            const { routeName } = data;

            this.setState({
                choseName: routeName
            }, () => {
                // console.log('this.backward.state', this.state); // eslint-disable-line
            });
        })
    }

    componentWillUnmount() {
        this.stopForwardMessage();
        this.stopBackwardMessage();
    }

    render() {
        const { operationData } = this.props;
        const { htmlFrag } = operationData;

        return (
            <div className="operation-wrap" id="operationWrap">
                {htmlFrag}
            </div>
        );
    }
}
