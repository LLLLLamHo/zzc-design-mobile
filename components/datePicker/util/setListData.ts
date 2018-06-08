import { setYearListData, setMonthListData, setDayListData, setHoursListData, setMinuteListData, setHour12ListData } from './pickerData';

export function createDateListData( obj, calcMinDate, calcMaxDate, calcCurrDate, langData ) {
    obj.yearList = setYearListData( calcMinDate.year, calcMaxDate.year, calcCurrDate.year, langData );
    obj.monthList = setMonthListData( calcCurrDate.month, langData );
    obj.dayList = setDayListData( calcCurrDate, langData );
}

export function createDateTimeListData( obj, calcMinDate, calcMaxDate, calcCurrDate, use12hour, minuteStep, langData ) {
    obj.yearList = setYearListData( calcMinDate.year, calcMaxDate.year, calcCurrDate.year, langData );
    obj.monthList = setMonthListData( calcCurrDate.month, langData );
    obj.dayList = setDayListData( calcCurrDate, langData );
    obj.hourList = setHoursListData( calcCurrDate, use12hour, langData );
    obj.minuteList = setMinuteListData( calcCurrDate, minuteStep, langData );
    if ( use12hour ) {
        createHour12ListData( obj, calcCurrDate, langData );
    }
}

export function createTimeListData( obj, calcCurrDate, use12hour, minuteStep, langData ) {
    obj.hourList = setHoursListData( calcCurrDate, use12hour, langData );
    obj.minuteList = setMinuteListData( calcCurrDate, minuteStep, langData );
    if ( use12hour ) {
        createHour12ListData( obj, calcCurrDate, langData );
    }
}

export function createYearListData( obj, calcMinDate, calcMaxDate, calcCurrDate, langData ) {
    obj.yearList = setYearListData( calcMinDate.year, calcMaxDate.year, calcCurrDate.year, langData );
}

export function createMonthListData( obj, calcCurrDate, langData ) {
    obj.monthList = setMonthListData( calcCurrDate.month, langData );
}

export function createHour12ListData( obj, calcCurrDate, langData ) {
    obj.hour12List = setHour12ListData( calcCurrDate.hour, langData );
}