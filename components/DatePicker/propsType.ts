export interface DatePickerProps {
    prefixCls?: string
    className?: string
    style?: React.CSSProperties
    title?: string,
    buttonText?: string,
    warningText?: string,
    onChange?: Function
    mode?: 'date' | 'time' | 'datetime' | 'year' | 'month' | 'hour'
    minDate?: string
    maxDate?: string
    selectTime?: any
    lang?: 'cn' | 'hk' | 'en'
    minuteStep?: number
    use12hour?: boolean
    onValueChange?: Function
    onClose?: Function
    onSubmit?: Function
    renderCallback?: Function
    visible: boolean
    maskClose?: boolean
    reverse?: boolean
    hourRange?: [number, number]
    i18n: i18n
}

export interface i18n {
    year: string
    month: string
    day: string
    hour: string
    minutes: string
    am: string
    pm: string
    confirm: string
    cancel: string
    close: string
    open: string
    datePickerTitle: string
    datePickerButtomText: string
}

export interface DatePickerState {
    yearList: ListItem | any
    monthList: ListItem | any
    dayList: ListItem | any
    hourList: ListItem | any
    minuteList: ListItem | any
    hour12List: ListItem | any
    langData: any
}

export declare type ListItem = {
    className: string
    itemClassName: string
    selectIndex: number
    scrollType: string
    listData: Array<ListData>
};

export declare type ListData = {
    text: string | number
    dataKey: string | number
};

export declare type BScrollArray = {
    year?: any
    month?: any
    day?: any
    hour?: any
    minute?: any
    hour12?: any
};

export interface DatePickerChangeProps {
    scrollKey: string
    currDate: string
}