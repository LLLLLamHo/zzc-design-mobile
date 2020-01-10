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
    Popup = _zds.Popup,
    Button = _zds.Button,
    Card = _zds.Card,
    Icon = _zds.Icon;

var App = function (_Component) {
    _inherits(App, _Component);

    function App(props) {
        _classCallCheck(this, App);

        var _this = _possibleConstructorReturn(this, (App.__proto__ || (0, _getPrototypeOf2.default)(App)).call(this, props));

        _this.state = {
            text: new Date().getTime(),
            visible: false
        };
        return _this;
    }

    _createClass(App, [{
        key: 'openButtomPopup',
        value: function openButtomPopup() {
            this.setState({
                visible: true
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return React.createElement('div', { className: 'zzc-demo' }, React.createElement('div', { className: 'zzc-demo-header' }, React.createElement('h1', { className: 'zzc-demo-title' }, "Popup \u5F39\u51FA\u83DC\u5355"), React.createElement('h2', null, "\u63D0\u4F9B4\u5468\u5F39\u51FA\u7684\u83DC\u5355\uFF0C\u901A\u8FC7\u81EA\u884C\u914D\u7F6Epopup\u91CC\u9762\u7684\u5185\u5BB9\u5B9E\u73B0\u4ECE4\u5468\u5F39\u51FA\u5185\u5BB9\u3002"), React.createElement('h2', null, "\u4E0D\u9650\u9AD8\u4E0D\u9650\u5BBD\uFF0C\u53EA\u63D0\u4F9B4\u5468\u5F39\u51FA\u7684\u52A8\u753B\u548C\u5BF9\u5E94\u7684\u56DE\u8C03\u3002")), React.createElement('div', { className: 'zzc-demo-body' }, React.createElement(Button, { onClick: function onClick() {
                    _this2.openButtomPopup();
                } }, "\u4ECE\u4E0B\u5F39\u51FA"), React.createElement(Popup, {
                renderCallback: this.renderCallback,
                maskClose: true,
                visible: this.state.visible,
                onClose: function onClose() {
                    _this2.setState({
                        visible: false
                    });
                }
            }, React.createElement(Card, { full: true }, React.createElement(Card.Header, {
                className: 'cursor-car-head'
            }, React.createElement('div', {
                className: 'cursor-car-close',
                onClick: function onClick() {
                    _this2.setState({
                        visible: false
                    });
                }
            }, "\u5173\u95ED")), React.createElement('div', { className: 'card1-contnt' }, React.createElement(Card.Body, { borderDirection: 'left' }, React.createElement('div', { className: 'card-box2' }, React.createElement('p', null, this.state.text), React.createElement(Icon, { size: 'sm', type: 'success_outline' }))), React.createElement(Card.Body, { borderDirection: 'right' }, React.createElement('div', { className: 'card-box2' }, React.createElement('p', null, "\u53F3\u8FB9\u7559\u7A7A"), React.createElement(Icon, { size: 'sm', type: 'success_outline' }))), React.createElement(Card.Body, null, React.createElement('div', { className: 'card-box2' }, React.createElement('p', null, "\u4E24\u8FB9\u7559\u7A7A"), React.createElement(Icon, { size: 'sm', type: 'success_outline' }))))))));
        }
    }]);

    return App;
}(Component);

ReactDOM.render(React.createElement(App, null), document.getElementById('root'));