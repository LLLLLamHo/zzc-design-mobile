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

var _TouchFeedback = require('./components/TouchFeedback');

var _TouchFeedback2 = _interopRequireDefault(_TouchFeedback);

var _Error = require('../_util/Error');

var _Error2 = _interopRequireDefault(_Error);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TouchFeedbackEntrance = function (_PureComponent) {
    (0, _inherits3.default)(TouchFeedbackEntrance, _PureComponent);

    function TouchFeedbackEntrance() {
        (0, _classCallCheck3.default)(this, TouchFeedbackEntrance);
        return (0, _possibleConstructorReturn3.default)(this, (TouchFeedbackEntrance.__proto__ || (0, _getPrototypeOf2.default)(TouchFeedbackEntrance)).apply(this, arguments));
    }

    (0, _createClass3.default)(TouchFeedbackEntrance, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                _Error2.default,
                { componentName: 'TouchFeedback' },
                _react2.default.createElement(_TouchFeedback2.default, this.props)
            );
        }
    }]);
    return TouchFeedbackEntrance;
}(_react.PureComponent);

exports.default = TouchFeedbackEntrance;