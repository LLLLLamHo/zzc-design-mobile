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

var _config = require('../../_util/config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SkeletonBox = function (_PureComponent) {
    (0, _inherits3.default)(SkeletonBox, _PureComponent);

    function SkeletonBox(props) {
        (0, _classCallCheck3.default)(this, SkeletonBox);
        return (0, _possibleConstructorReturn3.default)(this, (SkeletonBox.__proto__ || (0, _getPrototypeOf2.default)(SkeletonBox)).call(this, props));
    }

    (0, _createClass3.default)(SkeletonBox, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                style = _props.style,
                prefixCls = _props.prefixCls,
                className = _props.className,
                justify = _props.justify,
                align = _props.align,
                direction = _props.direction,
                children = _props.children;

            var selectClassName = (0, _classnames2.default)(prefixCls, className);
            return _react2.default.createElement(
                'div',
                { style: (0, _assign2.default)({}, style, { alignItems: align, justifyContent: justify, flexDirection: direction }), className: selectClassName },
                children
            );
        }
    }]);
    return SkeletonBox;
}(_react.PureComponent);

exports.default = SkeletonBox;

SkeletonBox.defaultProps = {
    prefixCls: _config2.default.cls + '-skeleton-box',
    className: '',
    style: {},
    justify: 'flex-start',
    align: 'flex-start',
    direction: "row"
};