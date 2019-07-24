import React, { PureComponent } from 'react';
import Error from '../_util/Error';
import Card from './components/Card';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
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