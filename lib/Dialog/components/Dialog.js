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

var _Animate = require('../../Animate');

var _Animate2 = _interopRequireDefault(_Animate);

var _class = require('../../_util/class');

var _animateConfig = require('../../_util/animateConfig');

var _animateConfig2 = _interopRequireDefault(_animateConfig);

var _typeof = require('../../_util/typeof');

var _config = require('../../_util/config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Dialog = function (_PureComponent) {
    (0, _inherits3.default)(Dialog, _PureComponent);

    function Dialog(props) {
        (0, _classCallCheck3.default)(this, Dialog);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Dialog.__proto__ || (0, _getPrototypeOf2.default)(Dialog)).call(this, props));

        _this.state = {
            animationTypeList: _animateConfig2.default
        };
        _this.isShowedMask = false;
        _this.isShowedBox = false;
        _this.maskTouchMove = _this.maskTouchMove.bind(_this);
        return _this;
    }

    (0, _createClass3.default)(Dialog, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            // 当没有动画效果的时候，创建完毕后需要为mask添加点击关闭事件
            !this.props.transparent && this.props.maskClose && this.addMarkCloseEvent();
            if (this.mask) {
                this.mask.addEventListener('touchmove', this.maskTouchMove, { passive: false });
            }
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            if (this.mask) {
                this.mask.removeEventListener('touchmove', this.maskTouchMove);
            }
        }
        // mask关闭事件

    }, {
        key: 'addMarkCloseEvent',
        value: function addMarkCloseEvent() {
            var _self = this;
            var _props = this.props,
                closeCallback = _props.closeCallback,
                transitionName = _props.transitionName,
                maskTransitionName = _props.maskTransitionName,
                transparent = _props.transparent;

            if (this.mask) {
                var maskAnimation = this.getAnimationClass(this.props.maskTransitionName);
                var bodyAnimation = this.getAnimationClass(this.props.transitionName);
                this.mask.onclick = function () {
                    if (transitionName && transitionName !== '' && !_self.isShowedBox) {
                        return false;
                    }
                    if (!transparent && maskTransitionName && maskTransitionName !== '' && !_self.isShowedMask) {
                        return false;
                    }
                    if (bodyAnimation) {
                        (0, _class.addClass)(_self.box, bodyAnimation.leave);
                        (0, _class.addClass)(_self.box, bodyAnimation.leaveActive);
                    }
                    // 当没有配置动画点击mask关闭dialog，直接调用
                    if (maskAnimation) {
                        (0, _class.addClass)(_self.mask, maskAnimation.leave);
                        (0, _class.addClass)(_self.mask, maskAnimation.leaveActive);
                    } else {
                        closeCallback && closeCallback();
                    }
                    return false;
                };
            }
        }
        // 获取指定样式

    }, {
        key: 'getAnimationClass',
        value: function getAnimationClass(transitionName) {
            if (this.state.animationTypeList[transitionName]) {
                return this.state.animationTypeList[transitionName];
            }
            return transitionName ? transitionName : null;
        }
        // mask是否加入动画

    }, {
        key: 'createDialogMask',
        value: function createDialogMask() {
            var _this2 = this;

            var _props2 = this.props,
                prefixCls = _props2.prefixCls,
                transparent = _props2.transparent,
                maskTransitionName = _props2.maskTransitionName,
                closeCallback = _props2.closeCallback,
                maskStyle = _props2.maskStyle,
                maskClassName = _props2.maskClassName,
                visible = _props2.visible;

            var newMaskClassName = (0, _classnames2.default)(prefixCls + '-mask', maskClassName);
            if (!transparent) {
                if (maskTransitionName && maskTransitionName !== '') {
                    return _react2.default.createElement(
                        _Animate2.default,
                        { visible: visible, animationName: this.getAnimationClass(maskTransitionName), onEnd: function onEnd(type) {
                                _this2.isShowedMask = type === 'enter';
                                _this2.props.maskAnimated && (0, _typeof.isFunction)(_this2.props.maskAnimated) && _this2.props.maskAnimated(type);
                                type === 'leave' && closeCallback && closeCallback();
                            } },
                        _react2.default.createElement('div', { style: maskStyle, ref: function ref(_ref) {
                                _this2.mask = _ref;
                            }, className: newMaskClassName })
                    );
                }
                return _react2.default.createElement('div', { style: maskStyle, ref: function ref(_ref2) {
                        _this2.mask = _ref2;
                    }, className: newMaskClassName });
            }
            return null;
        }
    }, {
        key: 'maskTouchMove',
        value: function maskTouchMove(event) {
            event.preventDefault();
            event.stopPropagation();
        }
        // dialog主题是否加入动画

    }, {
        key: 'createDialogBody',
        value: function createDialogBody() {
            var _this3 = this;

            var _props3 = this.props,
                prefixCls = _props3.prefixCls,
                visible = _props3.visible,
                bodyStyle = _props3.bodyStyle,
                transparent = _props3.transparent,
                boxClassName = _props3.boxClassName,
                transitionName = _props3.transitionName,
                maskTransitionName = _props3.maskTransitionName,
                children = _props3.children,
                title = _props3.title,
                footer = _props3.footer,
                closeCallback = _props3.closeCallback;

            var newBoxClassName = (0, _classnames2.default)(prefixCls + '-box', boxClassName);
            if (transitionName && transitionName !== '') {
                return _react2.default.createElement(
                    _Animate2.default,
                    { visible: visible, animationName: this.getAnimationClass(transitionName), onEnd: function onEnd(type) {
                            _this3.isShowedBox = type === 'enter';
                            _this3.props.boxAnimated && (0, _typeof.isFunction)(_this3.props.boxAnimated) && _this3.props.boxAnimated(type);
                            // 当选择不创建mask或者mask不使用动画的时候，body动画结束触发closeCallback
                            type === 'leave' && (transparent || maskTransitionName === '') && closeCallback && closeCallback();
                        } },
                    _react2.default.createElement(
                        'div',
                        { style: bodyStyle, ref: function ref(_ref3) {
                                _this3.box = _ref3;
                            }, className: newBoxClassName },
                        title && title,
                        children,
                        footer && footer
                    )
                );
            }
            return _react2.default.createElement(
                'div',
                { style: bodyStyle, ref: function ref(_ref4) {
                        _this3.box = _ref4;
                    }, className: newBoxClassName },
                title && title,
                children,
                footer && footer
            );
        }
    }, {
        key: 'render',
        value: function render() {
            var _props4 = this.props,
                prefixCls = _props4.prefixCls,
                className = _props4.className,
                style = _props4.style,
                preRender = _props4.preRender,
                visible = _props4.visible;
            // preRender预渲染

            if (preRender) {
                return _react2.default.createElement(
                    'div',
                    { className: 'pre-render-box', style: !visible && !this.isShowedBox ? { display: 'none' } : {} },
                    _react2.default.createElement(
                        'div',
                        { style: style, className: (0, _classnames2.default)('' + prefixCls, className) },
                        this.createDialogMask(),
                        this.createDialogBody()
                    )
                );
            }
            return _react2.default.createElement(
                'div',
                { style: style, className: (0, _classnames2.default)('' + prefixCls, className) },
                this.createDialogMask(),
                this.createDialogBody()
            );
        }
    }]);
    return Dialog;
}(_react.PureComponent);

exports.default = Dialog;

Dialog.defaultProps = {
    prefixCls: _config2.default.cls + '-dialog',
    getRef: function getRef() {},
    className: '',
    maskClassName: '',
    boxClassName: '',
    maskTransitionName: '',
    transitionName: '',
    dialogStyle: {},
    maskStyle: {},
    visible: false,
    closeCallback: function closeCallback() {},
    maskAnimated: function maskAnimated() {},
    boxAnimated: function boxAnimated() {},

    title: null,
    footer: null,
    maskClose: false,
    transparent: false
};