export interface PopupProps {
    prefixCls?: string,
    visible: boolean,
    style?: React.CSSProperties,
    bodyStyle?: React.CSSProperties,
    maskStyle?: React.CSSProperties,
    maskClose?: boolean,
    onClose?: Function,
    renderCallback?: Function,
    transparent?: boolean,
    direction?: string,
    preRender?: boolean
}
