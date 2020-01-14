import React, { PureComponent } from 'react';
import config from '../../_util/config';
import classnames from 'classnames';
import { FormItemProps, FormItemState, getFieldDecoratorOption } from '../propsType';
import { FormContext, FormItemContext } from './context';
import Icon from '../../Icon';
import { isFunction } from '../../_util/typeof';

class FormItem extends PureComponent<FormItemProps, FormItemState> {
    constructor(props) {
        super(props);
        this.state = {
            status: 'blur',
            clearBtnStatus: false
        };
        this.inputChange = this.inputChange.bind(this)
        this.inputBlur = this.inputBlur.bind(this)
        this.inputFocus = this.inputFocus.bind(this)
        this.setFormItemId = this.setFormItemId.bind(this)
        this.clearTextInputValue = this.clearTextInputValue.bind(this)
    }
    private delayHideClearBtnTimer;
    static defaultProps = {
        prefixCls: `${config.cls}-form-item`,
        className: '',
        style: {},
        htmlFor: null,
        colon: false,
        extra: null,
        clearBtn: false
    };
    inputId: Array<{ id: string, inputType: string }> = [];
    validationTime: any = null;

    inputChange(id: string, value: any, noticeFormFn: Function, formOpt: getFieldDecoratorOption): void {
        if (formOpt.validateTrigger == 'onChange') {
            this.validationData(id);
        }
        // 单独触发formOnBlur
        if ( formOpt.formOnChange && isFunction(formOpt.formOnChange) ) {
            formOpt.formOnChange(value);
        }
        noticeFormFn(id, value);
    }

    inputBlur(id: string, formOpt: getFieldDecoratorOption): void {
        if (formOpt.validateTrigger == 'onBlur') {
            this.validationData(id);
        }
        // 单独触发formOnBlur
        if ( formOpt.formOnBlur && isFunction(formOpt.formOnBlur) ) {
            formOpt.formOnBlur();
        }
        this.changeItemStatus('blur');
    }

    inputFocus(id: string, formOpt: getFieldDecoratorOption): void {
        if (formOpt.validateTrigger == 'onFocus') {
            this.validationData(id);
        }
        // 单独触发formOnFocus
        if ( formOpt.formOnFocus && isFunction(formOpt.formOnFocus) ) {
            formOpt.formOnFocus();
        }
        this.changeItemStatus('focus');
    }

    private changeItemStatus(type: 'focus' | 'blur'): void {
        this.delayHideClearBtnTimer && clearTimeout(this.delayHideClearBtnTimer);
        this.setState({
            status: type,
            clearBtnStatus: type == 'focus' ? true : this.state.clearBtnStatus
        }, () => {
            if (this.state.status == 'blur') {
                // 同步设置clearBtnStatus为false会导致无法点击，需要延迟更改
                this.delayHideClearBtnTimer = setTimeout(() => {
                    this.setState({
                        clearBtnStatus: false
                    })
                }, 200);
            }

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
        this.inputId.push({ id, inputType: type });
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

    private checkIsShowClearBtn(): boolean {
        const { formContext } = this.props;
        const { formData } = formContext;
        for (let i = 0; i < this.inputId.length; i++) {
            if (this.inputId[i].inputType == 'text' && formData[this.inputId[i].id].value != null && formData[this.inputId[i].id].value != '') {
                return true;
            }
        }
        return false;
    }

    private clearTextInputValue() {
        const { formContext } = this.props;
        const { formData, setValue } = formContext;
        for (let i = 0; i < this.inputId.length; i++) {
            if (this.inputId[i].inputType == 'text' && formData[this.inputId[i].id].value != null && formData[this.inputId[i].id].value != '') {
                setValue(this.inputId[i].id, '');
                this.validationData(this.inputId[i].id);
            }
        }
    }

    render(): JSX.Element {
        const { prefixCls, className, style, htmlFor, label, colon, children, extra, clearBtn, onClick } = this.props;
        const { clearBtnStatus } = this.state;
        let classname = classnames(prefixCls, className);
        // 错误样式
        const { itemStatus } = this.props.formContext;
        const currFormItemStatusData = this.getCurrFormItemStatus(itemStatus);
        const itemBoxClassName = this.getCurrFormItemClassName(currFormItemStatusData);

        const isShowClearBtn = clearBtn ? this.checkIsShowClearBtn() : false;

        return (
            <FormItemContext.Provider value={{
                formInputOnChange: this.inputChange,
                formInputOnBlur: this.inputBlur,
                formInputOnFocus: this.inputFocus,
                setFormItemId: this.setFormItemId
            }}>
                <div className={itemBoxClassName} onClick={() => {onClick && isFunction(onClick) && onClick()}}>
                    <div className={`${config.cls}-form-item-line`}>
                        <div className={classname} style={style}>
                            {label && <label htmlFor={htmlFor}>{label}{colon && ':'}</label>}
                            {children}
                            {clearBtn && isShowClearBtn && clearBtnStatus && <div onClick={this.clearTextInputValue} className={`${prefixCls}-extra-box`}><Icon className='clear-input-btn' type='error_fill' /></div>}
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