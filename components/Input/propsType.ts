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

export interface lengthCtrProps {
    maxLength?:number
}

export interface resetDataProps {
    a: string
    b: number
}

export interface resetDataReturn {
    a: string //
    b: number
}