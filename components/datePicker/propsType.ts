export interface DatePickerProps {
    prefixCls?: string
    className?: string
    style?: React.CSSProperties
    onChange?: Function
    mode?: 'date' | 'time' | 'datetime' | 'year' | 'month'
    minDate?: string
    maxDate?: string
    selectTime?: Date,
    lang?: 'cn' | 'hk'
}

export interface DatePickerState {
    yearList: ListItem | any
    monthList: ListItem | any
    dayList: ListItem | any
    hourList: ListItem | any
    minuteList: ListItem | any
    langData: any
}

export declare type ListItem = {
    className: string
    itemClassName: string
    selectIndex: number
    listData: Array<ListData>
};

export declare type ListData = {
    text: string | number
    dataKey: string | number
};