import React, { Component } from 'react';
import { message } from "../../utils/Messenger";
import './index.less';

export default class extends Component {
    state = {
        choseName: '',
        type: '',
    };

    componentDidMount() {
        this.stopForwardMessage = message.onMessage('stepForward', (data) => {
            const { routeName, type} = data;

            this.setState({
                choseName: routeName,
                type
            });
        });

        this.stopBackwardMessage = message.onMessage('stepBackward', (data) => {
            const { routeName, type } = data;

            this.setState({
                choseName: routeName,
                type,
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
        const { type } = this.state;

        return (
            <div className="operation-wrap" id="operationWrap">
                {htmlFrag}
            </div>
        );
    }
}

