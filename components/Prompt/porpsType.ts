export interface PromptProps {
    prefixCls?: string,
    style?: React.CSSProperties,
    className?: string,
    mode?: 'info' | 'click' | 'info*click'
    contextText?: string
    lineClamp?: number
    type?: 'warn' | 'success'
    onClick?: Function
}
