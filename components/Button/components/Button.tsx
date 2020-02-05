import React, { PureComponent } from 'react';
import classNames from 'classnames';
import TouchFeedback from '../../TouchFeedback';
import config from '../../_util/config';
import ButtonGroup from './ButtonGroup';
import { ButtonProps } from '../propsType';
export default class Button extends PureComponent<ButtonProps, any> {
    constructor(props) {        
        super(props);
    }
    static defaultProps = {
        prefixCls: `${config.cls}-button`,
        size: false,
        inline: false,
        disabled: false,
        inactive: false,
        type: 'default',
        htmlType: null,
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

    render() {                
        const { inactive, children, className, prefixCls, type, size, inline, disabled, style, activeStyle, activeClassName, onClick, htmlType } = this.props;
        let btnClassNames: string = ''; 
        interface classType { [propName: string]: any };
            let classes: classType = {
                [`${prefixCls}-${size}`]: size,
                [`${prefixCls}-${type}`]: type !== '',                
                [`${prefixCls}-disabled`]: disabled,
                [`${prefixCls}-inactive`]: inactive
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
                disabled={inactive || disabled}
            >
                {
                    htmlType ?
                        <button
                            type={htmlType}
                            className={
                                btnClassNames
                            }
                            style={style}
                            onClick={onClick}
                        >
                            {children}
                        </button> :
                        <div
                            className={
                                btnClassNames
                            }
                            style={style}
                            onClick={onClick}
                        >
                            {children}
                        </div>
                }

            </TouchFeedback>
        );
    }
}