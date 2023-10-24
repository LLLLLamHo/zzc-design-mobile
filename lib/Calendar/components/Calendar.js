'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

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

var _Popup = require('../../Popup');

var _Popup2 = _interopRequireDefault(_Popup);

var _CalendarCloseBox = require('./CalendarCloseBox');

var _CalendarCloseBox2 = _interopRequireDefault(_CalendarCloseBox);

var _CalendarResult = require('./CalendarResult');

var _CalendarResult2 = _interopRequireDefault(_CalendarResult);

var _CalendarWeek = require('./CalendarWeek');

var _CalendarWeek2 = _interopRequireDefault(_CalendarWeek);

var _CalendarListBox = require('./CalendarListBox');

var _CalendarListBox2 = _interopRequireDefault(_CalendarListBox);

var _CalendarFooter = require('./CalendarFooter');

var _CalendarFooter2 = _interopRequireDefault(_CalendarFooter);

var _createCalendarMap2 = require('../util/createCalendarMap');

var _createCalendarMap3 = _interopRequireDefault(_createCalendarMap2);

var _i18n = require('../util/i18n');

var _i18n2 = _interopRequireDefault(_i18n);

var _updateCalendarMap5 = require('../util/updateCalendarMap');

var _updateCalendarMap6 = _interopRequireDefault(_updateCalendarMap5);

