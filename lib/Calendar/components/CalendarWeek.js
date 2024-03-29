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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CalendarWeek = function (_PureComponent) {
    (0, _inherits3.default)(CalendarWeek, _PureComponent);

    function CalendarWeek(props) {
        (0, _classCallCheck3.default)(this, CalendarWeek);
        return (0, _possibleConstructorReturn3.default)(this, (CalendarWeek.__proto__ || (0, _getPrototypeOf2.default)(CalendarWeek)).call(this, props));
    }

    (0, _createClass3.default)(CalendarWeek, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                prefixCls = _props.prefixCls,
                weekList = _props.weekList;

            return _react2.default.createElement(
                'div',
                { className: prefixCls + '-week-box' },
                weekList.map(function (item, key) {
                    return _react2.default.createElement(
                        'div',
                        { className: 'item', 'data-week': item, key: key },
                        _react2.default.createElement(
                            'p',
                            null,
                            item
                        )
                    );
                })
            );
        }
    }]);
    return CalendarWeek;
}(_react.PureComponent);

exports.default = CalendarWeek;

CalendarWeek.defaultProps = {
    prefixCls: _config2.default.cls + '-calendar'
};