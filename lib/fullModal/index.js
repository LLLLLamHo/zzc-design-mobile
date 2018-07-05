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

var _dialog = require('../dialog');

var _dialog2 = _interopRequireDefault(_dialog);

var _touchFeedback = require('../touchFeedback');

var _touchFeedback2 = _interopRequireDefault(_touchFeedback);

var _config = require('../_util/config');

var _config2 = _interopRequireDefault(_config);

require('./index.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FullModal = function (_PureComponent) {
    (0, _inherits3.default)(FullModal, _PureComponent);

    function FullModal() {
        (0, _classCallCheck3.default)(this, FullModal);
        return (0, _possibleConstructorReturn3.default)(this, (FullModal.__proto__ || (0, _getPrototypeOf2.default)(FullModal)).apply(this, arguments));
    }

    (0, _createClass3.default)(FullModal, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                children = _props.children,
                prefixCls = _props.prefixCls,
                className = _props.className,
                style = _props.style,
                visible = _props.visible,
                title = _props.title,
                closeCallback = _props.closeCallback;

            if (visible) {
                return _react2.default.createElement(
                    _dialog2.default,
                    { visible: visible, style: style, className: '' + className, transparent: true, boxClassName: prefixCls + '-box' },
                    _react2.default.createElement(
                        'div',
                        { className: (0, _classnames2.default)(prefixCls + '-content', className) },
                        _react2.default.createElement(
                            'div',
                            { className: prefixCls + '-head' },
                            _react2.default.createElement(
                                'h5',
                                null,
                                title
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: prefixCls + '-body' },
                            children
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: prefixCls + '-footer' },
                            _react2.default.createElement(
                                _touchFeedback2.default,
                                { activeClassName: prefixCls + '-btn-active', onTouchEnd: function onTouchEnd() {
                                        closeCallback();
                                    } },
                                _react2.default.createElement(
                                    'div',
                                    { className: prefixCls + '-btn' },
                                    _react2.default.createElement('span', null)
                                )
                            )
                        )
                    )
                );
            }
            return null;
        }
    }]);
    return FullModal;
}(_react.PureComponent);

exports.default = FullModal;

FullModal.defaultProps = {
    prefixCls: _config2.default.cls + '-full-modal',
    style: {},
    visible: false,
    title: '',
    className: ''
};