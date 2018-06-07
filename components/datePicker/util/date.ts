
import { isDate } from '../../_util/typeof';

export interface DateData {
    year: number
    month: number
    day: number
    hour: number
    minute: number
}

export function initMinDate( defaultDate ): DateData {
    if ( defaultDate ) {
        return resolveDate( defaultDate );
    }
    const currDate = new Date( `${new Date().getFullYear() - 10}-1-1` );
    const year = currDate.getFullYear();
    const month = currDate.getMonth() + 1;
    const day = currDate.getDate();
    return {
        year,
        month,
        day,
        hour: 10,
        minute: 0
    };
}

export function initMaxDate( defaultDate ): DateData {
    if ( defaultDate ) {
        return resolveDate( defaultDate );
    }
    const currDate = new Date( `${new Date().getFullYear() + 10}-1-1` );
    const year = currDate.getFullYear();
    const month = currDate.getMonth() + 1;
    const day = currDate.getDate();
    return {
        year,
        month,
        day,
        hour: 10,
        minute: 0
    };
}

export function initSelectDate ( selectDate, minDate ): DateData {
    if ( isDate( selectDate ) ) {
        const year = selectDate.getFullYear();
        const month = selectDate.getMonth() + 1;
        const day = selectDate.getDate();
        const hour = selectDate.getHours();
        const minute = selectDate.getMinutes();
        return {
            year,
            month,
            day,
            hour,
            minute
        };
    }
    return minDate;
}

export function resolveDate( dateString ): DateData {
    const splitDate = dateString.split( ' ' );
    const date = splitDate[0].split( '-' );
    const time = splitDate[1] ? splitDate[1].split( ':' ) : [10, 0];
    return {
        year: date[0],
        month: date[1],
        day: date[2],
        hour: time[0],
        minute: time[1]
    };
}