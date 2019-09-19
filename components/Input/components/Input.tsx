import React, { PureComponent } from 'react';
import classNames from 'classnames';
import config from '../../_util/config';
import { InputProps } from '../propsType';
import { isFunction } from '../../_util/typeof';

export default class Input extends PureComponent<InputProps, any> {
    constructor(props) {
        super(props);
    }
    static defaultProps = {
        prefixCls: `${config.cls}-input`,
        className: '',
        style: {},
        htmlType: 'text',
        name: null,
        id: null,
        placeholder: '',
        disabled: false,
    };

    createInput() {
        const { prefixCls, className, htmlType, onChange, onBlur, onFocus } = this.props;
        
        const inputClassName: string = classNames(
            prefixCls,
            className
        );

        const newProps = {
            ...this.props,
        };

        delete newProps.prefixCls;
        delete newProps.className;
        delete newProps.htmlType;
        return (<input
            {...newProps}
            onChange={(e) => {
                if (onChange && isFunction(onChange)) {
                    onChange(e)
                }
            }}
            onBlur={(e) => {
                if (onBlur && isFunction(onBlur)) {
                    onBlur(e)
                }
            }}
            onFocus={(e) => {
                if (onFocus && isFunction(onFocus)) {
                    onFocus(e)
                }
            }}
            type={htmlType}
            className={inputClassName}
        />)
    }

    render(): JSX.Element {
        return this.createInput()
    }
}