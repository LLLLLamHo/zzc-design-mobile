import React, { PureComponent } from 'react';
import config from '../../_util/config';
import classnames from 'classnames';
import { FormItemProps, FormItemState, getFieldDecoratorOption } from '../propsType';
import { FormContext, FormItemContext } from './context';
import Icon from '../../Icon';

class FormItem extends PureComponent<FormItemProps, FormItemState> {
    constructor(props) {
        super(props);
        this.inputChange = this.inputChange.bind(this)
        this.inputBlur = this.inputBlur.bind(this)
        this.inputFocus = this.inputFocus.bind(this)
        this.setFormItemId = this.setFormItemId.bind(this)
    }
    static defaultProps = {
        prefixCls: `${config.cls}-form-item`,
        className: '',
        style: {},
        htmlFor: null,
        colon: true,
        extra: null
    };
    inputId: string | null = null;
    validationTime: any = null;

    inputChange(id: string, value: any, noticeFormFn: Function, formOpt: getFieldDecoratorOption): void {
        if (formOpt.validateTrigger == 'onChange') {
            this.validationData(id);
        }
        noticeFormFn(id, value);
    }

    inputBlur(id: string, formOpt: getFieldDecoratorOption): void {
        if (formOpt.validateTrigger == 'onBlur') {
            this.validationData(id);
        }
    }

    inputFocus(id: string, formOpt: getFieldDecoratorOption): void {
        if (formOpt.validateTrigger == 'onFocus') {
            this.validationData(id);
        }
    }

    validationData(id: string) {
        if (this.validationTime) {
            clearTimeout(this.validationTime);
            this.validationTime = null;
        }
        this.validationTime = setTimeout(() => {
            const { formContext } = this.props;
            formContext.validation(id);
        }, 100);
    }

    setFormItemId(id: string): void {
        this.inputId = id;
    }

    render(): JSX.Element {
        const { prefixCls, className, style, htmlFor, label, colon, children, extra } = this.props;
        let classname = classnames(prefixCls, className);
        // 错误样式
        const { itemStatus } = this.props.formContext;
        let currItemStatus = this.inputId ? itemStatus[this.inputId] : null;
        let itemBoxClassName = classnames(`${prefixCls}-box`);
        if ( currItemStatus ) {
            itemBoxClassName = classnames(itemBoxClassName, {
                [`${prefixCls}-box-error`]: currItemStatus.status == 'error'
            });
        }
        return (
            <FormItemContext.Provider value={{
                formInputOnChange: this.inputChange,
                formInputOnBlur: this.inputBlur,
                formInputOnFocus: this.inputFocus,
                setFormItemId: this.setFormItemId
            }}>
                <div className={itemBoxClassName}>
                    <div className={classname} style={style}>
                        {label && <label htmlFor={htmlFor}>{label}{colon && ':'}</label>}
                        {children}
                        {extra && <div className={`${prefixCls}-extra-box`}>{extra}</div>}
                    </div>
                    {
                        currItemStatus && currItemStatus.status == 'error' && <div className={`${prefixCls}-error-box`}>
                            <Icon type="warning_outline" />
                            <p>{currItemStatus.message}</p>
                        </div>
                    }
                </div>

            </FormItemContext.Provider>
        )
    }
}

export default function (props) {
    return (
        <FormContext.Consumer>
            {(state) => {
                return (
                    <FormItem {...props} formContext={{ ...state }} />
                )
            }}
        </FormContext.Consumer>
    )
}