'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

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

var _Dialog = require('../../Dialog');

var _Dialog2 = _interopRequireDefault(_Dialog);

var _animateConfig = require('../../_util/animateConfig');

var _animateConfig2 = _interopRequireDefault(_animateConfig);

var _config = require('../../_util/config');

var _config2 = _interopRequireDefault(_config);

var _gtag = require('../../_util/gtag');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Popup = function (_React$PureComponent) {
    (0, _inherits3.default)(Popup, _React$PureComponent);

    function Popup(props) {
        (0, _classCallCheck3.default)(this, Popup);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Popup.__proto__ || (0, _getPrototypeOf2.default)(Popup)).call(this, props));

        _this.state = {
            showPopup: _this.props.visible,
            lastShowPopup: _this.props.visible,
            isClose: false,
            animationTypeList: _animateConfig2.default
        };
        _this.maskShowed = false;
        _this.boxShowed = false;
        _this.rendered = false;
        (0, _gtag.zzcComponentUse)('Popup', '组件渲染');
        return _this;
    }

    (0, _createClass3.default)(Popup, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if (nextProps.visible) {
                this.setState({
                    lastShowPopup: true,
                    showPopup: true
                });
            } else if (this.state.lastShowPopup && !nextProps.visible) {
                this.setState({
                    isClose: true
                });
            }
        }
        // 获取指定样式

    }, {
        key: 'getAnimationClass',
        value: function getAnimationClass(direction) {
            var animation = this.state.animationTypeList[_config2.default.cls + '-slide-' + direction];
            if (animation) {
                return animation;
            }
            return direction ? direction : null;
        }
    }, {
        key: 'boxAnimated',
        value: function boxAnimated(type) {
            console.log(type);
            this.boxShowed = type == 'enter';
            if (this.boxShowed && this.maskShowed) {
                this.renderCallback();
            }
        }
    }, {
        key: 'maskAnimated',
        value: function maskAnimated(type) {
            this.maskShowed = type == 'enter';
            if (this.boxShowed && this.maskShowed) {
                this.renderCallback();
            }
        }
    }, {
        key: 'renderCallback',
        value: function renderCallback() {
            !this.rendered && this.props.renderCallback && this.props.renderCallback();
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                visible = _props.visible,
                children = _props.children,
                prefixCls = _props.prefixCls,
                direction = _props.direction,
                onClose = _props.onClose,
                preRender = _props.preRender;
            var _state = this.state,
                isClose = _state.isClose,
                showPopup = _state.showPopup;
            // 如果使用了预渲染模式的话，就直接渲染出Dialog

            if (showPopup || !isClose && preRender) {
                return _react2.default.createElement(
                    _Dialog2.default,
                    (0, _extends3.default)({ preRender: preRender, maskTransitionName: _config2.default.cls + '-fade', transitionName: this.getAnimationClass(direction), prefixCls: prefixCls, boxClassName: prefixCls + '-' + direction, visible: visible, boxAnimated: function boxAnimated(type) {
                            _this2.boxAnimated(type);
                        }, maskAnimated: function maskAnimated(type) {
                            _this2.maskAnimated(type);
                        }, closeCallback: function closeCallback() {
                            _this2.setState({ showPopup: false });
                            onClose && onClose();
                        } }, this.props),
                    children
                );
            }
            return null;
        }
    }]);
    return Popup;
}(_react2.default.PureComponent);

exports.default = Popup;

Popup.defaultProps = {
    prefixCls: _config2.default.cls + '-popup',
    visible: false,
    style: {},
    maskStyle: {},
    maskClose: false,
    onClose: function onClose() {},

    transparent: false,
    direction: 'bottom',
    preRender: false
};