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

var _Animate = require('../_util/Animate');

var _Animate2 = _interopRequireDefault(_Animate);

var _class = require('../_util/class');

var _animateConfig = require('../_util/animateConfig');

var _animateConfig2 = _interopRequireDefault(_animateConfig);

var _typeof = require('../_util/typeof');

require('./index.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Dialog = function (_PureComponent) {
    (0, _inherits3.default)(Dialog, _PureComponent);

    function Dialog() {
        (0, _classCallCheck3.default)(this, Dialog);

        var _this2 = (0, _possibleConstructorReturn3.default)(this, (Dialog.__proto__ || (0, _getPrototypeOf2.default)(Dialog)).apply(this, arguments));

        _this2.state = {
            animationTypeList: _animateConfig2.default
        };
        return _this2;
    }

    (0, _createClass3.default)(Dialog, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            // 当没有动画效果的时候，创建完毕后需要为mask添加点击关闭事件
            !this.props.transparent && this.props.maskClose && this.addMarkCloseEvent();
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            !this.props.transparent && this.props.maskClose && !(0, _typeof.isFunction)(this.mask.onclick) && this.addMarkCloseEvent();
        }
        // mask关闭事件

    }, {
        key: 'addMarkCloseEvent',
        value: function addMarkCloseEvent() {
            var _this = this;
            var closeCallback = this.props.closeCallback;

            if (this.mask) {
                var maskAnimation = _this.getAnimationClass(_this.props.maskTransitionName);
                var bodyAnimation = _this.getAnimationClass(_this.props.transitionName);
                this.mask.onclick = function () {
                    if (bodyAnimation) {
                        (0, _class.addClass)(_this.box, bodyAnimation.leave);
                        (0, _class.addClass)(_this.box, bodyAnimation.leaveActive);
                    }
                    // 当没有配置动画点击mask关闭dialog，直接调用
                    if (maskAnimation) {
                        (0, _class.addClass)(_this.mask, maskAnimation.leave);
                        (0, _class.addClass)(_this.mask, maskAnimation.leaveActive);
                    } else {
                        closeCallback && closeCallback();
                    }
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
            var _this3 = this;

            var _props = this.props,
                prefixCls = _props.prefixCls,
                transparent = _props.transparent,
                maskTransitionName = _props.maskTransitionName,
                closeCallback = _props.closeCallback,
                maskStyle = _props.maskStyle,
                maskClassName = _props.maskClassName,
                visible = _props.visible;

            var newMaskClassName = (0, _classnames2.default)(prefixCls + '-mask', maskClassName);
            if (!transparent) {
                if (maskTransitionName && maskTransitionName !== '') {
                    return _react2.default.createElement(
                        _Animate2.default,
                        { visible: visible, animationName: this.getAnimationClass(maskTransitionName), onEnd: function onEnd(type) {
                                type === 'leave' && closeCallback && closeCallback();
                            } },
                        _react2.default.createElement('div', { style: maskStyle, ref: function ref(_ref) {
                                _this3.mask = _ref;
                            }, className: newMaskClassName })
                    );
                }
                return _react2.default.createElement('div', { style: maskStyle, ref: function ref(_ref2) {
                        _this3.mask = _ref2;
                    }, className: newMaskClassName });
            }
            return null;
        }
        // dialog主题是否加入动画

    }, {
        key: 'createDialogBody',
        value: function createDialogBody() {
            var _this4 = this;

            var _props2 = this.props,
                prefixCls = _props2.prefixCls,
                visible = _props2.visible,
                bodyStyle = _props2.bodyStyle,
                transparent = _props2.transparent,
                boxClassName = _props2.boxClassName,
                transitionName = _props2.transitionName,
                maskTransitionName = _props2.maskTransitionName,
                children = _props2.children,
                title = _props2.title,
                footer = _props2.footer,
                closeCallback = _props2.closeCallback;

            var newBoxClassName = (0, _classnames2.default)(prefixCls + '-box', boxClassName);
            if (transitionName && transitionName !== '') {
                return _react2.default.createElement(
                    _Animate2.default,
                    { visible: visible, animationName: this.getAnimationClass(transitionName), onEnd: function onEnd(type) {
                            // 当选择不创建mask或者mask不使用动画的时候，body动画结束触发closeCallback
                            type === 'leave' && (transparent || maskTransitionName === '') && closeCallback && closeCallback();
                        } },
                    _react2.default.createElement(
                        'div',
                        { style: bodyStyle, ref: function ref(_ref3) {
                                _this4.box = _ref3;
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
                        _this4.box = _ref4;
                    }, className: newBoxClassName },
                title && title,
                children,
                footer && footer
            );
        }
    }, {
        key: 'render',
        value: function render() {
            var _props3 = this.props,
                prefixCls = _props3.prefixCls,
                className = _props3.className,
                style = _props3.style;

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
    prefixCls: 'zzc-dialog',
    className: '',
    maskClassName: '',
    boxClassName: '',
    maskTransitionName: '',
    transitionName: '',
    style: {},
    maskStyle: {},
    visible: false,
    closeCallback: function closeCallback() {},

    title: null,
    footer: null,
    maskClose: false,
    transparent: false
};