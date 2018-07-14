export interface ImageViewProps {
    prefixCls?: string
    className?: string
    visible: boolean
    style?: React.CSSProperties
    imageList?: Array<any>
    defaultIndex?: number
    onClose?: Function
    onChange?: Function
    swipeable?: boolean
    animate?: boolean
}