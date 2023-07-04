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

var _Error = require('../../../_util/Error');

var _Error2 = _interopRequireDefault(_Error);

var _Footer = require('./Footer');

var _Footer2 = _interopRequireDefault(_Footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CardFooterEntrance = function (_PureComponent) {
    (0, _inherits3.default)(CardFooterEntrance, _PureComponent);

    function CardFooterEntrance() {
        (0, _classCallCheck3.default)(this, CardFooterEntrance);
        return (0, _possibleConstructorReturn3.default)(this, (CardFooterEntrance.__proto__ || (0, _getPrototypeOf2.default)(CardFooterEntrance)).apply(this, arguments));
    }

    (0, _createClass3.default)(CardFooterEntrance, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                _Error2.default,
                { componentName: 'Card-Footer' },
                _react2.default.createElement(_Footer2.default, this.props)
            );
        }
    }]);
    return CardFooterEntrance;
}(_react.PureComponent);

exports.default = CardFooterEntrance;