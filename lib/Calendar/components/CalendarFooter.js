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

var _config = require('../../_util/config');

var _config2 = _interopRequireDefault(_config);

var _Button = require('../../Button');

var _Button2 = _interopRequireDefault(_Button);

var _Picker = require('../../Picker');

var _Picker2 = _interopRequireDefault(_Picker);

var _Icon = require('../../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _typeof = require('../../_util/typeof');

var _createPickerData = require('../util/createPickerData');

var _createPickerData2 = _interopRequireDefault(_createPickerData);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CalendarFooter = function (_PureComponent) {
    (0, _inherits3.default)(CalendarFooter, _PureComponent);

    function CalendarFooter(props) {
        (0, _classCallCheck3.default)(this, CalendarFooter);

        var _this = (0, _possibleConstructorReturn3.default)(this, (CalendarFooter.__proto__ || (0, _getPrototypeOf2.default)(CalendarFooter)).call(this, props));

        _this.state = {
            time: [props.currStartTime.h, props.currStartTime.m, props.currEndTime.h, props.currEndTime.m],
            pickerList: (0, _createPickerData2.default)(props.timeRange, props.minutesInterval, props.currStartTime, props.currEndTime, props.defaultStartTime, props.defaultEndTime)
        };
        return _this;
    }

    (0, _createClass3.default)(CalendarFooter, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.props.renderCallback(this.footerItem.offsetHeight);
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if (this.props.timeRange != nextProps.timeRange) {
                this.props.changeSelectTime(nextProps);
                this.setState({
                    pickerList: (0, _createPickerData2.default)(nextProps.timeRange, nextProps.minutesInterval, nextProps.currStartTime, nextProps.currEndTime, nextProps.defaultStartTime, nextProps.defaultEndTime)
                });
            }
        }
    }, {
        key: 'createTimePicker',
        value: function createTimePicker() {
            var _this2 = this;

            var i18n = this.props.i18n;

            return _react2.default.createElement(
                'div',
                { className: 'time-picker-box' },
                _react2.default.createElement(
                    'div',
                    { className: 'title-box' },
                    _react2.default.createElement(
                        'div',
                        { className: 'title' },
                        _react2.default.createElement(
                            'p',
                            null,
                            i18n.time_picker_title
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'title' },
                        _react2.default.createElement(
                            'p',
                            null,
                            i18n.time_return_title
                        )
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'picker-box' },
                    _react2.default.createElement(_Picker2.default, { height: 115, onTouchEnd: function onTouchEnd(scrollIndex, itemIndex) {
                            _this2.changeTime(scrollIndex, itemIndex);
                        }, pickerData: this.state.pickerList })
                )
            );
        }
    }, {
        key: 'changeTime',
        value: function changeTime(scrollIndex, itemIndex) {
            var pickerList = this.state.pickerList;
            var listData = pickerList[scrollIndex].listData;

            this.state.time[scrollIndex] = listData[itemIndex].dataKey || null;
            var scrollType = 'start-time';
            var selectItem = { dataKey: this.state.time[0] + ':' + this.state.time[1] };
            if (+scrollIndex > 1) {
                scrollType = 'end-time';
                selectItem.dataKey = this.state.time[2] + ':' + this.state.time[3];
            }
            ;
            this.props.selectTimePicker(scrollType, selectItem);
            // const index = scrollIndex == 'start-time' ? 0 : 1;
            // const {listData} = pickerList[index];
            // const selectItem = listData ? listData[itemIndex] : null;
            // if (selectItem) {
            //     console.log(scrollIndex, selectItem)
            //     this.props.selectTimePicker(scrollIndex, selectItem);
            // }
        }
    }, {
        key: 'createTips',
        value: function createTips() {
            var _props = this.props,
                mode = _props.mode,
                currEndTime = _props.currEndTime,
                currStartTime = _props.currStartTime,
                defaultCalendarTips = _props.defaultCalendarTips;

            var className = mode == 'day' ? 'calendar-tips-box mode-day' : 'calendar-tips-box';
            // if ( calendarTips != null && calendarTips != '' ) {
            //     return (
            //         <div className={className}>
            //             <Icon type='info_outline' />
            //             <p>{calendarTips}</p>
            //         </div>
            //     );
            // } 
            if (defaultCalendarTips && currEndTime && currStartTime && currEndTime.t - currStartTime.t < 86400000) {
                return _react2.default.createElement(
                    'div',
                    { className: className },
                    _react2.default.createElement(_Icon2.default, { type: 'info_outline' }),
                    _react2.default.createElement(
                        'p',
                        null,
                        defaultCalendarTips
                    )
                );
            }
            return null;
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            var _props2 = this.props,
                prefixCls = _props2.prefixCls,
                i18n = _props2.i18n,
                submit = _props2.submit,
                mode = _props2.mode,
                currStartTime = _props2.currStartTime,
                currEndTime = _props2.currEndTime,
                dayCalculator = _props2.dayCalculator,
                pickupCityLocalTimeStr = _props2.pickupCityLocalTimeStr;

            var formatText = 'MM\u6708DD\u65E5';
            var formatTextWithYear = 'YYYY\u5E74' + formatText;
            var durationDaysText = '';
            var allDaysText = '';
            if (currStartTime && pickupCityLocalTimeStr) {
                var Y = currStartTime.Y,
                    M = currStartTime.M,
                    D = currStartTime.D;

                var days = (0, _moment2.default)([Y, M, D, 0, 0, 0]).diff((0, _moment2.default)(pickupCityLocalTimeStr).startOf('day'), 'days');
                if (days >= 10) {
                    durationDaysText = ' (' + i18n.durationDays + days + i18n.day + ')';
                }
            }
            if (currStartTime && currEndTime) {
                allDaysText = ' (\u5171' + ((0, _typeof.isFunction)(dayCalculator) ? dayCalculator(currStartTime.t, currEndTime.t) : Math.ceil((currEndTime.t - currStartTime.t) / 86400000) || 1) + i18n.day + ')';
            }
            return _react2.default.createElement(
                'div',
                { className: prefixCls + '-footer', ref: function ref(div) {
                        _this3.footerItem = div;
                    } },
                mode == 'day*time' && this.createTimePicker(),
                this.createTips(),
                _react2.default.createElement(
                    'div',
                    { className: 'btn-box' },
                    _react2.default.createElement(
                        'div',
                        { className: 'pickup-return-text' },
                        _react2.default.createElement(
                            'div',
                            { className: 'pickup-text' },
                            i18n.pickup,
                            '\uFF1A',
                            currStartTime ? (0, _moment2.default)(currStartTime.t).format((0, _moment2.default)().isSame(currStartTime.t, 'year') ? formatText : formatTextWithYear) + durationDaysText : '未设置'
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'return-text' },
                            i18n.dropoff,
                            '\uFF1A',
                            currEndTime ? (0, _moment2.default)(currEndTime.t).format((0, _moment2.default)().isSame(currEndTime.t, 'year') ? formatText : formatTextWithYear) + allDaysText : '未设置'
                        )
                    ),
                    _react2.default.createElement(
                        _Button2.default,
                        { className: 'submit-btn', onClick: submit },
                        i18n.submit_btn_text
                    )
                )
            );
        }
    }]);
    return CalendarFooter;
}(_react.PureComponent);

exports.default = CalendarFooter;

CalendarFooter.defaultProps = {
    prefixCls: _config2.default.cls + '-calendar'
};