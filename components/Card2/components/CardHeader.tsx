import React, { PureComponent } from 'react';
import classNames from 'classnames';
import config from '../../_util/config';
import { isFunction } from '../../_util/typeof';
import { CardHeaderProps } from '../propsType';

export default class CardHeader extends PureComponent<CardHeaderProps, any> {
    constructor(props) {
        super(props);
    }
    static defaultProps = {
        prefixCls: `${config.cls}-card2-head`,
        className: '',
        style: {},
        title: null,
        extra: null,
        align: 'center',
        extraClick: null,
        onClick: null
    };

    createHeader(title: string | JSX.Element, extra?: string | JSX.Element): JSX.Element {
        const { prefixCls, align, extraClick } = this.props;
        const classname: string = classNames(
            `${prefixCls}-header`,
            `${prefixCls}-header-${align}`
        )
        return (
            <div className={classname}>
                <div className={`${prefixCls}-header-title`}>{title}</div>
                {extra && <div onClick={() => {
                    if (extraClick && isFunction(extraClick)) {
                        extraClick();
                    }
                }} className={`${prefixCls}-header-extra`}>{extra}</div>}
            </div>
        );
    }

    createBody(children: any): JSX.Element {
        const { prefixCls } = this.props;
        return (
            <div className={`${prefixCls}-body`}>
                {children}
            </div>
        );
    }

    render() {
        const { style, prefixCls, children, className, title, extra, onClick } = this.props;

        const cardClassName: string = classNames(
            prefixCls,
            className
        );

        return (
            <div style={style} className={cardClassName} onClick={() => {
                if ( onClick ) {
                    onClick();
                }
            }}>
                {title && this.createHeader(title, extra)}
                {children && this.createBody(children)}
            </div>
        );
    }
}