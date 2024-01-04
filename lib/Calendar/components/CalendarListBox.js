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

var observer = {};

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

            var setTimeText = this.props.setTimeText;
            requestAnimationFrame(function () {
                _this2.scrollToTop();
                // 创建 IntersectionObserver 实例
                observer = new IntersectionObserver(function (entries) {
                    entries.forEach(function (entry) {
                        if (entry.isIntersecting) {
                            // 目标元素进入视口
                            setTimeText(entry.target.firstChild.innerText);
                        } else {
                            // 目标元素离开视口
                        }
                    });
                }, {
                    // 选项配置
                    root: document.querySelector('.zds-calendar-list-box'),
                    rootMargin: '0px 0px -98% 0px',
                    threshold: 0 // 阈值，表示目标元素的多少可见时触发回调
                });
                _this2.onScroll();
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
        key: 'onScroll',
        value: function onScroll() {
            // 监听目标元素
            document.querySelectorAll('.zds-calendar-list-box .item').forEach(function (item) {
                // console.log(observer)
                observer.observe(item);
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
        // renderI18nMonthText(monthData, currYear, monthList, listAcrossTheYearText): string {
        //     return `${monthData.y != currYear ? `${monthData.y}${listAcrossTheYearText}` : ''}${monthList[monthData.m]}`
        // }

    }, {
        key: 'renderI18nMonthText',
        value: function renderI18nMonthText(monthData, _currYear, _monthList, listAcrossTheYearText) {
            return '' + monthData.y + listAcrossTheYearText + (monthData.m + 1) + '\u6708';
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
                                        !dayInfo.gone && !dayInfo.empty && _this4.props.selectItem(monthData.y, dayInfo.m, rowKey, dayKey, dayInfo);
                                    } },
                                dayInfo._sub != null && _react2.default.createElement(
                                    'p',
                                    { className: 'sub_top' },
                                    dayInfo._sub
                                ),
                                dayInfo.main != null && _react2.default.createElement(
                                    'p',
                                    null,
                                    dayInfo.isToday ? _react2.default.createElement(
                                        'span',
                                        null,
                                        '\u4ECA'
                                    ) : dayInfo.main
                                ),
                                dayInfo.sub != null && _react2.default.createElement(
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
                    }, className: prefixCls + '-list-box', style: { paddingBottom: paddingBottom + 'px' }, onScroll: this.onScroll },
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