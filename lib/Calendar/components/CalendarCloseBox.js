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

var _config = require('../../_util/config');

var _config2 = _interopRequireDefault(_config);

var _Icon = require('../../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CalendarCloseBox = function (_PureComponent) {
    (0, _inherits3.default)(CalendarCloseBox, _PureComponent);

    function CalendarCloseBox(props) {
        (0, _classCallCheck3.default)(this, CalendarCloseBox);
        return (0, _possibleConstructorReturn3.default)(this, (CalendarCloseBox.__proto__ || (0, _getPrototypeOf2.default)(CalendarCloseBox)).call(this, props));
    }

    (0, _createClass3.default)(CalendarCloseBox, [{
        key: 'render',
        value: function render() {
            var prefixCls = this.props.prefixCls;

            return _react2.default.createElement(
                'div',
                { className: prefixCls + '-close-box' },
                _react2.default.createElement(
                    'div',
                    { className: prefixCls + '-close-btn' },
                    _react2.default.createElement(_Icon2.default, { type: 'error', size: 'xs' })
                )
            );
        }
    }]);
    return CalendarCloseBox;
}(_react.PureComponent);

exports.default = CalendarCloseBox;

CalendarCloseBox.defaultProps = {
    prefixCls: _config2.default.cls + '-calendar'
};