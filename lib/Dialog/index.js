'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

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

var _Dialog = require('./components/Dialog');

var _Dialog2 = _interopRequireDefault(_Dialog);

require('../style/index');

require('./index.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DialogEntrance = function (_PureComponent) {
    (0, _inherits3.default)(DialogEntrance, _PureComponent);

    function DialogEntrance() {
        (0, _classCallCheck3.default)(this, DialogEntrance);
        return (0, _possibleConstructorReturn3.default)(this, (DialogEntrance.__proto__ || (0, _getPrototypeOf2.default)(DialogEntrance)).apply(this, arguments));
    }

    (0, _createClass3.default)(DialogEntrance, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                _Error2.default,
                { componentName: 'Dialog' },
                _react2.default.createElement(_Dialog2.default, (0, _extends3.default)({ ref: function ref(dialog) {
                        _this2.props.getRef && _this2.props.getRef(dialog);
                    } }, this.props))
            );
        }
    }]);
    return DialogEntrance;
}(_react.PureComponent);

exports.default = DialogEntrance;