import React from 'react';
import { zzcComponetError } from '../gtag';


export default class Error extends React.PureComponent<any, any> {
    componentDidCatch( error, info ) {
        zzcComponetError( this.props.componentName ? this.props.componentName : 'component', error, info );
    }
    render() {
        return (
            this.props.children
        );
    }
}