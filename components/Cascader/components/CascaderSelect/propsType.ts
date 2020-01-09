export type Prop = {
    label: string,
    value: string,
    children: string
}

export interface SelectProps {
    onChange: Function,
    className?: string,
    style?: object,
    value?: Array<any>
}

export interface SelectOptionProps {
    disabled?: boolean,
    label: string, 
    value: string | number,
    prefixCls?: string,
    style?: object,
    [prop: string]: any
}

export interface SelectState {
    value?: Array<any>
}
