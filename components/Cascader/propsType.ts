export type Prop = {
    label: string,
    value: string,
    children: string
}

export interface CascaderProps {
    value?: Array<any>,
    defaultValue?: Array<any>,
    prop?: Prop,
    visible: boolean,
    options: Array<any>,
    onChange: Function,
    onClose: Function,
    title?: string
    // [prop: string]: any
}

export interface CascaderState {
    value: Array<any>
    selectedLabel: Array<any>
    selectedOptions: Array<any>
    tabsIndex: number
    pickerData: Array<any>
}
