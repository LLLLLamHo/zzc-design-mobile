export interface CalendarProps {
    prefixCls?: string
    className?: string
    style?: React.CSSProperties
    lang?: 'cn' | 'hk',
    calendarMode?: 'car' | 'defult'
    mode?: 'day' | 'day*time'
    timeRange: [number, number]
    minutesInterval: number
    defaultStartTime?: string
    defaultEndTime?: string
    startTime?: string | Date | number
    endTime?: string | Date | number
    defaultCalendarTips?: string
    yesterday?: boolean
    dayChange?: Function
    timeChange?: Function
}