import React, { PureComponent, ReactNode } from 'react';
import classNames from 'classnames';

import '../style/index';
import './index.scss';

export interface ListItemProps {
    prefixCls?: string,
    space?: string,
    className?: string,
    inClassName?: string,
    style?: React.CSSProperties,
    inStyle?: React.CSSProperties,
    onClick?: any,
    label?: ReactNode | null,
    extra?: ReactNode | null
}

export default class ListItem extends PureComponent<ListItemProps, any> {
    static defaultProps = {
        prefixCls: 'zzc-list-item',
        space: 'left',
        className: '',
        style: {},
        inStyle: {},
        onClick() { },
        label: ''
    }

    render() {
        const { prefixCls, space, className, inClassName, style, inStyle, children, onClick, label, extra } = this.props;
        const listItemClassNames: string = classNames(
            prefixCls,
            className,
            {
                [`${prefixCls}-${space}`]: space !== ''
            }
        );
        const listItemInClassNames: string = classNames(
            `${prefixCls}-box`,
            inClassName
        );
        return (
            <div className={listItemClassNames}
                style={style}
                onClick={onClick}>
                <div className={listItemInClassNames}
                    style={inStyle}>
                    {label ? (
                        <div className={`${prefixCls}-label`}>{label}</div>
                    ) : null}
                    {children ? (
                        <div className={`${prefixCls}-content`}>{children}</div>
                    ) : null}
                    {extra ? (
                        <div className={`${prefixCls}-extra`}>{extra}</div>
                    ) : null}
                </div>
            </div>
        );
    }
}
