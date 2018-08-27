import React, { PureComponent } from 'react';
import Error from '../../../_util/Error';
import Body from './body';
import { CardBodyProps } from './propsType';

export default class CardBodyEntrance extends PureComponent<CardBodyProps, any> {
    render() {
        return (
            <Error componentName='Card-Body'>
                <Body {...this.props} />
            </Error>
        );
    }
}