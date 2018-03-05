import React, { PureComponent } from 'react';
import classNames from 'classnames';
import Header from './components/header/index.jsx';
import Body from './components/body/index.jsx';
import Footer from './components/footer/index.jsx';

import '../style/index';
import './index.scss';

export default class Card extends PureComponent {
    static defaultProps = {
        prefixCls: 'zzc-card',
        className: '',
        full: false,
        style: {}
    };

    static Header = Header;
    static Body = Body;
    static Footer = Footer;

    render() {
        const { style, prefixCls, full, children, className } = this.props;
        const cardClassName = classNames(
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