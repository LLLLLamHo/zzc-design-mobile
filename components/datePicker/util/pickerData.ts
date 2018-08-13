
import { ListItem } from '../propsType';
import { resetDate } from '../../_util/resetDate';

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

export function setMonthListData ( calcCurrDate, calcMinDate, calcMaxDate, langData ): ListItem {
    const { year: currYear, month: currMonth } = calcCurrDate;
    const { year: minYear, month: minMonth } = calcMinDate;
    const { year: maxYear, month: maxMonth } = calcMaxDate;

    const monthListData: ListItem = {
        className: 'month-list',
        itemClassName: 'month-item',
        scrollType: 'month',
        selectIndex: currMonth - 1,
        listData: []
    };
    let monthText: number = 1;
    // 当前年份是限制范围内，直接全部月份循环出来
    if ( currYear > minYear && currYear < maxYear ) {
        for ( let i = 0; i < 12; i++ ) {
            if ( monthText == i ) {
                monthListData.selectIndex = i;
            }
            monthListData.listData.push( {
                text: `${monthText}${langData.month}`,
                dataKey: monthText
            } );
            monthText++;
        }
    // 小于等于限制最小月份
    } else if ( currYear <= minYear ) {
        const startMonth = minMonth;
        monthText = startMonth;
        // 默认为0
        monthListData.selectIndex = 0;
        for ( let i = startMonth; i <= 12; i++ ) {
            if ( currMonth == i ) {
                monthListData.selectIndex = i - startMonth;
            }
            monthListData.listData.push( {
                text: `${monthText}${langData.month}`,
                dataKey: monthText
            } );
            monthText++;
        }

    // 大于等于限制的最大月份
    } else if ( currYear >= maxYear ) {
        const startMonth = 0;
        // 默认为最后一个
        monthListData.selectIndex = maxMonth;
        for ( let i = startMonth; i < maxMonth; i++ ) {
            if ( monthText <= maxMonth ) {
                if ( currMonth == i + 1 ) {
                    monthListData.selectIndex = i;
                }
                monthListData.listData.push( {
                    text: `${monthText}${langData.month}`,
                    dataKey: monthText
                } );
            }
            monthText++;
        }
    }
    return monthListData;
}

export function setDayListData ( currDateData, calcMinDate, calcMaxDate, langData ): ListItem {
    const { year: currYear, month: currMonth, day: currDay } = currDateData;
    const { year: minYear, month: minMonth, day: minDay } = calcMinDate;
    const { year: maxYear, month: maxMonth, day: maxDay } = calcMaxDate;

    const dayListData: ListItem = {
        className: 'day-list',
        itemClassName: 'day-item',
        scrollType: 'day',
        selectIndex: currDay - 1,
        listData: []
    };
    const curDate = new Date( `${currYear}/${resetDate( currMonth )}/${resetDate( currDay )}` );
    const calcDate = new Date( curDate.setDate( 1 ) );
    const dayCount = new Date( new Date( calcDate.setMonth( currMonth ) ).setDate( 0 ) ).getDate();
    let dayText: number = 1;
    // 到达最小时间边界
    if ( currYear <= minYear && currMonth <= minMonth ) {
        const startDay = minDay;
        dayText = startDay;
        // 默认为0
        dayListData.selectIndex = 0;
        for ( let i = startDay; i <= dayCount; i++ ) {
            if ( currDay == i ) {
                dayListData.selectIndex = i - startDay;
            }
            dayListData.listData.push( {
                text: `${dayText}${langData.day}`,
                dataKey: dayText
            } );
            dayText++;
        }
    } else if ( currYear >= maxYear && currMonth >= maxMonth ) {
        const startMonth = 0;
        // 默认为最后一个
        dayListData.selectIndex = maxDay;
        for ( let i = startMonth; i < maxDay; i++ ) {
            if ( dayText <= maxDay ) {
                if ( currDay == i + 1 ) {
                    dayListData.selectIndex = i;
                }
                dayListData.listData.push( {
                    text: `${dayText}${langData.day}`,
                    dataKey: dayText
                } );
            }
            dayText++;
        }
    } else {
        for ( let i = 0; i < dayCount; i++ ) {
            dayListData.listData.push( {
                text: `${dayText}${langData.day}`,
                dataKey: dayText
            } );
            dayText++;
        }
    }
    return dayListData;
}

export function setHoursListData ( currDateData, use12hour, langData ): ListItem {
    const { hour } = currDateData;
    const hourListData: ListItem = {
        className: 'hour-list',
        itemClassName: 'hour-item',
        scrollType: 'hour',
        selectIndex: use12hour && hour >= 12 ? hour - 12 : hour,
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
        selectIndex: minuteStep == 1 ? minute : 0, // 当step不等于1的时候，默认选中未0，之后通过循环获取到对应的时间index
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