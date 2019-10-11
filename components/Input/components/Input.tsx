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

    componentDidMount(): void {
        // 渲染完成后，需要通知form组件记录value，完成数据绑定
        const { id, value, _zds_form_initValue, setFormItemId, formOpt } = this.props;
        if (_zds_form_initValue && isFunction(_zds_form_initValue)) {
            _zds_form_initValue(id, value, formOpt);
        }
        if (setFormItemId && isFunction(setFormItemId)) {
            setFormItemId(id);
        }
    }

    createInput() {
        const { prefixCls, className, htmlType, onChange, onBlur, onFocus, formInputOnChange, formInputOnBlur, formInputOnFocus, formOpt } = this.props;
        const inputClassName: string = classNames(
            prefixCls,
            className
        );
        const newProps = {
            ...this.props
        };
        delete newProps.prefixCls;
        delete newProps.className;
        delete newProps.htmlType;
        // 清楚一些托管到form中传入的的props
        delete newProps._zds_form_initValue;
        delete newProps.formOpt;
        delete newProps.formInputOnChange;
        delete newProps.formInputOnBlur;
        delete newProps.formInputOnFocus;
        delete newProps.setFormItemId;

        return (<input
            {...newProps}
            onChange={(e) => {
                if (formInputOnChange && isFunction(formInputOnChange)) {
                    formInputOnChange(e.target.value, formOpt || null);
                } else if (onChange && isFunction(onChange)) {
                    onChange(e);
                }
            }}
            onBlur={(e) => {
                if (formInputOnBlur && isFunction(formInputOnBlur)) {
                    formInputOnBlur( formOpt || null);
                } else if (onBlur && isFunction(onBlur)) {
                    onBlur(e);
                }
            }}
            onFocus={(e) => {
                if (formInputOnFocus && isFunction(formInputOnFocus)) {
                    formInputOnFocus( formOpt || null);
                } else if (onFocus && isFunction(onFocus)) {
                    onFocus(e);
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