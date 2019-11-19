'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

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

var _Dialog = require('../../Dialog');

var _Dialog2 = _interopRequireDefault(_Dialog);

var _Button = require('../../Button');

var _Button2 = _interopRequireDefault(_Button);

var _i18n = require('../../_util/i18n');

var _i18n2 = _interopRequireDefault(_i18n);

var _config = require('../../_util/config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Modal = function (_PureComponent) {
    (0, _inherits3.default)(Modal, _PureComponent);

    function Modal(props) {
        (0, _classCallCheck3.default)(this, Modal);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Modal.__proto__ || (0, _getPrototypeOf2.default)(Modal)).call(this, props));

        _this.state = {
            isRenderModal: _this.props.visible,
            visible: _this.props.visible,
            lang: _i18n2.default[_this.props.lang]
        };
        _this.maskShowed = false;
        _this.boxShowed = false;
        return _this;
    }

    (0, _createClass3.default)(Modal, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(newProps) {
            if (this.state.visible !== newProps.visible) {
                if (newProps.visible) {
                    this.setState({
                        isRenderModal: newProps.visible,
                        visible: newProps.visible
                    });
                } else if (this.props.visible !== newProps.visible) {
                    this.close();
                }
            }
        }
    }, {
        key: 'createAlertFooter',
        value: function createAlertFooter(closable, buttons) {
            var _this2 = this;

            var _props = this.props,
                transitionName = _props.transitionName,
                maskTransitionName = _props.maskTransitionName,
                transparent = _props.transparent,
                prefixCls = _props.prefixCls;
            var lang = this.state.lang;

            if (closable && (!buttons || buttons.length == 0)) {
                return _react2.default.createElement(
                    _Button2.default,
                    { type: 'special', className: prefixCls + '-btn', style: {
                            border: 'none'
                        }, onClick: function onClick() {
                            // 防止enter动画没有结束就点击关闭引起bug
                            if (transitionName && transitionName !== '' && !_this2.boxShowed) {
                                return false;
                            }
                            if (!transparent && maskTransitionName && maskTransitionName !== '' && !_this2.maskShowed) {
                                return false;
                            }
                            _this2.close();
                            return false;
                        } },
                    lang.close
                );
            } else if (buttons && buttons.length > 0) {
                return buttons.map(function (item, key) {
                    return _react2.default.createElement(
                        'div',
                        { key: _this2.props.prefixCls + '-btn-' + new Date().getTime() + '-' + key, className: (0, _classnames2.default)(_this2.props.prefixCls + '-btn') },
                        _this2.createBtn(item)
                    );
                });
            }
            return null;
        }
    }, {
        key: 'createBtn',
        value: function createBtn(btn) {
            var _this3 = this;

            var onPress = btn.onPress ? btn.onPress : function () {};
            var _props2 = this.props,
                transitionName = _props2.transitionName,
                maskTransitionName = _props2.maskTransitionName,
                transparent = _props2.transparent;

            return _react2.default.cloneElement(_react2.default.createElement(
                _Button2.default,
                { onClick: function onClick(event) {
                        // 防止enter动画没有结束就点击关闭引起bug
                        if (transitionName && transitionName !== '' && !_this3.boxShowed) {
                            return false;
                        }
                        if (!transparent && maskTransitionName && maskTransitionName !== '' && !_this3.maskShowed) {
                            return false;
                        }
                        event.stopPropagation();
                        var res = onPress();
                        if (res && res.then) {
                            res.then(function () {
                                _this3.close();
                            }).catch(function () {});
                        } else {
                            _this3.close();
                        }
                        return false;
                    } },
                btn.text
            ), (0, _assign2.default)({}, btn.props));
        }
    }, {
        key: 'close',
        value: function close() {
            var _props3 = this.props,
                transitionName = _props3.transitionName,
                maskTransitionName = _props3.maskTransitionName;
            // 当没有提供动画，无法触发动画事件触发外部传入的closeCallback，所以当没有动画则主动触发外部closeCallback

            if (transitionName === '' && maskTransitionName === '') {
                this.closeCallback();
            } else {
                this.setState({
                    visible: false
                });
            }
        }
    }, {
        key: 'createTitle',
        value: function createTitle(title) {
            var prefixCls = this.props.prefixCls;

            if (title && title !== '') {
                return _react2.default.createElement(
                    'div',
                    { className: (0, _classnames2.default)(prefixCls + '-header') },
                    title
                );
            }
            return null;
        }
    }, {
        key: 'createFooter',
        value: function createFooter() {
            var _props4 = this.props,
                prefixCls = _props4.prefixCls,
                buttons = _props4.buttons,
                closable = _props4.closable,
                buttonDirection = _props4.buttonDirection;

            return _react2.default.createElement(
                'div',
                { className: (0, _classnames2.default)([prefixCls + '-footer', prefixCls + '-' + buttonDirection + '-footer']) },
                this.createAlertFooter(closable, buttons)
            );
        }
    }, {
        key: 'closeCallback',
        value: function closeCallback() {
            var _this4 = this;

            this.setState({
                isRenderModal: false,
                visible: false
            }, function () {
                _this4.props.closeCallback();
            });
        }
        // 防止enter动画没有结束就点击关闭引起bug

    }, {
        key: 'maskAnimated',
        value: function maskAnimated(type) {
            this.maskShowed = type === 'enter';
        }
        // 防止enter动画没有结束就点击关闭引起bug

    }, {
        key: 'boxAnimated',
        value: function boxAnimated(type) {
            this.boxShowed = type === 'enter';
        }
    }, {
        key: 'render',
        value: function render() {
            var _this5 = this;

            var _props5 = this.props,
                children = _props5.children,
                maskClose = _props5.maskClose,
                transitionName = _props5.transitionName,
                maskTransitionName = _props5.maskTransitionName,
                prefixCls = _props5.prefixCls,
                className = _props5.className,
                maskStyle = _props5.maskStyle,
                title = _props5.title,
                transparent = _props5.transparent,
                buttons = _props5.buttons,
                closable = _props5.closable,
                style = _props5.style;

            if (this.state.isRenderModal) {
                return _react2.default.createElement(
                    _Dialog2.default,
                    { style: style, transparent: transparent, maskTransitionName: maskTransitionName, visible: this.state.visible, maskStyle: maskStyle, maskClose: maskClose, maskAnimated: function maskAnimated(type) {
                            _this5.maskAnimated(type);
                        }, boxAnimated: function boxAnimated(type) {
                            _this5.boxAnimated(type);
                        }, transitionName: transitionName, boxClassName: (0, _classnames2.default)(prefixCls + '-box', className), closeCallback: function closeCallback() {
                            _this5.closeCallback();
                        }, title: this.createTitle(title), footer: closable || buttons && buttons.length > 0 ? this.createFooter() : null },
                    _react2.default.createElement(
                        'div',
                        { className: (0, _classnames2.default)(prefixCls + '-body') },
                        children
                    )
                );
            }
            return null;
        }
    }]);
    return Modal;
}(_react.PureComponent);

exports.default = Modal;

Modal.defaultProps = {
    prefixCls: _config2.default.cls + '-modal',
    maskTransitionName: _config2.default.cls + '-fade',
    style: {},
    maskStyle: {},
    className: '',
    closable: false,
    closeCallback: function closeCallback() {},

    visible: false,
    title: '',
    transitionName: _config2.default.cls + '-zoom',
    buttons: [],
    buttonDirection: 'horizontally',
    maskClose: false,
    transparent: false,
    lang: 'cn'
};