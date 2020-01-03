export interface SelectProps {
    prefixCls?: string
    className?: string
    style?: React.CSSProperties
    isShow: boolean,
    onClose?: Function
    title?: string | JSX.Element
    data: Array<data>
    onChange: Function
    maskClose?: boolean
}

export interface data {
    text: string | JSX.Element
    type: 'normal' | 'active' | 'disabled'
    value: any
}

export interface SelectState {
    visible: boolean
}

export interface SelectOnChangeProps extends data {
    key: number
}

