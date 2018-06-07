
import { ListItem } from '../propsType';

export function setYearListData( minYear, maxYear, currYear, langData ): ListItem {
    const totalYearCount = maxYear - minYear;
    const yearListData: ListItem = {
        className: 'year-list',
        itemClassName: 'year-item',
        selectIndex: 0,
        listData: []
    };
    let yearText: number = minYear;
    for ( let i = 0; i <= totalYearCount; i++ ) {
        if ( currYear == yearText ) {
            yearListData.selectIndex = i;
        }
        yearListData.listData.push( {
            text: `${yearText}${langData.year}`,
            dataKey: yearText
        } );
        yearText++;
    }
    return yearListData;
}

export function setMonthListData ( currMonth, langData ): ListItem {
    const monthListData: ListItem = {
        className: 'month-list',
        itemClassName: 'month-item',
        selectIndex: currMonth - 1,
        listData: []
    };
    let monthText: number = 1;
    for ( let i = 0; i < 12; i++ ) {
        monthListData.listData.push( {
            text: `${monthText}${langData.month}`,
            dataKey: monthText
        } );
        monthText++;
    }
    return monthListData;
}

export function setDayListData ( currDateData, langData ): ListItem {
    const { year, month, day } = currDateData;
    const dayListData: ListItem = {
        className: 'day-list',
        itemClassName: 'day-item',
        selectIndex: day - 1,
        listData: []
    };

    const curDate = new Date( `${year}-${month}-${day}` );
    const dayCount = new Date( new Date( curDate.setMonth( month ) ).setDate( 0 ) ).getDate();
    let dayText: number = 1;
    for ( let i = 0; i <= dayCount; i++ ) {
        dayListData.listData.push( {
            text: `${dayText}${langData.day}`,
            dataKey: dayText
        } );
        dayText++;
    }

    return dayListData;
}

export function setHoursListData ( currDateData, langData ): ListItem {
    const { hour } = currDateData;
    const dayListData: ListItem = {
        className: 'hour-list',
        itemClassName: 'hour-item',
        selectIndex: hour,
        listData: []
    };

    let hourText: number = 0;
    for ( let i = 0; i < 24; i++ ) {
        dayListData.listData.push( {
            text: `${hourText}${langData.hour}`,
            dataKey: hourText
        } );
        hourText++;
    }

    return dayListData;
}

export function setMinuteListData ( currDateData, langData ): ListItem {
    const { minute } = currDateData;
    const dayListData: ListItem = {
        className: 'minute-list',
        itemClassName: 'minute-item',
        selectIndex: minute,
        listData: []
    };

    let minuteText: number = 0;
    for ( let i = 0; i < 60; i++ ) {
        dayListData.listData.push( {
            text: `${minuteText}${langData.minutes}`,
            dataKey: minuteText
        } );
        minuteText++;
    }

    return dayListData;
}