'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

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

var _date = require('../util/date');

var _setListData = require('../util/setListData');

var _getScrollData = require('../util/getScrollData');

var _Picker = require('../../Picker');

var _Picker2 = _interopRequireDefault(_Picker);

var _Icon = require('../../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _Button = require('../../Button');

var _Button2 = _interopRequireDefault(_Button);

var _Popup = require('../../Popup');

var _Popup2 = _interopRequireDefault(_Popup);

var _typeof = require('../../_util/typeof');

var _i18n = require('../../_util/i18n');

var _i18n2 = _interopRequireDefault(_i18n);

var _config = require('../../_util/config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DatePicker = function (_React$Component) {
    (0, _inherits3.default)(DatePicker, _React$Component);

    function DatePicker(props) {
        (0, _classCallCheck3.default)(this, DatePicker);

        var _this = (0, _possibleConstructorReturn3.default)(this, (DatePicker.__proto__ || (0, _getPrototypeOf2.default)(DatePicker)).call(this, props));

        _this.BScrollList = {};
        _this.initDate(null);
        _this.touchEnd = _this.touchEnd.bind(_this);
        _this.renderAfter = _this.renderAfter.bind(_this);
        _this.close = _this.close.bind(_this);
        _this.submit = _this.submit.bind(_this);
        return _this;
    }

    (0, _createClass3.default)(DatePicker, [{
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate(nextProps, nextState) {
            if ((0, _stringify2.default)(nextProps) != (0, _stringify2.default)(this.props) || (0, _stringify2.default)(nextState) != (0, _stringify2.default)(this.state)) {
                return true;
            }
            return false;
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            !this.props.visible && this.resetPicker();
        }
    }, {
        key: 'resetPicker',
        value: function resetPicker() {
            var _props = this.props,
                selectTime = _props.selectTime,
                mode = _props.mode,
                minDate = _props.minDate,
                maxDate = _props.maxDate,
                hourRange = _props.hourRange;

            var calcMinDate = (0, _date.initMinDate)(minDate);
            var calcMaxDate = (0, _date.initMaxDate)(maxDate);
            // 关闭的时候，如果当前滑动框选中的日期和当前传入的时间一样，则无需进行reset
            var calcTime = this.initDateObject(null, selectTime, mode, calcMinDate, calcMaxDate, hourRange);
            this.initDate(calcTime);
        }
    }, {
        key: 'initDateObject',
        value: function initDateObject(time, selectTime, mode, minDate, maxDate, hourRange) {
            var calcTime = void 0;
            if ((0, _typeof.isDate)(time)) {
                calcTime = time;
            } else if (mode == 'hour') {
                calcTime = new Date(minDate.year + '/' + minDate.month + '/' + minDate.day + ' ' + selectTime);
            } else if (mode == 'time') {
                calcTime = new Date(minDate.year + '/' + minDate.month + '/' + minDate.day + ' ' + selectTime);
            } else if (mode == 'year') {
                calcTime = new Date(selectTime + '/' + minDate.month + '/' + minDate.day);
            } else if (mode == 'month') {
                calcTime = new Date(minDate.year + '/' + selectTime + '/' + minDate.day);
            } else if (selectTime == '') {
                calcTime = new Date();
            } else {
                calcTime = (0, _typeof.isDate)(selectTime) ? selectTime : new Date(selectTime);
            }
            // 只有在一开始初始化和reset的时候才出发强制重置
            if (time == null) {
                // 当初始化时间时，如果当前选中时间超出了限制范围，则强制重置
                var minDateTime = void 0;
                var maxDateTime = void 0;
                if (hourRange) {
                    var _hourRange = (0, _slicedToArray3.default)(hourRange, 2),
                        startHour = _hourRange[0],
                        endHour = _hourRange[1];

                    minDateTime = new Date(minDate.year + '/' + minDate.month + '/' + minDate.day + ' ' + startHour + ':' + minDate.minute);
                    maxDateTime = new Date(maxDate.year + '/' + maxDate.month + '/' + maxDate.day + ' ' + endHour + ':' + maxDate.minute);
                } else {
                    minDateTime = new Date(minDate.year + '/' + minDate.month + '/' + minDate.day + ' ' + minDate.hour + ':' + minDate.minute);
                    maxDateTime = new Date(maxDate.year + '/' + maxDate.month + '/' + maxDate.day + ' ' + maxDate.hour + ':' + maxDate.minute);
                }
                if (calcTime < minDateTime) {
                    return minDateTime;
                }
                if (calcTime > maxDateTime) {
                    return maxDateTime;
                }
            }
            return calcTime;
        }
    }, {
        key: 'initDate',
        value: function initDate(time) {
            var _props2 = this.props,
                minDate = _props2.minDate,
                maxDate = _props2.maxDate,
                selectTime = _props2.selectTime,
                lang = _props2.lang,
                mode = _props2.mode,
                minuteStep = _props2.minuteStep,
                hourRange = _props2.hourRange,
                i18n = _props2.i18n;
            var use12hour = this.props.use12hour;
            // 如果设置了小时的范围那么use2hour将失效

            if (hourRange) {
                use12hour = false;
            }
            var calcMinDate = (0, _date.initMinDate)(minDate);
            var calcMaxDate = (0, _date.initMaxDate)(maxDate);
            var calcTime = this.initDateObject(time, selectTime, mode, calcMinDate, calcMaxDate, hourRange);
            var langData = i18n ? (0, _assign2.default)(_i18n2.default[lang], i18n) : _i18n2.default[lang];
            var calcCurrDate = (0, _date.initSelectDate)(calcTime, calcMinDate, calcMaxDate);
            var listData = {
                yearList: null,
                monthList: null,
                dayList: null,
                hourList: null,
                minuteList: null,
                hour12List: null
            };
            // 根据模式初始化数据
            switch (mode) {
                case 'date':
                    (0, _setListData.createDateListData)(listData, calcMinDate, calcMaxDate, calcCurrDate, langData);
                    break;
                case 'datetime':
                    (0, _setListData.createDateTimeListData)(listData, calcMinDate, calcMaxDate, calcCurrDate, use12hour, minuteStep, langData, hourRange);
                    break;
                case 'time':
                    (0, _setListData.createTimeListData)(listData, calcMinDate, calcMaxDate, calcCurrDate, use12hour, minuteStep, langData, hourRange);
                    break;
                case 'hour':
                    (0, _setListData.createHourListData)(listData, calcMinDate, calcMaxDate, calcCurrDate, use12hour, langData, hourRange);
                    break;
                case 'year':
                    (0, _setListData.createYearListData)(listData, calcMinDate, calcMaxDate, calcCurrDate, langData);
                    break;
                case 'month':
                    (0, _setListData.createMonthListData)(listData, calcMinDate, calcMaxDate, calcCurrDate, langData);
                    break;
            }
            this.state = (0, _assign2.default)({}, listData, { langData: langData });
            time && this.setState(this.state);
        }
    }, {
        key: 'renderAfter',
        value: function renderAfter(BScrollList) {
            this.BScrollList = BScrollList;
        }
    }, {
        key: 'touchEnd',
        value: function touchEnd(scrollKey) {
            var _props3 = this.props,
                onValueChange = _props3.onValueChange,
                mode = _props3.mode,
                reverse = _props3.reverse;

            var currDateData = void 0;
            var currDate = void 0;
            if (mode && mode.indexOf('date') != -1) {
                if (mode === 'datetime') {
                    var currData = this.getCurrDate(scrollKey).currDate.split(' ');
                    var data = currData[0].split('/');
                    var time = currData[1].split(':');
                    currDateData = data.concat(time);
                } else {
                    currDateData = this.getCurrDate(scrollKey).currDate.split('/');
                }
                // 上一次选择的月份的日期在当前选中的月份的日期没有的时候，选中最后一个日期（通过参数确定是选中当前月份的第一日还是最后一日）
                var currYear = parseInt(currDateData[0]);
                var currMonth = parseInt(currDateData[1]);
                var currDay = parseInt(currDateData[2]);
                var currHour = parseInt(currDateData[3]);
                var currMinute = parseInt(currDateData[4]);
                var currDateLastDay = (0, _date.getLastDate)(currYear, currMonth);
                // 当只有反转模式下才会判断当前天数会不大于当前月份的最后一天
                var setCurrDateLastDay = reverse ? (0, _date.getFirstDate)(currYear, currMonth) + ' ' + currHour + ':' + currMinute : currDateLastDay;
                if (currDay > currDateLastDay) {
                    currDate = new Date(currDateData[0] + '/' + currDateData[1] + '/' + setCurrDateLastDay);
                } else {
                    currDate = new Date(this.getCurrDate(scrollKey).currDate);
                }
            } else if (mode == 'hour') {
                currDate = new Date('1993/09/17 ' + this.getCurrDate(scrollKey).currDate);
            } else if (mode == 'time') {
                currDate = new Date('1993/09/17 ' + this.getCurrDate(scrollKey).currDate);
            } else if (mode == 'year') {
                currDate = new Date(this.getCurrDate(scrollKey).currDate + '/09/17');
            } else if (mode == 'month') {
                currDate = new Date('1993/' + this.getCurrDate(scrollKey).currDate + '/17');
            }
            this.initDate(currDate);
            if (onValueChange && (0, _typeof.isFunction)(onValueChange)) {
                onValueChange(this.getCurrDate(scrollKey));
            }
        }
    }, {
        key: 'getCurrDate',
        value: function getCurrDate() {
            var scrollKey = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'all';
            var _props4 = this.props,
                mode = _props4.mode,
                hourRange = _props4.hourRange;
            var use12hour = this.props.use12hour;
            // 如果有传入hourRange，那么use12hour将失效

            if (hourRange) {
                use12hour = false;
            }
            var resultData = {
                scrollKey: scrollKey,
                currDate: ''
            };
            switch (mode) {
                case 'date':
                    resultData.currDate = (0, _getScrollData.getModeDateData)(this.BScrollList, this.state);
                    break;
                case 'time':
                    resultData.currDate = (0, _getScrollData.getModeTimeData)(this.BScrollList, this.state, use12hour);
                    break;
                case 'hour':
                    resultData.currDate = (0, _getScrollData.getModeHourData)(this.BScrollList, this.state, use12hour);
                    break;
                case 'datetime':
                    resultData.currDate = (0, _getScrollData.getModeDateTimeData)(this.BScrollList, this.state, use12hour);
                    break;
                case 'year':
                    resultData.currDate = (0, _getScrollData.getModeYearData)(this.BScrollList, this.state);
                    break;
                case 'month':
                    resultData.currDate = (0, _getScrollData.getModeMonthData)(this.BScrollList, this.state, mode);
                    break;
            }
            return resultData;
        }
    }, {
        key: 'close',
        value: function close() {
            var onClose = this.props.onClose;

            onClose && (0, _typeof.isFunction)(onClose) && onClose();
        }
    }, {
        key: 'submit',
        value: function submit() {
            var onSubmit = this.props.onSubmit;

            onSubmit && (0, _typeof.isFunction)(onSubmit) && onSubmit(this.getCurrDate());
        }
    }, {
        key: 'render',
        value: function render() {
            var _props5 = this.props,
                prefixCls = _props5.prefixCls,
                className = _props5.className,
                style = _props5.style,
                visible = _props5.visible,
                maskClose = _props5.maskClose,
                _renderCallback = _props5.renderCallback,
                title = _props5.title,
                buttonText = _props5.buttonText,
                lang = _props5.lang,
                warningText = _props5.warningText;

            var cls = (0, _classnames2.default)(className, '' + prefixCls);
            console.log(this.state.yearList);
            var langData = _i18n2.default[lang];
            return _react2.default.createElement(
                _Popup2.default,
                { maskClose: maskClose, direction: 'bottom', visible: visible, onClose: this.close, renderCallback: function renderCallback() {
                        _renderCallback && _renderCallback();
                    } },
                _react2.default.createElement(
                    'div',
                    { className: cls, style: style },
                    _react2.default.createElement(
                        'div',
                        { className: cls + '-header' },
                        _react2.default.createElement(
                            'p',
                            null,
                            title ? title : langData.datePickerTitle
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: cls + '-body' },
                        _react2.default.createElement(_Picker2.default, { height: 157, renderAfter: this.renderAfter, onTouchEnd: this.touchEnd, pickerData: [this.state.yearList, this.state.monthList, this.state.dayList, this.state.hourList, this.state.minuteList, this.state.hour12List] })
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: cls + '-footer' },
                        warningText && _react2.default.createElement(
                            'div',
                            { className: cls + '-warning' },
                            _react2.default.createElement(_Icon2.default, { type: 'warning_outline', style: { color: '#696E7C', width: '11px', height: '11px' } }),
                            _react2.default.createElement(
                                'p',
                                null,
                                warningText
                            )
                        ),
                        _react2.default.createElement(
                            _Button2.default,
                            { onClick: this.submit },
                            buttonText ? buttonText : langData.datePickerButtomText
                        )
                    )
                )
            );
        }
    }]);
    return DatePicker;
}(_react2.default.Component);

exports.default = DatePicker;

DatePicker.defaultProps = {
    prefixCls: _config2.default.cls + '-datepicker',
    className: '',
    style: {},
    title: null,
    buttonText: null,
    mode: 'date',
    lang: 'cn',
    minDate: '',
    maxDate: '',
    selectTime: null,
    minuteStep: 1,
    warningText: null,
    use12hour: false,
    visible: false,
    maskClose: true,
    reverse: false
};