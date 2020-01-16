import { setYearListData, setMonthListData, setDayListData, setHoursListData, setMinuteListData, setHour12ListData } from './pickerData';

export function createDateListData( obj, calcMinDate, calcMaxDate, calcCurrDate, langData ) {
    obj.yearList = setYearListData( calcMinDate.year, calcMaxDate.year, calcCurrDate.year, langData );
    obj.monthList = setMonthListData( calcCurrDate, calcMinDate, calcMaxDate, langData );
    obj.dayList = setDayListData( calcCurrDate, calcMinDate, calcMaxDate, langData );
}

export function createDateTimeListData( obj, calcMinDate, calcMaxDate, calcCurrDate, use12hour, minuteStep, langData, hourRange ) {
    obj.yearList = setYearListData( calcMinDate.year, calcMaxDate.year, calcCurrDate.year, langData );
    obj.monthList = setMonthListData( calcCurrDate, calcMinDate, calcMaxDate, langData );
    obj.dayList = setDayListData( calcCurrDate, calcMinDate, calcMaxDate, langData );
    obj.hourList = setHoursListData( calcCurrDate, use12hour, calcMinDate, calcMaxDate, hourRange );
    obj.minuteList = setMinuteListData( calcCurrDate, minuteStep, calcMinDate, calcMaxDate, langData, hourRange );
    if ( use12hour ) {
        createHour12ListData( obj, calcMinDate, calcMaxDate, calcCurrDate, langData );
    }
}

export function createTimeListData( obj, calcMinDate, calcMaxDate, calcCurrDate, use12hour, minuteStep, langData, hourRange ) {
    obj.hourList = setHoursListData( calcCurrDate, use12hour, calcMinDate, calcMaxDate, hourRange );
    obj.minuteList = setMinuteListData( calcCurrDate, minuteStep, calcMinDate, calcMaxDate, langData, hourRange );
    if ( use12hour ) {
        createHour12ListData( obj, calcMinDate, calcMaxDate, calcCurrDate, langData );
    }
}

export function createHourListData( obj, calcMinDate, calcMaxDate, calcCurrDate, use12hour, langData, hourRange ) {
    obj.hourList = setHoursListData( calcCurrDate, use12hour, calcMinDate, calcMaxDate, hourRange );
    if ( use12hour ) {
        createHour12ListData( obj, calcMinDate, calcMaxDate, calcCurrDate, langData );
    }
}

export function createYearListData( obj, calcMinDate, calcMaxDate, calcCurrDate, langData ) {
    obj.yearList = setYearListData( calcMinDate.year, calcMaxDate.year, calcCurrDate.year, langData );
}

export function createMonthListData( obj, calcMinDate, calcMaxDate, calcCurrDate, langData ) {
    obj.monthList = setMonthListData( calcCurrDate, calcMinDate, calcMaxDate, langData );
}

export function createHour12ListData( obj, calcMinDate, calcMaxDate, calcCurrDate, langData ) {
    obj.hour12List = setHour12ListData( calcCurrDate, calcMinDate, calcMaxDate, langData );
}