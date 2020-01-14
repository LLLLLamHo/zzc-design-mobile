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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CalendarListBox = function (_PureComponent) {
    (0, _inherits3.default)(CalendarListBox, _PureComponent);

    function CalendarListBox(props) {
        (0, _classCallCheck3.default)(this, CalendarListBox);
        return (0, _possibleConstructorReturn3.default)(this, (CalendarListBox.__proto__ || (0, _getPrototypeOf2.default)(CalendarListBox)).call(this, props));
    }

    (0, _createClass3.default)(CalendarListBox, [{
        key: 'createMonthItem',
        value: function createMonthItem(monthData, key) {
            var _this2 = this;

            var currYear = new Date().getFullYear();
            return _react2.default.createElement(
                'div',
                { key: key, className: 'item', 'data-c-y': monthData.y, 'data-c-m': key },
                _react2.default.createElement(
                    'p',
                    { className: 'title' },
                    monthData.y != currYear ? monthData.y + '\u5E74' : '',
                    monthData.title
                ),
                monthData.list.map(function (row, rowKey) {
                    return _react2.default.createElement(
                        'ul',
                        { className: 'list-item', key: rowKey, 'data-c-r': rowKey },
                        row.map(function (dayInfo, dayKey) {
                            return _react2.default.createElement(
                                'li',
                                { 'data-c-d': dayInfo.d, className: _this2.setItemClass(dayInfo), key: dayKey, onClick: function onClick() {
                                        !dayInfo.gone && !dayInfo.empty && _this2.props.selectItem(key, rowKey, dayKey, dayInfo);
                                    } },
                                _react2.default.createElement(
                                    'p',
                                    null,
                                    dayInfo.d
                                ),
                                dayInfo.sub && _react2.default.createElement(
                                    'p',
                                    { className: 'sub' },
                                    dayInfo.sub
                                )
                            );
                        })
                    );
                })
            );
        }
    }, {
        key: 'setItemClass',
        value: function setItemClass(dayInfo) {
            var gone = dayInfo.gone,
                empty = dayInfo.empty,
                startOnly = dayInfo.startOnly,
                start = dayInfo.start,
                end = dayInfo.end;

            if (gone) {
                return 'gone';
            } else if (empty) {
                return 'empty';
            } else if (startOnly) {
                return 'start only';
            } else if (start) {
                return 'start';
            } else if (end) {
                return 'end';
            } else {
                return '';
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            var _props = this.props,
                prefixCls = _props.prefixCls,
                list = _props.list;

            console.log(list);
            return _react2.default.createElement(
                'div',
                { className: prefixCls + '-list-box' },
                list.map(function (item, key) {
                    return _this3.createMonthItem(item, key);
                })
            );
        }
    }]);
    return CalendarListBox;
}(_react.PureComponent);

exports.default = CalendarListBox;

CalendarListBox.defaultProps = {
    prefixCls: _config2.default.cls + '-calendar'
};