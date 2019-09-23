export interface ListProps {
    prefixCls?: string,
    className?: string,
    style?: React.CSSProperties
}
export interface ListItemProps {
    prefixCls?: string,
    className?: string,
    style?: React.CSSProperties
    title?: string | JSX.Element
    extra?: string | JSX.Element | null
    align?: 'center' | 'top' | 'bottom'
    extraClick?: Function
    onClick?: Function
}