'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

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

var _date = require('./util/date');

var _setListData = require('./util/setListData');

var _getScrollData = require('./util/getScrollData');

var _picker = require('../picker');

var _picker2 = _interopRequireDefault(_picker);

var _Popup = require('../Popup');

var _Popup2 = _interopRequireDefault(_Popup);

var _typeof = require('../_util/typeof');

require('./index.css');

var _i18n = require('../_util/i18n');

var _i18n2 = _interopRequireDefault(_i18n);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DatePicker = function (_React$Component) {
    (0, _inherits3.default)(DatePicker, _React$Component);

    function DatePicker(props) {
        (0, _classCallCheck3.default)(this, DatePicker);

        var _this = (0, _possibleConstructorReturn3.default)(this, (DatePicker.__proto__ || (0, _getPrototypeOf2.default)(DatePicker)).call(this, props));

        _this.BScrollList = {};
        _this.initDate();
        _this.touchEnd = _this.touchEnd.bind(_this);
        _this.renderAfter = _this.renderAfter.bind(_this);
        return _this;
    }

    (0, _createClass3.default)(DatePicker, [{
        key: 'initDate',
        value: function initDate() {
            var _props = this.props,
                minDate = _props.minDate,
                maxDate = _props.maxDate,
                selectTime = _props.selectTime,
                lang = _props.lang,
                mode = _props.mode,
                minuteStep = _props.minuteStep,
                use12hour = _props.use12hour;

            var langData = _i18n2.default[lang];
            var calcMinDate = (0, _date.initMinDate)(minDate);
            var calcMaxDate = (0, _date.initMaxDate)(maxDate);
            var calcCurrDate = (0, _date.initSelectDate)(selectTime, calcMinDate);
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
                    (0, _setListData.createDateTimeListData)(listData, calcMinDate, calcMaxDate, calcCurrDate, use12hour, minuteStep, langData);
                    break;
                case 'time':
                    (0, _setListData.createTimeListData)(listData, calcCurrDate, use12hour, minuteStep, langData);
                    break;
                case 'year':
                    (0, _setListData.createYearListData)(listData, calcMinDate, calcMaxDate, calcCurrDate, langData);
                    break;
                case 'month':
                    (0, _setListData.createMonthListData)(listData, calcCurrDate, langData);
                    break;
            }
            this.state = (0, _assign2.default)({}, listData, { langData: langData });
        }
    }, {
        key: 'renderAfter',
        value: function renderAfter(BScrollList) {
            this.BScrollList = BScrollList;
        }
    }, {
        key: 'touchEnd',
        value: function touchEnd(scrollKey) {
            var onValueChange = this.props.onValueChange;

            if (onValueChange && (0, _typeof.isFunction)(onValueChange)) {
                onValueChange(this.getCurrDate(scrollKey));
            }
        }
    }, {
        key: 'getCurrDate',
        value: function getCurrDate(scrollKey) {
            var mode = this.props.mode;

            var resultData = {
                scrollKey: scrollKey,
                currDate: ''
            };
            switch (mode) {
                case 'date':
                    resultData.currDate = (0, _getScrollData.getModeDateData)(this.BScrollList, this.state);
                    break;
                case 'time':
                    resultData.currDate = (0, _getScrollData.getModeTimeData)(this.BScrollList, this.state, this.props.use12hour);
                    break;
                case 'datetime':
                    resultData.currDate = (0, _getScrollData.getModeDateTimeData)(this.BScrollList, this.state, this.props.use12hour);
                    break;
                case 'year':
                    resultData.currDate = (0, _getScrollData.getModeYearData)(this.BScrollList, this.state);
                    break;
                case 'month':
                    resultData.currDate = (0, _getScrollData.getModeMonthData)(this.BScrollList, this.state);
                    break;
            }
            return resultData;
        }
    }, {
        key: 'render',
        value: function render() {
            var _props2 = this.props,
                prefixCls = _props2.prefixCls,
                className = _props2.className,
                style = _props2.style,
                visible = _props2.visible;

            var cls = (0, _classnames2.default)(className, '' + prefixCls);
            return _react2.default.createElement(
                _Popup2.default,
                { maskClose: true, direction: 'bottom', visible: visible, onClose: function onClose() {
                        console.log(123);
                    } },
                _react2.default.createElement(
                    'div',
                    { className: cls, style: style },
                    _react2.default.createElement(
                        'div',
                        { className: cls + '-header' },
                        _react2.default.createElement(
                            'div',
                            { className: cls + '-header-close' },
                            '\u53D6\u6D88'
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: cls + '-header-title' },
                            '\u8BF7\u9009\u62E9\u65F6\u95F4'
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: cls + '-header-submit' },
                            '\u786E\u5B9A'
                        )
                    ),
                    _react2.default.createElement(_picker2.default, { renderAfter: this.renderAfter, onTouchEnd: this.touchEnd, pickerData: [this.state.yearList, this.state.monthList, this.state.dayList, this.state.hourList, this.state.minuteList, this.state.hour12List] })
                )
            );
        }
    }]);
    return DatePicker;
}(_react2.default.Component);

exports.default = DatePicker;

DatePicker.defaultProps = {
    prefixCls: 'zzc-datepicker',
    className: '',
    style: {},
    mode: 'date',
    lang: 'cn',
    minDate: '',
    maxDate: '',
    selectTime: null,
    minuteStep: 1,
    use12hour: false,
    visible: false
};