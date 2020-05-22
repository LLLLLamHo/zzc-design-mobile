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
import {moreData} from '../MoreSelect/propsType';
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
    inputType?: 'text' | 'phone' | 'more*phone'
    phonePrefixList_cn?: Array<any>
    phonePrefixList_hk?: Array<any>
    morePhoneTitle: string
    morePhoneData: Array<moreData>
    onChange?: Function
    onBlur?: Function
    onFocus?: Function
    formInputOnChange?: Function
    formDeleteId?: Function
    formInputOnBlur?: Function
    formInputOnFocus?: Function
    maxLength?: number
    _zds_form_initValue?: Function
    setFormItemId?: Function
    formOpt?: getFieldDecoratorOption
    readOnly?: boolean
}

export interface InputState {
    phonePrefix: string
    morePhonePrefix: CurrMorePhoneSelectItemInfo | null
    morePhoneData: Array<moreData>
    morePhoneTitle: string
}
export interface InputSelectProps {
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
    selectData?: SelectProps
    onChange?: Function
    onBlur?: Function
    onFocus?: Function
    formInputOnChange?: Function
    formInputOnBlur?: Function
    formDeleteId?: Function
    formInputOnFocus?: Function
    _zds_form_initValue?: Function
    setFormItemId?: Function
    formOpt?: getFieldDecoratorOption
}
export interface InputSelectState {
    isShowSelect: boolean
}
export interface InputDatePickerProps {
    prefixCls: string,
    className: string,
    style: React.CSSProperties,
    id?: string
    name: string
    value?: any,
    defaultValue?: any
    placeholder?: string
    disabled?: boolean
    lang?: 'cn' | 'hk'
    datePickerData?: DatePickerProps
    timeFormat?: string
    onChange?: Function
    onBlur?: Function
    onFocus?: Function
    formInputOnChange?: Function
    formInputOnBlur?: Function
    formDeleteId?: Function
    formInputOnFocus?: Function
    _zds_form_initValue?: Function
    setFormItemId?: Function
    formOpt?: getFieldDecoratorOption
}
export interface InputDatePickerState {
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
    phonePrefix?: string | null
    selectData?: SelectProps
    value: string
}
export interface MorePhoneNumberPrefixState {
    openMorePhonePrefix: boolean
}
export interface MorePhoneNumberPrefixProps {
    currPrefix: CurrMorePhoneSelectItemInfo | null
    onChange: Function
    title: string
    data: Array<moreData>
}
export interface CurrMorePhoneSelectItemInfo {
    key: number
    subKey: number
    text: string
    type: string
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
    formDeleteId?: Function
    formInputOnChange?: Function
    formInputOnBlur?: Function
    formInputOnFocus?: Function
    setFormItemId?: Function
}

export interface TextareaState {
    focus?: boolean
    value?: string
}
export interface InputCode {
    prefixCls?: string
    className?: string   
    style: React.CSSProperties,
    id?: string
    name: string
    value?: any,
    defaultValue?: any
    placeholder?: string
    disabled?: boolean
    lang?: 'cn' | 'hk'
    onChange?: Function
    onBlur?: Function
    onFocus?: Function
    formInputOnChange?: Function
    formInputOnBlur?: Function
    formDeleteId?: Function
    formInputOnFocus?: Function
    _zds_form_initValue?: Function
    setFormItemId?: Function
    formOpt?: getFieldDecoratorOption
    sendText?:string
    handlerSendCode?:Function
}
export interface InputCodeState {
  sendText:string,
  isSend:boolean
}
