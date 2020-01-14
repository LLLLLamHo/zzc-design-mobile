'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _config = require('../../_util/config');

var _config2 = _interopRequireDefault(_config);

var _CalendarCloseBox = require('./CalendarCloseBox');

var _CalendarCloseBox2 = _interopRequireDefault(_CalendarCloseBox);

var _CalendarResult = require('./CalendarResult');

var _CalendarResult2 = _interopRequireDefault(_CalendarResult);

var _CalendarWeek = require('./CalendarWeek');

var _CalendarWeek2 = _interopRequireDefault(_CalendarWeek);

var _CalendarListBox = require('./CalendarListBox');

var _CalendarListBox2 = _interopRequireDefault(_CalendarListBox);

var _createCalendarMap = require('../util/createCalendarMap');

var _createCalendarMap2 = _interopRequireDefault(_createCalendarMap);

var _i18n = require('../util/i18n');

var _i18n2 = _interopRequireDefault(_i18n);

var _updateCalendarMap3 = require('../util/updateCalendarMap');

var _updateCalendarMap4 = _interopRequireDefault(_updateCalendarMap3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Calendar = function (_PureComponent) {
    (0, _inherits3.default)(Calendar, _PureComponent);

    function Calendar(props) {
        (0, _classCallCheck3.default)(this, Calendar);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Calendar.__proto__ || (0, _getPrototypeOf2.default)(Calendar)).call(this, props));

        console.log(props);
        _this.state = {
            i18n: (0, _i18n2.default)(props.lang),
            calendarMap: (0, _createCalendarMap2.default)(props.lang),
            _startTime: props.startTime ? _this.conversionSelectTime(props.startTime) : null,
            _startIndexInfo: null,
            _endTime: props.endTime ? _this.conversionSelectTime(props.endTime) : null,
            _endIndexInfo: null
        };
        _this.selectItem = _this.selectItem.bind(_this);
        return _this;
    }

    (0, _createClass3.default)(Calendar, [{
        key: 'conversionSelectTime',
        value: function conversionSelectTime(time) {
            if (!time) return null;
            var newTime = new Date(time);
            return {
                Y: newTime.getFullYear(),
                M: newTime.getMonth(),
                D: newTime.getDate(),
                h: newTime.getHours(),
                m: newTime.getMinutes(),
                w: newTime.getDay(),
                t: newTime.getTime()
            };
        }
        // 因为react设计大量循环计算，所以点击选择的规则通过操作DOM来渲染

    }, {
        key: 'selectItem',
        value: function selectItem(monthKey, rowKey, itemKey, dayInfo) {
            var _state = this.state,
                _startTime = _state._startTime,
                _endTime = _state._endTime;

            if (!_startTime && !_endTime || _startTime && _endTime) {
                this.updateStartTime(_startTime, _endTime, monthKey, rowKey, itemKey);
            } else if (_startTime && !_endTime) {
                // 需要对end时间做判断，如果小于start时间，那么将这次操作进行更新start
                var start_timestamp = new Date(_startTime.Y + '/' + (_startTime.M + 1) + '/' + _startTime.D);
                var end_timestamp = new Date(dayInfo.y + '/' + (dayInfo.m + 1) + '/' + dayInfo.d);
                if (end_timestamp < start_timestamp) {
                    this.updateStartTime(_startTime, _endTime, monthKey, rowKey, itemKey);
                } else {
                    this.updateEndTime(_startTime, _endTime, monthKey, rowKey, itemKey);
                }
            }
        }
    }, {
        key: 'updateStartTime',
        value: function updateStartTime(_startTime, _endTime, monthKey, rowKey, itemKey) {
            var _updateCalendarMap = (0, _updateCalendarMap4.default)({
                type: 'start',
                _startTime: _startTime,
                _endTime: _endTime,
                _startIndexInfo: this.state._startIndexInfo,
                _endIndexInfo: this.state._endIndexInfo,
                map: this.state.calendarMap,
                monthKey: monthKey, rowKey: rowKey, itemKey: itemKey
            }),
                newMap = _updateCalendarMap.newMap,
                select = _updateCalendarMap.select;

            this.setState({
                _startIndexInfo: { monthKey: monthKey, rowKey: rowKey, itemKey: itemKey },
                _endIndexInfo: null,
                _endTime: null,
                _startTime: this.conversionSelectTime(new Date(select.y + '/' + (select.m + 1) + '/' + select.d)),
                calendarMap: newMap
            });
        }
    }, {
        key: 'updateEndTime',
        value: function updateEndTime(_startTime, _endTime, monthKey, rowKey, itemKey) {
            var _updateCalendarMap2 = (0, _updateCalendarMap4.default)({
                type: 'end',
                _startIndexInfo: this.state._startIndexInfo,
                _startTime: _startTime,
                _endTime: _endTime,
                map: this.state.calendarMap,
                monthKey: monthKey, rowKey: rowKey, itemKey: itemKey
            }),
                newMap = _updateCalendarMap2.newMap,
                select = _updateCalendarMap2.select;

            this.setState({
                _endIndexInfo: { monthKey: monthKey, rowKey: rowKey, itemKey: itemKey },
                _endTime: this.conversionSelectTime(new Date(select.y + '/' + (select.m + 1) + '/' + select.d)),
                calendarMap: newMap
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                style = _props.style,
                prefixCls = _props.prefixCls,
                className = _props.className,
                lang = _props.lang;
            var _state2 = this.state,
                calendarMap = _state2.calendarMap,
                i18n = _state2.i18n,
                _startTime = _state2._startTime,
                _endTime = _state2._endTime;

            var cardClassName = (0, _classnames2.default)(prefixCls, className);
            console.log(calendarMap);
            return _react2.default.createElement(
                'div',
                { style: style, className: cardClassName },
                _react2.default.createElement(_CalendarCloseBox2.default, null),
                _react2.default.createElement(_CalendarResult2.default, { lang: lang, i18n: i18n, startTime: _startTime, endTime: _endTime }),
                _react2.default.createElement(_CalendarWeek2.default, { weekList: i18n.weekList }),
                _react2.default.createElement(_CalendarListBox2.default, { selectItem: this.selectItem, list: calendarMap })
            );
        }
    }]);
    return Calendar;
}(_react.PureComponent);

exports.default = Calendar;

Calendar.defaultProps = {
    prefixCls: _config2.default.cls + '-calendar',
    className: '',
    style: {},
    lang: 'cn'
};