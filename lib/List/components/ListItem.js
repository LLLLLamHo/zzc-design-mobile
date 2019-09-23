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

var _config = require('../../_util/config');

var _config2 = _interopRequireDefault(_config);

var _typeof = require('../../_util/typeof');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ListItem = function (_PureComponent) {
    (0, _inherits3.default)(ListItem, _PureComponent);

    function ListItem(props) {
        (0, _classCallCheck3.default)(this, ListItem);
        return (0, _possibleConstructorReturn3.default)(this, (ListItem.__proto__ || (0, _getPrototypeOf2.default)(ListItem)).call(this, props));
    }

    (0, _createClass3.default)(ListItem, [{
        key: 'createHeader',
        value: function createHeader(title, extra) {
            var _props = this.props,
                prefixCls = _props.prefixCls,
                align = _props.align,
                extraClick = _props.extraClick;

            var classname = (0, _classnames2.default)(prefixCls + '-header', prefixCls + '-header-' + align);
            return _react2.default.createElement(
                'div',
                { className: classname },
                _react2.default.createElement(
                    'div',
                    { className: prefixCls + '-header-title' },
                    title
                ),
                extra && _react2.default.createElement(
                    'div',
                    { onClick: function onClick() {
                            if (extraClick && (0, _typeof.isFunction)(extraClick)) {
                                extraClick();
                            }
                        }, className: prefixCls + '-header-extra' },
                    extra
                )
            );
        }
    }, {
        key: 'createBody',
        value: function createBody(children) {
            var prefixCls = this.props.prefixCls;

            return _react2.default.createElement(
                'div',
                { className: prefixCls + '-body' },
                children
            );
        }
    }, {
        key: 'render',
        value: function render() {
            var _props2 = this.props,
                style = _props2.style,
                prefixCls = _props2.prefixCls,
                children = _props2.children,
                className = _props2.className,
                title = _props2.title,
                extra = _props2.extra,
                _onClick = _props2.onClick;

            var cardClassName = (0, _classnames2.default)(prefixCls, className);
            return _react2.default.createElement(
                'div',
                { style: style, className: cardClassName, onClick: function onClick() {
                        if (_onClick) {
                            _onClick();
                        }
                    } },
                title && this.createHeader(title, extra),
                children && this.createBody(children)
            );
        }
    }]);
    return ListItem;
}(_react.PureComponent);

exports.default = ListItem;

ListItem.defaultProps = {
    prefixCls: _config2.default.cls + '-list-item',
    className: '',
    style: {},
    title: null,
    extra: null,
    align: 'center',
    extraClick: null,
    onClick: null
};