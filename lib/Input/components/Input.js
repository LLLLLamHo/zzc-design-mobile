'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

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

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _config = require('../../_util/config');

var _config2 = _interopRequireDefault(_config);

var _typeof = require('../../_util/typeof');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Input = function (_PureComponent) {
    (0, _inherits3.default)(Input, _PureComponent);

    function Input(props) {
        (0, _classCallCheck3.default)(this, Input);
        return (0, _possibleConstructorReturn3.default)(this, (Input.__proto__ || (0, _getPrototypeOf2.default)(Input)).call(this, props));
    }

    (0, _createClass3.default)(Input, [{
        key: 'createInput',
        value: function createInput() {
            var _props = this.props,
                prefixCls = _props.prefixCls,
                className = _props.className,
                htmlType = _props.htmlType,
                _onChange = _props.onChange,
                _onBlur = _props.onBlur,
                _onFocus = _props.onFocus;

            var inputClassName = (0, _classnames2.default)(prefixCls, className);
            var newProps = (0, _assign2.default)({}, this.props);
            delete newProps.prefixCls;
            delete newProps.className;
            delete newProps.htmlType;
            return _react2.default.createElement('input', (0, _extends3.default)({}, newProps, { onChange: function onChange(e) {
                    if (_onChange && (0, _typeof.isFunction)(_onChange)) {
                        _onChange(e);
                    }
                }, onBlur: function onBlur(e) {
                    if (_onBlur && (0, _typeof.isFunction)(_onBlur)) {
                        _onBlur(e);
                    }
                }, onFocus: function onFocus(e) {
                    if (_onFocus && (0, _typeof.isFunction)(_onFocus)) {
                        _onFocus(e);
                    }
                }, type: htmlType, className: inputClassName }));
        }
    }, {
        key: 'render',
        value: function render() {
            return this.createInput();
        }
    }]);
    return Input;
}(_react.PureComponent);

exports.default = Input;

Input.defaultProps = {
    prefixCls: _config2.default.cls + '-input',
    className: '',
    style: {},
    htmlType: 'text',
    name: null,
    id: null,
    placeholder: '',
    disabled: false
};