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
function setMonthListData(currMonth, langData) {
    var monthListData = {
        className: 'month-list',
        itemClassName: 'month-item',
        scrollType: 'month',
        selectIndex: currMonth - 1,
        listData: []
    };
    var monthText = 1;
    for (var i = 0; i < 12; i++) {
        monthListData.listData.push({
            text: '' + monthText + langData.month,
            dataKey: monthText
        });
        monthText++;
    }
    return monthListData;
}
function setDayListData(currDateData, langData) {
    var year = currDateData.year,
        month = currDateData.month,
        day = currDateData.day;

    var dayListData = {
        className: 'day-list',
        itemClassName: 'day-item',
        scrollType: 'day',
        selectIndex: day - 1,
        listData: []
    };
    var curDate = new Date(year + '-' + (0, _resetDate.resetDate)(month) + '-' + (0, _resetDate.resetDate)(day));
    var calcDate = new Date(curDate.setDate(1));
    var dayCount = new Date(new Date(calcDate.setMonth(month)).setDate(0)).getDate();
    var dayText = 1;
    for (var i = 0; i < dayCount; i++) {
        dayListData.listData.push({
            text: '' + dayText + langData.day,
            dataKey: dayText
        });
        dayText++;
    }
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