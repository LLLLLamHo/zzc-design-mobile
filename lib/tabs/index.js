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

var _tabItem = require('./components/tabItem');

var _tabItem2 = _interopRequireDefault(_tabItem);

var _tabList = require('./components/tabList');

var _tabList2 = _interopRequireDefault(_tabList);

var _typeof = require('../_util/typeof');

require('./index.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Tabs = function (_React$PureComponent) {
    (0, _inherits3.default)(Tabs, _React$PureComponent);

    function Tabs(props) {
        (0, _classCallCheck3.default)(this, Tabs);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Tabs.__proto__ || (0, _getPrototypeOf2.default)(Tabs)).call(this, props));

        _this.state = {
            currIndex: props.index ? props.index : props.initIndex
        };
        return _this;
    }

    (0, _createClass3.default)(Tabs, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextPros) {
            if (nextPros.index != this.state.currIndex) {
                this.setState({
                    currIndex: nextPros.index
                });
            }
        }
    }, {
        key: 'onChange',
        value: function onChange(key) {
            if ((0, _typeof.isFunction)(this.props.onChange)) {
                this.props.onChange(key);
            }
            // 当tabs是受控时，不主动更新state，通过外部改变props来改变tabs的state
            if ((0, _typeof.isNull)(this.props.index)) {
                this.setState({
                    currIndex: key
                });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                prefixCls = _props.prefixCls,
                style = _props.style,
                tabs = _props.tabs;
            var currIndex = this.state.currIndex;

            return _react2.default.createElement(
                'div',
                { className: (0, _classnames2.default)(prefixCls + '-box'), style: style },
                _react2.default.createElement(_tabList2.default, { prefixCls: prefixCls, tabs: tabs, currIndex: currIndex, onChange: function onChange(key) {
                        _this2.onChange(key);
                    } })
            );
        }
    }]);
    return Tabs;
}(_react2.default.PureComponent);

exports.default = Tabs;

Tabs.defaultProps = {
    prefixCls: 'zzc-tabs',
    style: {},
    tabs: [],
    initIndex: 0,
    index: null,
    onChange: function onChange() {}
};
Tabs.TabsItem = _tabItem2.default;