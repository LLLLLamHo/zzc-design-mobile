import React, { PureComponent } from 'react';
import { zzcComponetError } from '../gtag';

export default function errorComponent( WrappedComponent, componentName ) {
    return class HLError extends PureComponent {
        componentDidCatch( error, info ) {
            zzcComponetError( componentName, error, info );
        }
        render() {
            return (
                <WrappedComponent {...this.props} />
            );
        }
    };
}