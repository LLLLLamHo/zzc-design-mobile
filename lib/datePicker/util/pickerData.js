'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.setYearListData = setYearListData;
exports.setMonthListData = setMonthListData;
exports.setDayListData = setDayListData;
exports.setHoursListData = setHoursListData;
exports.setMinuteListData = setMinuteListData;
exports.setHour12ListData = setHour12ListData;

var _resetDate = require('../../_util/resetDate');

function setYearListData(minYear, maxYear, currYear, langData) {
    var totalYearCount = maxYear - minYear;
    var yearListData = {
        className: 'year-list',
        itemClassName: 'year-item',
        scrollType: 'year',
        selectIndex: currYear >= maxYear ? totalYearCount : 0,
        listData: []
    };
    var yearText = minYear;
    for (var i = 0; i <= totalYearCount; i++) {
        if (currYear == yearText) {
            yearListData.selectIndex = i;
        }
        yearListData.listData.push({
            text: '' + yearText + langData.year,
            dataKey: yearText
        });
        yearText++;
    }
    return yearListData;
}
function setMonthListData(calcCurrDate, calcMinDate, calcMaxDate, langData) {
    var currYear = calcCurrDate.year,
        currMonth = calcCurrDate.month;
    var minYear = calcMinDate.year,
        minMonth = calcMinDate.month;
    var maxYear = calcMaxDate.year,
        maxMonth = calcMaxDate.month;

    var monthListData = {
        className: 'month-list',
        itemClassName: 'month-item',
        scrollType: 'month',
        selectIndex: currMonth - 1,
        listData: []
    };
    var monthText = 1;
    // 当前年份是限制范围内，直接全部月份循环出来
    if (currYear > minYear && currYear < maxYear) {
        for (var i = 0; i < 12; i++) {
            if (monthText == i) {
                monthListData.selectIndex = i;
            }
            monthListData.listData.push({
                text: '' + monthText + langData.month,
                dataKey: monthText
            });
            monthText++;
        }
        // 小于等于限制最小月份
    } else if (currYear <= minYear) {
        var startMonth = minMonth;
        // 限制时间为同一年使用最大月份作为结束，否则循环到12月
        var endMonth = minYear == maxYear ? maxMonth : 12;
        monthText = startMonth;
        // 默认为0
        monthListData.selectIndex = 0;
        for (var _i = startMonth; _i <= endMonth; _i++) {
            if (currMonth == _i) {
                monthListData.selectIndex = _i - startMonth;
            }
            monthListData.listData.push({
                text: '' + monthText + langData.month,
                dataKey: monthText
            });
            monthText++;
        }
        // 大于等于限制的最大月份
    } else if (currYear >= maxYear) {
        // 限制时间为同一年使用最小月份作为循环开始，从1月开始
        var _startMonth = minYear == maxYear ? minMonth - 1 : 0;
        monthText = minYear == maxYear ? minMonth : 1;
        // 默认为最后一个
        monthListData.selectIndex = maxMonth;
        for (var _i2 = _startMonth; _i2 < maxMonth; _i2++) {
            if (monthText <= maxMonth) {
                if (currMonth == _i2 + 1) {
                    monthListData.selectIndex = _i2;
                }
                monthListData.listData.push({
                    text: '' + monthText + langData.month,
                    dataKey: monthText
                });
            }
            monthText++;
        }
    }
    return monthListData;
}
function setDayListData(currDateData, calcMinDate, calcMaxDate, langData) {
    var currYear = currDateData.year,
        currMonth = currDateData.month,
        currDay = currDateData.day;
    var minYear = calcMinDate.year,
        minMonth = calcMinDate.month,
        minDay = calcMinDate.day;
    var maxYear = calcMaxDate.year,
        maxMonth = calcMaxDate.month,
        maxDay = calcMaxDate.day;

    var dayListData = {
        className: 'day-list',
        itemClassName: 'day-item',
        scrollType: 'day',
        selectIndex: currDay - 1,
        listData: []
    };
    var curDate = new Date(currYear + '/' + (0, _resetDate.resetDate)(currMonth) + '/' + (0, _resetDate.resetDate)(currDay));
    var calcDate = new Date(curDate.setDate(1));
    var dayCount = new Date(new Date(calcDate.setMonth(currMonth)).setDate(0)).getDate();
    var dayText = 1;
    // 当限制范围是同年同日，则取minDay和maxDay来进行循环
    if (minYear == maxYear && minMonth == maxMonth) {
        var startDay = minDay;
        var endDay = maxDay;
        dayText = minDay;
        dayListData.selectIndex = 0;
        for (var i = startDay; i <= endDay; i++) {
            if (currDay == i) {
                dayListData.selectIndex = i - startDay;
            }
            dayListData.listData.push({
                text: '' + dayText + langData.day,
                dataKey: dayText
            });
            dayText++;
        }
        // 到达最小时间边界
    } else if (currYear == minYear && currMonth == minMonth) {
        var _startDay = minDay;
        var _endDay = dayCount;
        dayText = _startDay;
        // 默认为0
        dayListData.selectIndex = 0;
        for (var _i3 = _startDay; _i3 <= _endDay; _i3++) {
            if (currDay == _i3) {
                dayListData.selectIndex = _i3 - _startDay;
            }
            dayListData.listData.push({
                text: '' + dayText + langData.day,
                dataKey: dayText
            });
            dayText++;
        }
        // 到达最大边界
    } else if (currYear == maxYear && currMonth == maxMonth) {
        var _startDay2 = 0;
        var _endDay2 = dayCount;
        // 默认为最后一个
        dayListData.selectIndex = maxDay;
        for (var _i4 = _startDay2; _i4 <= _endDay2; _i4++) {
            if (dayText <= maxDay) {
                if (currDay == _i4 + 1) {
                    dayListData.selectIndex = _i4;
                }
                dayListData.listData.push({
                    text: '' + dayText + langData.day,
                    dataKey: dayText
                });
            }
            dayText++;
        }
    } else {
        for (var _i5 = 0; _i5 < dayCount; _i5++) {
            dayListData.listData.push({
                text: '' + dayText + langData.day,
                dataKey: dayText
            });
            dayText++;
        }
    }
    return dayListData;
}
function setHoursListData(currDateData, use12hour, calcMinDate, calcMaxDate) {
    var currYear = currDateData.year,
        currMonth = currDateData.month,
        currDay = currDateData.day,
        curHour = currDateData.hour;
    var minYear = calcMinDate.year,
        minMonth = calcMinDate.month,
        minDay = calcMinDate.day,
        minHour = calcMinDate.hour;
    var maxYear = calcMaxDate.year,
        maxMonth = calcMaxDate.month,
        maxDay = calcMaxDate.day,
        maxHour = calcMaxDate.hour;

    var hourListData = {
        className: 'hour-list',
        itemClassName: 'hour-item',
        scrollType: 'hour',
        selectIndex: use12hour && curHour >= 12 ? curHour - 12 : curHour,
        listData: []
    };
    var step = use12hour ? 12 : 24;
    var hourText = 0;
    if (currYear <= minYear && currMonth <= minMonth && currDay <= minDay) {
        var startHour = minHour;
        var isNoon = false;
        if (use12hour) {
            startHour = minHour >= 12 ? minHour - 12 : curHour >= 12 ? 0 : minHour;
            startHour === 0 && curHour >= 12 && (isNoon = true);
        }
        // 最大最小范围在同一天
        if (minYear === maxYear && minMonth === maxMonth && minDay === maxDay) {
            step = !use12hour || maxHour < 12 ? maxHour : curHour >= 12 ? maxHour - 12 : 11;
            step += 1;
        }
        hourText = startHour;
        // 默认为0
        hourListData.selectIndex = 0;
        for (var i = startHour; i < step; i++) {
            if ((use12hour && curHour >= 12 ? curHour - 12 : curHour) == i) {
                hourListData.selectIndex = i - startHour;
            }
            hourListData.listData.push({
                // text: `${hourText === 0 && isNoon ? 12 : hourText}${langData.hour}`,
                text: (hourText === 0 && isNoon ? 12 : hourText) + ':00',
                dataKey: hourText
            });
            hourText++;
        }
    } else if (currYear >= maxYear && currMonth >= maxMonth && currDay >= maxDay) {
        var _startHour = 0;
        var endHour = maxHour;
        var _isNoon = false;
        if (use12hour) {
            endHour = maxHour >= 12 ? curHour < 12 ? 12 : maxHour - 12 : maxHour;
            maxHour >= 12 && curHour >= 12 && (_isNoon = true);
        }
        // 默认为最后一个
        hourListData.selectIndex = endHour;
        for (var _i6 = _startHour; _i6 < step; _i6++) {
            if (hourText <= endHour) {
                if ((use12hour && curHour >= 12 ? curHour - 12 : curHour) == _i6) {
                    hourListData.selectIndex = _i6;
                }
                hourListData.listData.push({
                    // text: `${hourText === 0 && isNoon ? 12 : hourText}${langData.hour}`,
                    text: (hourText === 0 && _isNoon ? 12 : hourText) + ':00',
                    dataKey: hourText
                });
            }
            hourText++;
        }
    } else {
        for (var _i7 = 0; _i7 < step; _i7++) {
            hourListData.listData.push({
                // text: `${hourText === 0 && use12hour && curHour >= 12 ? 12 : hourText}${langData.hour}`,
                text: (hourText === 0 && use12hour && curHour >= 12 ? 12 : hourText) + ':00',
                dataKey: hourText
            });
            hourText++;
        }
    }
    return hourListData;
}
function setMinuteListData(currDateData, minuteStep, calcMinDate, calcMaxDate, langData) {
    var currYear = currDateData.year,
        currMonth = currDateData.month,
        currDay = currDateData.day,
        curHour = currDateData.hour,
        curMinute = currDateData.minute;
    var minYear = calcMinDate.year,
        minMonth = calcMinDate.month,
        minDay = calcMinDate.day,
        minHour = calcMinDate.hour,
        minMinute = calcMinDate.minute;
    var maxYear = calcMaxDate.year,
        maxMonth = calcMaxDate.month,
        maxDay = calcMaxDate.day,
        maxHour = calcMaxDate.hour,
        maxMinute = calcMaxDate.minute;

    var minuteListData = {
        className: 'minute-list',
        itemClassName: 'minute-item',
        scrollType: 'minute',
        selectIndex: minuteStep == 1 ? curMinute : 0,
        listData: []
    };
    var step = 60 / minuteStep;
    var minuteText = 0;
    if (currYear <= minYear && currMonth <= minMonth && currDay <= minDay && curHour <= minHour) {
        var startMinute = Math.floor(minMinute / minuteStep);
        minuteText = startMinute * minuteStep;
        // 最大最小范围在同一天
        if (minYear === maxYear && minMonth === maxMonth && minDay === maxDay && minHour === maxHour) {
            step = Math.ceil(maxMinute / minuteStep);
        }
        // 默认为0
        minuteListData.selectIndex = 0;
        for (var i = startMinute; i < step; i++) {
            if (curMinute == i) {
                minuteListData.selectIndex = i - startMinute;
            }
            minuteListData.listData.push({
                text: '' + minuteText + langData.minutes,
                dataKey: minuteText
            });
            minuteText += minuteStep;
        }
    } else if (currYear >= maxYear && currMonth >= maxMonth && currDay >= maxDay && curHour >= maxHour) {
        var _startMinute = 0;
        step = maxMinute === 0 ? 1 : Math.ceil(maxMinute / minuteStep);
        // 默认为最后一个
        minuteListData.selectIndex = step - 1;
        for (var _i8 = _startMinute; _i8 < step; _i8++) {
            if (minuteText <= maxMinute) {
                if (curMinute == _i8 + 1) {
                    minuteListData.selectIndex = _i8;
                }
                minuteListData.listData.push({
                    text: '' + minuteText + langData.minutes,
                    dataKey: minuteText
                });
            }
            minuteText += minuteStep;
        }
    } else {
        for (var _i9 = 0; _i9 < step; _i9++) {
            if (minuteText == curMinute) {
                minuteListData.selectIndex = _i9;
            }
            minuteListData.listData.push({
                text: '' + minuteText + langData.minutes,
                dataKey: minuteText
            });
            minuteText += minuteStep;
        }
    }
    return minuteListData;
}
function setHour12ListData(currDateData, calcMinDate, calcMaxDate, langData) {
    var curYear = currDateData.year,
        curMonth = currDateData.month,
        currDay = currDateData.day,
        curHour = currDateData.hour;
    var minYear = calcMinDate.year,
        minMonth = calcMinDate.month,
        minDay = calcMinDate.day,
        minHour = calcMinDate.hour;
    var maxYear = calcMaxDate.year,
        maxMonth = calcMaxDate.month,
        maxDay = calcMaxDate.day,
        maxHour = calcMaxDate.hour;

    var am = {
        text: langData.am,
        dataKey: 'am'
    };
    var pm = {
        text: langData.pm,
        dataKey: 'pm'
    };
    var hour12ListData = {
        className: 'minute-list',
        itemClassName: 'minute-item',
        scrollType: 'hour12',
        selectIndex: curHour < 12 ? 0 : 1,
        listData: [am, pm]
    };
    if (curYear <= minYear && curMonth <= minMonth && currDay <= minDay && minHour >= 12) {
        hour12ListData.listData = [pm];
    }
    if (curYear >= maxYear && curMonth >= maxMonth && currDay >= maxDay && maxHour < 12) {
        hour12ListData.listData = [am];
    }
    return hour12ListData;
}