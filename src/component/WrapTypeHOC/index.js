import React, { Component } from 'react';

const simpleHoc = (WrappedComponent, type) => {
    console.log('type', type); // eslint-disable-line
    return class extends Component {
        render() {
            return <WrappedComponent type={type} {...this.props}/>
        }
    }
};
export default simpleHoc;
