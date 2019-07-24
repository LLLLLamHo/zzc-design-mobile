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

var _Error = require('../_util/Error');

var _Error2 = _interopRequireDefault(_Error);

var _Modal = require('./components/Modal');

var _Modal2 = _interopRequireDefault(_Modal);

require('./index.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ModalEntrance = function (_PureComponent) {
    (0, _inherits3.default)(ModalEntrance, _PureComponent);

    function ModalEntrance() {
        (0, _classCallCheck3.default)(this, ModalEntrance);
        return (0, _possibleConstructorReturn3.default)(this, (ModalEntrance.__proto__ || (0, _getPrototypeOf2.default)(ModalEntrance)).apply(this, arguments));
    }

    (0, _createClass3.default)(ModalEntrance, [{
        key: 'render',
        value: function render() {
            // 外部调用setState传入props中
            var props = (0, _assign2.default)({}, this.props, this.state);
            return _react2.default.createElement(
                _Error2.default,
                { componentName: 'Modal' },
                _react2.default.createElement(_Modal2.default, props)
            );
        }
    }]);
    return ModalEntrance;
}(_react.PureComponent);

exports.default = ModalEntrance;