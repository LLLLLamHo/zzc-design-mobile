'use strict';

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _setPrototypeOf = require("babel-runtime/core-js/object/set-prototype-of");

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _create = require("babel-runtime/core-js/object/create");

var _create2 = _interopRequireDefault(_create);

var _typeof2 = require("babel-runtime/helpers/typeof");

var _typeof3 = _interopRequireDefault(_typeof2);

var _defineProperty = require("babel-runtime/core-js/object/define-property");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;(0, _defineProperty2.default)(target, descriptor.key, descriptor);
        }
    }return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
}();

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

function _possibleConstructorReturn(self, call) {
    if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
    }subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
}

var _React = React,
    Component = _React.Component;
var _zds = zds,
    List = _zds.List,
    Icon = _zds.Icon,
    Toast = _zds.Toast;
var ListItem = List.ListItem;

var App = function (_Component) {
    _inherits(App, _Component);

    function App() {
        _classCallCheck(this, App);

        return _possibleConstructorReturn(this, (App.__proto__ || (0, _getPrototypeOf2.default)(App)).apply(this, arguments));
    }

    _createClass(App, [{
        key: 'render',
        value: function render() {
            return React.createElement('div', { className: 'zzc-demo' }, React.createElement('div', { className: 'zzc-demo-header' }, React.createElement('h1', { className: 'zzc-demo-title' }, "List \u5217\u8868"), React.createElement('h2', null, "\u5217\u8868\u5E03\u5C40\uFF0C\u4E3B\u8981\u5206\u4E3AList\u7EC4\u4EF6\u548CList.Item\u7EC4\u4EF6\u914D\u5408\u4F7F\u7528")), React.createElement('div', { className: 'zzc-demo-body full' }, React.createElement('h5', null, "\u57FA\u672C\u4F7F\u7528"), React.createElement(List, null, React.createElement(ListItem, {
                title: React.createElement('p', null, "\u53EA\u6709\u6807\u9898")
            }), React.createElement(ListItem, {
                title: React.createElement('p', null, "\u6807\u9898\u52A0\u4E0A\u56FE\u6807"),
                extra: React.createElement(Icon, { type: 'arrows', style: { width: '18px', height: '18px' } })
            }), React.createElement(ListItem, {
                title: React.createElement('p', null, "\u8D85\u7EA7\u957F\u7684\u56FE\u6807\u8D85\u7EA7\u957F\u7684\u56FE\u6807\u8D85\u7EA7\u957F\u7684\u56FE\u6807\u8D85\u7EA7\u957F\u7684\u56FE\u6807"),
                extra: React.createElement(Icon, { type: 'arrows', style: { width: '18px', height: '18px' } })
            }, React.createElement('div', null, "\u5185\u5BB9\u9879\u63CF\u8FF0\u5185\u5BB9\u9879\u63CF\u8FF0\u5185\u5BB9\u9879\u63CF\u8FF0\u5185\u5BB9\u9879\u63CF\u8FF0\u5185\u5BB9\u9879\u63CF\u8FF0\u5185\u5BB9\u9879\u63CF\u8FF0\u5185\u5BB9\u9879\u63CF\u8FF0\u5185\u5BB9\u9879\u63CF\u8FF0\u5185\u5BB9\u9879\u63CF\u8FF0\u5185\u5BB9\u9879\u63CF\u8FF0\u5185\u5BB9\u9879\u63CF\u8FF0\u5185\u5BB9\u9879\u63CF\u8FF0")), React.createElement(ListItem, {
                title: React.createElement('p', null, "\u56FE\u6807\u70B9\u51FB"),
                extra: React.createElement(Icon, { type: 'arrows', style: { width: '18px', height: '18px' } }),
                extraClick: function extraClick() {
                    Toast.info('点击图标', 2);
                }
            }), React.createElement(ListItem, {
                title: React.createElement('p', null, "\u5E26\u6709\u5185\u5BB9\u7684Item"),
                extra: React.createElement(Icon, { type: 'arrows', style: { width: '18px', height: '18px' } }),
                extraClick: function extraClick() {
                    Toast.info('点击图标', 2);
                }
            }, React.createElement('div', null, "\u5185\u5BB9\u9879\u63CF\u8FF0\u5185\u5BB9\u9879\u63CF\u8FF0\u5185\u5BB9\u9879\u63CF\u8FF0\u5185\u5BB9\u9879\u63CF\u8FF0")))));
        }
    }]);

    return App;
}(Component);

ReactDOM.render(React.createElement(App, null), document.getElementById('root'));