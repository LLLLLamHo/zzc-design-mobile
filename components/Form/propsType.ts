export interface FormProps {
    prefixCls?: string,
    className?: string,
    onSubmit?: Function
}

export interface FormComponentProps {
    id?: string,
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
    validation: Function
}

export interface FormItemState {
    formInputOnChange: Function
    formInputOnBlur: Function
    formInputOnFocus: Function
}

export interface getFieldDecoratorOption {
    isShowSuccess?: boolean
    grounp?: string
    successText?: String
    initialValue?: any
    rules?: Array<rules>
    validateTrigger?: 'onChange' | 'onFocus' | 'onBlur',
}

export interface rules{
    validationType?: 'error' | 'warning'
    required?: boolean
    message?: string
    len?: number
    max?: number
    min?: number
    pattern?: RegExp
    validationFn?: Function
}
