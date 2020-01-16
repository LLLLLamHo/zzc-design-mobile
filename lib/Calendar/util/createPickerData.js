'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

exports.default = createPickerData;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createPickerData(timeRange, minutesInterval, currStartTime, currEndTime, defaultStartTime, defaultEndTime) {
    var _timeRange = (0, _slicedToArray3.default)(timeRange, 2),
        start = _timeRange[0],
        end = _timeRange[1];

    var pickerIime = [];
    var startIndex = 0;
    var endIndex = 0;
    var selectStartTime = currStartTime ? currStartTime.h + ':' + currStartTime.m : defaultStartTime;
    var selectEndTime = currEndTime ? currEndTime.h + ':' + currEndTime.m : defaultEndTime;
    for (var i = start; i <= end; i++) {
        var step = void 0;
        if (60 % minutesInterval == 0) {
            step = 60 / minutesInterval;
        } else {
            step = 0;
        }
        for (var n = 0; n < step; n++) {
            var h = i < 10 ? '0' + i : i;
            var m = n * minutesInterval;
            var minutes = m < 10 ? '0' + m : m;
            var c_t = i + ':' + m;
            var time = h + ':' + minutes;
            if (c_t == selectStartTime) {
                startIndex = pickerIime.length;
            }
            if (c_t == selectEndTime) {
                endIndex = pickerIime.length;
            }
            pickerIime.push({
                text: time,
                dataKey: time
            });
        }
    }
    var pickerInfo = [{
        className: 'zds-calendar-t-p-s',
        itemClassName: 'zds-calendar-t-p-s-i',
        scrollType: 'start-time',
        selectIndex: startIndex,
        listData: pickerIime
    }, {
        className: 'zds-calendar-t-r-s',
        itemClassName: 'zds-calendar-t-r-s-i',
        scrollType: 'end-time',
        selectIndex: endIndex,
        listData: pickerIime
    }];
    return pickerInfo;
}