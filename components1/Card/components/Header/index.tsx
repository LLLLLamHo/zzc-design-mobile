import React, { PureComponent } from 'react';
import Error from '../../../_util/Error';
import Header from './Header';
import { CardHeaderProps } from './propsType';

export default class CardHeaderEntrance extends PureComponent<CardHeaderProps, any> {
    render() {
        return (
            <Error componentName='Card-Header'>
                <Header {...this.props} />
            </Error>
        );
    }
}