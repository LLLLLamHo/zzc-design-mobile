'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.initMinDate = initMinDate;
exports.initMaxDate = initMaxDate;
exports.initSelectDate = initSelectDate;
exports.resolveDate = resolveDate;
exports.getLastDate = getLastDate;
exports.getFirstDate = getFirstDate;

var _typeof = require('../../_util/typeof');

var _resetDate = require('../../_util/resetDate');

function initMinDate(defaultDate) {
    if (defaultDate) {
        return resolveDate(defaultDate, 'min');
    }
    var currDate = new Date(new Date().getFullYear() - 10 + '/01/01');
    var year = currDate.getFullYear();
    var month = currDate.getMonth() + 1;
    var day = currDate.getDate();
    return {
        year: year,
        month: month,
        day: day,
        hour: 0,
        minute: 0
    };
}
function initMaxDate(defaultDate) {
    if (defaultDate) {
        return resolveDate(defaultDate, 'max');
    }
    var currDate = new Date(new Date().getFullYear() + 10 + '/12/31');
    var year = currDate.getFullYear();
    var month = currDate.getMonth() + 1;
    var day = currDate.getDate();
    return {
        year: year,
        month: month,
        day: day,
        hour: 0,
        minute: 0
    };
}
function initSelectDate(selectDate, minDate, maxDate) {
    // 如果传入的选中时间不在规定范围里面
    var minDateTime = new Date(minDate.year + '/' + minDate.month + '/' + minDate.day + ' ' + minDate.hour + ':' + minDate.minute);
    var maxDateTime = new Date(maxDate.year + '/' + maxDate.month + '/' + maxDate.day + ' ' + maxDate.hour + ':' + maxDate.minute);
    var selectDateObj = {
        year: selectDate.getFullYear(),
        month: selectDate.getMonth() + 1,
        day: selectDate.getDate(),
        hour: selectDate.getHours(),
        minute: selectDate.getMinutes()
    };
    // 当前选中的时间小于限制时间，需要对每一个值做对比，保留符合范围的月日时分
    if (selectDate < minDateTime) {
        return {
            year: minDate.year,
            month: selectDateObj.year <= minDate.year && selectDateObj.month < minDate.month ? minDate.month : selectDateObj.month,
            day: selectDateObj.year <= minDate.year && selectDateObj.month < minDate.month && selectDateObj.day < minDate.day ? minDate.day : selectDateObj.day,
            hour: selectDateObj.year <= minDate.year && selectDateObj.month < minDate.month && selectDateObj.day < minDate.day && selectDateObj.hour < minDate.hour ? minDate.hour : selectDateObj.hour,
            minute: selectDateObj.year <= minDate.year && selectDateObj.month < minDate.month && selectDateObj.day < minDate.day && selectDateObj.hour < minDate.hour && selectDateObj.minute < minDate.minute ? minDate.minute : selectDateObj.minute
        };
    }
    // 当前选中的时间大于限制时间，需要对每一个值做对比，保留符合范围的月日时分
    if (selectDate > maxDateTime) {
        return {
            year: maxDate.year,
            month: selectDateObj.year >= maxDate.year && selectDateObj.month > maxDate.month ? maxDate.month : selectDateObj.month,
            day: selectDateObj.year >= maxDate.year && selectDateObj.month > maxDate.month && selectDateObj.day > maxDate.day ? maxDate.day : selectDateObj.day,
            hour: selectDateObj.year >= maxDate.year && selectDateObj.month > maxDate.month && selectDateObj.day > maxDate.day && selectDateObj.hour > maxDate.hour ? maxDate.hour : selectDateObj.hour,
            minute: selectDateObj.year >= maxDate.year && selectDateObj.month > maxDate.month && selectDateObj.day > maxDate.day && selectDateObj.hour > maxDate.hour && selectDateObj.minute > maxDate.minute ? maxDate.minute : selectDateObj.minute
        };
    }
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
function resolveDate(dateString, type) {
    if ((0, _typeof.isDate)(dateString)) {
        var year = dateString.getFullYear();
        var month = dateString.getMonth() + 1;
        var day = dateString.getDate();
        var hour = dateString.getHours();
        var minute = dateString.getMinutes();
        return {
            year: year,
            month: month,
            day: day,
            hour: hour,
            minute: minute
        };
    }
    var splitDate = dateString.split(' ');
    var date = splitDate[0].split('/');
    var time = void 0;
    if (type == 'min') {
        time = splitDate[1] ? splitDate[1].split(':') : [0, 0];
    } else {
        time = splitDate[1] ? splitDate[1].split(':') : [24, 0];
    }
    return {
        year: parseInt(date[0]),
        month: parseInt(date[1]),
        day: parseInt(date[2]),
        hour: parseInt(time[0]),
        minute: parseInt(time[1])
    };
}
function getLastDate(year, month) {
    return new Date(new Date(year + '/' + (0, _resetDate.resetDate)(month + 1) + '/01').setDate(0)).getDate();
}
function getFirstDate(year, month) {
    return new Date(new Date(year + '/' + (0, _resetDate.resetDate)(month + 1) + '/01')).getDate();
}