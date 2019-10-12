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

var _Icon = require('../../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _config = require('../../_util/config');

var _config2 = _interopRequireDefault(_config);

var _typeof = require('../../_util/typeof');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Prompt = function (_PureComponent) {
    (0, _inherits3.default)(Prompt, _PureComponent);

    function Prompt(props) {
        (0, _classCallCheck3.default)(this, Prompt);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Prompt.__proto__ || (0, _getPrototypeOf2.default)(Prompt)).call(this, props));

        _this.handlerClickEvent = _this.handlerClickEvent.bind(_this);
        return _this;
    }

    (0, _createClass3.default)(Prompt, [{
        key: 'handlerClickEvent',
        value: function handlerClickEvent() {
            var onClick = this.props.onClick;

            if (onClick && (0, _typeof.isFunction)(onClick)) {
                onClick();
            }
        }
    }, {
        key: 'getTheme',
        value: function getTheme(type) {
            switch (type) {
                case 'success':
                    return "success-theme";
                case 'warn':
                    return 'warn-theme';
                default:
                    return "neutral-theme";
            }
        }
    }, {
        key: 'renderTypeElement',
        value: function renderTypeElement() {
            var _props = this.props,
                prefixCls = _props.prefixCls,
                style = _props.style,
                mode = _props.mode,
                contextText = _props.contextText,
                lineClamp = _props.lineClamp,
                type = _props.type,
                children = _props.children,
                className = _props.className;

            var theme = this.getTheme(type || '');
            var classname = (0, _classnames2.default)(prefixCls, className);
            switch (mode) {
                case 'info':
                    return _react2.default.createElement(
                        'div',
                        { className: classname + ' type-notice ' + theme, onClick: this.handlerClickEvent, style: style },
                        _react2.default.createElement(_Icon2.default, { type: 'info', className: prefixCls + '-icon-info' }),
                        _react2.default.createElement(
                            'div',
                            { className: prefixCls + '-content' },
                            !!children ? children : _react2.default.createElement('p', { style: { 'WebkitLineClamp': lineClamp }, dangerouslySetInnerHTML: { __html: contextText || '' } })
                        )
                    );
                case 'click':
                    return _react2.default.createElement(
                        'div',
                        { className: classname + ' type-notice ' + theme, onClick: this.handlerClickEvent, style: style },
                        _react2.default.createElement(
                            'div',
                            { className: prefixCls + '-content' },
                            !!children ? children : _react2.default.createElement('p', { style: { 'WebkitLineClamp': lineClamp }, dangerouslySetInnerHTML: { __html: contextText || '' } })
                        ),
                        _react2.default.createElement(_Icon2.default, { type: 'right', className: prefixCls + '-icon-right' })
                    );
                case 'info*click':
                    return _react2.default.createElement(
                        'div',
                        { className: classname + ' type-notice ' + theme, onClick: this.handlerClickEvent, style: style },
                        _react2.default.createElement(_Icon2.default, { type: 'info', className: prefixCls + '-icon-info' }),
                        _react2.default.createElement(
                            'div',
                            { className: prefixCls + '-content' },
                            !!children ? children : _react2.default.createElement('p', { style: { 'WebkitLineClamp': lineClamp }, dangerouslySetInnerHTML: { __html: contextText || '' } })
                        ),
                        _react2.default.createElement(_Icon2.default, { type: 'right', className: prefixCls + '-icon-right' })
                    );
                default:
                    return _react2.default.createElement(
                        'div',
                        { className: classname + ' type-notice border-notice ' + theme, onClick: this.handlerClickEvent, style: style },
                        _react2.default.createElement(
                            'div',
                            { className: prefixCls + '-content' },
                            !!children ? children : _react2.default.createElement('p', { style: { 'WebkitLineClamp': lineClamp }, dangerouslySetInnerHTML: { __html: contextText || '' } })
                        )
                    );
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return this.renderTypeElement();
        }
    }]);
    return Prompt;
}(_react.PureComponent);

exports.default = Prompt;

Prompt.defaultProps = {
    prefixCls: _config2.default.cls + '-prompt',
    className: '',
    style: {},
    mode: 'defautl',
    type: 'defautl',
    lineClamp: 0,
    contextText: ''
};