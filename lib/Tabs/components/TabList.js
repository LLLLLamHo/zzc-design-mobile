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

var _classnames3 = require('classnames');

var _classnames4 = _interopRequireDefault(_classnames3);

var _TabItem = require('./TabItem');

var _TabItem2 = _interopRequireDefault(_TabItem);

var _TabsListUnserline = require('./TabsListUnserline');

var _TabsListUnserline2 = _interopRequireDefault(_TabsListUnserline);

var _util = require('../util');

var _config = require('../../_util/config');

var _config2 = _interopRequireDefault(_config);

var _typeof = require('../../_util/typeof');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TabsList = function (_React$PureComponent) {
    (0, _inherits3.default)(TabsList, _React$PureComponent);

    function TabsList() {
        (0, _classCallCheck3.default)(this, TabsList);
        return (0, _possibleConstructorReturn3.default)(this, (TabsList.__proto__ || (0, _getPrototypeOf2.default)(TabsList)).apply(this, arguments));
    }

    (0, _createClass3.default)(TabsList, [{
        key: 'setTabIsActive',
        value: function setTabIsActive(prefixCls, currIndex, key) {
            return (0, _classnames4.default)(prefixCls + '-ls-item', (0, _defineProperty3.default)({}, prefixCls + '-active', key == currIndex));
        }
    }, {
        key: 'onChange',
        value: function onChange(key) {
            this.props.onChange(key);
        }
    }, {
        key: 'setTabItem',
        value: function setTabItem(size) {
            var _this2 = this;

            var _props = this.props,
                prefixCls = _props.prefixCls,
                tabs = _props.tabs,
                currIndex = _props.currIndex,
                tabBarPosition = _props.tabBarPosition,
                saveTabItem = _props.saveTabItem;

            var style = tabBarPosition == 'top' || tabBarPosition == 'bottom' ? { width: size + '%' } : { height: size + '%' };
            return tabs && tabs.map(function (item, key) {
                return _react2.default.createElement(_TabItem2.default, { prefixCls: prefixCls, saveTabItem: saveTabItem, key: _config2.default.cls + '-tabitem-' + key, itemKey: _config2.default.cls + '-tab-' + key, className: _this2.setTabIsActive(prefixCls, currIndex, key), clickEvent: function clickEvent() {
                        _this2.onChange(key);
                    }, style: style, index: key, item: item });
            });
        }
    }, {
        key: 'setTabList',
        value: function setTabList() {
            var _props2 = this.props,
                prefixCls = _props2.prefixCls,
                tabs = _props2.tabs,
                currIndex = _props2.currIndex,
                maxTabLength = _props2.maxTabLength,
                animated = _props2.animated,
                tabBarPosition = _props2.tabBarPosition,
                tabBarUnderlineStyle = _props2.tabBarUnderlineStyle,
                tabItems = _props2.tabItems,
                status = _props2.status;

            if ((0, _typeof.isArray)(tabs)) {
                var _classnames2;

                var size = (0, _util.getTabItemSize)(maxTabLength);
                var lineSize = size;
                var linePosition = size;
                var cls = (0, _classnames4.default)(prefixCls + '-ls', (_classnames2 = {}, (0, _defineProperty3.default)(_classnames2, prefixCls + '-ls-horizontal', tabBarPosition == 'top' || tabBarPosition == 'bottom'), (0, _defineProperty3.default)(_classnames2, prefixCls + '-ls-vertical', tabBarPosition == 'left' || tabBarPosition == 'right'), _classnames2));
                if (tabItems[currIndex]) {
                    if (tabBarPosition == 'top' || tabBarPosition == 'bottom') {
                        lineSize = tabItems[currIndex].offsetWidth;
                        linePosition = tabItems[currIndex].offsetLeft;
                    } else {
                        lineSize = tabItems[currIndex].offsetHeight;
                        linePosition = tabItems[currIndex].offsetTop;
                    }
                }
                return _react2.default.createElement(
                    'div',
                    { className: cls },
                    this.setTabItem(size),
                    status == 'ready' && _react2.default.createElement(_TabsListUnserline2.default, { tabBarUnderlineStyle: tabBarUnderlineStyle, currIndex: currIndex, tabBarPosition: tabBarPosition, animated: animated, prefixCls: prefixCls, size: lineSize, linePosition: linePosition })
                );
            }
            return null;
        }
    }, {
        key: 'render',
        value: function render() {
            return this.setTabList();
        }
    }]);
    return TabsList;
}(_react2.default.PureComponent);

exports.default = TabsList;