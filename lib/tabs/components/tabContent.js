'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

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

var _classnames2 = require('classnames');

var _classnames3 = _interopRequireDefault(_classnames2);

var _tabPane = require('./tabPane');

var _tabPane2 = _interopRequireDefault(_tabPane);

var _Gesture = require('../../_util/Gesture');

var _Gesture2 = _interopRequireDefault(_Gesture);

var _util = require('../util');

var _config = require('../../_util/config');

var _config2 = _interopRequireDefault(_config);

var _typeof = require('../../_util/typeof');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TabrContent = function (_React$PureComponent) {
    (0, _inherits3.default)(TabrContent, _React$PureComponent);

    function TabrContent() {
        (0, _classCallCheck3.default)(this, TabrContent);

        var _this = (0, _possibleConstructorReturn3.default)(this, (TabrContent.__proto__ || (0, _getPrototypeOf2.default)(TabrContent)).apply(this, arguments));

        _this.onPan = function () {
            // 默认是0
            var lastOffset = 0;
            var finalOffset = 0;
            var maxIndex = _this.props.tabs.length - 1;
            var isVertical = _this.props.swipeDirection == 'vertical';
            var getOffset = function getOffset() {
                var offset = +('' + lastOffset).replace('%', '');
                if (('' + lastOffset).indexOf('%') >= 0) {
                    offset /= 100;
                    offset *= isVertical ? _this.layout.clientHeight : _this.layout.clientWidth;
                }
                return offset;
            };
            if (!_this.props.animated) {
                return {
                    setCurrentOffset: function setCurrentOffset(offset) {
                        return lastOffset = offset;
                    }
                };
            }
            return {
                onPanStart: function onPanStart() {
                    _this.layout.className = _this.props.prefixCls + '-content-wrap';
                },
                onPanMove: function onPanMove(status) {
                    // 将上次记录到的offset加上这次move的距离得出本次offset的值
                    var offset = isVertical ? getOffset() + status.moveStatus.y : getOffset() + status.moveStatus.x;
                    // 最大滚动距离是负数
                    var maxScrollOffset = isVertical ? -_this.layout.scrollHeight + _this.layout.clientHeight : -_this.layout.scrollWidth + _this.layout.clientWidth;
                    // 当move向左的时候永远为负数，向右的时候永远是正数
                    // 计算当前offset不能小于0和大于最大滚动距离。
                    offset = Math.min(offset, 0);
                    offset = Math.max(offset, maxScrollOffset);
                    (0, _util.setLayoutScroll)(_this.layout, offset, 'px', isVertical);
                    // 记录每次滑动后计算的offset
                    finalOffset = offset;
                },
                onPanEnd: function onPanEnd() {
                    // 记录这次滑动的最后offset
                    lastOffset = finalOffset;
                    var originCls = _this.layout.className;
                    _this.layout.className = originCls + ' ' + _this.props.prefixCls + '-content-wrap-am';
                    if (_this.props.swipeable) {
                        // 当滑动的距离大于当前Item宽度的50%，则跳转到下一个item，否则归为。
                        var swiperIndex = isVertical ? Math.round(Math.abs(lastOffset) / _this.layout.clientHeight) : Math.round(Math.abs(lastOffset) / _this.layout.clientWidth);
                        swiperIndex = swiperIndex > maxIndex ? maxIndex : swiperIndex;
                        lastOffset = '-' + swiperIndex * 100 + '%';
                        if (swiperIndex == _this.props.currIndex) {
                            _this.layout.style.transform = isVertical ? 'translate3d(0px, -' + swiperIndex * 100 + '%, 0px)' : 'translate3d(-' + swiperIndex * 100 + '%, 0px, 0px)';
                        } else {
                            _this.props.onChange(swiperIndex);
                        }
                    }
                },
                setCurrentOffset: function setCurrentOffset(offset) {
                    return lastOffset = offset;
                }
            };
        }();
        return _this;
    }

    (0, _createClass3.default)(TabrContent, [{
        key: 'setContentWrapStyle',
        value: function setContentWrapStyle() {
            var _props = this.props,
                currIndex = _props.currIndex,
                swipeDirection = _props.swipeDirection;

            var value = currIndex ? '-' + currIndex * 100 + '%' : '0';
            this.onPan.setCurrentOffset(value);
            return (0, _util.getTranslate3dStyle)(value, swipeDirection);
        }
    }, {
        key: 'renderContentList',
        value: function renderContentList() {
            var _this2 = this;

            var _props2 = this.props,
                children = _props2.children,
                prefixCls = _props2.prefixCls,
                animated = _props2.animated;

            var warpCls = (0, _classnames3.default)(prefixCls + '-content-wrap', (0, _defineProperty3.default)({}, prefixCls + '-content-wrap-am', animated));
            return _react2.default.createElement(
                'div',
                { className: warpCls, style: this.setContentWrapStyle(), ref: function ref(refs) {
                        _this2.setLayout(refs);
                    } },
                _react2.default.createElement(
                    'div',
                    { className: prefixCls + '-content' },
                    children && children instanceof Array && children.map(function (item, key) {
                        return _react2.default.createElement(
                            _tabPane2.default,
                            { prefixCls: prefixCls, key: 'tabspane-' + key, itemKey: _config2.default.cls + '-tabs-content-item-' + key },
                            item
                        );
                    })
                )
            );
        }
    }, {
        key: 'renderContnt',
        value: function renderContnt() {
            var _props3 = this.props,
                children = _props3.children,
                prefixCls = _props3.prefixCls,
                isOpenTabContentScroll = _props3.isOpenTabContentScroll;

            if (children && !(0, _typeof.isArray)(children)) {
                return _react2.default.createElement(
                    'div',
                    { className: prefixCls + '-content' },
                    _react2.default.createElement(
                        _tabPane2.default,
                        { prefixCls: prefixCls },
                        children
                    )
                );
            }
            if (isOpenTabContentScroll) {
                return _react2.default.createElement(
                    _Gesture2.default,
                    this.onPan,
                    this.renderContentList()
                );
            }
            return this.renderContentList();
        }
    }, {
        key: 'setLayout',
        value: function setLayout(div) {
            this.layout = div;
        }
    }, {
        key: 'render',
        value: function render() {
            var _props4 = this.props,
                prefixCls = _props4.prefixCls,
                swipeDirection = _props4.swipeDirection;

            var cls = (0, _classnames3.default)(prefixCls + '-content-box', prefixCls + '-content-box-' + swipeDirection);
            return _react2.default.createElement(
                'div',
                { className: cls },
                this.renderContnt()
            );
        }
    }]);
    return TabrContent;
}(_react2.default.PureComponent);

exports.default = TabrContent;