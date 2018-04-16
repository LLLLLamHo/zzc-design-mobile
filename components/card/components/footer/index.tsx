import React, { PureComponent } from 'react';
import classNames from 'classnames';
import './index.scss';

export interface CardFooterProps {
    prefixCls: string,
    className: string,
    borderDirection: string,
    children: any,
    noBorder: boolean,
    style: React.CSSProperties
}

export default class Footer extends PureComponent<CardFooterProps, any> {
    static defaultProps = {
        prefixCls: 'zzc-card-footer',
        className: '',
        children: null,
        noBorder: false,
        style: {}
    }

    render() {
        const { style, className, prefixCls, noBorder, children } = this.props;
        const footerClassName:string = classNames(
            prefixCls,
            className,
            {
                [`${prefixCls}-noborder`]: noBorder
            }
        );
        return (
            <div style={style} className={footerClassName}>
                {children && children}
            </div>
        );
    }
}