var _typeof = require('../../_util/typeof');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Calendar = function (_PureComponent) {
    (0, _inherits3.default)(Calendar, _PureComponent);

    function Calendar(props) {
        (0, _classCallCheck3.default)(this, Calendar);

        // timeRange改变同步更新 selectTime 
        var _this = (0, _possibleConstructorReturn3.default)(this, (Calendar.__proto__ || (0, _getPrototypeOf2.default)(Calendar)).call(this, props));

        _this.updateSelectTime = function (props) {
            var _this$state = _this.state,
                _startTime = _this$state._startTime,
                _endTime = _this$state._endTime;

            var newStartTime = _startTime ? _this.conversionSelectTime(new Date(_startTime.Y + '/' + (_startTime.M + 1) + '/' + _startTime.D + ' ' + props.defaultStartTime)) : null;
            var newEndTime = _endTime ? _this.conversionSelectTime(new Date(_endTime.Y + '/' + (_endTime.M + 1) + '/' + _endTime.D + ' ' + props.defaultEndTime)) : null;
            _this.setState({
                _startTime: newStartTime,
                _endTime: newEndTime
            });
        };
        _this.updateStartTime = function (_startTime, _endTime, year, monthKey, rowKey, itemKey) {
            var _this$props = _this.props,
                defaultStartTime = _this$props.defaultStartTime,
                calendarMode = _this$props.calendarMode;

            var _updateCalendarMap = (0, _updateCalendarMap6.default)({
                type: 'start',
                _startIndexInfo: _this.state._startIndexInfo,
                _endIndexInfo: _this.state._endIndexInfo,
                map: _this.state.calendarMap,
                year: year,
                monthKey: monthKey, rowKey: rowKey, itemKey: itemKey,
                i18n: _this.state.i18n,
                calendarMode: calendarMode || 'default'
            }),
                newMap = _updateCalendarMap.newMap,
                select = _updateCalendarMap.select;

            _this.setState({
                _startIndexInfo: { monthKey: monthKey, rowKey: rowKey, itemKey: itemKey, year: year },
                _endIndexInfo: null,
                _endTime: null,
                _startTime: _this.conversionSelectTime(new Date(select.y + '/' + (select.m + 1) + '/' + select.d + ' ' + defaultStartTime)),
                calendarMap: newMap,
                _listBoxPaddingBottom: 30
            }, function () {
                _this.onChangeEvent('day', 'start');
            });
        };
        var _startTime = props.startTime ? _this.conversionSelectTime(props.startTime, props.defaultStartTime) : null;
        var _endTime = props.endTime ? _this.conversionSelectTime(props.endTime, props.defaultEndTime) : null;
        var rangeInViewDate = _this.getRangeInViewDate(props.rangeInView);
        // 与外部传入i18n进行合并
        var i18n = props.i18n ? (0, _assign2.default)((0, _i18n2.default)(props.lang), props.i18n) : (0, _i18n2.default)(props.lang);

        var _createCalendarMap = (0, _createCalendarMap3.default)(props.lang, props.dropOffMaxDays, props.dateExtension, _startTime, _endTime, props.yesterday, i18n, rangeInViewDate),
            startIndexInfo = _createCalendarMap.startIndexInfo,
            endIndexInfo = _createCalendarMap.endIndexInfo,
            calendarMap = _createCalendarMap.calendarMap;

        if (startIndexInfo && endIndexInfo) {
            var _updateCalendarMap2 = (0, _updateCalendarMap6.default)((0, _assign2.default)({ type: 'end', _startIndexInfo: startIndexInfo, _endIndexInfo: endIndexInfo, map: calendarMap, i18n: i18n, calendarMode: props.calendarMode }, endIndexInfo)),
                newMap = _updateCalendarMap2.newMap;

            calendarMap = newMap;
        }
        _this.state = {
            i18n: i18n,
            calendarMap: calendarMap,
            _startTime: _startTime,
            _startIndexInfo: startIndexInfo,
            _endTime: _endTime,
            _endIndexInfo: endIndexInfo,
            _default_calendar_tips: props.defaultCalendarTips,
            _calendar_tips: '',
            _listBoxPaddingBottom: 30,
            rangeInViewDate: rangeInViewDate
        };
        _this.selectItem = _this.selectItem.bind(_this);
        _this.resetSelectDay = _this.resetSelectDay.bind(_this);
        _this.selectTimePicker = _this.selectTimePicker.bind(_this);
        _this.submit = _this.submit.bind(_this);
        _this.closeCalendar = _this.closeCalendar.bind(_this);
        _this.footerRenderCallback = _this.footerRenderCallback.bind(_this);
        return _this;
    }

    (0, _createClass3.default)(Calendar, [{
        key: 'getRangeInViewDate',
        value: function getRangeInViewDate(rangeInView) {
            return {
                start: rangeInView && rangeInView[0] ? new Date(rangeInView[0]) : null,
                end: rangeInView && rangeInView[1] ? new Date(rangeInView[1]) : null
            };
        }
    }, {
        key: 'conversionSelectTime',
        value: function conversionSelectTime(time, hours) {
            if (!time) return null;
            var newTime = new Date(time);
            var h = void 0,
                m = void 0;
            if (hours) {
                var _hours$split = hours.split(':');

                var _hours$split2 = (0, _slicedToArray3.default)(_hours$split, 2);

                h = _hours$split2[0];
                m = _hours$split2[1];
            } else {
                h = newTime.getHours();
                m = newTime.getMinutes();
            }
            if (newTime.toString() == 'Invalid Date') return null;
            return {
                Y: newTime.getFullYear(),
                M: newTime.getMonth(),
                D: newTime.getDate(),
                h: +h,
                m: +m,
                w: newTime.getDay(),
                t: newTime.getTime()
            };
        }
        // 因为react设计大量循环计算，所以点击选择的规则通过操作DOM来渲染

    }, {
        key: 'selectItem',
        value: function selectItem(year, monthKey, rowKey, itemKey, dayInfo) {
            // 当前点击的日期如果是下一年的情况下，需要对monthKey + 12;
            // monthKey = new Date().getFullYear() != dayInfo.y ? monthKey + 12 : monthKey;
            var _state = this.state,
                _startTime = _state._startTime,
                _endTime = _state._endTime;

            if (!_startTime && !_endTime || _startTime && _endTime) {
                this.updateStartTime(_startTime, _endTime, year, monthKey, rowKey, itemKey);
            } else if (_startTime && !_endTime) {
                // 需要对end时间做判断，如果小于start时间，那么将这次操作进行更新start
                var start_timestamp = new Date(_startTime.Y + '/' + (_startTime.M + 1) + '/' + _startTime.D);
                var end_timestamp = new Date(dayInfo.y + '/' + (dayInfo.m + 1) + '/' + dayInfo.d);
                if (end_timestamp < start_timestamp) {
                    this.updateStartTime(_startTime, _endTime, year, monthKey, rowKey, itemKey);
                } else {
                    this.updateEndTime(_startTime, _endTime, year, monthKey, rowKey, itemKey);
                }
            }
        }
    }, {
        key: 'updateEndTime',
        value: function updateEndTime(_startTime, _endTime, year, monthKey, rowKey, itemKey) {
            var _this2 = this;

            var defaultEndTime = this.props.defaultEndTime;

            var _updateCalendarMap3 = (0, _updateCalendarMap6.default)({
                type: 'end',
                _startIndexInfo: this.state._startIndexInfo,
                map: this.state.calendarMap,
                year: year,
                monthKey: monthKey, rowKey: rowKey, itemKey: itemKey,
                i18n: this.state.i18n,
                calendarMode: this.props.calendarMode || 'default'
            }),
                newMap = _updateCalendarMap3.newMap,
                select = _updateCalendarMap3.select;

            this.setState({
                _endIndexInfo: { monthKey: monthKey, rowKey: rowKey, itemKey: itemKey, year: year },
                _endTime: this.conversionSelectTime(new Date(select.y + '/' + (select.m + 1) + '/' + select.d + ' ' + defaultEndTime)),
                calendarMap: newMap
            }, function () {
                _this2.onChangeEvent('day', 'end');
            });
        }
    }, {
        key: 'resetSelectDay',
        value: function resetSelectDay() {
            var _updateCalendarMap4 = (0, _updateCalendarMap6.default)({
                type: 'reset',
                _startIndexInfo: this.state._startIndexInfo,
                _endIndexInfo: this.state._endIndexInfo,
                map: this.state.calendarMap,
                i18n: this.state.i18n,
                calendarMode: this.props.calendarMode || 'default'
            }),
                newMap = _updateCalendarMap4.newMap;

            this.setState({
                _startIndexInfo: null,
                _endIndexInfo: null,
                _startTime: null,
                _endTime: null,
                calendarMap: newMap
            });
        }
    }, {
        key: 'selectTimePicker',
        value: function selectTimePicker(type, selectItem) {
            var _this3 = this;

            var dataKey = selectItem.dataKey;
            var _state2 = this.state,
                _startTime = _state2._startTime,
                _endTime = _state2._endTime;

            if (type == 'start-time' && _startTime) {
                this.setState({
                    _startTime: this.conversionSelectTime(new Date(_startTime.Y + '/' + (_startTime.M + 1) + '/' + _startTime.D + ' ' + dataKey))
                }, function () {
                    _this3.onChangeEvent('time', 'start');
                });
            } else if (_endTime) {
                this.setState({
                    _endTime: this.conversionSelectTime(new Date(_endTime.Y + '/' + (_endTime.M + 1) + '/' + _endTime.D + ' ' + dataKey))
                }, function () {
                    _this3.onChangeEvent('time', 'end');
                });
            }
        }
    }, {
        key: 'onChangeEvent',
        value: function onChangeEvent(eventType, type) {
            var _props = this.props,
                timeChange = _props.timeChange,
                dayChange = _props.dayChange;

            var tips = '';
            if (eventType == 'day' && dayChange && (0, _typeof.isFunction)(dayChange)) {
                tips = dayChange(this.echoSelectData(type, this.state._startTime, this.state._endTime));
            } else if (eventType == 'time' && timeChange && (0, _typeof.isFunction)(timeChange)) {
                tips = timeChange(this.echoSelectData(type, this.state._startTime, this.state._endTime));
            }
            if (this.state._calendar_tips != tips) {
                this.setState({
                    _calendar_tips: tips || ''
                });
            }
        }
    }, {
        key: 'echoSelectData',
        value: function echoSelectData(type, start, end) {
            // 输出日期格式
            if (this.props.mode == 'day') {
                if (start) {
                    delete start.h;
                    delete start.m;
                }
                return {
                    type: type,
                    start: start,
                    end: end
                };
            } else if (this.props.mode == 'day*time') {
                return {
                    type: type,
                    start: start,
                    end: end
                };
            } else {
                return null;
            }
        }
    }, {
        key: 'formatSubmitEchoData',
        value: function formatSubmitEchoData() {
            var _state3 = this.state,
                _startTime = _state3._startTime,
                _endTime = _state3._endTime;
            var mode = this.props.mode;

            if (mode == 'day' && _startTime && _endTime) {
                return {
                    start: _startTime.Y + '/' + (_startTime.M + 1) + '/' + _startTime.D,
                    end: _endTime.Y + '/' + (_endTime.M + 1) + '/' + _endTime.D
                };
            } else if (mode == 'day*time' && _startTime && _endTime) {
                return {
                    start: _startTime.Y + '/' + (_startTime.M + 1) + '/' + _startTime.D + ' ' + (_startTime.h < 10 ? '0' + _startTime.h : _startTime.h) + ':' + (_startTime.m < 10 ? '0' + _startTime.m : _startTime.m),
                    end: _endTime.Y + '/' + (_endTime.M + 1) + '/' + _endTime.D + ' ' + (_endTime.h < 10 ? '0' + _endTime.h : _endTime.h) + ':' + (_endTime.m < 10 ? '0' + _endTime.m : _endTime.m)
                };
            } else {
                return {
                    start: null,
                    end: null
                };
            }
        }
    }, {
        key: 'closeCalendar',
        value: function closeCalendar() {
            var onClose = this.props.onClose;

            onClose && (0, _typeof.isFunction)(onClose) && onClose();
        }
    }, {
        key: 'submit',
        value: function submit() {
            var _state4 = this.state,
                _startTime = _state4._startTime,
                _endTime = _state4._endTime;

            if (!_startTime || !_endTime) return;
            var onChange = this.props.onChange;

            if (onChange && (0, _typeof.isFunction)(onChange)) {
                var tips = onChange(this.formatSubmitEchoData());
                if (this.state._calendar_tips != tips) {
                    this.setState({
                        _calendar_tips: tips || ''
                    });
                }
            }
        }
    }, {
        key: 'footerRenderCallback',
        value: function footerRenderCallback(footerHeight) {
            this.setState({
                _listBoxPaddingBottom: footerHeight + 30
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _props2 = this.props,
                style = _props2.style,
                prefixCls = _props2.prefixCls,
                popupTitle = _props2.popupTitle,
                className = _props2.className,
                lang = _props2.lang,
                mode = _props2.mode,
                timeRange = _props2.timeRange,
                minutesInterval = _props2.minutesInterval,
                defaultStartTime = _props2.defaultStartTime,
                defaultEndTime = _props2.defaultEndTime,
                visible = _props2.visible,
                maskClose = _props2.maskClose,
                dayCalculator = _props2.dayCalculator,
                _props2$height = _props2.height,
                height = _props2$height === undefined ? '85vh' : _props2$height;
            var _state5 = this.state,
                calendarMap = _state5.calendarMap,
                i18n = _state5.i18n,
                _startTime = _state5._startTime,
                _endTime = _state5._endTime,
                _default_calendar_tips = _state5._default_calendar_tips,
                _calendar_tips = _state5._calendar_tips,
                _listBoxPaddingBottom = _state5._listBoxPaddingBottom;

            var cardClassName = (0, _classnames2.default)(prefixCls, className);
            return _react2.default.createElement(
                _Popup2.default,
                { visible: !!visible, bodyStyle: { height: height }, maskClose: maskClose, onClose: this.closeCalendar },
                _react2.default.createElement(
                    'div',
                    { style: style, className: cardClassName },
                    _react2.default.createElement(_CalendarCloseBox2.default, { popupTitle: popupTitle, onClose: this.closeCalendar }),
                    _react2.default.createElement(_CalendarResult2.default, { lang: lang || 'cn', i18n: i18n, mode: mode || 'day', startTime: _startTime, endTime: _endTime, dayCalculator: dayCalculator }),
                    _react2.default.createElement(_CalendarWeek2.default, { weekList: i18n.weekList }),
                    _react2.default.createElement(_CalendarListBox2.default, { paddingBottom: _listBoxPaddingBottom, selectItem: this.selectItem, list: calendarMap, startTime: _startTime, endTime: _endTime, monthList: i18n.monthList || null, listAcrossTheYearText: i18n.listAcrossTheYearText }),
                    _react2.default.createElement(
                        _Popup2.default,
                        { style: { bottom: 0, top: 'unset', height: 'auto' }, transparent: true, visible: !!_startTime && !!_endTime },
                        _react2.default.createElement(_CalendarFooter2.default, { renderCallback: this.footerRenderCallback, timeRange: timeRange || [0, 24], minutesInterval: minutesInterval || 30, i18n: i18n, reset: this.resetSelectDay, submit: this.submit, mode: mode || 'day', currStartTime: _startTime, currEndTime: _endTime, changeSelectTime: this.updateSelectTime, defaultStartTime: defaultStartTime, defaultEndTime: defaultEndTime, selectTimePicker: this.selectTimePicker, defaultCalendarTips: _default_calendar_tips, calendarTips: _calendar_tips })
                    )
                )
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
    lang: 'cn',
    calendarMode: 'default',
    mode: 'day',
    timeRange: [0, 24],
    minutesInterval: 30,
    defaultStartTime: '9:00',
    defaultEndTime: '9:00',
    dayChange: null,
    timeChange: null,
    defaultCalendarTips: '',
    dropOffMaxDays: 0,
    yesterday: false,
    onChange: null,
    onClose: null,
    visible: false,
    dayCalculator: null,
    popupTitle: null
};