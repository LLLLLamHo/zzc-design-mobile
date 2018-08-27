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

var _body = require('./body');

var _body2 = _interopRequireDefault(_body);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CardBodyEntrance = function (_PureComponent) {
    (0, _inherits3.default)(CardBodyEntrance, _PureComponent);

    function CardBodyEntrance() {
        (0, _classCallCheck3.default)(this, CardBodyEntrance);
        return (0, _possibleConstructorReturn3.default)(this, (CardBodyEntrance.__proto__ || (0, _getPrototypeOf2.default)(CardBodyEntrance)).apply(this, arguments));
    }

    (0, _createClass3.default)(CardBodyEntrance, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                _Error2.default,
                { componentName: 'Card-Body' },
                _react2.default.createElement(_body2.default, this.props)
            );
        }
    }]);
    return CardBodyEntrance;
}(_react.PureComponent);

exports.default = CardBodyEntrance;