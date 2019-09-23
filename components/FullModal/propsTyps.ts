
export interface FullModalProps {
    prefixCls?: string
    className?: string
    title?: string
    visible: boolean
    closeCallback: Function
    BScrollInitCallback: Function
    style?: React.CSSProperties
    isUseBScroll?: boolean
    BScrollOpt?: Object
}