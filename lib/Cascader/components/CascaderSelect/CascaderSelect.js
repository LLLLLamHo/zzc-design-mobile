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

var _propTypes = require('prop-types');

var PropTypes = _interopRequireWildcard(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Option = require('./Option');

var _Option2 = _interopRequireDefault(_Option);

require('./index.css');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CascaderSelect = function (_React$Component) {
    (0, _inherits3.default)(CascaderSelect, _React$Component);

    function CascaderSelect(props) {
        (0, _classCallCheck3.default)(this, CascaderSelect);

        var _this = (0, _possibleConstructorReturn3.default)(this, (CascaderSelect.__proto__ || (0, _getPrototypeOf2.default)(CascaderSelect)).call(this, props));

        _this.onSelectChange = function (value, props) {
            if (!('value' in _this.props)) {
                _this.setState({
                    value: value
                });
            }
            value !== _this.state.value && typeof _this.props.onChange === 'function' && _this.props.onChange(value, props);
        };
        var value = void 0;
        if ('value' in props) {
            value = props.value;
        } else if ('defaultValue' in props) {
            value = props.defaultValue || [];
        }
        _this.state = {
            value: value
        };
        return _this;
    }

    (0, _createClass3.default)(CascaderSelect, [{
        key: 'getChildContext',
        value: function getChildContext() {
            return {
                select: {
                    value: this.state.value,
                    onOptionClick: this.onSelectChange
                }
            };
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                children = _props.children,
                className = _props.className,
                style = _props.style;

            return _react2.default.createElement(
                'div',
                { className: (0, _classnames2.default)('zds-cascader-select', { className: !!className }), style: style },
                children
            );
        }
    }], [{
        key: 'getDerivedStateFromProps',
        value: function getDerivedStateFromProps(nextProps, state) {
            if ('value' in nextProps && nextProps.value !== state.value) {
                return {
                    value: nextProps.value
                };
            }
            return null;
        }
    }]);
    return CascaderSelect;
}(_react2.default.Component);

exports.default = CascaderSelect;

CascaderSelect.Option = _Option2.default;
CascaderSelect.defaultProps = {};
CascaderSelect.childContextTypes = {
    select: PropTypes.any
};