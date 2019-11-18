'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

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

var _classnames2 = require('classnames');

var _classnames3 = _interopRequireDefault(_classnames2);

var _zzcDesignMobile = require('zzc-design-mobile');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Step = function (_React$PureComponent) {
    (0, _inherits3.default)(Step, _React$PureComponent);

    function Step(props) {
        (0, _classCallCheck3.default)(this, Step);
        return (0, _possibleConstructorReturn3.default)(this, (Step.__proto__ || (0, _getPrototypeOf2.default)(Step)).call(this, props));
    }

    (0, _createClass3.default)(Step, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                className = _props.className,
                title = _props.title,
                description = _props.description,
                icon = _props.icon,
                active = _props.active,
                alignCenter = _props.alignCenter,
                status = _props.status,
                tag = _props.tag,
                style = _props.style;

            return _react2.default.createElement(
                'div',
                { className: (0, _classnames3.default)('zds-step', (0, _defineProperty3.default)({
                        'is-center': alignCenter,
                        'is-finish': status === 'finish',
                        'is-active': active
                    }, '' + className, !!className)), style: style },
                _react2.default.createElement(
                    'div',
                    { className: 'zds-step-head' },
                    _react2.default.createElement('div', { className: 'zds-step-line' }),
                    tag && _react2.default.createElement(
                        'div',
                        { className: 'zds-step-tag' },
                        _react2.default.createElement(
                            'span',
                            { className: 'zds-step-tag-text' },
                            tag
                        ),
                        _react2.default.createElement('i', { className: 'zds-step-tag-triangle' })
                    ),
                    _react2.default.createElement(
                        'i',
                        { className: 'zds-step-icon' },
                        !icon && _react2.default.createElement(_zzcDesignMobile.Icon, { className: (0, _classnames3.default)('zds-step-icon-inner', {
                                'is-active': active
                            }), type: 'step_' + status })
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'zds-step-content' },
                    _react2.default.createElement(
                        'div',
                        { className: 'zds-step-title' },
                        title
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'zds-step-description' },
                        description
                    )
                )
            );
        }
    }]);
    return Step;
}(_react2.default.PureComponent);

exports.default = Step;