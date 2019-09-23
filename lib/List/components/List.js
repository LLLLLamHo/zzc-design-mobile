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

var _ListItem = require('./ListItem');

var _ListItem2 = _interopRequireDefault(_ListItem);

var _config = require('../../_util/config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var List = function (_PureComponent) {
    (0, _inherits3.default)(List, _PureComponent);

    function List(props) {
        (0, _classCallCheck3.default)(this, List);
        return (0, _possibleConstructorReturn3.default)(this, (List.__proto__ || (0, _getPrototypeOf2.default)(List)).call(this, props));
    }

    (0, _createClass3.default)(List, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                style = _props.style,
                prefixCls = _props.prefixCls,
                children = _props.children,
                className = _props.className;

            var cardClassName = (0, _classnames2.default)(prefixCls, className);
            return _react2.default.createElement(
                'div',
                { style: style, className: cardClassName },
                children
            );
        }
    }]);
    return List;
}(_react.PureComponent);

exports.default = List;

List.defaultProps = {
    prefixCls: _config2.default.cls + '-list',
    className: '',
    style: {}
};
List.ListItem = _ListItem2.default;