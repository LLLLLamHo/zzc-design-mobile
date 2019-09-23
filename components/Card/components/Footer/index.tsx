import React, { PureComponent } from 'react';
import Error from '../../../_util/Error';
import Footer from './Footer';
import { CardFooterProps } from './propsType';

export default class CardFooterEntrance extends PureComponent<CardFooterProps, any> {
    render() {
        return (
            <Error componentName='Card-Footer'>
                <Footer {...this.props} />
            </Error>
        );
    }
}