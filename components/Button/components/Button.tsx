import React, { PureComponent } from 'react';
import classNames from 'classnames';
import TouchFeedback from '../../TouchFeedback';
import config from '../../_util/config';
import ButtonGroup from './ButtonGroup';
import Icon from '../../Icon';
import { ButtonProps } from '../propsType';
export default class Button extends PureComponent<ButtonProps, any> {
    constructor(props) {
        super(props);
        this.clickHandle = this.clickHandle.bind(this);
    }
    static defaultProps = {
        prefixCls: `${config.cls}-button`,
        size: false,
        inline: false,
        disabled: false,
        inactive: false,
        type: 'default',
        htmlType: null,
        loading: false,
        onClick() { },
        className: '',
        style: {
        },
        activeStyle: {
        },
        activeClassName: ''
    };

    static ButtonGroup = ButtonGroup;

    setActiveClassName(activeClassName?: string, type?: string): string {
        const activeClassNameIsNone: boolean = activeClassName === '';
        const className = classNames({
            [`${this.props.prefixCls}-active-${type}`]: activeClassNameIsNone,
            [`${activeClassName}`]: !activeClassNameIsNone
        });
        return className;
    }

    clickHandle() {
        const { onClick, loading, inactive, disabled } = this.props;
        if (loading || inactive || disabled) return;
        onClick && onClick();
    }

    render() {
        const { loading, inactive, children, className, prefixCls, type, size, inline, disabled, style, activeStyle, activeClassName, htmlType } = this.props;
        let btnClassNames: string = '';
        interface classType { [propName: string]: any };
        let classes: classType = {
            [`${prefixCls}-${size}`]: size,
            [`${prefixCls}-${type}`]: type !== '',
            [`${prefixCls}-disabled`]: disabled,
            [`${prefixCls}-inactive`]: inactive,
            [`${prefixCls}-loading`]: loading,
        };
        if (inline) {
            btnClassNames = classNames(
                prefixCls,
                `${prefixCls}-inline`,
                className,
                classes
            );
        } else {
            btnClassNames = classNames(
                prefixCls,
                className,
                classes
            );
        }
        return (
            <TouchFeedback
                activeStyle={activeStyle ? activeStyle : {}}
                activeClassName={this.setActiveClassName(activeClassName, type)}
                disabled={inactive || disabled || loading}
            >
                {
                    htmlType ?
                        <button
                            type={htmlType}
                            className={
                                btnClassNames
                            }
                            style={style}
                            onClick={this.clickHandle}
                        >
                            {loading && <Icon className={`${prefixCls}-loading-icon`} type='loading' />}
                            {children}
                        </button> :
                        <div
                            className={
                                btnClassNames
                            }
                            style={style}
                            onClick={this.clickHandle}
                        >
                            {loading && <Icon className={`${prefixCls}-loading-icon`} type='loading' />}
                            {children}
                        </div>
                }

            </TouchFeedback>
        );
    }
}