import React from 'react';

export default class Error extends React.PureComponent<any, any> {
    
    render() {
        return (
            this.props.children
        );
    }
}