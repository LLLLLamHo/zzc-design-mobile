'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = create;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Form = require('./Form');

var _Form2 = _interopRequireDefault(_Form);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function create(FormElement) {
    return function (props) {
        return _react2.default.createElement(
            _Form2.default,
            null,
            _react2.default.createElement(FormElement, props)
        );
    };
}