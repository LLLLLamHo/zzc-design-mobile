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
    clearBtn?: boolean
    extra?: JSX.Element | string | null
    formContext: FormContext
    onClick?: Function
}

export interface FormContext {
    itemStatus: any,
    formData: any,
    updateFormItemStatus: Function
    validation: Function
    setValue: Function
}

export interface FormItemState {
    status: string
    clearBtnStatus: boolean
}

export interface getFieldDecoratorOption {
    isShowSuccess?: boolean
    grounp?: string
    successText?: String
    initialValue?: any
    rules?: Array<rules>
    formOnChange?: Function
    formOnBlur?: Function
    formOnFocus?: Function
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
