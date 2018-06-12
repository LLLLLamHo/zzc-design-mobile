import React, { PureComponent } from 'react';
import classNames from 'classnames';
import TouchFeedback from '../_util/TouchFeedback';
import config from '../_util/config';

import '../style/index';
import './index.scss';

export interface ButtonProps {
        prefixCls?: string,
        size?: boolean,
        inline?: boolean,
        full?: boolean,
        disabled?: boolean,
        noBorder?: boolean,
        noRadius?: boolean,
        type?: string,
        ghost?: boolean,
        onClick?: any,
        className?: string,
        style?: React.CSSProperties,
        activeStyle?: React.CSSProperties,
        activeClassName?: string
}

export default class Button extends PureComponent<ButtonProps, any> {
    static defaultProps = {
        prefixCls: `${config.cls}-button`,
        size: false,
        inline: false,
        full: false,
        disabled: false,
        noBorder: false,
        noRadius: false,
        ghost: false,
        type: 'default',
        onClick() { },
        className: '',
        style: {
        },
        activeStyle: {
        },
        activeClassName: ''
    };

    setActiveClassName( activeClassName?: string, type?: string, ghost?: boolean ): string {
        const activeClassNameIsNone:boolean = activeClassName === '';
        const className = classNames( {
            [`${this.props.prefixCls}-active-${type}`]: activeClassNameIsNone && !ghost,
            [`${this.props.prefixCls}-active-${type}-ghost`]: activeClassNameIsNone && ghost,
            [`${this.props.prefixCls}-active-${activeClassName}`]: !activeClassNameIsNone
        } );

        return className;
    }

    render() {
        const { ghost, noBorder, noRadius, children, className, prefixCls, type, full, size, inline, disabled, style, activeStyle, activeClassName, onClick } = this.props;
        const btnClassNames: string = classNames(
            prefixCls,
            className,
            {
                [`${prefixCls}-${size}`]: size,
                [`${prefixCls}-full`]: full,
                [`${prefixCls}-${type}`]: type !== '',
                [`${prefixCls}-inline`]: inline,
                [`${prefixCls}-disabled`]: disabled,
                [`${prefixCls}-ghost`]: ghost,
                [`${prefixCls}-noborder`]: noBorder,
                [`${prefixCls}-noradius`]: noRadius
            }
        );
        return (
            <TouchFeedback
                activeStyle={activeStyle ? activeStyle : {}}
                activeClassName={this.setActiveClassName( activeClassName, type, ghost )}
                disabled={disabled}
            >
                <a
                    className={
                        btnClassNames
                    }
                    style={
                        style
                    }
                    onClick={onClick}
                >
                    {children}
                </a>
            </TouchFeedback>
        );
    }
}