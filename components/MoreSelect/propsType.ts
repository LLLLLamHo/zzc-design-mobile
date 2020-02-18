export interface MoreSelectProps {
    prefixCls?: string
    className?: string
    style?: React.CSSProperties
    bodyStyle?: React.CSSProperties
    isShow: boolean,
    onClose?: Function
    title?: string | JSX.Element
    data: Array<moreData>
    onChange: Function
    maskClose?: boolean
}

export interface moreData {
    title: string
    list: Array<data>
}

export interface data {
    text: string | JSX.Element
    type: 'normal' | 'active' | 'disabled'
    value: any
    click: Function
}

export interface MoreSelectState {
    visible: boolean
}

export interface MoreSelectOnChangeProps extends data {
    key: number
}

