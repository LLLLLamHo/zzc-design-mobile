import { DatePickerState, BScrollArray } from '../propsType';

export function getModeDateData( BScrollList: BScrollArray, state: DatePickerState ): string {
    const { year: yearBS, month: monthBS, day: dayBS } = BScrollList;
    const { yearList, monthList, dayList } = state;
    const year = yearList.listData[yearBS.getSelectedIndex()].dataKey;
    const month = monthList.listData[monthBS.getSelectedIndex()].dataKey;
    const day = dayList.listData[dayBS.getSelectedIndex()].dataKey;

    return `${year}-${resetDate( month )}-${resetDate( day )}`;
}

export function getModeTimeData( BScrollList: BScrollArray, state: DatePickerState, use12hour?:boolean ): string {
    const { hour: hourBS, minute: minuteBS, hour12: hour12BS } = BScrollList;
    const { hourList, minuteList, hour12List } = state;
    const hour = hourList.listData[hourBS.getSelectedIndex()].dataKey;
    const minute = minuteList.listData[minuteBS.getSelectedIndex()].dataKey;
    if ( use12hour ) {
        const isPM = hour12List.listData[hour12BS.getSelectedIndex()].dataKey == 'pm';
        return `${resetDate( isPM ? hour + 12 : hour )}:${resetDate( minute )}`;
    }
    return `${resetDate( hour )}:${resetDate( minute )}`;
}

export function getModeDateTimeData( BScrollList: BScrollArray, state: DatePickerState, use12hour?:boolean ): string {
    const dateText = getModeDateData( BScrollList, state );
    const timeText = getModeTimeData( BScrollList, state, use12hour );

    return `${dateText} ${timeText}`;
}

export function getModeYearData( BScrollList: BScrollArray, state: DatePickerState ): string {
    const { year: yearBS } = BScrollList;
    const { yearList } = state;
    const year = yearList.listData[yearBS.getSelectedIndex()].dataKey;
    return year;
}

export function getModeMonthData( BScrollList: BScrollArray, state: DatePickerState, mode: string ): string {
    const { month: monthBS } = BScrollList;
    const { monthList } = state;
    const month = monthList.listData[monthBS.getSelectedIndex()].dataKey;
    if ( mode == 'month' ) {
        return month; // 如果mode等于month则不补0
    }
    return resetDate( month );
}


function resetDate( date ) {
    return date < 10 ? `0${date}` : date;
}