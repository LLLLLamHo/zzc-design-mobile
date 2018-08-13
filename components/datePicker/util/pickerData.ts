
import { ListItem } from '../propsType';
import { resetDate } from '../../_util/resetDate';

export function setYearListData( minYear, maxYear, curYear, langData ): ListItem {
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
        if ( curYear == yearText ) {
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
    const { year: curYear, month: curMonth } = calcCurrDate;
    const { year: minYear, month: minMonth } = calcMinDate;
    const { year: maxYear, month: maxMonth } = calcMaxDate;

    const monthListData: ListItem = {
        className: 'month-list',
        itemClassName: 'month-item',
        scrollType: 'month',
        selectIndex: 0,
        listData: []
    };
    let monthText: number = 1;
    let startMonth = 1
    let endMonth = 12
    // 当到达限制范围最小年份时
    if (curYear == minYear) {
        startMonth = minMonth
        monthText = minMonth
    }
    // 当到达限制范围最大年份时
    if (curYear == maxYear) {
        endMonth = maxMonth
    }

    for ( let i = startMonth; i <= endMonth; i++ ) {
        if ( curMonth == monthText ) {
            monthListData.selectIndex = i - startMonth;
        }
        monthListData.listData.push( {
            text: `${monthText}${langData.month}`,
            dataKey: monthText
        } );
        monthText++;
    }
     // 若当前选择时间不等于列表当前选择时间时，更新 currDateData 对象，矫正下一列的当前时间。理由同 setHoursListData
     if (curMonth !== monthListData.listData[monthListData.selectIndex].dataKey) {
        calcCurrDate.month = monthListData.listData[monthListData.selectIndex].dataKey
    }
    return monthListData;
}

export function setDayListData ( currDateData, calcMinDate, calcMaxDate, langData ): ListItem {
    const { year: curYear, month: curMonth, day: currDay } = currDateData;
    const { year: minYear, month: minMonth, day: minDay } = calcMinDate;
    const { year: maxYear, month: maxMonth, day: maxDay } = calcMaxDate;

    const dayListData: ListItem = {
        className: 'day-list',
        itemClassName: 'day-item',
        scrollType: 'day',
        selectIndex: 0,
        listData: []
    };

    let dayText: number = 1;
    let startDay = 1
    const curDate = new Date( `${curYear}/${resetDate( curMonth )}/${resetDate( currDay )}` );
    const calcDate = new Date( curDate.setDate( 1 ) );
    let endDay = new Date( new Date( calcDate.setMonth( curMonth ) ).setDate( 0 ) ).getDate()
    // 当到达限制范围最小年月时
    if (curMonth == minMonth && curYear == minYear) {
        startDay = minDay
        dayText = minDay
    }
    // 当到达限制范围最大年月时
    if (curMonth == maxMonth && curYear == maxYear) {
        endDay = maxDay
    }

    for ( let i = startDay; i <= endDay; i++ ) {
        if ( currDay == dayText ) {
            dayListData.selectIndex = i - startDay;
        }
        dayListData.listData.push( {
            text: `${dayText}${langData.day}`,
            dataKey: dayText
        } );
        dayText++;
    }
    // 若当前选择时间不等于列表当前选择时间时，更新 currDateData 对象，矫正下一列的当前时间。理由同 setHoursListData
    if (currDay !== dayListData.listData[dayListData.selectIndex].dataKey) {
        currDateData.day = dayListData.listData[dayListData.selectIndex].dataKey
    }
    return dayListData;
}

export function setHoursListData ( currDateData, use12hour, calcMinDate, calcMaxDate, langData ): ListItem {
    const { year: curYear, month: curMonth, day: curDay, hour: curHour } = currDateData;
    const { year: minYear, month: minMonth, day: minDay, hour: minHour } = calcMinDate;
    const { year: maxYear, month: maxMonth, day: maxDay, hour: maxHour } = calcMaxDate;
    const hourListData: ListItem = {
        className: 'hour-list',
        itemClassName: 'hour-item',
        scrollType: 'hour',
        selectIndex: 0,
        listData: []
    };
    const isAM = curHour < 12
    let hourText: number = 0;
    let startHour = 0
    let endHour = use12hour ? 12 : 24;
    let startFromNoon = isAM ? false : true

    let curDateStr = [curYear, curMonth, curDay].join()
    // 当到达限制范围最小年月日时
    if (curDateStr == [minYear, minMonth, minDay].join()) {
        if (use12hour && minHour >= 12) {
            // 12 小时进行矫正
            startHour = minHour - 12;
            hourText = minHour - 12;
        } else if (use12hour && minHour < 12 && !isAM) {
            // 什么都不做
        } else {
            startHour = minHour;
            hourText = minHour;
        }
    }
    // 当到达限制范围最大年月日时
    if (curDateStr === [maxYear, maxMonth, maxDay].join()) {
        if (use12hour && maxHour > 12) {
            // 12 小时进行矫正
            endHour = maxHour - 12 + 1;
        } else {
            endHour = maxHour + 1;
        }
    }
    
    for ( let i = startHour; i < endHour; i++ ) {
        if ( (!use12hour && curHour == hourText) || (use12hour && curHour - 12 == hourText) ) {
            hourListData.selectIndex = i - startHour;
        }
        hourListData.listData.push( {
            text: `${(hourText === 0 && use12hour && startFromNoon) ? 12 : hourText}${langData.hour}`,// 12 小时中午显示 12 时，凌晨显示 0 时
            dataKey: hourText
        } );
        hourText++;
    }
    // 若当前选择时间不等于列表当前选择时间时，更新 currDateData 对象，矫正下一列的当前时间。
    // 如当前时间为 20180813 10点，但是限制的选择范围是 20180815 0点。当用户滑动 日 列表到 15 号。这个时候计算出的 时 列表
    // 只有一个 0 时。如果不进行矫正，执行下一个方法计算 分钟 列表时就会依然认为当前时间是 10 点而导致渲染出所有的分钟供用户选择。
    // 矫正为 15 号 0 时分钟就可以正确渲染候选项。
    if (curHour !== hourListData.listData[hourListData.selectIndex].dataKey) {
        currDateData.hour = hourListData.listData[hourListData.selectIndex].dataKey
    }
    return hourListData;
}

export function setMinuteListData ( currDateData, minuteStep, calcMinDate, calcMaxDate, langData ): ListItem {
    const { year: curYear, month: curMonth, day: curDay, hour: curHour, minute: curMinute } = currDateData;
    const { year: minYear, month: minMonth, day: minDay, hour: minHour, minute: minMinute } = calcMinDate;
    const { year: maxYear, month: maxMonth, day: maxDay, hour: maxHour, minute: maxMinute } = calcMaxDate;
    const minuteListData: ListItem = {
        className: 'minute-list',
        itemClassName: 'minute-item',
        scrollType: 'minute',
        selectIndex: minuteStep == 1 ? curMinute : 0, // 当step不等于1的时候，默认选中未0，之后通过循环获取到对应的时间index
        listData: []
    };
    let step = 60 / minuteStep;
    let minuteText: number = 0;

    let curDateStr = [curYear, curMonth, curDay, curHour].join()
    // 当到达限制范围最小时间
    if (curDateStr == [minYear, minMonth, minDay, minHour].join()) {
        let minStep = Math.floor(minMinute / minuteStep)
        step -= minStep;
        minuteText = minStep * minuteStep;
    }
    // 当到达限制范围最大时间
    if (curDateStr === [maxYear, maxMonth, maxDay, maxHour].join()) {
        step = maxMinute == 0 ? 1 : Math.ceil(maxMinute / minuteStep);// 若为 0 则 +1
    }

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
    return minuteListData;
}

export function setHour12ListData( currDateData, calcMinDate, calcMaxDate, langData ): ListItem {
    const { year: curYear, month: curMonth, day: currDay, hour: curHour } = currDateData;
    const { year: minYear, month: minMonth, day: minDay, hour: minHour } = calcMinDate;
    const { year: maxYear, month: maxMonth, day: maxDay, hour: maxHour } = calcMaxDate;
    const am = {
        text: langData.am,
        dataKey: 'am'
    }
    const pm = {
        text: langData.pm,
        dataKey: 'pm'
    }
    const hour12ListData: ListItem = {
        className: 'minute-list',
        itemClassName: 'minute-item',
        scrollType: 'hour12',
        selectIndex: curHour < 12 ? 0 : 1,
        listData: [am, pm]
    };
    let curDateStr = [curYear, curMonth, currDay].join()
    if (curDateStr === [minYear, minMonth, minDay].join() && minHour >= 12) {
        hour12ListData.listData = [pm]
    }
    if (curDateStr === [maxYear, maxMonth, maxDay].join() && maxHour < 12) {
        hour12ListData.listData = [am]
    }

    return hour12ListData;
}