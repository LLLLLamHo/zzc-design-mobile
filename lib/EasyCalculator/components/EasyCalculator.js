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

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _gtag = require('../../_util/gtag');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EasyCalculator = function (_PureComponent) {
    (0, _inherits3.default)(EasyCalculator, _PureComponent);

    function EasyCalculator(props) {
        (0, _classCallCheck3.default)(this, EasyCalculator);

        var _this = (0, _possibleConstructorReturn3.default)(this, (EasyCalculator.__proto__ || (0, _getPrototypeOf2.default)(EasyCalculator)).call(this, props));

        _this.onDecrease = function () {
            var inputValue = _this.state.inputValue;

            var step = _this.props.step || 1;
            var precisionFactor = Math.pow(10, _this.getNumPrecision());
            var value = _this.toPrecision((inputValue * precisionFactor - precisionFactor * step) / precisionFactor);

            var _this$getButtonStatus = _this.getButtonStatus(value),
                isDecreaseDisabled = _this$getButtonStatus.isDecreaseDisabled,
                isIncreaseDisabled = _this$getButtonStatus.isIncreaseDisabled;

            value = _this.getValidValue((0, _assign2.default)({ value: value }, _this.props));
            _this.setState({
                inputValue: value,
                isDecreaseDisabled: isDecreaseDisabled,
                isIncreaseDisabled: isIncreaseDisabled
            }, function () {
                typeof _this.props.onChange === 'function' && _this.props.onChange(_this.state.inputValue);
            });
        };
        _this.onIncrease = function () {
            var inputValue = _this.state.inputValue;

            var step = _this.props.step || 1;
            var precisionFactor = Math.pow(10, _this.getNumPrecision());
            var value = _this.toPrecision((inputValue * precisionFactor + precisionFactor * step) / precisionFactor);
            value = _this.getValidValue((0, _assign2.default)({ value: value }, _this.props));
            _this.setState((0, _assign2.default)({ inputValue: value }, _this.getButtonStatus(value)), function () {
                typeof _this.props.onChange === 'function' && _this.props.onChange(_this.state.inputValue);
            });
        };
        (0, _gtag.zzcComponentUse)('EasyCalculator', '组件渲染');
        var value = _this.getValidValue(props);
        _this.state = {
            inputValue: value,
            isDecreaseDisabled: false,
            isIncreaseDisabled: false
        };
        return _this;
    }

    (0, _createClass3.default)(EasyCalculator, [{
        key: 'getValidValue',
        value: function getValidValue(props) {
            var value = 0;
            if ('value' in props) {
                value = props.value;
            } else {
                value = props.defaultValue;
            }
            value = value < props.min ? props.min : value;
            value = value > props.max ? props.max : value;
            return value;
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            var _this2 = this;

            if ('value' in nextProps && nextProps.value !== this.props.value) {
                var value = this.getValidValue(nextProps);
                var precisionFactor = Math.pow(10, this.getNumPrecision());
                value = this.toPrecision(value * precisionFactor / precisionFactor);
                this.setState({
                    inputValue: value
                }, function () {
                    typeof _this2.props.onChange === 'function' && _this2.props.onChange(_this2.state.inputValue);
                });
            }
        }
    }, {
        key: 'getButtonStatus',
        value: function getButtonStatus(val) {
            var _props = this.props,
                _props$min = _props.min,
                min = _props$min === undefined ? -Infinity : _props$min,
                _props$max = _props.max,
                max = _props$max === undefined ? Infinity : _props$max;

            return {
                isIncreaseDisabled: val >= max,
                isDecreaseDisabled: val <= min
            };
        }
    }, {
        key: 'getNumPrecision',
        value: function getNumPrecision() {
            var _props2 = this.props,
                precision = _props2.precision,
                step = _props2.step;
            var inputValue = this.state.inputValue;

            var stepPrecision = this.getPrecision(step);
            if (precision !== undefined) {
                if (stepPrecision > precision) {
                    console.warn('[Warn][EasyCalculator]precision should not be less than the decimal places of step');
                }
                return precision;
            } else {
                return Math.max(this.getPrecision(inputValue), stepPrecision);
            }
        }
    }, {
        key: 'getPrecision',
        value: function getPrecision(value) {
            if (value === undefined) return 0;
            var valueString = value.toString();
            var dotPosition = valueString.indexOf('.');
            var precision = 0;
            if (dotPosition !== -1) {
                precision = valueString.length - dotPosition - 1;
            }
            return precision;
        }
    }, {
        key: 'toPrecision',
        value: function toPrecision(num, precision) {
            if (precision === undefined) precision = this.getNumPrecision();
            var value = parseFloat(Number(num).toFixed(precision)) + '';
            return parseFloat(value);
        }
    }, {
        key: 'componentWillMount',
        value: function componentWillMount() {}
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {}
    }, {
        key: 'render',
        value: function render() {
            var _state = this.state,
                inputValue = _state.inputValue,
                isDecreaseDisabled = _state.isDecreaseDisabled,
                isIncreaseDisabled = _state.isIncreaseDisabled;
            var _props3 = this.props,
                _props3$prefixCls = _props3.prefixCls,
                prefixCls = _props3$prefixCls === undefined ? 'zds-calculator' : _props3$prefixCls,
                className = _props3.className,
                style = _props3.style;

            return _react2.default.createElement(
                'div',
                { className: (0, _classnames2.default)('' + prefixCls, className ? className : ''), style: style },
                _react2.default.createElement('span', { role: 'button', className: (0, _classnames2.default)(prefixCls + '-decrease', { 'is-disabled': isDecreaseDisabled }), onClick: this.onDecrease }),
                _react2.default.createElement('span', { role: 'button', className: (0, _classnames2.default)(prefixCls + '-increase', { 'is-disabled': isIncreaseDisabled }), onClick: this.onIncrease }),
                _react2.default.createElement(
                    'div',
                    { className: prefixCls + '-input' },
                    _react2.default.createElement(
                        'span',
                        { className: prefixCls + '-input-inner' },
                        inputValue
                    )
                )
            );
        }
    }]);
    return EasyCalculator;
}(_react.PureComponent);

exports.default = EasyCalculator;

EasyCalculator.defaultProps = {
    step: 1
};