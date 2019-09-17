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

var _Gesture = require('../../_util/Gesture');

var _Gesture2 = _interopRequireDefault(_Gesture);

var _tabList = require('./tabList');

var _tabList2 = _interopRequireDefault(_tabList);

var _util = require('../util/');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TabBar = function (_React$PureComponent) {
    (0, _inherits3.default)(TabBar, _React$PureComponent);

    function TabBar(props) {
        (0, _classCallCheck3.default)(this, TabBar);

        var _this = (0, _possibleConstructorReturn3.default)(this, (TabBar.__proto__ || (0, _getPrototypeOf2.default)(TabBar)).call(this, props));

        _this.tabItems = [];
        _this.onPan = function () {
            // 默认是0
            var lastOffset = 0;
            var finalOffset = 0;
            var animated = _this.props.animated;

            var isVertical = _this.props.tabDirection == 'vertical';
            var getOffset = function getOffset() {
                var offset = +('' + lastOffset).replace('%', '');
                if (('' + lastOffset).indexOf('%') >= 0) {
                    offset /= 100;
                    offset *= isVertical ? _this.layout.clientHeight : _this.layout.clientWidth;
                }
                return offset;
            };
            return {
                onPanStart: function onPanStart() {
                    if (animated) {
                        _this.layout.className = _this.props.prefixCls + '-bar-wrap';
                    }
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
                    if (animated) {
                        _this.layout.className = originCls + ' ' + _this.props.prefixCls + '-bar-wrap-am';
                    }
                },
                setCurrentOffset: function setCurrentOffset(offset) {
                    return lastOffset = offset;
                }
            };
        }();
        _this.state = {
            status: 'noReady',
            canScroll: props.tabs && props.tabs.length > props.maxTabLength,
            wrapStyle: _this.getWarpContentStyle(props.currIndex)
        };
        _this.saveTabItem = _this.saveTabItem.bind(_this);
        return _this;
    }

    (0, _createClass3.default)(TabBar, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.setState({
                status: 'ready'
            });
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if (this.props.currIndex != nextProps.currIndex) {
                this.setState({
                    wrapStyle: this.getWarpContentStyle(nextProps.currIndex)
                });
            }
        }
    }, {
        key: 'saveTabItem',
        value: function saveTabItem(index, item) {
            this.tabItems[index] = item;
        }
    }, {
        key: 'getWarpContentStyle',
        value: function getWarpContentStyle(index) {
            var _props = this.props,
                maxTabLength = _props.maxTabLength,
                tabs = _props.tabs;

            var offset = '0';
            var calcMaxTabLength = maxTabLength - 1;
            // todo 计算px，还需要计算前几个的px用来相减
            if (index >= calcMaxTabLength - 1 && index < tabs.length - 1) {
                offset = '-' + (0, _util.getTabItemSize)(maxTabLength) * (index - (calcMaxTabLength - 1)) + '%';
            }
            if (index == tabs.length - 1) {
                offset = '-' + (0, _util.getTabItemSize)(maxTabLength) * (index - 1 - (calcMaxTabLength - 1)) + '%';
            }
            this.onPan.setCurrentOffset(offset);
            return offset;
        }
    }, {
        key: 'setWrapStyle',
        value: function setWrapStyle(wrapStyle) {
            return (0, _util.getTranslate3dStyle)(wrapStyle, this.props.tabDirection);
        }
    }, {
        key: 'onChange',
        value: function onChange(key) {
            this.setState({
                wrapStyle: this.getWarpContentStyle(key)
            });
            this.props.onChange(key);
        }
    }, {
        key: 'renderTabbar',
        value: function renderTabbar() {
            var _this2 = this;

            var status = this.state.status;
            var _props2 = this.props,
                currIndex = _props2.currIndex,
                prefixCls = _props2.prefixCls,
                tabs = _props2.tabs,
                maxTabLength = _props2.maxTabLength,
                animated = _props2.animated,
                tabBarPosition = _props2.tabBarPosition,
                tabBarUnderlineStyle = _props2.tabBarUnderlineStyle;
            var wrapStyle = this.state.wrapStyle;

            var cls = (0, _classnames3.default)(prefixCls + '-bar-wrap', (0, _defineProperty3.default)({}, prefixCls + '-bar-wrap-am', animated));
            return _react2.default.createElement(
                'div',
                { className: cls, ref: function ref(refs) {
                        _this2.setLayout(refs);
                    }, style: this.setWrapStyle(wrapStyle) },
                _react2.default.createElement(_tabList2.default, { status: status, tabBarUnderlineStyle: tabBarUnderlineStyle, tabBarPosition: tabBarPosition, animated: animated, maxTabLength: maxTabLength, prefixCls: prefixCls, tabs: tabs, currIndex: currIndex, onChange: function onChange(key) {
                        _this2.onChange(key);
                    }, tabItems: this.tabItems, saveTabItem: this.saveTabItem })
            );
        }
    }, {
        key: 'wrapTabsList',
        value: function wrapTabsList() {
            var isOpenTabBarScroll = this.props.isOpenTabBarScroll;
            var canScroll = this.state.canScroll;

            var onPan = this.onPan;
            // 当tabs数量大于最大显示数量的时候需要加入手势提供滑动
            if (canScroll && isOpenTabBarScroll) {
                return _react2.default.createElement(
                    _Gesture2.default,
                    onPan,
                    this.renderTabbar()
                );
            }
            return this.renderTabbar();
        }
    }, {
        key: 'setLayout',
        value: function setLayout(div) {
            this.layout = div;
        }
    }, {
        key: 'render',
        value: function render() {
            var prefixCls = this.props.prefixCls;

            return _react2.default.createElement(
                'div',
                { className: prefixCls + '-bar-box' },
                this.wrapTabsList()
            );
        }
    }]);
    return TabBar;
}(_react2.default.PureComponent);

exports.default = TabBar;