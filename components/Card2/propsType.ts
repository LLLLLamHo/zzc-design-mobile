export interface CardProps {
    prefixCls?: string,
    className?: string,
    style?: React.CSSProperties
}
export interface CardHeaderProps {
    prefixCls?: string,
    className?: string,
    style?: React.CSSProperties
    title?: string | JSX.Element
    extra?: string | JSX.Element
    align?: 'center' | 'top' | 'bottom'
    extraClick?: Function
    onClick?: Function
}
export interface CardBodyProps {
    prefixCls?: string,
    className?: string,
    style?: React.CSSProperties
}