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

var _getWeek = require('../util/getWeek');

var _getWeek2 = _interopRequireDefault(_getWeek);

var _typeof = require('../../_util/typeof');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CalendarResult = function (_PureComponent) {
    (0, _inherits3.default)(CalendarResult, _PureComponent);

    function CalendarResult(props) {
        (0, _classCallCheck3.default)(this, CalendarResult);
        return (0, _possibleConstructorReturn3.default)(this, (CalendarResult.__proto__ || (0, _getPrototypeOf2.default)(CalendarResult)).call(this, props));
    }

    (0, _createClass3.default)(CalendarResult, [{
        key: 'createLeft',
        value: function createLeft(startTime, endTime, mode) {
            var _props = this.props,
                prefixCls = _props.prefixCls,
                i18n = _props.i18n;

            if (startTime && endTime) {
                return _react2.default.createElement(
                    'div',
                    { className: prefixCls + '-left' },
                    _react2.default.createElement(
                        'p',
                        { className: 'title' },
                        i18n.left_title
                    ),
                    _react2.default.createElement(
                        'p',
                        { className: 'time' },
                        startTime.M + 1,
                        i18n.month,
                        startTime.D
                    ),
                    mode == 'day*time' ? _react2.default.createElement(
                        'p',
                        { className: 'hour' },
                        startTime.h < 10 ? '0' + startTime.h : startTime.h,
                        ':',
                        startTime.m < 10 ? '0' + startTime.m : startTime.m
                    ) : _react2.default.createElement(
                        'p',
                        { className: 'week' },
                        i18n.week,
                        (0, _getWeek2.default)(startTime.w, i18n.weekList)
                    )
                );
            } else if (startTime) {
                return _react2.default.createElement(
                    'div',
                    { className: prefixCls + '-left' },
                    _react2.default.createElement(
                        'p',
                        { className: 'time' },
                        startTime.M + 1,
                        this.props.i18n.month,
                        startTime.D
                    )
                );
            } else {
                return _react2.default.createElement(
                    'div',
                    { className: prefixCls + '-left' },
                    _react2.default.createElement(
                        'p',
                        { className: 'placeholder' },
                        this.props.i18n.left_placeholder
                    )
                );
            }
        }
    }, {
        key: 'createRight',
        value: function createRight(startTime, endTime, mode) {
            var _props2 = this.props,
                prefixCls = _props2.prefixCls,
                i18n = _props2.i18n;

            if (startTime && endTime) {
                return _react2.default.createElement(
                    'div',
                    { className: prefixCls + '-right' },
                    _react2.default.createElement(
                        'p',
                        { className: 'title' },
                        i18n.right_title
                    ),
                    _react2.default.createElement(
                        'p',
                        { className: 'time' },
                        endTime.M + 1,
                        i18n.month,
                        endTime.D
                    ),
                    mode == 'day*time' ? _react2.default.createElement(
                        'p',
                        { className: 'hour' },
                        endTime.h < 10 ? '0' + endTime.h : endTime.h,
                        ':',
                        endTime.m < 10 ? '0' + endTime.m : endTime.m
                    ) : _react2.default.createElement(
                        'p',
                        { className: 'week' },
                        i18n.week,
                        (0, _getWeek2.default)(endTime.w, i18n.weekList)
                    )
                );
            } else if (startTime) {
                return _react2.default.createElement(
                    'div',
                    { className: prefixCls + '-right' },
                    _react2.default.createElement(
                        'p',
                        { className: 'placeholder' },
                        this.props.i18n.right_placeholder
                    )
                );
            } else {
                return null;
            }
        }
    }, {
        key: 'createCenter',
        value: function createCenter(startTime, endTime, dayCalculator) {
            var i18n = this.props.i18n;

            if (startTime && endTime) {
                return _react2.default.createElement(
                    'div',
                    { className: 'center' },
                    _react2.default.createElement(
                        'p',
                        { className: 'day' },
                        dayCalculator && (0, _typeof.isFunction)(dayCalculator) ? dayCalculator(startTime.t, endTime.t) : '' + (Math.ceil((endTime.t - startTime.t) / 86400000) || 1) + i18n.day
                    )
                );
            }
            return null;
        }
    }, {
        key: 'render',
        value: function render() {
            var _props3 = this.props,
                prefixCls = _props3.prefixCls,
                startTime = _props3.startTime,
                endTime = _props3.endTime,
                mode = _props3.mode,
                dayCalculator = _props3.dayCalculator;

            return _react2.default.createElement(
                'div',
                { className: prefixCls + '-result-box' },
                this.createLeft(startTime, endTime, mode),
                this.createCenter(startTime, endTime, dayCalculator || null),
                this.createRight(startTime, endTime, mode)
            );
        }
    }]);
    return CalendarResult;
}(_react.PureComponent);

exports.default = CalendarResult;

CalendarResult.defaultProps = {
    prefixCls: _config2.default.cls + '-calendar'
};