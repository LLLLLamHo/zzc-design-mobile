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

var _picker = require('./components/picker');

var _picker2 = _interopRequireDefault(_picker);

require('./index.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PickerEntrance = function (_PureComponent) {
    (0, _inherits3.default)(PickerEntrance, _PureComponent);

    function PickerEntrance() {
        (0, _classCallCheck3.default)(this, PickerEntrance);
        return (0, _possibleConstructorReturn3.default)(this, (PickerEntrance.__proto__ || (0, _getPrototypeOf2.default)(PickerEntrance)).apply(this, arguments));
    }

    (0, _createClass3.default)(PickerEntrance, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                _Error2.default,
                { componentName: 'Picker' },
                _react2.default.createElement(_picker2.default, this.props)
            );
        }
    }]);
    return PickerEntrance;
}(_react.PureComponent);

exports.default = PickerEntrance;