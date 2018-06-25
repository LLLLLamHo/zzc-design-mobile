export interface LoadingProps {
    prefixCls?: string
    className?: string
    visible: boolean
    style?: React.CSSProperties
    maskStyle?: React.CSSProperties
    closeCallback?: Function
    text: ''
}

export interface LoadingState {
    visible: boolean
}