import React, { PureComponent } from 'react';
import classNames from 'classnames';
import TouchFeedback from '../_util/components/TouchFeedback.jsx';

import '../style/index';
import './index.scss';

export interface ButtonProps {
        prefixCls?: string,
        size?: boolean,
        inline?: boolean,
        full?: boolean,
        disabled?: boolean,
        noBorder?: boolean,
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
        prefixCls: 'zzc-button',
        size: false,
        inline: false,
        full: false,
        disabled: false,
        noBorder: false,
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
        const { ghost, noBorder, children, className, prefixCls, type, full, size, inline, disabled, style, activeStyle, activeClassName, onClick } = this.props;
        const btnClassNames:string = classNames(
            prefixCls,
            className,
            {
                [`${prefixCls}-${size}`]: size,
                [`${prefixCls}-full`]: full,
                [`${prefixCls}-${type}`]: type != '',
                [`${prefixCls}-inline`]: inline,
                [`${prefixCls}-disabled`]: disabled,
                [`${prefixCls}-ghost`]: ghost,
                [`${prefixCls}-noborder`]: noBorder
            }
        );
        return (
            <TouchFeedback
                activeStyle={disabled ? false : activeStyle}
                activeClassName={this.setActiveClassName( activeClassName, type, ghost )}
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