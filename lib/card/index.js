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

var _Card = require('./components/Card');

var _Card2 = _interopRequireDefault(_Card);

var _Header = require('./components/Header');

var _Header2 = _interopRequireDefault(_Header);

var _Body = require('./components/Body');

var _Body2 = _interopRequireDefault(_Body);

var _Footer = require('./components/Footer');

var _Footer2 = _interopRequireDefault(_Footer);

require('../style/index');

require('./index.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CardEntrance = function (_PureComponent) {
    (0, _inherits3.default)(CardEntrance, _PureComponent);

    function CardEntrance() {
        (0, _classCallCheck3.default)(this, CardEntrance);
        return (0, _possibleConstructorReturn3.default)(this, (CardEntrance.__proto__ || (0, _getPrototypeOf2.default)(CardEntrance)).apply(this, arguments));
    }

    (0, _createClass3.default)(CardEntrance, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                _Error2.default,
                { componentName: 'Card' },
                _react2.default.createElement(_Card2.default, this.props)
            );
        }
    }]);
    return CardEntrance;
}(_react.PureComponent);

exports.default = CardEntrance;

CardEntrance.Header = _Header2.default;
CardEntrance.Body = _Body2.default;
CardEntrance.Footer = _Footer2.default;