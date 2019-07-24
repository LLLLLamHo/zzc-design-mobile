import React, { PureComponent } from 'react';
import Error from '../_util/Error';
import Animate from './Animate';
import { AnimateProps } from './propsType';

export default class AnimateEntrance extends PureComponent<AnimateProps, any> {
    render() {
        return (
            <Error componentName='Animate'>
                <Animate {...this.props} />
            </Error>
        );
    }
}