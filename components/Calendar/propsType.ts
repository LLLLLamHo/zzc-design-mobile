import {PickerData} from '../Picker/propsType';
export interface CalendarCloseBoxProps {
    onClose: Function
    prefixCls?: string
    popupTitle?: string
}


export interface CalendarProps {
    height?: string
    popupTitle?: string
    maskClose?: boolean
    prefixCls?: string
    className?: string
    i18n?: i18n
    style?: React.CSSProperties
    lang?: 'cn' | 'hk',
    calendarMode?: 'car' | 'defult'
    mode?: 'day' | 'day*time'
    timeRange?: [number, number]
    minutesInterval?: number
    defaultStartTime?: string
    defaultEndTime?: string
    startTime?: string | Date | number
    endTime?: string | Date | number
    defaultCalendarTips?: string
    yesterday?: boolean
    visible?: boolean
    dropOffMaxDays?: number | string
    dayChange?: Function
    timeChange?: Function
    onChange?: Function
    onClose?: Function
    dayCalculator?: dayCalculator | null
    dateExtension?: DateExtension
}


export interface CalendarState {
    i18n: i18n
    calendarMap: Array<CalendarMapItem>
    _startTime: selectTimeInterface | null
    _startIndexInfo: selectTimeIndex | null
    _endTime: selectTimeInterface | null
    _endIndexInfo: selectTimeIndex | null
    _default_calendar_tips: string
    _calendar_tips: string
    _listBoxPaddingBottom: number
}

export interface i18n {
    left_title: string
    left_placeholder: string
    right_title: string
    right_placeholder: string
    weekList: Array<string>
    picker_car: string
    return_car: string
    inTheDay_car: string
    picker_default: string | null
    return_default: string | null
    reset_btn_text: string
    submit_btn_text: string
    time_picker_title: string
    time_return_title: string
    monthList: Array<string>
    listAcrossTheYearText: string
    month: string
    week: string
    day: string
    days: string
    today: string
}

export interface selectTimeIndex {
    year: number
    monthKey: number
    rowKey: number
    itemKey: number
}

export interface selectTimeInterface {
    Y: number
    M: number
    D: number
    h: number
    m: number
    t: number
    w: number
}

export interface DateExtension {
    [key: string]: DateExtensionItem
}

export interface DateExtensionItem {
    date?: string
    sub?: string
}

export interface CalendarMapItem {
    title: string
    m: number,
    y: number,
    list: Array<CalendarMapItemRow>
}

export interface CalendarMapItemRow {
    empty?: boolean
    gone?: boolean
    y: number
    m: number
    d?: number
    main?: string | number | null
    sub?: string | null
    start?: boolean
    end?: boolean
    startOnly?: boolean
    active?: boolean
    extensionMain?: boolean
}

export interface EchoSelectDataReturn {
    type: string,
    start: selectTimeInterface | null,
    end: selectTimeInterface | null,
}

export interface FormatSubmitEchoData {
    start: string | null,
    end: string | null
}

export interface _createMonthMap_now {
    n_y: number
    n_m: number
    n_d: number
}

export interface _lastDateMap {
    l_y: number
    l_m: number
    l_d: number
}

export interface createCalendarMapReturn {
    startIndexInfo: selectTimeIndex | null
    endIndexInfo: selectTimeIndex | null
    calendarMap: Array<CalendarMapItem>
}

export interface CreateCalendarMap_dataInfo {
    day?: number
    month: number
    year: number
    gone?: boolean
    sub?: string | null
    main?: string | number | null
    empty?: boolean
}

export interface _createDayInfoSubText_data {
    n_y: number
    n_m: number
    n_d: number
    c_y: number
    c_m: number
    c_d: number
}

export interface updateCalendarMapProps {
    type: string 
    _startIndexInfo?: selectTimeIndex | null
    _endIndexInfo?: selectTimeIndex | null
    map: Array<CalendarMapItem>
    year?: number 
    monthKey?: number 
    rowKey?: number 
    itemKey?: number 
    calendarMode: string 
    i18n: i18n
}

export interface  updateCalendarMapRetrun {
    newMap: Array<CalendarMapItem>
    select: CalendarMapItemRow | null
}

export interface CalendarFooterProps{
    prefixCls?: string
    timeRange:[number, number]
    minutesInterval: number
    currStartTime?: selectTimeInterface | null
    currEndTime?: selectTimeInterface | null
    defaultStartTime?: string
    defaultEndTime?: string
    i18n: i18n
    mode: string
    calendarTips: string
    defaultCalendarTips: string
    selectTimePicker: Function
    changeSelectTime: Function
    reset: Function
    submit: Function
    renderCallback: Function
}
export interface CalendarFooterState{
    pickerList: Array<PickerData>
    time: Array<string>
}

export interface CalendarListBoxProps {
    prefixCls?: string
    list: Array<CalendarMapItem>
    paddingBottom: number
    listAcrossTheYearText: string
    monthList: null | Array<string>
    startTime?: selectTimeInterface | null
    endTime?: selectTimeInterface | null
    selectItem: Function
}

export interface CalendarResultProps {
    prefixCls?: string
    startTime: selectTimeInterface | null
    endTime: selectTimeInterface | null
    mode: string
    i18n: i18n
    lang: 'cn' | 'hk'
    dayCalculator?: dayCalculator | null
}

export interface CalendarWeekProps {
    prefixCls?: string
    weekList: Array<string>
}

export type dayCalculator = (start: number, end: number) => string
