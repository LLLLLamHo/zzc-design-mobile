export interface SkeletonProps {
    prefixCls: string
    className: string
    style: React.CSSProperties
}

export interface SkeletonBoxProps {
    prefixCls: string
    className: string
    style: React.CSSProperties
    justify?: string
    align?: string
    direction?: "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "row" | "column" | "column-reverse" | "row-reverse"
}
export interface SkeletonItemProps {
    prefixCls: string
    className: string
    style: React.CSSProperties
    height?: string
    width?: string
}