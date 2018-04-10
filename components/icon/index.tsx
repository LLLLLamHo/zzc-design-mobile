import React from 'react';
import classnames from 'classnames';
import loadSprite from './loadSprite';
import './index.scss';

export interface IconProps {
    prefixCls?: string,
    type?: any,
    size?: string,
    className?: string,
    style?: React.CSSProperties,
    reset?: any
    
}
export default class Icon extends React.PureComponent<IconProps,any> {
    componentDidMount(): void {
        loadSprite();
    }

    static defaultProps = {
        prefixCls: 'zzc-icon',
        type: undefined,
        size: 'md',
        className: '',
        style: {},
    }

    render () {
        const { prefixCls, type, size, className, style, ...reset } = this.props;
        const cls = classnames(
            className,
            prefixCls,
            `${prefixCls}-${size}`,
            `${prefixCls}-${type}`
        );

        return (
            <svg className={cls} style={style} {...reset}>
                <use xlinkHref={`#${prefixCls}-${type}`} />
            </svg>
        );
    }
}
