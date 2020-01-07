export type Prop = {
    label: string,
    value: string,
    children: string
}

export interface CascaderProps {
    prop: Prop,
    visible: boolean,
    options: Array<any>,
    onChange: Function,
    onClose: Function,
    title?: string
    // [prop: string]: any
}

export interface CascaderState {
    value: Array<any>,
    selected: Array<any>,
    tabsIndex: number,
    pickerData: Array<any>
}
