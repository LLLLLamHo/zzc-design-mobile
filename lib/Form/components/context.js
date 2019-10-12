'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FormHOC = exports.FormItemContext = exports.FormContext = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FormContext = exports.FormContext = _react2.default.createContext({});
var FormItemContext = exports.FormItemContext = _react2.default.createContext({});
var FormHOC = exports.FormHOC = _react2.default.createContext({});