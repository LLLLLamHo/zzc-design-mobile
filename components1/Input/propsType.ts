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
    maxLength?: number
}