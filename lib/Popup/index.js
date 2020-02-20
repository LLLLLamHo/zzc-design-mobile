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

var _Error = require('../_util/Error');

var _Error2 = _interopRequireDefault(_Error);

var _Popup = require('./components/Popup');

var _Popup2 = _interopRequireDefault(_Popup);

require('./index.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PopupEntrance = function (_PureComponent) {
    (0, _inherits3.default)(PopupEntrance, _PureComponent);

    function PopupEntrance() {
        (0, _classCallCheck3.default)(this, PopupEntrance);
        return (0, _possibleConstructorReturn3.default)(this, (PopupEntrance.__proto__ || (0, _getPrototypeOf2.default)(PopupEntrance)).apply(this, arguments));
    }

    (0, _createClass3.default)(PopupEntrance, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                _Error2.default,
                { componentName: 'Popup' },
                _react2.default.createElement(_Popup2.default, this.props)
            );
        }
    }]);
    return PopupEntrance;
}(_react.PureComponent);

exports.default = PopupEntrance;