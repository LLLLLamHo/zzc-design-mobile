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