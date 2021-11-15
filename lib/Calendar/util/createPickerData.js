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

var _typeof = require('../../_util/typeof');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createPickerData(timeRange, minutesInterval, currStartTime, currEndTime, defaultStartTime, defaultEndTime) {
    var startTimeRange = (0, _typeof.isArray)(timeRange) ? timeRange : timeRange.left || [0, 24];
    var endTimeRange = (0, _typeof.isArray)(timeRange) ? timeRange : timeRange.right || [0, 24];
    var startPickerInfo = _renderPickerData(startTimeRange, minutesInterval, currStartTime, defaultStartTime);
    var endPickerInfo = _renderPickerData(endTimeRange, minutesInterval, currEndTime, defaultEndTime);
    var pickerInfo = [(0, _assign2.default)({ className: 'zds-calendar-t-p-s', itemClassName: 'zds-calendar-t-p-s-i', scrollType: 'start-time' }, startPickerInfo), (0, _assign2.default)({ className: 'zds-calendar-t-r-s', itemClassName: 'zds-calendar-t-r-s-i', scrollType: 'end-time' }, endPickerInfo)];
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