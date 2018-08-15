
import { ListItem } from '../propsType';
import { resetDate } from '../../_util/resetDate';

export function setYearListData( minYear, maxYear, currYear, langData ): ListItem {
    const totalYearCount = maxYear - minYear;
    const yearListData: ListItem = {
        className: 'year-list',
        itemClassName: 'year-item',
        scrollType: 'year',
        selectIndex: currYear >= maxYear ? totalYearCount : 0,
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
        // 限制时间为同一年使用最大月份作为结束，否则循环到12月
        const endMonth = minYear == maxYear ? maxMonth : 12;
        monthText = startMonth;
        // 默认为0
        monthListData.selectIndex = 0;
        for ( let i = startMonth; i <= endMonth; i++ ) {
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
        // 限制时间为同一年使用最小月份作为循环开始，从1月开始
        const startMonth = minYear == maxYear ? minMonth - 1 : 0;
        monthText = minYear == maxYear ? minMonth : 1;
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
    // 当限制范围是同年同日，则取minDay和maxDay来进行循环
    if ( minYear == maxYear && minMonth == maxMonth ) {
        const startDay = minDay;
        const endDay = maxDay;
        dayText = minDay;
        dayListData.selectIndex = 0;
        for ( let i = startDay; i <= endDay; i++ ) {
            if ( currDay == i ) {
                dayListData.selectIndex = i - startDay;
            }
            dayListData.listData.push( {
                text: `${dayText}${langData.day}`,
                dataKey: dayText
            } );
            dayText++;
        }

    // 到达最小时间边界
    } else if ( currYear == minYear && currMonth == minMonth ) {
        const startDay = minDay;
        const endDay = dayCount;
        dayText = startDay;

        // 默认为0
        dayListData.selectIndex = 0;
        for ( let i = startDay; i <= endDay; i++ ) {
            if ( currDay == i ) {
                dayListData.selectIndex = i - startDay;
            }
            dayListData.listData.push( {
                text: `${dayText}${langData.day}`,
                dataKey: dayText
            } );
            dayText++;
        }
    // 到达最大边界
    } else if ( currYear == maxYear && currMonth == maxMonth ) {
        const startDay = 0;
        const endDay = dayCount;

        // 默认为最后一个
        dayListData.selectIndex = maxDay;
        for ( let i = startDay; i <= endDay; i++ ) {
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
    console.log(dayListData);
    return dayListData;
}

export function setHoursListData ( currDateData, use12hour, calcMinDate, calcMaxDate, langData ): ListItem {
    const { year: currYear, month: currMonth, day: currDay, hour: curHour } = currDateData;
    const { year: minYear, month: minMonth, day: minDay, hour: minHour } = calcMinDate;
    const { year: maxYear, month: maxMonth, day: maxDay, hour: maxHour } = calcMaxDate;
    const hourListData: ListItem = {
        className: 'hour-list',
        itemClassName: 'hour-item',
        scrollType: 'hour',
        selectIndex: use12hour && curHour >= 12 ? curHour - 12 : curHour,
        listData: []
    };

    let step = use12hour ? 12 : 24;
    let hourText: number = 0;
    
    if ( currYear <= minYear && currMonth <= minMonth && currDay <= minDay) {
        let startHour = minHour
        let isNoon = false
        if (use12hour) {
            startHour = minHour >= 12 ? minHour - 12 : (curHour >= 12 ? 0 : minHour)
            startHour === 0 && curHour >= 12 && (isNoon = true)
        }

        hourText = startHour;
        // 默认为0
        hourListData.selectIndex = 0;
        for ( let i = startHour; i < step; i++ ) {
            if ( (use12hour && curHour >= 12 ? curHour - 12 : curHour) == i ) {
                hourListData.selectIndex = i - startHour;
            }
            hourListData.listData.push( {
                text: `${ hourText === 0 && isNoon ? 12 : hourText}${langData.hour}`,
                dataKey: hourText
            } );
            hourText++;
        }
    } else if ( currYear >= maxYear && currMonth >= maxMonth && currDay >= maxDay ) {
        const startHour = 0;
        let endHour = maxHour
        let isNoon = false
        if (use12hour) {
            endHour = maxHour >= 12 ? (curHour < 12 ? 12 : maxHour - 12) : maxHour
            maxHour >= 12 && curHour >= 12 && (isNoon = true)
        }
        // 默认为最后一个
        hourListData.selectIndex = endHour;
        for ( let i = startHour; i < step; i++ ) {
            if ( hourText <= endHour ) {
                if ( (use12hour && curHour >= 12 ? curHour - 12 : curHour) == i ) {
                    hourListData.selectIndex = i;
                }
                hourListData.listData.push( {
                    text: `${hourText === 0 && isNoon ? 12 : hourText}${langData.hour}`,
                    dataKey: hourText
                } );
            }
            hourText++;
        }
    } else {
        for ( let i = 0; i < step; i++ ) {
            hourListData.listData.push( {
                text: `${hourText === 0 && use12hour && curHour >= 12 ? 12 : hourText}${langData.hour}`,
                dataKey: hourText
            } );
            hourText++;
        }
    }

    return hourListData;
}

export function setMinuteListData ( currDateData, minuteStep, calcMinDate, calcMaxDate, langData ): ListItem {
    const { year: currYear, month: currMonth, day: currDay, hour: curHour, minute: curMinute } = currDateData;
    const { year: minYear, month: minMonth, day: minDay, hour: minHour, minute: minMinute } = calcMinDate;
    const { year: maxYear, month: maxMonth, day: maxDay, hour: maxHour, minute: maxMinute } = calcMaxDate;
    const minuteListData: ListItem = {
        className: 'minute-list',
        itemClassName: 'minute-item',
        scrollType: 'minute',
        selectIndex: minuteStep == 1 ? minute : 0, // 当step不等于1的时候，默认选中未0，之后通过循环获取到对应的时间index
        listData: []
    };
    const step = 60 / minuteStep;
    let minuteText: number = 0;

    if ( currYear <= minYear && currMonth <= minMonth && currDay <= minDay && curHour <= minHour ) {
        let startMinute = Math.floor(minMinute / minuteStep);
        minuteText = startMinute * minuteStep;
        // 默认为0
        minuteListData.selectIndex = 0;
        for ( let i = startMinute; i < step; i++ ) {
            if ( curMinute == i ) {
                minuteListData.selectIndex = i - startMinute;
            }
            minuteListData.listData.push( {
                text: `${minuteText}${langData.minutes}`,
                dataKey: minuteText
            } );
            minuteText += minuteStep;
        }
    } else if ( currYear >= maxYear && currMonth >= maxMonth && currDay >= maxDay && curHour >= maxHour ) {
        const startMinute = 0;
        step = maxMinute === 0 ? 1 : Math.ceil(maxMinute / minuteStep)
        // 默认为最后一个
        minuteListData.selectIndex = step - 1;
        for ( let i = startMinute; i < step; i++ ) {
            if ( minuteText <= maxHour ) {
                if ( curMinute == i + 1 ) {
                    minuteListData.selectIndex = i;
                }
                minuteListData.listData.push( {
                    text: `${minuteText}${langData.minutes}`,
                    dataKey: minuteText
                } );
            }
            minuteText += minuteStep;
        }
    } else {
        for ( let i = 0; i < step; i++ ) {
            if ( minuteText == curMinute ) {
                minuteListData.selectIndex = i;
            }
            minuteListData.listData.push( {
                text: `${minuteText}${langData.minutes}`,
                dataKey: minuteText
            } );
            minuteText += minuteStep;
        }
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

    if (curYear <= minYear && curMonth <= minMonth && currDay <= minDay && minHour >= 12) {
        hour12ListData.listData = [pm]
    }
    if (curYear >= maxYear && curMonth >= maxMonth && currDay >= maxDay && maxHour < 12) {
        hour12ListData.listData = [am]
    }
    return hour12ListData;
}