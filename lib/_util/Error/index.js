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

exports.default = errorComponent;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _gtag = require('../gtag');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function errorComponent(WrappedComponent, componentName) {
    return function (_PureComponent) {
        (0, _inherits3.default)(HLError, _PureComponent);

        function HLError() {
            (0, _classCallCheck3.default)(this, HLError);
            return (0, _possibleConstructorReturn3.default)(this, (HLError.__proto__ || (0, _getPrototypeOf2.default)(HLError)).apply(this, arguments));
        }

        (0, _createClass3.default)(HLError, [{
            key: 'componentDidCatch',
            value: function componentDidCatch(error, info) {
                (0, _gtag.zzcComponetError)(componentName, error, info);
            }
        }, {
            key: 'render',
            value: function render() {
                return _react2.default.createElement(WrappedComponent, this.props);
            }
        }]);
        return HLError;
    }(_react.PureComponent);
}