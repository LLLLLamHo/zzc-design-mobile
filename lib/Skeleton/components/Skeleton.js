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

var _SkeletonBox = require('./SkeletonBox');

var _SkeletonBox2 = _interopRequireDefault(_SkeletonBox);

var _SkeletonItem = require('./SkeletonItem');

var _SkeletonItem2 = _interopRequireDefault(_SkeletonItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Skeleton = function (_PureComponent) {
    (0, _inherits3.default)(Skeleton, _PureComponent);

    function Skeleton(props) {
        (0, _classCallCheck3.default)(this, Skeleton);
        return (0, _possibleConstructorReturn3.default)(this, (Skeleton.__proto__ || (0, _getPrototypeOf2.default)(Skeleton)).call(this, props));
    }

    (0, _createClass3.default)(Skeleton, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                style = _props.style,
                prefixCls = _props.prefixCls,
                className = _props.className,
                children = _props.children;

            var selectClassName = (0, _classnames2.default)(prefixCls, className);
            return _react2.default.createElement(
                'div',
                { style: style, className: selectClassName },
                children
            );
        }
    }]);
    return Skeleton;
}(_react.PureComponent);

exports.default = Skeleton;

Skeleton.defaultProps = {
    prefixCls: _config2.default.cls + '-skeleton',
    className: '',
    style: {}
};
Skeleton.Box = _SkeletonBox2.default;
Skeleton.Item = _SkeletonItem2.default;