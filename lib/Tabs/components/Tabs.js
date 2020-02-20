'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

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

var _TabBar = require('./TabBar');

var _TabBar2 = _interopRequireDefault(_TabBar);

var _TabContent = require('./TabContent');

var _TabContent2 = _interopRequireDefault(_TabContent);

var _typeof = require('../../_util/typeof');

var _config = require('../../_util/config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Tabs = function (_React$PureComponent) {
    (0, _inherits3.default)(Tabs, _React$PureComponent);

    function Tabs(props) {
        (0, _classCallCheck3.default)(this, Tabs);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Tabs.__proto__ || (0, _getPrototypeOf2.default)(Tabs)).call(this, props));

        var index = props.index ? props.index : props.defaultIndex;
        _this.state = {
            currIndex: index,
            preIndex: index
        };
        _this.onChange = _this.onChange.bind(_this);
        return _this;
    }

    (0, _createClass3.default)(Tabs, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextPros) {
            if (nextPros.index != null && nextPros.index != this.state.currIndex) {
                this.setState({
                    currIndex: nextPros.index,
                    preIndex: this.state.currIndex
                });
            }
        }
    }, {
        key: 'onChange',
        value: function onChange(key) {
            if ((0, _typeof.isFunction)(this.props.onChange)) {
                this.props.onChange(key);
            }
            this.goToTab(key);
        }
    }, {
        key: 'goToTab',
        value: function goToTab(key) {
            var currIndex = this.state.currIndex;
            // 当tabs是受控时，不主动更新state，通过外部改变props来改变tabs的state

            if ((0, _typeof.isNull)(this.props.index)) {
                this.setState({
                    currIndex: key,
                    preIndex: currIndex
                });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                prefixCls = _props.prefixCls,
                style = _props.style,
                children = _props.children,
                tabBarPosition = _props.tabBarPosition,
                className = _props.className;

            var direction = tabBarPosition == 'top' || tabBarPosition == 'bottom' ? 'horizontal' : 'vertical';
            var cls = (0, _classnames2.default)(className, prefixCls + '-box', prefixCls + '-box-' + tabBarPosition);
            return _react2.default.createElement(
                'div',
                { className: cls, style: style },
                _react2.default.createElement(_TabBar2.default, (0, _extends3.default)({}, this.props, { tabDirection: direction }, this.state, { onChange: this.onChange })),
                children && _react2.default.createElement(
                    _TabContent2.default,
                    (0, _extends3.default)({}, this.props, this.state, { onChange: this.onChange }),
                    children
                )
            );
        }
    }]);
    return Tabs;
}(_react2.default.PureComponent);

exports.default = Tabs;

Tabs.defaultProps = {
    prefixCls: _config2.default.cls + '-tabs',
    className: '',
    style: {},
    tabBarUnderlineStyle: {},
    tabs: [],
    defaultIndex: 0,
    index: null,
    onChange: function onChange() {},
    maxTabLength: 3,
    swipeDirection: 'horizontal',
    animated: true,
    swipeable: true,
    isOpenTabBarScroll: true,
    isOpenTabContentScroll: true,
    tabBarPosition: 'top'
};