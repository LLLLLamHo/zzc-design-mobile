import React, { PureComponent } from 'react';
import config from '../../_util/config';
import classnames from 'classnames';
import { FormItemProps, FormItemState, getFieldDecoratorOption } from '../propsType';
import { FormContext, FormItemContext } from './context';
import { isArray } from '../../_util/typeof';

class FormItem extends PureComponent<FormItemProps, FormItemState> {
    constructor(props) {
        super(props);
        this.state = {
            formInputOnChange: this.inputChange.bind(this),
            formInputOnBlur: this.inputBlur.bind(this),
            formInputOnFocus: this.inputFocus.bind(this),
        }
    }
    static defaultProps = {
        prefixCls: `${config.cls}-form-item`,
        className: '',
        style: {},
        htmlFor: null,
        colon: true,
        extra: null
    };
    validationTime: any = null;

    inputChange(id: string, value: any, noticeFormFn: Function, formOpt: getFieldDecoratorOption): void {
        if (formOpt.validateTrigger == 'onChange') {
            this.validationData(id, value, formOpt);
        }
        noticeFormFn(id, value);
    }

    inputBlur(id: string, value: any, formOpt: getFieldDecoratorOption): void {
        if (formOpt.validateTrigger == 'onBlur') {
            this.validationData(id, value, formOpt);
        }
    }

    inputFocus(id: string, value: any, formOpt: getFieldDecoratorOption): void {
        if (formOpt.validateTrigger == 'onFocus') {
            this.validationData(id, value, formOpt);
        }
    }

    validationData(id: string, value: any, formOpt: getFieldDecoratorOption) {
        if (this.validationTime) {
            clearTimeout(this.validationTime);
            this.validationTime = null;
        }
        this.validationTime = setTimeout(() => {
            this.validation(id, value, formOpt);
        }, 300);
    }

    validation(id: string, value: any, formOpt: getFieldDecoratorOption) {
        console.log(id)
        console.log(value)
        console.log(formOpt)
        const { formContext } = this.props;
        const { updateFormItemStatus } = formContext;
        const { rules } = formOpt;
        if ( rules && isArray(rules) ) {
            for ( let i = 0; i < rules.length; i++ ) {
                const currRule = rules[i];
                // 必填
                if ( currRule.required && value == '' ) {
                    updateFormItemStatus(id, 'error', currRule.message, i);
                    break;
                }
            }
        }
    }

    render(): JSX.Element {
        console.log(this.props.formContext);
        const { prefixCls, className, style, htmlFor, label, colon, children, extra } = this.props;
        const classname = classnames(prefixCls, className);
        return (
            <FormItemContext.Provider value={this.state}>
                <div className={classname} style={style}>
                    <label htmlFor={htmlFor}>{label}{colon && ':'}</label>
                    {children}
                    {extra && <div className={`${prefixCls}-extra-box`}>{extra}</div>}
                </div>
            </FormItemContext.Provider>
        )
    }
}

export default function(props) {
    return (
        <FormContext.Consumer>
            {(state) => {
                return (
                    <FormItem {...props} formContext={{...state}}/>
                )
            }}
        </FormContext.Consumer>
    )
}