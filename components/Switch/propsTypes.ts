export interface SwitchProps {
    prefixCls: string
    className: string
    style: React.CSSProperties
    checked?:boolean
    disabled?: boolean
    onChange?: Function
    unCheckedChildren: React.ReactNode
    checkedChildren: React.ReactNode
    onClick?: Function
}
export interface SwitchState {
    checked: boolean
}
