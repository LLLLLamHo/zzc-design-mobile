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
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            requestAnimationFrame(function () {
                _this2.scrollToTop();
            });
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            var _this3 = this;

            requestAnimationFrame(function () {
                _this3.scrollToTop();
            });
        }
    }, {
        key: 'scrollToTop',
        value: function scrollToTop() {
            var _props = this.props,
                startTime = _props.startTime,
                endTime = _props.endTime;

            if (!startTime || !endTime) return;
            var targetItem = document.querySelector('[data-c-y="' + startTime.Y + '"][data-c-m="' + startTime.M + '"] [data-c-d="' + startTime.D + '"]');
            if (!this.listBox || !targetItem) return;
            this.listBox.scrollTop = targetItem.offsetTop;
        }
    }, {
        key: 'renderI18nMonthText',
        value: function renderI18nMonthText(monthData, currYear, monthList, listAcrossTheYearText) {
            return '' + (monthData.y != currYear ? '' + monthData.y + listAcrossTheYearText : '') + monthList[monthData.m];
        }
    }, {
        key: 'createMonthItem',
        value: function createMonthItem(monthData, key, monthList, listAcrossTheYearText) {
            var _this4 = this;

            var currYear = new Date().getFullYear();
            return _react2.default.createElement(
                'div',
                { key: key, className: 'item', 'data-c-y': monthData.y, 'data-c-m': monthData.m },
                _react2.default.createElement(
                    'p',
                    { className: 'title' },
                    this.renderI18nMonthText(monthData, currYear, monthList, listAcrossTheYearText)
                ),
                monthData.list.map(function (row, rowKey) {
                    return _react2.default.createElement(
                        'ul',
                        { className: 'list-item', key: rowKey, 'data-c-r': rowKey },
                        row.map(function (dayInfo, dayKey) {
                            return _react2.default.createElement(
                                'li',
                                { 'data-c-d': dayInfo.d, className: _this4.setItemClass(dayInfo), key: dayKey, onClick: function onClick() {
                                        !dayInfo.gone && !dayInfo.empty && _this4.props.selectItem(dayInfo.m, rowKey, dayKey, dayInfo);
                                    } },
                                dayInfo.main != null && _react2.default.createElement(
                                    'p',
                                    null,
                                    dayInfo.main
                                ),
                                dayInfo._sub != null ? _react2.default.createElement(
                                    'p',
                                    { className: 'sub' },
                                    dayInfo._sub
                                ) : dayInfo.sub != null ? _react2.default.createElement(
                                    'p',
                                    { className: 'sub' },
                                    dayInfo.sub
                                ) : null
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
                end = dayInfo.end,
                active = dayInfo.active,
                extensionMain = dayInfo.extensionMain;
            // 名字扩展，需要将字号缩小

            var className = extensionMain ? 'extension ' : '';
            if (gone) {
                className += 'gone';
            } else if (empty) {
                className += 'empty';
            } else if (start && end) {
                className += 'start end';
            } else if (startOnly) {
                className += 'start only';
            } else if (start) {
                className += 'start';
            } else if (end) {
                className += 'end';
            } else if (active) {
                className += 'active';
            }
            return className;
        }
    }, {
        key: 'render',
        value: function render() {
            var _this5 = this;

            var _props2 = this.props,
                prefixCls = _props2.prefixCls,
                list = _props2.list,
                paddingBottom = _props2.paddingBottom,
                monthList = _props2.monthList,
                listAcrossTheYearText = _props2.listAcrossTheYearText;

            return _react2.default.createElement(
                'div',
                { ref: function ref(list) {
                        _this5.listBox = list;
                    }, className: prefixCls + '-list-box', style: { paddingBottom: paddingBottom + 'px' } },
                list.map(function (item, key) {
                    return _this5.createMonthItem(item, key, monthList, listAcrossTheYearText);
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