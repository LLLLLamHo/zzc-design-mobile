import {getFieldDecoratorOption} from '../Form/propsType';
export interface InputProps {
    prefixCls: string,
    className: string,
    style: React.CSSProperties,
    id?: string
    name: string
    value?: any,
    defaultValue?: any
    placeholder?: string
    htmlType?: string
    disabled?: boolean
    showPhonePrefix?: boolean
    phonePrefix?: string
    lang?: 'cn' | 'hk'
    inputType?: 'phone'
    phonePrefixList_cn?: Array<any>
    phonePrefixList_hk?: Array<any>
    onChange?: Function
    onBlur?: Function
    onFocus?: Function
    formInputOnChange?: Function
    formInputOnBlur?: Function
    formInputOnFocus?: Function
    maxLength?: number
    _zds_form_initValue?: Function
    setFormItemId?: Function
    formOpt?: getFieldDecoratorOption
}

export interface InputState {
    phonePrefix: string
}

export interface PhoneNumberPrefixProps{
    lang: 'cn' | 'hk'
    currPrefix?: string
    phonePrefixList?: Array<any>
    onChange: Function
}
export interface PhoneNumberPrefixState{
    openMorePhonePrefix: boolean
}

export interface ChangePhonePrefixHandleProps {
    id: string,
    detail: string
}

export interface GetValueReturnObject {
    phonePrefix: string
    value: string
}