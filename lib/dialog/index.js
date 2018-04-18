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

var _class = require('../_util/class');

var _Event = require('../_util/Event');

require('./index.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Dialog = function (_PureComponent) {
    (0, _inherits3.default)(Dialog, _PureComponent);

    function Dialog() {
        (0, _classCallCheck3.default)(this, Dialog);

        var _this2 = (0, _possibleConstructorReturn3.default)(this, (Dialog.__proto__ || (0, _getPrototypeOf2.default)(Dialog)).apply(this, arguments));

        _this2.state = {
            animationTypeList: {
                zoom: {
                    enter: 'zzc-zoom-enter',
                    enterActive: 'zzc-zoom-enter-active',
                    leave: 'zzc-zoom-leave',
                    leaveActive: 'zzc-zoom-leave-active'
                },
                fade: {
                    enter: 'zzc-fade-enter',
                    enterActive: 'zzc-fade-enter-active',
                    leave: 'zzc-fade-leave',
                    leaveActive: 'zzc-fade-leave-active'
                }
            }
        };
        return _this2;
    }

    (0, _createClass3.default)(Dialog, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            if (this.props.visible) {
                this.addAnimationEvent();
                this.addMarkCloseEvent();
            }
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            if (!this.props.visible) {
                this.close();
            }
        }
    }, {
        key: 'addAnimationEvent',
        value: function addAnimationEvent() {
            var _this3 = this;

            if (this.props.maskTransitionName !== '' && this.mask && (0, _class.hasClass)(this.mask, this.props.prefixCls + '-mask')) {
                _Event.animationEvents.addEndEventListener(this.mask, this.maskAddAnimationEnd, this);
                (0, _class.addClass)(this.mask, 'zzc-fade-enter-active');
            }
            if (this.props.transitionName !== '' && this.box && (0, _class.hasClass)(this.box, this.props.prefixCls + '-box')) {
                _Event.animationEvents.addEndEventListener(this.box, this.boxAddAnimationEnd, this);
                (0, _class.addClass)(this.box, this.setAnimationClass(this.props.transitionName, 'enterActive'));
            }
            if (!this.box && !this.mask) {
                requestAnimationFrame(function () {
                    _this3.addAnimationEvent();
                });
            }
        }
    }, {
        key: 'maskAddAnimationEnd',
        value: function maskAddAnimationEnd(event) {
            var _this4 = this;

            event.stopPropagation();
            if ((0, _class.hasClass)(this.mask, this.setAnimationClass(this.props.maskTransitionName, 'enter'))) {
                (0, _class.removeClass)(this.mask, this.setAnimationClass(this.props.maskTransitionName, 'enterActive'));
                (0, _class.removeClass)(this.mask, this.setAnimationClass(this.props.maskTransitionName, 'enter'));
            } else {
                requestAnimationFrame(function () {
                    _this4.props.closeCallback();
                });
            }
        }
    }, {
        key: 'boxAddAnimationEnd',
        value: function boxAddAnimationEnd(event) {
            var _this5 = this;

            event.stopPropagation();
            if ((0, _class.hasClass)(this.box, this.setAnimationClass(this.props.transitionName, 'enter'))) {
                (0, _class.removeClass)(this.box, this.setAnimationClass(this.props.transitionName, 'enterActive'));
                (0, _class.removeClass)(this.box, this.setAnimationClass(this.props.transitionName, 'enter'));
            } else if (this.props.transparent) {
                requestAnimationFrame(function () {
                    _this5.props.closeCallback();
                });
            }
        }
        // mask关闭事件

    }, {
        key: 'addMarkCloseEvent',
        value: function addMarkCloseEvent() {
            var _this = this;
            if (!this.props.transparent && this.props.maskClose && this.mask) {
                this.mask.onclick = function () {
                    _this.close();
                };
            }
        }
    }, {
        key: 'setAnimationClass',
        value: function setAnimationClass(transitionName, status) {
            if (this.state.animationTypeList[transitionName]) {
                return this.state.animationTypeList[transitionName][status];
            }
            return '';
        }
    }, {
        key: 'close',
        value: function close() {
            if (this.mask && this.props.maskTransitionName !== '') {
                (0, _class.addClass)(this.mask, this.setAnimationClass(this.props.maskTransitionName, 'leave'));
                (0, _class.addClass)(this.mask, this.setAnimationClass(this.props.maskTransitionName, 'leaveActive'));
            }
            if (this.box && this.props.transitionName !== '') {
                (0, _class.addClass)(this.box, this.setAnimationClass(this.props.transitionName, 'leave'));
                (0, _class.addClass)(this.box, this.setAnimationClass(this.props.transitionName, 'leaveActive'));
            } else {
                this.props.closeCallback();
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this6 = this;

            var _props = this.props,
                prefixCls = _props.prefixCls,
                className = _props.className,
                maskClassName = _props.maskClassName,
                boxClassName = _props.boxClassName,
                maskStyle = _props.maskStyle,
                style = _props.style,
                transitionName = _props.transitionName,
                maskTransitionName = _props.maskTransitionName,
                children = _props.children,
                title = _props.title,
                footer = _props.footer,
                transparent = _props.transparent;

            var newMaskClassName = (0, _classnames2.default)(prefixCls + '-mask', this.setAnimationClass(maskTransitionName, 'enter'), maskClassName);
            var newBoxClassName = (0, _classnames2.default)(prefixCls + '-box', this.setAnimationClass(transitionName, 'enter'), boxClassName);
            return _react2.default.createElement(
                'div',
                { className: (0, _classnames2.default)('' + prefixCls, className) },
                !transparent && _react2.default.createElement('div', { style: maskStyle, ref: function ref(_ref) {
                        _this6.mask = _ref;
                    }, className: newMaskClassName }),
                _react2.default.createElement(
                    'div',
                    { style: style, ref: function ref(_ref2) {
                            _this6.box = _ref2;
                        }, className: newBoxClassName },
                    title && title,
                    children,
                    footer && footer
                )
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