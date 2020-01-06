import {getFieldDecoratorOption} from '../Form/propsType';
export interface RadioProps {
    prefixCls: string,
    className: string,
    style: React.CSSProperties,
    id: string
    name: string
    defaultChecked?: boolean,
    checked?: boolean,
    value?: string,
    disabled?: boolean
    radioType?: string
    onChange?: Function
    formInputOnChange?: Function
    formInputOnBlur?: Function
    formInputOnFocus?: Function
    _zds_form_initValue?: Function
    setFormItemId?: Function
    formOpt?: getFieldDecoratorOption
}

export interface RadioGrounpProps {
    prefixCls: string,
    className: string,
    style: React.CSSProperties,
    name: string
    value?: string
    defaultValue?: string
    disabled?: boolean
    radioType?: string
    onChange?: Function
    id?: 'string'
    formInputOnChange?: Function
    formInputOnBlur?: Function
    formInputOnFocus?: Function
    maxLength?: number
    _zds_form_initValue?: Function
    setFormItemId?: Function
    formOpt?: getFieldDecoratorOption
}

export interface RadioGrounpState{
    _value: string
}

export interface createCheckPropsReturn{
    currChecked: boolean, 
    checkProps: any
}