/*
 * @Author: your name
 * @Date: 2020-01-06 12:11:06
 * @LastEditTime: 2020-01-06 13:57:52
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /zzc-design-mobile/components/Input/propsType.ts
 */
import { getFieldDecoratorOption } from '../Form/propsType';
import { SelectProps } from '../Select/propsType';
import { DatePickerProps } from '../DatePicker/propsType';
export interface InputProps {
    prefixCls: string,
    className: string,
    style: React.CSSProperties,
    selectBodyStyle: React.CSSProperties,
    id?: string
    name: string
    value?: any,
    defaultValue?: any
    placeholder?: string
    htmlType?: string
    disabled?: boolean
    showPhonePrefix?: boolean
    phonePrefix?: string
    selectData?: SelectProps
    lang?: 'cn' | 'hk'
    inputType?: 'text' | 'phone' | 'select' | 'time'
    datePickerData?: DatePickerProps
    timeFormat?: string
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
    isShowSelect: boolean
    isShowDatePicker: boolean
}

export interface PhoneNumberPrefixProps {
    lang: 'cn' | 'hk'
    currPrefix?: string
    phonePrefixList?: Array<any>
    onChange: Function
}
export interface PhoneNumberPrefixState {
    openMorePhonePrefix: boolean
}

export interface ChangePhonePrefixHandleProps {
    id: string,
    detail: string
}

export interface GetValueReturnObject {
    phonePrefix?: string
    selectData?: SelectProps
    value: string
}

export type SortEventHandle = React.FocusEvent<HTMLInputElement | HTMLTextAreaElement> | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> 
export type TextareaEventHandle = (val?:string, e?:SortEventHandle ) => void;

export interface TextareaProps {
    prefixCls?: string
    id?: string
    className?: string   
    value?: any,
    defaultValue?: string
    autoHeight?: boolean    
    count:number
    rows?:number
    style?:React.CSSProperties        
    maxLength?: number
    disabled?: boolean
    readonly?:boolean|string
    placeholder?: string
    onFocus?: TextareaEventHandle
    onChange?: TextareaEventHandle
    onBlur?: TextareaEventHandle
    
    _zds_form_initValue?: Function
    formOpt?: getFieldDecoratorOption
    formInputOnChange?: Function
    formInputOnBlur?: Function
    formInputOnFocus?: Function
    setFormItemId?: Function
}

export interface TextareaState {
    focus?: boolean
    value?: string
}
