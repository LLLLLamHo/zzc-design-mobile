'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

exports.default = createCalendarMap;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createCalendarMap(lang) {
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth();
    var now = new Date();
    var calendarMap = [];
    // 今天
    var nowMonth = now.getMonth();
    var nowYear = now.getFullYear();
    var nowDay = now.getDate();
    var step = 13;
    for (var i = 0; i < step; i++) {
        calendarMap.push(_createMonthMap({
            n_y: nowYear,
            n_m: nowMonth,
            n_d: nowDay
        }, year, month, lang));
        if (month >= 11) {
            month = 0;
            year += 1;
        } else {
            month += 1;
        }
    }
    return calendarMap;
}
function _createMonthMap(now, year, month, lang) {
    var startDay = 0;
    var lastDay = new Date(year, month + 1, 0).getDate();
    var monthList = [];
    // 过去日期
    var effectiveDate = void 0;
    if (year <= now.n_y && month <= now.n_m) {
        effectiveDate = now.n_d;
    }
    var rowList = [];
    // 第一天补位，如果不是星期1，那么将需要补位
    rowList = _setStartEmptyItem(year, month, startDay + 1);
    for (var i = startDay; i < lastDay; i++) {
        var currData = i + 1;
        if (effectiveDate && currData < effectiveDate) {
            rowList.push(_getDayItemInfo({
                day: currData,
                month: month,
                year: year,
                gone: true,
                sub: _createDayInfoSubText((0, _assign2.default)({}, now, { c_y: year, c_m: month, c_d: currData }))
            }));
        } else {
            rowList.push(_getDayItemInfo({
                day: currData,
                month: month,
                year: year,
                gone: false,
                sub: _createDayInfoSubText((0, _assign2.default)({}, now, { c_y: year, c_m: month, c_d: currData }))
            }));
        }
        // 7列为1行
        if (rowList.length % 7 == 0) {
            monthList.push(rowList.splice(0, 7));
        }
    }
    // 如果最后一天不是星期日，那么需要对日期补位
    rowList = rowList.concat(_setEndEmptyItem(rowList.length));
    monthList.push(rowList.splice(0, 7));
    return {
        title: _createMonthTitle(month, lang),
        m: month,
        y: year,
        list: monthList
    };
}
function _setStartEmptyItem(year, month, day) {
    var date = new Date(year + '/' + (month + 1) + '/' + day + ' 00:00:00');
    var week = date.getDay() - 1; // 因为星期天是放最后，所以需要减一来计算
    var emptyList = [];
    for (var i = 0; i < week; i++) {
        emptyList.push(_getDayItemInfo({
            empty: true
        }));
    }
    return emptyList;
}
function _setEndEmptyItem(legnth) {
    var emptyList = [];
    for (var i = 7; i > legnth; i--) {
        emptyList.push(_getDayItemInfo({
            empty: true
        }));
    }
    return emptyList;
}
function _getDayItemInfo(data) {
    return {
        empty: data.empty || false,
        gone: data.gone || false,
        y: data.year,
        m: data.month,
        d: data.day || '',
        sub: data.sub || null
    };
}
function _createMonthTitle(month, lang) {
    switch (month) {
        case 0:
            return lang == 'cn' ? '一月' : '壹月';
        case 1:
            return '二月';
        case 2:
            return '三月';
        case 3:
            return '四月';
        case 4:
            return '五月';
        case 5:
            return '六月';
        case 6:
            return '七月';
        case 7:
            return '八月';
        case 8:
            return '九月';
        case 9:
            return '十月';
        case 10:
            return lang == 'cn' ? '十一月' : '十壹月';
        case 11:
            return '十二月';
    }
}
function _createDayInfoSubText(data) {
    if (data.n_y == data.c_y && data.n_m == data.c_m && data.n_d == data.c_d) {
        return '今天';
    }
    return null;
}