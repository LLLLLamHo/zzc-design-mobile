import React, { PureComponent } from 'react';
import { FormContext, FormItemContext, FormHOC } from './context';
import { FormComponentProps, getFieldDecoratorOption, rules } from '../propsType';
import { isArray, isString, isRegExp, isNumber, isObject, isFunction } from '../../_util/typeof';

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
        this.deleteFormStateId = this.deleteFormStateId.bind(this);
    }

    formComponent: HTMLFormElement | null = null;
    private onValuesChange?: Function;

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
                validateTrigger: 'onBlur',
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
                        
                        const value = formData[id] != null ? this.getFormInputData(id) : newOpt.initialValue != null ? newOpt.initialValue : '';
                        const consumerValue = isObject(value) ? { ...value } : { value: value };
                        return React.cloneElement(item, {
                            ...state,
                            id,
                            formDeleteId: this.deleteFormStateId,
                            formInputOnChange: changeFun,
                            formInputOnBlur: blurFun,
                            formInputOnFocus: focusFun,
                            _zds_form_initValue: this.initFormItemValue,
                            formOpt: newOpt,
                            ...consumerValue,
                        });
                    }}
                </FormItemContext.Consumer>
            );
        },
        initFormItemValue: (id: string, value: any, formOpt: getFieldDecoratorOption) => {
            this.initFormItemValue(id, value, formOpt);
        },
        // 外部设置form的值
        setFormAssignValue: (id: string, value: any, isValidation: boolean = false): void => {
            this.setValue(id, value, isValidation);
        },
        getFormAllData: () => {
            return this.getAllData()
        },
        // 绑定form表单值变更是回调函数
        onValuesChange: (fn: Function): void => {
            this.onValuesChange = fn;
        },
        validateField: (id: string, cb: Function) => {
            this.validateField(id, cb);
        }
    }

    // 删除对应form内部状态
    deleteFormStateId(id: string): void {
        const { formData, itemStatus } = this.state;
        delete formData[id];
        delete itemStatus[id];
        this.setState({
            formData, itemStatus
        });
    }

    // 获取form原生对象
    getFormComponent(component: HTMLFormElement) {
        this.formComponent = component;
    }

    // 获取所有数据
    getAllData() {
        const { formData, itemStatus } = this.state;
        const ids = Object.keys(formData);
        const outputData = {};
        let errList: any = null;
        for (let i = 0; i < ids.length; i++) {
            const { value, submitFormat } = formData[ids[i]];
            const { status } = itemStatus[ids[i]];
            if (status == 'error') {
                errList = errList ? errList : {};
                if (!errList[ids[i]]) {
                    errList[ids[i]] = {};
                }
                errList[ids[i]] = { ...itemStatus[ids[i]] };
                errList[ids[i]].value = value;
            }

            if (!outputData[ids[i]]) {
                outputData[ids[i]] = {};
            }
            outputData[ids[i]] = { ...itemStatus[ids[i]] };
            
            // 当配置submitFormat的时候，会根据submitFormat返回设置value
            if ( submitFormat && isFunction(submitFormat) ) {
                outputData[ids[i]].value = submitFormat(value)
            } else {
                outputData[ids[i]].value = value;
            }
        }
        return { errList, outputData };
    }

    // 获取表单数据中的值
    getFormInputData(id: string): any {
        const { formData } = this.state;
        return formData[id]['value'];
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
    updateFormItemStatus(id: string, status: 'normal' | 'error' | 'success', message?: string, errorRuleIndex?: number) {
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
    setValue(id: string, value: any = '', isValidation?: boolean): void {
        const { formData, itemStatus } = this.state;
        formData[id]['value'] = value;

        // 当前item如果是错误状态需要进行验证
        if (isValidation || itemStatus[id]['status'] == 'error') {
            this.validation(id, value);
        }

        const newFormData = Object.assign({}, formData);
        this.setState({
            formData: newFormData
        }, () => {
            if (this.onValuesChange && isFunction(this.onValuesChange)) {
                this.onValuesChange(id, value);
            }
        });
    }

    private grounpValidation(currId: string, grounpName: string): void {
        const { formData } = this.state;
        const ids: Array<string> = Object.keys(formData);
        for (let i = 0; i < ids.length; i++) {

            if (ids[i] == currId) continue;

            const item = formData[ids[i]];
            const { grounp, rules, isShowSuccess, successText, value } = item;

            if (grounp == null) continue;

            const validationValue = value;
            if (grounp == grounpName) {
                if (rules && isArray(rules)) {
                    for (let n = 0; n < rules.length; n++) {
                        const currRule = rules[n];
                        const validationType = rules[n].validationType || 'error';
                        // 必填
                        if (!this.validationRule(validationValue, currRule)) {
                            this.updateFormItemStatus(ids[i], validationType, currRule.message, n);
                            return;
                        } else {
                            this.updateFormItemStatus(ids[i], 'normal');
                        }
                    }
                    // 最终验证完成没有错误，当配置了成功提示，那么将显示成功提示
                    if (isShowSuccess && successText != '') {
                        this.updateFormItemStatus(ids[i], 'success', successText);
                    }
                }
            }
        }
    }

    // 验证操作
    validation(id: string, value: any, type: string = 'update') {
        const { formData } = this.state;
        const itemInfo = formData[id];
        const { rules, isShowSuccess, successText } = itemInfo;
        const validationValue = value || itemInfo.value;

        if (rules && isArray(rules)) {
            for (let i = 0; i < rules.length; i++) {
                const currRule = rules[i];
                const validationType = rules[i].validationType || 'error';
                // 必填
                if (!this.validationRule(validationValue, currRule)) {
                    this.updateFormItemStatus(id, validationType, currRule.message, i);
                    return;
                } else {
                    this.updateFormItemStatus(id, 'normal');
                }
            }
            // 最终验证完成没有错误，当配置了成功提示，那么将显示成功提示
            if (isShowSuccess && successText != '') {
                this.updateFormItemStatus(id, 'success', successText);
            }
        }

        // 当前item验证通过后，进入分组验证
        // 当前Item有设置分组，那么将查询form数据中同组的数据进行验证
        // submit情况下不需要同组验证
        if (itemInfo.grounp != null && type != 'submit') {
            this.grounpValidation(id, itemInfo.grounp);
        }
    }

    validateField(id: string, callback: Function) {
        const { formData } = this.state;
        const itemInfo = formData[id];
        const { successText } = itemInfo;
        if (typeof callback === 'function') {
            const error = callback(itemInfo);
            if (error) {
                this.updateFormItemStatus(id, 'error', error);
            }
            else {
                this.updateFormItemStatus(id, 'success', successText);
            }
        }
    }

    // 验证规则
    validationRule(value: any, currRule: rules): boolean {
        if (currRule.required && (value == '' || value === null || value == undefined)) {
            return false;
        } else {
            // 除了required之外，其他验证规则只有value在非空的情况下才进行验证
            if ( value == '' || value === null || value == undefined ) return true;

            if ((isString(value) || isNumber(value)) && currRule.min && value.length < currRule.min) {
                return false;
            } else if ((isString(value) || isNumber(value)) && currRule.max && value.length > currRule.max) {
                return false;
            } else if ((isString(value) || isNumber(value)) && currRule.len && value.length != currRule.len) {
                return false;
            } else if (currRule.pattern && isRegExp(currRule.pattern)) {
                return currRule.pattern.test(value);
            } else if (currRule.validationFn && isFunction(currRule.validationFn)) {
                return currRule.validationFn(value);
            }
        }
        return true;
    }

    // 提交时间处理
    formOnSubmit() {
        // 验证所有数据
        const { formData } = this.state;
        const ids = Object.keys(formData);
        for (let i = 0; i < ids.length; i++) {
            this.validation(ids[i], null, 'submit');
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
                    setValue: this.setValue,
                    formData: this.state.formData,
                    updateFormItemStatus: this.updateFormItemStatus,
                    validation: this.validation
                }}>
                    {React.cloneElement(children, { form: this.form })}
                </FormContext.Provider>
            </FormHOC.Provider>

        )
    }
}