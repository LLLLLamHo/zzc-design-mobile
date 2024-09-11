'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

exports.setYearListData = setYearListData;
exports.setMonthListData = setMonthListData;
exports.setDayListData = setDayListData;
exports.setHoursListData = setHoursListData;
exports.setMinuteListData = setMinuteListData;
exports.setHour12ListData = setHour12ListData;

var _resetDate = require('../../_util/resetDate');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
function setMonthListData(calcCurrDate, calcMinDate, calcMaxDate, langData, monthList) {
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
                text: '' + monthList[monthText - 1] + langData.month,
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
                text: '' + monthList[monthText - 1] + langData.month,
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
                    text: '' + monthList[monthText - 1] + langData.month,
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
function setHoursListData(currDateData, use12hour, calcMinDate, calcMaxDate, hourRange, hourUnit) {
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
    // 根据传入的范围初始化数据
    if (hourRange) {
        var _hourRange = (0, _slicedToArray3.default)(hourRange, 2),
            start = _hourRange[0],
            end = _hourRange[1];

        step = end - start + start + 1;
        hourText = +start;
        hourListData.selectIndex = curHour < start || curHour > end ? 0 : curHour - start;
    }
    if (currYear <= minYear && currMonth <= minMonth && currDay <= minDay) {
        var startHour = minHour;
        if (use12hour) {
            startHour = minHour >= 12 ? minHour - 12 : curHour >= 12 ? 0 : minHour;
        }
        // 最大最小范围在同一天
        if (minYear === maxYear && minMonth === maxMonth && minDay === maxDay) {
            step = !use12hour || maxHour < 12 ? maxHour : curHour >= 12 ? maxHour - 12 : 11;
            step += 1;
        }
        if (hourRange) {
            var _hourRange2 = (0, _slicedToArray3.default)(hourRange, 2),
                _start = _hourRange2[0],
                _end = _hourRange2[1];
            // 当限制的最小小时小于小时范围，那么取小时范围的start作为开始的第一个小时
            // 当限制的最小小时大于小时范围的start，那么将取minHour作为第一个小时


            if (minHour < _start) {
                startHour = _start;
                hourText = +_start;
            } else {
                startHour = minHour;
                step = _end - minHour + minHour + 1;
                hourText = +startHour;
            }
            hourListData.selectIndex = curHour < _start || curHour > _end ? 0 : curHour - _start;
        } else {
            hourText = startHour;
            // 默认为0
            hourListData.selectIndex = 0;
        }
        for (var i = startHour; i < step; i++) {
            if (curHour >= minHour && (use12hour && curHour >= 12 ? curHour - 12 : curHour) == i) {
                hourListData.selectIndex = i - startHour;
            }
            hourListData.listData.push({
                text: '' + hourText + hourUnit,
                dataKey: hourText
            });
            hourText++;
        }
    } else if (currYear >= maxYear && currMonth >= maxMonth && currDay >= maxDay) {
        var _startHour = 0;
        var endHour = maxHour;
        if (use12hour) {
            endHour = maxHour >= 12 ? curHour < 12 ? 12 : maxHour - 12 : maxHour;
        }
        if (hourRange) {
            var _hourRange3 = (0, _slicedToArray3.default)(hourRange, 2),
                _start2 = _hourRange3[0],
                _end2 = _hourRange3[1];

            _startHour = _start2;
            hourListData.selectIndex = curHour < _start2 || curHour > _end2 ? 0 : curHour - _start2;
        } else {
            // 默认为最后一个
            hourListData.selectIndex = endHour;
        }
        for (var _i6 = _startHour; _i6 < step; _i6++) {
            if (hourText <= endHour) {
                if (curHour <= maxHour && (use12hour && curHour >= 12 ? curHour - 12 : curHour) == _i6) {
                    hourListData.selectIndex = _i6 - _startHour;
                }
                hourListData.listData.push({
                    text: '' + hourText + hourUnit,
                    dataKey: hourText
                });
            }
            hourText++;
        }
    } else {
        var _startHour2 = 0;
        if (hourRange) {
            var _hourRange4 = (0, _slicedToArray3.default)(hourRange, 1),
                _start3 = _hourRange4[0];

            _startHour2 = _start3;
        }
        for (var _i7 = _startHour2; _i7 < step; _i7++) {
            hourListData.listData.push({
                text: '' + (use12hour && hourText >= 12 ? hourText - 12 : hourText) + hourUnit,
                dataKey: hourText
            });
            hourText++;
        }
    }
    return hourListData;
}
function setMinuteListData(currDateData, minuteStep, calcMinDate, calcMaxDate, langData, hourRange) {
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
    // 当有小时范围的时候，如果当前小时等于小时范围的最大小时，那么将只创建0分选项
    if (hourRange) {
        var end = hourRange[1];
        if (curHour == end) {
            step = 1;
        }
    }
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