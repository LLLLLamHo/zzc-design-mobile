import React, { PureComponent } from 'react';
import classNames from 'classnames';
import TouchFeedback from '../../TouchFeedback';
import config from '../../_util/config';
import ButtonGroup from './ButtonGroup';
import { zzcComponentUse } from '../../_util/gtag';
import { ButtonProps } from '../propsType';
export default class Button extends PureComponent<ButtonProps, any> {
    constructor( props ) {
        super( props );
        zzcComponentUse( 'Button', '组件渲染' );
    }
    static defaultProps = {
        prefixCls: `${config.cls}-button`,
        size: false,
        inline: false,
        disabled: false,
        inactive: false,
        type: 'default',
        onClick() { },
        className: '',
        style: {
        },
        activeStyle: {
        },
        activeClassName: ''
    };

    static ButtonGroup = ButtonGroup;

    setActiveClassName( activeClassName?: string, type?: string ): string {
        const activeClassNameIsNone:boolean = activeClassName === '';
        const className = classNames( {
            [`${this.props.prefixCls}-active-${type}`]: activeClassNameIsNone,
            [`${this.props.prefixCls}-active-${activeClassName}`]: !activeClassNameIsNone
        } );
        return className;
    }

    render() {
        const { inactive, children, className, prefixCls, type, size, inline, disabled, style, activeStyle, activeClassName, onClick } = this.props;
        let btnClassNames: string = '';
        if ( inline ) {
            btnClassNames = classNames(
                prefixCls,
                `${prefixCls}-inline`,
                className,
                {
                    [`${prefixCls}-${size}`]: size,
                    [`${prefixCls}-${type}`]: type !== '',
                    [`${prefixCls}-disabled`]: disabled,
                    [`${prefixCls}-inactive`]: inactive
                }
            );
        } else {
            btnClassNames = classNames(
                prefixCls,
                className,
                {
                    [`${prefixCls}-${type}`]: type !== '',
                    [`${prefixCls}-disabled`]: disabled,
                    [`${prefixCls}-inactive`]: inactive
                }
            );
        }
        return (
            <TouchFeedback
                activeStyle={activeStyle ? activeStyle : {}}
                activeClassName={this.setActiveClassName( activeClassName, type )}
                disabled={inactive || disabled}
            >
                <div
                    className={
                        btnClassNames
                    }
                    style={style}
                    onClick={onClick}
                >
                    {children}
                </div>
            </TouchFeedback>
        );
    }
}