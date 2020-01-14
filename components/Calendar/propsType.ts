export interface CalendarProps {
    prefixCls?: string,
    className?: string,
    style?: React.CSSProperties,
    lang?: 'cn' | 'hk',
    calendarMode?: 'car' | 'defult'
    startTime?: number
    endTime?: number
}