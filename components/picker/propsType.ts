export interface PickerProps {
    prefixCls?: string
    className?: string
    style?: React.CSSProperties
    pickerData?: Array<PickerData>
    renderAfter?: Function
    onTouchEnd?: Function
    onTouchStart?: Function
    height: number | 187
}

export interface PickerWrapperProps {
    prefixCls?: string
    wrapperIndex?: number
    initBScrollCallback: Function
    wrapperKey?: string
    type?: string
    data?: any
    onTouchEnd?: Function
    onTouchStart?: Function
    height: number | 187
}

export declare type PickerData = {
    className?: string
    itemClassName?: string
    selectIndex?: number
    listData?: Array<ListData>
    scrollData?: Object
    scrollType?: string
};

export declare type ListData = {
    text?: string
    dataKey?: string
};