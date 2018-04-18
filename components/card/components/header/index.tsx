import React, { PureComponent } from 'react';
import classNames from 'classnames';
import './index.scss';

export interface CardHeaderProps {
    prefixCls: string,
    className: string,
    borderDirection: string,
    title: string,
    children: any,
    noBorder: boolean,
    extra: boolean,
    extraOnClick: Function | null,
    titleOnClick: Function | null,
    style: React.CSSProperties
}

export default class Header extends PureComponent<CardHeaderProps, any> {
    static defaultProps = {
        prefixCls: 'zzc-card-header',
        className: '',
        title: '',
        extra: false,
        children: false,
        noBorder: false,
        extraOnClick: null,
        titleOnClick: null,
        style: {}
    }

    setContent(): JSX.Element {
        const { title, extra, prefixCls, children, extraOnClick, titleOnClick } = this.props;
        if ( children ) {
            return children;
        }
        return (
            <React.Fragment>
                {title !== '' && <div onClick={() => { titleOnClick && titleOnClick(); }} className={classNames( `${prefixCls}-title` )}>{title}</div>}
                {extra && <div onClick={() => { extraOnClick && extraOnClick(); }} className={classNames( `${prefixCls}-extra` )}>{extra}</div>}
            </React.Fragment>
        );
    }

    render() {
        const { style, className, prefixCls, noBorder } = this.props;
        const headClassName: string = classNames(
            prefixCls,
            className,
            {
                [`${prefixCls}-noborder`]: noBorder
            }
        );
        return (
            <div style={style} className={headClassName}>
                {this.setContent()}
            </div>
        );
    }
}