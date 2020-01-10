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
    Button = _zds.Button,
    Icon = _zds.Icon;
var ButtonGroup = Button.ButtonGroup;

var App = function (_Component) {
    _inherits(App, _Component);

    function App() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, App);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = App.__proto__ || (0, _getPrototypeOf2.default)(App)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            title: 'Button 按钮'
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(App, [{
        key: 'render',
        value: function render() {
            return React.createElement('div', { className: 'zzc-demo' }, React.createElement('div', { className: 'zzc-demo-header' }, React.createElement('h1', { className: 'zzc-demo-title' }, this.state.title), React.createElement('h2', null, "\u79DF\u79DF\u8F66\u4E3B\u6D41\u7A0B\u6309\u94AE\u6837\u5F0F")), React.createElement('div', { className: 'zzc-demo-body' }, React.createElement('h5', null, "\u5168\u5C40\u6309\u94AE\u57FA\u7840\u6837\u5F0F"), React.createElement(Button, null, "\u9ED8\u8BA4\u6309\u94AE"), React.createElement('h5', null, "\u5168\u5C40\u6B21\u7EA7\u6309\u94AE"), React.createElement(Button, { type: 'sub' }, "\u9ED8\u8BA4\u6309\u94AE")), React.createElement('div', { className: 'zzc-demo-body' }, React.createElement('h5', null, "\u884C\u5185\u6309\u94AE(\u9ED8\u8BA4\u5927\u5C0F)"), React.createElement(Button, { inline: true }, "\u786E\u8BA4"), React.createElement('h5', null, "\u884C\u5185\u6309\u94AE(middle)"), React.createElement(Button, { inline: true, size: 'middle' }, "\u786E\u8BA4"), React.createElement('h5', null, "\u884C\u5185\u6309\u94AE(small)"), React.createElement(Button, { inline: true, size: 'small' }, "\u786E\u8BA4")), React.createElement('div', { className: 'zzc-demo-body' }, React.createElement('h5', null, "\u6309\u94AE\u5757"), React.createElement(ButtonGroup, null, React.createElement(Button, null, "\u786E\u8BA4"), React.createElement(Button, { type: 'sub' }, "\u786E\u8BA4"))));
        }
    }]);

    return App;
}(Component);

ReactDOM.render(React.createElement(App, null), document.getElementById('root'));