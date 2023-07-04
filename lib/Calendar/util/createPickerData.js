'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

exports.default = createPickerData;
exports._renderPickerData = _renderPickerData;
exports._renderPickerDataHour = _renderPickerDataHour;
exports._renderPickerDataMinute = _renderPickerDataMinute;

var _typeof = require('../../_util/typeof');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createPickerData(timeRange, minutesInterval, currStartTime, currEndTime, defaultStartTime, defaultEndTime) {
    var startTimeRange = (0, _typeof.isString)(timeRange) ? JSON.parse(timeRange).left || [0, 24] : timeRange;
    var endTimeRange = (0, _typeof.isString)(timeRange) ? JSON.parse(timeRange).right || [0, 24] : timeRange;
    var startPickerHourInfo = _renderPickerDataHour(startTimeRange, currStartTime, defaultStartTime);
    var startPickerMinuteInfo = _renderPickerDataMinute(minutesInterval, currStartTime, defaultEndTime);
    var endPickerHourInfo = _renderPickerDataHour(endTimeRange, currEndTime, defaultEndTime);
    var endPickerMinuteInfo = _renderPickerDataMinute(minutesInterval, currEndTime, defaultEndTime);
    var pickerInfo = [(0, _assign2.default)({ className: 'zds-calendar-t-p-s-d', itemClassName: 'zds-calendar-t-p-s-d-i', scrollType: '0' }, startPickerHourInfo), (0, _assign2.default)({ className: 'zds-calendar-t-p-s-t', itemClassName: 'zds-calendar-t-p-s-t-i', scrollType: '1' }, startPickerMinuteInfo), (0, _assign2.default)({ className: 'zds-calendar-t-r-s-d', itemClassName: 'zds-calendar-t-r-s-d-i', scrollType: '2' }, endPickerHourInfo), (0, _assign2.default)({ className: 'zds-calendar-t-r-s-t', itemClassName: 'zds-calendar-t-r-s-t-i', scrollType: '3' }, endPickerMinuteInfo)];
    return pickerInfo;
}
function _renderPickerData(timeRange, minutesInterval, currTime, defaultTime) {
    var _timeRange = (0, _slicedToArray3.default)(timeRange, 2),
        start = _timeRange[0],
        end = _timeRange[1];

    var pickerIime = [];
    var MAX = 23;
    var Index = 0;
    var selectTime = currTime ? currTime.h + ':' + currTime.m : defaultTime;
    for (var i = start; i <= end; i++) {
        if (i > MAX) {
            break;
        }
        var step = void 0;
        if (60 % minutesInterval == 0) {
            step = 60 / minutesInterval;
        } else {
            step = 0;
        }
        for (var n = 0; n < step; n++) {
            var h = i < 10 ? '0' + i : i;
            var m = n * minutesInterval;
            if (i == end && n > 0) {
                break;
            }
            var minutes = m < 10 ? '0' + m : m;
            var c_t = i + ':' + m;
            var time = h + ':' + minutes;
            if (c_t == selectTime) {
                Index = pickerIime.length;
            }
            pickerIime.push({
                text: time,
                dataKey: time
            });
        }
    }
    return {
        selectIndex: Index,
        listData: pickerIime
    };
}
function _renderPickerDataHour(timeRange, currTime, defaultTime) {
    var _timeRange2 = (0, _slicedToArray3.default)(timeRange, 2),
        start = _timeRange2[0],
        end = _timeRange2[1];

    var pickerIime = [];
    var MAX = 23;
    var Index = 0;
    var selectDay = currTime ? '' + currTime.h : defaultTime.split(":")[0];
    for (var i = start; i <= end; i++) {
        if (i > MAX) {
            break;
        }
        if (selectDay === i.toString()) {
            Index = i;
        }
        pickerIime.push({
            text: i > 9 ? i.toString() : '0' + i,
            dataKey: i > 9 ? i.toString() : '0' + i
        });
    }
    return {
        selectIndex: Index,
        listData: pickerIime
    };
}
function _renderPickerDataMinute(minutesInterval, currTime, defaultTime) {
    var pickerIime = [];
    var Index = 0;
    var selectTime = currTime ? '' + currTime.m : defaultTime.split(":")[1];
    var step = void 0;
    if (60 % minutesInterval == 0) {
        step = 60 / minutesInterval;
    } else {
        step = 0;
    }
    for (var n = 0; n < step; n++) {
        var m = n * minutesInterval;
        var minutes = m < 10 ? '0' + m : m;
        var c_t = '' + m;
        var time = '' + minutes;
        if (c_t == selectTime) {
            Index = n;
        }
        pickerIime.push({
            text: time,
            dataKey: time
        });
    }
    return {
        selectIndex: Index,
        listData: pickerIime
    };
}