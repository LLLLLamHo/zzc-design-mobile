
import { isDate } from '../../_util/typeof';
import { resetDate } from '../../_util/resetDate';
export interface DateData {
    year: number
    month: number
    day: number
    hour: number
    minute: number
}

export function initMinDate( defaultDate ): DateData {
    if ( defaultDate ) {
        return resolveDate( defaultDate, 'min' );
    }
    const currDate = new Date( `${new Date().getFullYear() - 10}/01/01` );
    const year = currDate.getFullYear();
    const month = currDate.getMonth() + 1;
    const day = currDate.getDate();
    return {
        year,
        month,
        day,
        hour: 0,
        minute: 0
    };
}

export function initMaxDate( defaultDate ): DateData {
    if ( defaultDate ) {
        return resolveDate( defaultDate, 'max' );
    }
    const currDate = new Date( `${new Date().getFullYear() + 10}/12/31` );
    const year = currDate.getFullYear();
    const month = currDate.getMonth() + 1;
    const day = currDate.getDate();
    return {
        year,
        month,
        day,
        hour: 0,
        minute: 0
    };
}

export function initSelectDate ( selectDate, minDate, maxDate ): DateData {
    // 如果传入的选中时间不在规定范围里面
    const minDateTime = new Date( `${minDate.year}/${minDate.month}/${minDate.day} ${minDate.hour}:${minDate.minute}` );
    const maxDateTime = new Date( `${maxDate.year}/${maxDate.month}/${maxDate.day} ${maxDate.hour}:${maxDate.minute}` );
    const selectDateObj = {
        year: selectDate.getFullYear(),
        month: selectDate.getMonth() + 1,
        day: selectDate.getDate(),
        hour: selectDate.getHours(),
        minute: selectDate.getMinutes()
    };
    // 当前选中的时间小于限制时间，需要对每一个值做对比，保留符合范围的月日时分
    if ( selectDate < minDateTime ) {
        return {
            year: minDate.year,
            month: selectDateObj.year <= minDate.year && selectDateObj.month < minDate.month ? minDate.month : selectDateObj.month,
            day: selectDateObj.year <= minDate.year && selectDateObj.month < minDate.month && selectDateObj.day < minDate.day ? minDate.day : selectDateObj.day,
            hour: selectDateObj.year <= minDate.year && selectDateObj.month < minDate.month && selectDateObj.day < minDate.day && selectDateObj.hour < minDate.hour ? minDate.hour : selectDateObj.hour,
            minute: selectDateObj.year <= minDate.year && selectDateObj.month < minDate.month && selectDateObj.day < minDate.day && selectDateObj.hour < minDate.hour && selectDateObj.minute < minDate.minute ? minDate.minute : selectDateObj.minute
        };
    }
    // 当前选中的时间大于限制时间，需要对每一个值做对比，保留符合范围的月日时分
    if ( selectDate > maxDateTime ) {
        return {
            year: maxDate.year,
            month: selectDateObj.year >= maxDate.year && selectDateObj.month > maxDate.month ? maxDate.month : selectDateObj.month,
            day: selectDateObj.year >= maxDate.year && selectDateObj.month > maxDate.month && selectDateObj.day > maxDate.day ? maxDate.day : selectDateObj.day,
            hour: selectDateObj.year >= maxDate.year && selectDateObj.month > maxDate.month && selectDateObj.day > maxDate.day && selectDateObj.hour > maxDate.hour ? maxDate.hour : selectDateObj.hour,
            minute: selectDateObj.year >= maxDate.year && selectDateObj.month > maxDate.month && selectDateObj.day > maxDate.day && selectDateObj.hour > maxDate.hour && selectDateObj.minute > maxDate.minute ? maxDate.minute : selectDateObj.minute
        };
    }

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

export function resolveDate( dateString, type ): DateData {
    if ( isDate( dateString ) ) {
        const year = dateString.getFullYear();
        const month = dateString.getMonth() + 1;
        const day = dateString.getDate();
        const hour = dateString.getHours();
        const minute = dateString.getMinutes();
        return {
            year,
            month,
            day,
            hour,
            minute
        };
    }
    const splitDate = dateString.split( ' ' );
    const date = splitDate[0].split( '/' );
    let time;

    if ( type == 'min' ) {
        time = splitDate[1] ? splitDate[1].split( ':' ) : [0, 0];
    } else {
        time = splitDate[1] ? splitDate[1].split( ':' ) : [24, 0];
    }

    return {
        year: parseInt( date[0] ),
        month: parseInt( date[1] ),
        day: parseInt( date[2] ),
        hour: parseInt( time[0] ),
        minute: parseInt( time[1] )
    };
}

export function getLastDate( year, month ): number {
    return new Date( new Date( `${year}/${resetDate( month + 1 )}/01` ).setDate( 0 ) ).getDate();
}

export function getFirstDate( year, month ): number {
    return new Date( new Date( `${year}/${resetDate( month + 1 )}/01` ) ).getDate();
}