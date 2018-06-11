
import { ListItem } from '../propsType';

export function setYearListData( minYear, maxYear, currYear, langData ): ListItem {
    const totalYearCount = maxYear - minYear;
    const yearListData: ListItem = {
        className: 'year-list',
        itemClassName: 'year-item',
        scrollType: 'year',
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
        scrollType: 'month',
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
        scrollType: 'day',
        selectIndex: day - 1,
        listData: []
    };

    const curDate = new Date( `${year}-${month}-${day}` );

    const calcDate = new Date( curDate.setDate( 1 ) );
    const dayCount = new Date( new Date( calcDate.setMonth( month ) ).setDate( 0 ) ).getDate();
    let dayText: number = 1;
    for ( let i = 0; i < dayCount; i++ ) {
        dayListData.listData.push( {
            text: `${dayText}${langData.day}`,
            dataKey: dayText
        } );
        dayText++;
    }
    return dayListData;
}

export function setHoursListData ( currDateData, use12hour, langData ): ListItem {
    const { hour } = currDateData;
    const hourListData: ListItem = {
        className: 'hour-list',
        itemClassName: 'hour-item',
        scrollType: 'hour',
        selectIndex: use12hour && hour > 12 ? hour - 12 : hour,
        listData: []
    };

    const step = use12hour ? 12 : 24;
    let hourText: number = 0;
    for ( let i = 0; i < step; i++ ) {
        hourListData.listData.push( {
            text: `${hourText}${langData.hour}`,
            dataKey: hourText
        } );
        hourText++;
    }

    return hourListData;
}

export function setMinuteListData ( currDateData, minuteStep, langData ): ListItem {
    const { minute } = currDateData;
    const minuteListData: ListItem = {
        className: 'minute-list',
        itemClassName: 'minute-item',
        scrollType: 'minute',
        selectIndex: minute,
        listData: []
    };

    const step = 60 / minuteStep;
    let minuteText: number = 0;
    for ( let i = 0; i < step; i++ ) {
        if ( minuteText == minute ) {
            minuteListData.selectIndex = i;
        }
        minuteListData.listData.push( {
            text: `${minuteText}${langData.minutes}`,
            dataKey: minuteText
        } );
        minuteText += minuteStep;
    }
    return minuteListData;
}

export function setHour12ListData( hour, langData ): ListItem {
    const hour12ListData: ListItem = {
        className: 'minute-list',
        itemClassName: 'minute-item',
        scrollType: 'hour12',
        selectIndex: hour < 12 ? 0 : 1,
        listData: [
            {
                text: langData.am,
                dataKey: 'am'
            },
            {
                text: langData.pm,
                dataKey: 'pm'
            }
        ]
    };

    return hour12ListData;
}