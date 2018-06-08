'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.initMinDate = initMinDate;
exports.initMaxDate = initMaxDate;
exports.initSelectDate = initSelectDate;
exports.resolveDate = resolveDate;

var _typeof = require('../../_util/typeof');

function initMinDate(defaultDate) {
    if (defaultDate) {
        return resolveDate(defaultDate);
    }
    var currDate = new Date(new Date().getFullYear() - 10 + '-1-1');
    var year = currDate.getFullYear();
    var month = currDate.getMonth() + 1;
    var day = currDate.getDate();
    return {
        year: year,
        month: month,
        day: day,
        hour: 10,
        minute: 0
    };
}
function initMaxDate(defaultDate) {
    if (defaultDate) {
        return resolveDate(defaultDate);
    }
    var currDate = new Date(new Date().getFullYear() + 10 + '-1-1');
    var year = currDate.getFullYear();
    var month = currDate.getMonth() + 1;
    var day = currDate.getDate();
    return {
        year: year,
        month: month,
        day: day,
        hour: 10,
        minute: 0
    };
}
function initSelectDate(selectDate, minDate) {
    if ((0, _typeof.isDate)(selectDate)) {
        var year = selectDate.getFullYear();
        var month = selectDate.getMonth() + 1;
        var day = selectDate.getDate();
        var hour = selectDate.getHours();
        var minute = selectDate.getMinutes();
        return {
            year: year,
            month: month,
            day: day,
            hour: hour,
            minute: minute
        };
    }
    return minDate;
}
function resolveDate(dateString) {
    var splitDate = dateString.split(' ');
    var date = splitDate[0].split('-');
    var time = splitDate[1] ? splitDate[1].split(':') : [10, 0];
    return {
        year: date[0],
        month: date[1],
        day: date[2],
        hour: time[0],
        minute: time[1]
    };
}