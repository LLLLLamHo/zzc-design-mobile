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
        selectIndex: 0,
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
        monthText = startMonth;
        // 默认为0
        monthListData.selectIndex = 0;
        for (var _i = startMonth; _i <= 12; _i++) {
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
        var _startMonth = 0;
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
    // 到达最小时间边界
    if (currYear <= minYear && currMonth <= minMonth) {
        var startDay = minDay;
        dayText = startDay;
        // 默认为0
        dayListData.selectIndex = 0;
        for (var i = startDay; i <= dayCount; i++) {
            if (currDay == i) {
                dayListData.selectIndex = i - startDay;
            }
            dayListData.listData.push({
                text: '' + dayText + langData.day,
                dataKey: dayText
            });
            dayText++;
        }
    } else if (currYear >= maxYear && currMonth >= maxMonth) {
        var startMonth = 0;
        // 默认为最后一个
        dayListData.selectIndex = maxDay;
        for (var _i3 = startMonth; _i3 < maxDay; _i3++) {
            if (dayText <= maxDay) {
                if (currDay == _i3 + 1) {
                    dayListData.selectIndex = _i3;
                }
                dayListData.listData.push({
                    text: '' + dayText + langData.day,
                    dataKey: dayText
                });
            }
            dayText++;
        }
    } else {
        for (var _i4 = 0; _i4 < dayCount; _i4++) {
            dayListData.listData.push({
                text: '' + dayText + langData.day,
                dataKey: dayText
            });
            dayText++;
        }
    }
    console.log(dayListData);
    return dayListData;
}
function setHoursListData(currDateData, use12hour, langData) {
    var hour = currDateData.hour;

    var hourListData = {
        className: 'hour-list',
        itemClassName: 'hour-item',
        scrollType: 'hour',
        selectIndex: use12hour && hour >= 12 ? hour - 12 : hour,
        listData: []
    };
    var step = use12hour ? 12 : 24;
    var hourText = 0;
    for (var i = 0; i < step; i++) {
        hourListData.listData.push({
            text: '' + hourText + langData.hour,
            dataKey: hourText
        });
        hourText++;
    }
    return hourListData;
}
function setMinuteListData(currDateData, minuteStep, langData) {
    var minute = currDateData.minute;

    var minuteListData = {
        className: 'minute-list',
        itemClassName: 'minute-item',
        scrollType: 'minute',
        selectIndex: minuteStep == 1 ? minute : 0,
        listData: []
    };
    var step = 60 / minuteStep;
    var minuteText = 0;
    for (var i = 0; i < step; i++) {
        if (minuteText == minute) {
            minuteListData.selectIndex = i;
        }
        minuteListData.listData.push({
            text: '' + minuteText + langData.minutes,
            dataKey: minuteText
        });
        minuteText += minuteStep;
    }
    return minuteListData;
}
function setHour12ListData(hour, langData) {
    var hour12ListData = {
        className: 'minute-list',
        itemClassName: 'minute-item',
        scrollType: 'hour12',
        selectIndex: hour < 12 ? 0 : 1,
        listData: [{
            text: langData.am,
            dataKey: 'am'
        }, {
            text: langData.pm,
            dataKey: 'pm'
        }]
    };
    return hour12ListData;
}