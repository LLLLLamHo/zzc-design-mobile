import React, { PureComponent } from 'react';
import Error from '../_util/Error';
import Card from './components/card';
import Header from './components/header';
import Body from './components/body';
import Footer from './components/footer';
import { CardProps } from './propsType';
import '../style/index';
import './index.scss';

export default class CardEntrance extends PureComponent<CardProps, any> {
    static Header = Header;
    static Body = Body;
    static Footer = Footer;

    render() {
        return (
            <Error componentName='Card'>
                <Card {...this.props} />
            </Error>
        );
    }
}