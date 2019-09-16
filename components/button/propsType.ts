export interface ButtonProps {
    prefixCls?: string,
    size?: string,
    inline?: boolean,
    disabled?: boolean,
    inactive?: boolean,
    type?: string,
    onClick?: any,
    className?: string,
    style?: React.CSSProperties,
    activeStyle?: React.CSSProperties,
    activeClassName?: string
}

export interface ButtonGroupProps {
    prefixCls?: string,
    className?: string,
    style?: React.CSSProperties,
    direction?: string
}