'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

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

var _PickerWrapper = require('./PickerWrapper');

var _PickerWrapper2 = _interopRequireDefault(_PickerWrapper);

var _typeof = require('../../_util/typeof');

var _config = require('../../_util/config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Picker = function (_React$Component) {
    (0, _inherits3.default)(Picker, _React$Component);

    function Picker(props) {
        (0, _classCallCheck3.default)(this, Picker);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Picker.__proto__ || (0, _getPrototypeOf2.default)(Picker)).call(this, props));

        _this.BScrollList = {};
        _this.initBScrollCallback = _this.initBScrollCallback.bind(_this);
        return _this;
    }

    (0, _createClass3.default)(Picker, [{
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate(nextProps) {
            if ((0, _stringify2.default)(nextProps) != (0, _stringify2.default)(this.props)) {
                return true;
            }
            // 更新渲染数据的时候需要做判断，如果数据不一样将会重新渲染
            if ((0, _stringify2.default)(nextProps.pickerData) != (0, _stringify2.default)(this.props.pickerData)) {
                return true;
            }
            return false;
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.props.renderAfter && (0, _typeof.isFunction)(this.props.renderAfter) && this.props.renderAfter(this.BScrollList);
        }
    }, {
        key: 'initBScrollCallback',
        value: function initBScrollCallback(key, BScrollObj) {
            this.BScrollList[key] = BScrollObj;
        }
    }, {
        key: 'renderPickerWrapper',
        value: function renderPickerWrapper() {
            var _this2 = this;

            var _props = this.props,
                _props$pickerData = _props.pickerData,
                pickerData = _props$pickerData === undefined ? [] : _props$pickerData,
                prefixCls = _props.prefixCls,
                onTouchEnd = _props.onTouchEnd,
                onTouchStart = _props.onTouchStart,
                height = _props.height;

            var timestamp = new Date().getTime();
            var pickerWrapperNodes = pickerData.map(function (item, key) {
                return item ? _react2.default.createElement(_PickerWrapper2.default, { height: height ? height : 187, key: timestamp + '-' + key + '-cm', wrapperIndex: key, wrapperKey: timestamp + '-' + key + '-node', data: item, prefixCls: prefixCls, initBScrollCallback: _this2.initBScrollCallback, onTouchStart: onTouchStart, onTouchEnd: onTouchEnd }) : null;
            });
            return pickerWrapperNodes;
        }
    }, {
        key: 'render',
        value: function render() {
            var _props2 = this.props,
                prefixCls = _props2.prefixCls,
                className = _props2.className,
                style = _props2.style,
                height = _props2.height;

            var cls = (0, _classnames2.default)(className, '' + prefixCls);
            return _react2.default.createElement(
                'div',
                { className: cls, style: (0, _assign2.default)({}, style, { height: height + 'px' }) },
                this.renderPickerWrapper()
            );
        }
    }]);
    return Picker;
}(_react2.default.Component);

exports.default = Picker;

Picker.defaultProps = {
    prefixCls: _config2.default.cls + '-picker',
    className: '',
    height: 187,
    style: {},
    pickerData: []
};