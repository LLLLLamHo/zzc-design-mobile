export interface ActionSheetProps {
    prefixCls?: string
    className?: string
    style?: React.CSSProperties
    bodyStyle?: React.CSSProperties
    isShow: boolean,
    title: string
    cancelText: string
    btnGrounp: Array<BtnItemProps>
    onClose?: Function
    maskClose?: boolean
}

export interface ActionSheetState {
    visible: boolean
}

export interface BtnItemProps {
    content: string | JSX.Element
    style: React.CSSProperties
    className: string
    type: 'default' | 'main' | 'error'
    onClick: Function
    autoClose: boolean
}
