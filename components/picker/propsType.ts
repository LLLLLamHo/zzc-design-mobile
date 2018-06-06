export interface PickerProps {
    prefixCls?: string
    className?: string
    style?: React.CSSProperties
    pickerData?: Array<PickerData>
    scrollData?: any
    renderAfter?: Function
    onTouchEnd?: Function
    onTouchStart?: Function
}

export interface PickerWrapperProps {
    prefixCls?: string
    wrapperIndex?: number
    initBScrollCallback: Function
    wrapperKey?: string
    data?: any
    onTouchEnd?: Function
    onTouchStart?: Function
}

export declare type PickerData = {
    className?: string
    itemClassName?: string
    selectIndex?: number
    listData?: Array<ListData>
};

export declare type ListData = {
    text?: string
    dataKey?: string
};