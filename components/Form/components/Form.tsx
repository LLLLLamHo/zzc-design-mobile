import React, { PureComponent } from 'react';
import { FormContext, FormItemContext, FormHOC } from './context';
import { FormComponentProps, getFieldDecoratorOption, rules } from '../propsType';
import { isArray, isString, isRegExp, isNumber } from '../../_util/typeof';

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
        this.validation = this.validation.bind(this);
        this.getAllData = this.getAllData.bind(this);
        this.formOnSubmit = this.formOnSubmit.bind(this);
        this.getFormComponent = this.getFormComponent.bind(this);
    }

    formComponent: HTMLFormElement | null = null;

    // 扩展给业务组件调用的函数
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
                validateTrigger: 'onBlur'
            };

            const newOpt = Object.assign(defaultOpt, opt);

            return (
                <FormItemContext.Consumer>
                    {(state) => {
                        const { formData } = this.state;
                        const changeFun = (value: any, formOpt: getFieldDecoratorOption) => {
                            state.formInputOnChange && state.formInputOnChange(id, value, this.setValue, formOpt);
                        };
                        const blurFun = (formOpt: getFieldDecoratorOption) => {
                            state.formInputOnBlur && state.formInputOnBlur(id, formOpt);
                        };
                        const focusFun = (formOpt: getFieldDecoratorOption) => {
                            state.formInputOnFocus && state.formInputOnFocus(id, formOpt);
                        };
                        const value = formData[id] != null ? formData[id]['value'] : newOpt.initialValue || '';

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
        initFormItemValue: (id: string, value: any, formOpt: getFieldDecoratorOption) => {
            this.initFormItemValue(id, value, formOpt);
        },
        // 外部设置form的值
        setFormAssignValue: (id: string, value: any): void => {
            this.setValue(id, value);
        },
        getFormAllData: () => {
            return this.getAllData()
        }
    }

    // 获取form原生对象
    getFormComponent(component: HTMLFormElement) {
        this.formComponent = component;
    }

    // 获取所有数据
    getAllData() {
        const { formData } = this.state;
        const ids = Object.keys(formData);
        const outputData = {};
        for (let i = 0; i < ids.length; i++) {
            const { value } = formData[ids[i]];
            outputData[ids[i]] = value;
        }
        return outputData;
    }

    // 初始化数据到表单中储存
    initFormItemValue(id: string, value: any, formOpt: getFieldDecoratorOption) {
        const { itemStatus, formData } = this.state;
        itemStatus[id] = {
            status: 'normal',
            message: '',
            errorRuleIndex: null
        }
        formData[id] = {
            value,
            ...formOpt
        };
        const newFormData = Object.assign({}, formData);
        const newItemStatusData = Object.assign({}, itemStatus);
        this.setState({
            formData: newFormData,
            itemStatus: newItemStatusData
        });
    }

    // 更新状态
    updateFormItemStatus(id: string, status: 'normal' | 'error', message?: string, errorRuleIndex?: number) {
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

    // 同步数据给表单
    setValue(id: string, value: any = ''): void {
        const { formData, itemStatus } = this.state;
        formData[id]['value'] = value;

        // 当前item如果是错误状态需要进行验证
        if (itemStatus[id]['status'] == 'error') {
            this.validation(id, value);
        }

        const newFormData = Object.assign({}, formData);
        this.setState({
            formData: newFormData
        });
    }

    // 验证操作
    validation(id: string, value?: any, rulesIndex?: number) {
        const { formData } = this.state;
        const itemInfo = formData[id];
        const { rules } = itemInfo;
        const validationValue = value || itemInfo.value;

        // 对当前发生错误的规则进行验证，一般用于在发生错误的input中输入
        if (rulesIndex) {
            const currRule = itemInfo.rules[rulesIndex];
            if (this.validationRule(validationValue, currRule)) {
                this.updateFormItemStatus(id, 'normal');
            }
        } else if (rules && isArray(rules)) {
            for (let i = 0; i < rules.length; i++) {
                const currRule = rules[i];
                // 必填
                if (!this.validationRule(validationValue, currRule)) {
                    this.updateFormItemStatus(id, 'error', currRule.message, i);
                    break;
                } else {
                    this.updateFormItemStatus(id, 'normal');
                }
            }
        }
    }

    // 验证规则
    validationRule(value: any, currRule: rules) {
        if ((isString(value) || isNumber(value)) && currRule.required && value == '') {
            return false;
        } else if ((isString(value) || isNumber(value)) && currRule.min && value.length < currRule.min) {
            return false;
        } else if ((isString(value) || isNumber(value)) && currRule.max && value.length > currRule.max) {
            return false;
        } else if ((isString(value) || isNumber(value)) && currRule.len && value.length != currRule.len) {
            return false;
        } else if (currRule.pattern && isRegExp(currRule.pattern)) {
            return currRule.pattern.test(value);
        }
        return true;
    }

    // 提交时间处理
    formOnSubmit() {
        // 验证所有数据
        const { formData } = this.state;
        const ids = Object.keys(formData);
        for (let i = 0; i < ids.length; i++) {
            this.validation(ids[i]);
        }
        const formAllData = this.getAllData();
        return formAllData;
    }

    render(): JSX.Element {
        const { children } = this.props;
        return (
            // 提供扩展方法给form标签
            <FormHOC.Provider value={{
                getFormComponent: this.getFormComponent,
                formOnSubmit: this.formOnSubmit
            }}>
                <FormContext.Provider value={{
                    // 提供函数给FormItem来调用form函数
                    itemStatus: this.state.itemStatus,
                    updateFormItemStatus: this.updateFormItemStatus,
                    validation: this.validation
                }}>
                    {React.cloneElement(children, { form: this.form })}
                </FormContext.Provider>
            </FormHOC.Provider>

        )
    }
}