import React, { PureComponent } from 'react';
import { FormContext, FormItemContext } from './context';
import { FormComponentProps, getFieldDecoratorOption } from '../propsType';

export default class Form extends PureComponent<FormComponentProps, any> {
    constructor(props) {
        super(props);
        this.state = {
            formData: {},
            itemStatus: {}
        };
        this.updateFormItemStatus = this.updateFormItemStatus.bind(this);
        this.setValue = this.setValue.bind(this);
        this.initFormItemValue = this.initFormItemValue.bind(this);
    }

    formComponent: HTMLFormElement | null = null;

    form = {
        // 获取原生form表单对象
        getFormComponent: (): HTMLFormElement | null => {
            return this.formComponent;
        },
        // 将input托管给form
        getFieldDecorator: (id: string, opt: getFieldDecoratorOption, item: JSX.Element): JSX.Element => {
            // todo
            const defaultOpt = {
                initialValue: '',
                rules: [],
                trigger: 'onChange',
                validateTrigger: 'onChange'
            };

            const newOpt = Object.assign(defaultOpt, opt);

            return (
                <FormItemContext.Consumer>
                    {(state) => {
                        const { formData } = this.state;
                        const changeFun = (value: any, formOpt: getFieldDecoratorOption) => {
                            state.formInputOnChange && state.formInputOnChange(id, value, this.setValue, formOpt);
                        };
                        const blurFun = (value: any, formOpt: getFieldDecoratorOption) => {
                            state.formInputOnBlur && state.formInputOnBlur(id, value, formOpt);
                        };
                        const focusFun = (value: any, formOpt: getFieldDecoratorOption) => {
                            state.formInputOnFocus && state.formInputOnFocus(id, value, formOpt);
                        };
                        const value = formData[id] || newOpt.initialValue || '';

                        return React.cloneElement(item, {
                            ...state,
                            id,
                            formInputOnChange: changeFun,
                            formInputOnBlur: blurFun,
                            formInputOnFocus: focusFun,
                            _zds_form_initValue: this.initFormItemValue,
                            value,
                            formOpt: newOpt
                        });
                    }}
                </FormItemContext.Consumer>
            );
        },
        initFormItemValue: (id: string, value: any) => {
            this.initFormItemValue(id, value);
        },
        // 外部设置form的值
        setFormAssignValue: (id: string, value: any): void => {
            this.setValue(id, value);
        }
    }

    initFormItemValue(id: string, value: any) {
        const { itemStatus, formData } = this.state;
        itemStatus[id] = {
            status: 'normal',
            message: '',
            errorRuleIndex: null
        }
        formData[id] = value;
        const newFormData = Object.assign({}, formData);
        const newItemStatusData = Object.assign({}, itemStatus);
        this.setState({
            formData: newFormData,
            itemStatus: newItemStatusData
        });
    }

    updateFormItemStatus(id: string, status: 'normal' | 'error', message: string, errorRuleIndex: number) {
        const { itemStatus } = this.state;
        itemStatus[id] = {
            status,
            message,
            errorRuleIndex
        };
        const newItemStatusData = Object.assign({}, itemStatus);
        this.setState({
            itemStatus: newItemStatusData
        });
    }

    setValue(id: string, value: any = ''): void {
        const { formData } = this.state;
        formData[id] = value;
        const newFormData = Object.assign({}, formData);
        this.setState({
            formData: newFormData
        });
    }

    render(): JSX.Element {
        const { children, id } = this.props;
        return (

            <FormContext.Provider value={{
                itemStatus: this.state.itemStatus,
                updateFormItemStatus: this.updateFormItemStatus
            }}>
                <form id={id} ref={(form) => { this.formComponent = form }}>
                    {React.cloneElement(children, { form: this.form })}
                </form>
            </FormContext.Provider>
        )
    }
}