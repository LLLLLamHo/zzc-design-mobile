import React, { PureComponent } from 'react';
import classNames from 'classnames';
import Header from './components/header';
import Body from './components/body';
import Footer from './components/footer';
import config from '../_util/config';
import '../style/index';
import './index.scss';

export interface CardProps {
    prefixCls: string,
    className: string,
    full: boolean,
    style: React.CSSProperties
}

export default class Card extends PureComponent<CardProps, any> {
    static defaultProps = {
        prefixCls: `${config.cls}-card`,
        className: '',
        full: false,
        style: {}
    };
    static Header = Header;
    static Body = Body;
    static Footer = Footer;

    render() {
        const { style, prefixCls, full, children, className } = this.props;
        const cardClassName: string = classNames(
            prefixCls,
            className,
            {
                [`${prefixCls}-full`]: full
            }
        );

        return (
            <div style={style} className={cardClassName}>
                <div className={`${prefixCls}-box`}>
                    {children}
                </div>
            </div>
        );
    }
}