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

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = require('prop-types');

var PropTypes = _interopRequireWildcard(_propTypes);

var _Icon = require('../../../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Radio = function (_React$Component) {
    (0, _inherits3.default)(Radio, _React$Component);

    function Radio(props) {
        (0, _classCallCheck3.default)(this, Radio);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Radio.__proto__ || (0, _getPrototypeOf2.default)(Radio)).call(this, props));

        _this.onChange = function () {
            var select = _this.context.select;

            if (_this.props.disabled) return;
            if (select) {
                select.onOptionClick(_this.props.value, _this.props);
            }
        };
        return _this;
    }

    (0, _createClass3.default)(Radio, [{
        key: 'render',
        value: function render() {
            var select = this.context.select;
            var _props = this.props,
                disabled = _props.disabled,
                label = _props.label,
                value = _props.value,
                children = _props.children,
                prefixCls = _props.prefixCls,
                isActive = false;

            if (select) {
                isActive = select.value === value;
            }
            prefixCls = prefixCls ? prefixCls : 'zds-cascader-select';
            return _react2.default.createElement(
                'div',
                { className: (0, _classnames2.default)(prefixCls + '-item', {
                        'is-disabled': disabled,
                        'is-active': isActive
                    }), onClick: this.onChange },
                _react2.default.createElement(
                    'div',
                    { className: prefixCls + '-text' },
                    children || label
                ),
                _react2.default.createElement(_Icon2.default, { className: prefixCls + '-icon-check', type: 'success_fill' })
            );
        }
    }]);
    return Radio;
}(_react2.default.Component);

exports.default = Radio;

Radio.contextTypes = {
    select: PropTypes.any
};