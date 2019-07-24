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

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _config = require('../../_util/config');

var _config2 = _interopRequireDefault(_config);

var _Dialog = require('../../Dialog');

var _Dialog2 = _interopRequireDefault(_Dialog);

var _Gesture = require('../../_util/Gesture');

var _Gesture2 = _interopRequireDefault(_Gesture);

var _typeof = require('../../_util/typeof');

var _util = require('../util');

var _gtag = require('../../_util/gtag');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var IamgeView = function (_PureComponent) {
    (0, _inherits3.default)(IamgeView, _PureComponent);

    function IamgeView(props) {
        (0, _classCallCheck3.default)(this, IamgeView);

        var _this = (0, _possibleConstructorReturn3.default)(this, (IamgeView.__proto__ || (0, _getPrototypeOf2.default)(IamgeView)).call(this, props));

        _this.onPan = function () {
            // 默认是0
            var lastOffset = 0;
            var lastTime = 0;
            var finalOffset = 0;
            var startTime = 0;
            var maxIndex = _this.props.imageList.length - 1;
            var getOffset = function getOffset() {
                var offset = +('' + lastOffset).replace('%', '');
                if (('' + lastOffset).indexOf('%') >= 0) {
                    offset /= 100;
                    offset *= _this.layout.clientWidth;
                }
                return offset;
            };
            return {
                onPanStart: function onPanStart(status) {
                    startTime = status.time;
                    _this.layout.className = _this.props.prefixCls + '-content';
                },
                onPanMove: function onPanMove(status) {
                    // 将上次记录到的offset加上这次move的距离得出本次offset的值
                    var offset = getOffset() + status.moveStatus.x;
                    // 最大滚动距离是负数
                    var maxScrollOffset = -_this.layout.scrollWidth + _this.layout.clientWidth;
                    // 当move向左的时候永远为负数，向右的时候永远是正数
                    // 计算当前offset不能小于0和大于最大滚动距离。
                    offset = Math.min(offset, 0);
                    offset = Math.max(offset, maxScrollOffset);
                    (0, _util.setLayoutScroll)(_this.layout, offset, 'px');
                    // 记录每次滑动后计算的offset
                    finalOffset = offset;
                },
                onPanEnd: function onPanEnd(status) {
                    // 记录这次滑动的最后offset
                    lastOffset = finalOffset;
                    lastTime = status.time;
                    var originCls = _this.layout.className;
                    if (_this.props.animate) {
                        _this.layout.className = originCls + ' ' + _this.props.prefixCls + '-content-am';
                    }
                    // 当滑动的距离大于当前Item宽度的50%，则跳转到下一个item，否则归为。
                    var swiperIndex = Math.round(Math.abs(lastOffset) / _this.layout.clientWidth);
                    swiperIndex = swiperIndex > maxIndex ? maxIndex : swiperIndex;
                    lastOffset = '-' + swiperIndex * 100 + '%';
                    // 快速滑动识别是否到下一页
                    if (lastTime - startTime < 150 && swiperIndex == _this.state.index) {
                        var index = status.moveStatus.x > 0 ? swiperIndex - 1 : swiperIndex + 1;
                        index = Math.min(index, maxIndex);
                        index = Math.max(index, 0);
                        _this.setState({
                            index: index
                        }, function () {
                            _this.props.onChange && (0, _typeof.isFunction)(_this.props.onChange) && _this.props.onChange(_this.state.index);
                        });
                        _this.layout.style.transform = 'translate3d(-' + index * 100 + '%, 0px, 0px)';
                    } else {
                        if (swiperIndex != _this.state.index) {
                            _this.setState({
                                index: swiperIndex
                            }, function () {
                                _this.props.onChange && (0, _typeof.isFunction)(_this.props.onChange) && _this.props.onChange(_this.state.index);
                            });
                        }
                        _this.layout.style.transform = 'translate3d(-' + swiperIndex * 100 + '%, 0px, 0px)';
                    }
                },
                setCurrentOffset: function setCurrentOffset(offset) {
                    return lastOffset = offset;
                }
            };
        }();
        var _this$props = _this.props,
            visible = _this$props.visible,
            defaultIndex = _this$props.defaultIndex;

        _this.state = {
            isRender: visible,
            index: defaultIndex ? defaultIndex : 0
        };
        (0, _gtag.zzcComponentUse)('ImageView', '组件渲染');
        return _this;
    }

    (0, _createClass3.default)(IamgeView, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if (nextProps.visible != this.props.visible && nextProps.visible) {
                if (nextProps.defaultIndex != this.state.index) {
                    this.setState({
                        isRender: nextProps.visible,
                        index: nextProps.defaultIndex
                    });
                } else {
                    this.setState({
                        isRender: nextProps.visible
                    });
                }
            } else if (nextProps.defaultIndex != this.state.index) {
                this.setState({
                    index: nextProps.defaultIndex
                });
            }
        }
    }, {
        key: 'createImageContent',
        value: function createImageContent() {
            var _this2 = this;

            var prefixCls = this.props.prefixCls;

            this.onPan.setCurrentOffset('-' + this.state.index * 100 + '%');
            return _react2.default.createElement(
                'div',
                { style: { transform: 'translate3d(-' + this.state.index * 100 + '%, 0px, 0px)' }, className: prefixCls + '-content', ref: function ref(div) {
                        _this2.getLayout(div);
                    }, onClick: function onClick() {
                        _this2.dialog.mask && _this2.dialog.mask.click && _this2.dialog.mask.click();
                    } },
                this.createImageList()
            );
        }
    }, {
        key: 'createImageList',
        value: function createImageList() {
            var _this3 = this;

            var _props = this.props,
                prefixCls = _props.prefixCls,
                imageList = _props.imageList,
                swipeable = _props.swipeable;

            var hash = new Date().getTime();
            if (swipeable && imageList.length > 0) {
                return _react2.default.createElement(
                    _Gesture2.default,
                    this.onPan,
                    _react2.default.createElement(
                        'div',
                        { className: prefixCls + '-swiper' },
                        imageList.map(function (item, key) {
                            return _react2.default.createElement(
                                'section',
                                { key: 'imageView-' + key + '-' + hash },
                                _this3.lazyImage(item, key)
                            );
                        })
                    )
                );
            }
            return _react2.default.createElement(
                'div',
                { className: prefixCls + '-swiper' },
                imageList.map(function (item, key) {
                    return _react2.default.createElement(
                        'section',
                        { key: 'imageView-' + key + '-' + hash },
                        _react2.default.createElement('img', { onClick: function onClick() {
                                _this3.dialog.mask.click();
                            }, alt: '', src: item })
                    );
                })
            );
        }
    }, {
        key: 'lazyImage',
        value: function lazyImage(item, key) {
            var _this4 = this;

            var index = this.state.index;

            if (index == key || index == key - 1 || index == key + 1) {
                return _react2.default.createElement('img', { alt: '', onClick: function onClick() {
                        _this4.dialog.mask.click();
                    }, src: item });
            }
            return _react2.default.createElement('img', { alt: '', onClick: function onClick() {
                    _this4.dialog.mask.click();
                } });
        }
    }, {
        key: 'getDialog',
        value: function getDialog(dialog) {
            this.dialog = dialog;
        }
    }, {
        key: 'getLayout',
        value: function getLayout(layout) {
            this.layout = layout;
        }
    }, {
        key: 'close',
        value: function close() {
            if (this.state.isRender) {
                this.setState({
                    isRender: false
                });
            }
            this.props.onClose && (0, _typeof.isFunction)(this.props.onClose) && this.props.onClose(this.state.index);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this5 = this;

            var _props2 = this.props,
                prefixCls = _props2.prefixCls,
                className = _props2.className,
                style = _props2.style,
                visible = _props2.visible;
            var isRender = this.state.isRender;

            if (isRender) {
                return _react2.default.createElement(
                    _Dialog2.default,
                    { getRef: function getRef(dialog) {
                            _this5.getDialog(dialog);
                        }, maskClose: true, maskClassName: prefixCls + '-mask', boxClassName: prefixCls + '-box', transitionName: _config2.default.cls + '-fade', maskTransitionName: _config2.default.cls + '-fade', visible: visible, className: (0, _classnames2.default)(prefixCls, className), style: style, closeCallback: function closeCallback() {
                            _this5.close();
                        } },
                    this.createImageContent()
                );
            }
            return null;
        }
    }]);
    return IamgeView;
}(_react.PureComponent);

exports.default = IamgeView;

IamgeView.defaultProps = {
    prefixCls: _config2.default.cls + '-imageview',
    className: '',
    style: {},
    visible: false,
    imageList: [],
    defaultIndex: 0,
    onChange: function onChange() {},
    onClose: function onClose() {},
    swipeable: true,
    animate: true
};