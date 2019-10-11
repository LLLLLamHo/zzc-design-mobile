export interface FormProps {
    prefixCls?: string,
    className?: string,
}

export interface FormComponentProps {
    id?: string,
    opt?: string,
    children: JSX.Element
}

export interface FormItemProps {
    prefixCls?: string,
    className?: string,
    children: JSX.Element
    style?: React.CSSProperties
    htmlFor?: string
    label?: string
    colon?: boolean
    extra?: JSX.Element | string | null
    formContext: FormContext
}

export interface FormContext {
    itemStatus: any,
    updateFormItemStatus: Function
}

export interface FormItemState {
    formInputOnChange: Function
    formInputOnBlur: Function
    formInputOnFocus: Function
}

export interface getFieldDecoratorOption {
    initialValue?: any
    rules?: Array<rules>
    validateTrigger?: 'onChange' | 'onFocus' | 'onBlur',
}

export interface rules{
    required?: boolean
    message?: string
    len?: number
    max?: number
    min?: number
    pattern?: RegExp
}
