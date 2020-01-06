import React, { PureComponent } from 'react';
import config from '../../_util/config';
import classnames from 'classnames';
import { FormItemProps, FormItemState, getFieldDecoratorOption } from '../propsType';
import { FormContext, FormItemContext } from './context';
import Icon from '../../Icon';

class FormItem extends PureComponent<FormItemProps, FormItemState> {
    constructor(props) {
        super(props);
        this.state = {
            status: 'blur'
        };
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
        colon: false,
        extra: null
    };
    inputId: Array<{id: string, inputType: string}> = [];
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
        this.changeItemStatus('blur');
    }

    inputFocus(id: string, formOpt: getFieldDecoratorOption): void {
        if (formOpt.validateTrigger == 'onFocus') {
            this.validationData(id);
        }
        this.changeItemStatus('focus');
    }

    private changeItemStatus(type: string): void {
        this.setState({
            status: type
        })
    }

    validationData(id: string) {
        if (this.validationTime) {
            clearTimeout(this.validationTime);
            this.validationTime = null;
        }
        this.validationTime = setTimeout(() => {
            const { formContext } = this.props;
            formContext.validation(id, null);
        }, 100);
    }

    // 设置当前的formItem是那个id所使用
    setFormItemId(id: string, type: string): void {
        // 兼容多个input的情况
        this.inputId.push({id, inputType: type});
    }

    getCurrFormItemStatus(itemStatus: Object): { isSuccess: boolean, isWarning: boolean, isError: boolean, message: string } {
        let isSuccess: boolean = false;
        let isWarning: boolean = false;
        let isError: boolean = false;
        let message: string = '';

        for (let i = 0; i < this.inputId.length; i++) {
            const currItemStatusData = itemStatus[this.inputId[i].id];
            if (currItemStatusData.status == 'success') {
                isSuccess = true;
                message = currItemStatusData.message;
            } else if (currItemStatusData.status == 'warning') {
                isSuccess = false;
                isWarning = true;
                message = currItemStatusData.message;
                break;
            } else if (currItemStatusData.status == 'error') {
                isWarning = false;
                isSuccess = false;
                isError = true;
                message = currItemStatusData.message;
                break;
            }
        }

        return {
            message,
            isSuccess,
            isWarning,
            isError
        }
    }

    // 获取当前formItem的状态
    getCurrFormItemClassName(statusData: { isSuccess: boolean, isWarning: boolean, isError: boolean, message: string }): string {        
        const { prefixCls } = this.props;
        const { isError, isSuccess, isWarning } = statusData;
        const { status } = this.state;

        return classnames(`${prefixCls}-box`, {
            [`${prefixCls}-box-focus`]: status == 'focus',
            [`${prefixCls}-box-error`]: isError,
            [`${prefixCls}-box-success`]: isSuccess,
            [`${prefixCls}-box-warning`]: isWarning,
        });
    }

    render(): JSX.Element {
        const { prefixCls, className, style, htmlFor, label, colon, children, extra } = this.props;
        let classname = classnames(prefixCls, className);

        // 错误样式
        const { itemStatus } = this.props.formContext;
        const currFormItemStatusData = this.getCurrFormItemStatus(itemStatus);
        const itemBoxClassName = this.getCurrFormItemClassName(currFormItemStatusData);

        return (
            <FormItemContext.Provider value={{
                formInputOnChange: this.inputChange,
                formInputOnBlur: this.inputBlur,
                formInputOnFocus: this.inputFocus,
                setFormItemId: this.setFormItemId
            }}>
                <div className={itemBoxClassName}>
                    <div className={`${config.cls}-form-item-line`}>
                        <div className={classname} style={style}>
                            {label && <label htmlFor={htmlFor}>{label}{colon && ':'}</label>}
                            {children}
                            {extra && <div className={`${prefixCls}-extra-box`}>{extra}</div>}
                        </div>
                    </div>
                    {
                        currFormItemStatusData && currFormItemStatusData.isError && <div className={`${prefixCls}-error-box`}>
                            <Icon type="warning_outline" />
                            <p>{currFormItemStatusData.message}</p>
                        </div>
                    }
                    {
                        currFormItemStatusData && currFormItemStatusData.isWarning && <div className={`${prefixCls}-warning-box`}>
                            <Icon type="warning_outline" />
                            <p>{currFormItemStatusData.message}</p>
                        </div>
                    }
                    {
                        currFormItemStatusData && currFormItemStatusData.isSuccess && <div className={`${prefixCls}-success-box`}>
                            <Icon type="success_outline" />
                            <p>{currFormItemStatusData.message}</p>
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