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

var _Modal = require('../../Modal');

var _Modal2 = _interopRequireDefault(_Modal);

var _config = require('../../_util/config');

var _config2 = _interopRequireDefault(_config);

var _gtag = require('../../_util/gtag');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Loading = function (_PureComponent) {
    (0, _inherits3.default)(Loading, _PureComponent);

    function Loading(props) {
        (0, _classCallCheck3.default)(this, Loading);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Loading.__proto__ || (0, _getPrototypeOf2.default)(Loading)).call(this, props));

        _this.state = {
            visible: _this.props.visible
        };
        (0, _gtag.zzcComponentUse)('Loading', '组件渲染');
        return _this;
    }

    (0, _createClass3.default)(Loading, [{
        key: 'getModal',
        value: function getModal(div) {
            this.modal = div;
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            this.setState({
                visible: nextProps.visible
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                prefixCls = _props.prefixCls,
                text = _props.text,
                _closeCallback = _props.closeCallback;
            var visible = this.state.visible;

            return _react2.default.createElement(
                _Modal2.default,
                (0, _extends3.default)({ ref: function ref(div) {
                        _this2.getModal(div);
                    }, prefixCls: prefixCls, visible: visible, closeCallback: function closeCallback() {
                        _closeCallback && _closeCallback();
                    } }, this.props),
                _react2.default.createElement(
                    'div',
                    { className: prefixCls + '-content' },
                    _react2.default.createElement('img', { width: '50', height: '42', src: 'data:image/gif;base64,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', alt: 'loading' }),
                    _react2.default.createElement(
                        'div',
                        { className: prefixCls + '-text' },
                        text
                    )
                )
            );
        }
    }]);
    return Loading;
}(_react.PureComponent);

exports.default = Loading;

Loading.defaultProps = {
    prefixCls: _config2.default.cls + '-loading',
    style: {},
    maskStyle: {},
    className: '',
    closeCallback: function closeCallback() {},

    visible: false,
    text: ''
};