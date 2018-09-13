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

var _betterScroll = require('better-scroll');

var _betterScroll2 = _interopRequireDefault(_betterScroll);

var _dialog = require('../../dialog');

var _dialog2 = _interopRequireDefault(_dialog);

var _touchFeedback = require('../../touchFeedback');

var _touchFeedback2 = _interopRequireDefault(_touchFeedback);

var _config = require('../../_util/config');

var _config2 = _interopRequireDefault(_config);

var _gtag = require('../../_util/gtag');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FullModal = function (_PureComponent) {
    (0, _inherits3.default)(FullModal, _PureComponent);

    function FullModal(props) {
        (0, _classCallCheck3.default)(this, FullModal);

        var _this = (0, _possibleConstructorReturn3.default)(this, (FullModal.__proto__ || (0, _getPrototypeOf2.default)(FullModal)).call(this, props));

        (0, _gtag.zzcComponentUse)('FullModal', '组件渲染');
        return _this;
    }

    (0, _createClass3.default)(FullModal, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.initScroll();
        }
    }, {
        key: 'initScroll',
        value: function initScroll() {
            var _this2 = this;

            var _props = this.props,
                isUseBScroll = _props.isUseBScroll,
                BScrollOpt = _props.BScrollOpt,
                BScrollInitCallback = _props.BScrollInitCallback;

            if (this.body) {
                if (isUseBScroll) {
                    var scroll = new _betterScroll2.default(this.body, BScrollOpt);
                    BScrollInitCallback && BScrollInitCallback(scroll);
                }
            } else {
                requestAnimationFrame(function () {
                    _this2.initScroll();
                });
            }
        }
    }, {
        key: 'createBScrollElem',
        value: function createBScrollElem(children) {
            var _this3 = this;

            var prefixCls = this.props.prefixCls;

            return _react2.default.createElement(
                'div',
                { className: prefixCls + '-body ' + prefixCls + '-wrapper', ref: function ref(elem) {
                        _this3.body = elem;
                    } },
                _react2.default.createElement(
                    'div',
                    { className: prefixCls + '-wrapper-content' },
                    children
                )
            );
        }
    }, {
        key: 'createDefaultElem',
        value: function createDefaultElem(children) {
            var prefixCls = this.props.prefixCls;

            return _react2.default.createElement(
                'div',
                { className: prefixCls + '-body' },
                children
            );
        }
    }, {
        key: 'render',
        value: function render() {
            var _props2 = this.props,
                children = _props2.children,
                prefixCls = _props2.prefixCls,
                className = _props2.className,
                style = _props2.style,
                visible = _props2.visible,
                title = _props2.title,
                closeCallback = _props2.closeCallback,
                isUseBScroll = _props2.isUseBScroll;

            if (visible) {
                return _react2.default.createElement(
                    _dialog2.default,
                    { visible: visible, style: style, className: '' + className, transparent: true, boxClassName: prefixCls + '-box' },
                    _react2.default.createElement(
                        'div',
                        { className: (0, _classnames2.default)(prefixCls + '-content', className) },
                        _react2.default.createElement(
                            'div',
                            { className: prefixCls + '-head' },
                            _react2.default.createElement(
                                'h5',
                                null,
                                title
                            )
                        ),
                        isUseBScroll ? this.createBScrollElem(children) : this.createDefaultElem(children),
                        _react2.default.createElement(
                            'div',
                            { className: prefixCls + '-footer' },
                            _react2.default.createElement(
                                _touchFeedback2.default,
                                { activeClassName: prefixCls + '-btn-active', onTouchEnd: function onTouchEnd() {
                                        closeCallback();
                                    } },
                                _react2.default.createElement(
                                    'div',
                                    { className: prefixCls + '-btn' },
                                    _react2.default.createElement('span', null)
                                )
                            )
                        )
                    )
                );
            }
            return null;
        }
    }]);
    return FullModal;
}(_react.PureComponent);

exports.default = FullModal;

FullModal.defaultProps = {
    prefixCls: _config2.default.cls + '-full-modal',
    style: {},
    visible: false,
    title: '',
    className: '',
    isUseBScroll: false,
    BScrollOpt: {},
    BScrollInitCallback: function BScrollInitCallback() {}
};