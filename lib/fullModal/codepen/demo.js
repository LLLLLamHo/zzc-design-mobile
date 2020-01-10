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
    FullModal = _zds.FullModal,
    Button = _zds.Button;

var App = function (_Component) {
    _inherits(App, _Component);

    function App(props) {
        _classCallCheck(this, App);

        var _this = _possibleConstructorReturn(this, (App.__proto__ || (0, _getPrototypeOf2.default)(App)).call(this, props));

        _this.state = {
            visible: false,
            visible2: false
        };
        return _this;
    }

    _createClass(App, [{
        key: 'openDefaultDialog',
        value: function openDefaultDialog() {
            this.setState({
                visible: true
            });
        }
    }, {
        key: 'openBScrollDialog',
        value: function openBScrollDialog() {
            this.setState({
                visible2: true
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return React.createElement('div', { className: 'zzc-demo' }, React.createElement('div', { className: 'zzc-demo-header' }, React.createElement('h1', { className: 'zzc-demo-title' }, "FullModal \u5168\u5C4F\u6A21\u6001\u6846")), React.createElement('div', { className: 'zzc-demo-body' }, React.createElement(Button, { onClick: function onClick() {
                    _this2.openDefaultDialog();
                } }, "\u6253\u5F00\u5168\u5C4F\u6A21\u6001\u6846"), this.state.visible && React.createElement(FullModal, {
                visible: this.state.visible,
                title: "\u8FD9\u662F\u4E00\u4E2A\u6807\u9898",
                closeCallback: function closeCallback() {
                    _this2.setState({ visible: false });
                }
            }, React.createElement('div', { className: 'modal-text' }, "\u8FD9\u91CC\u662F\u8BF4\u660E\u6587\u6848\uFF0C\u8FD9\u91CC\u662F\u8BF4\u660E\u6587\u6848\uFF0C\u8FD9\u91CC\u662F\u8BF4\u660E\u6587\u6848\uFF0C\u8FD9\u91CC\u662F\u8BF4\u660E\u6587\u6848\uFF0C\u8FD9\u91CC\u662F\u8BF4\u660E\u6587\u6848\uFF0C\u8FD9\u91CC\u662F\u8BF4\u660E\u6587\u6848\uFF0C\u8FD9\u91CC\u662F\u8BF4\u660E\u6587\u6848\uFF0C\u8FD9\u91CC\u662F\u8BF4\u660E\u6587\u6848\uFF0C\u8FD9\u91CC\u662F\u8BF4\u660E\u6587\u6848\uFF0C\u8FD9\u91CC\u662F\u8BF4\u660E\u6587\u6848\uFF0C\u8FD9\u91CC\u662F\u8BF4\u660E\u6587\u6848\uFF0C\u8FD9\u91CC\u662F\u8BF4\u660E\u6587\u6848\uFF0C\u8FD9\u91CC\u662F\u8BF4\u660E\u6587\u6848\uFF0C\u8FD9\u91CC\u662F\u8BF4\u660E\u6587\u6848\uFF0C\u8FD9\u91CC\u662F\u8BF4\u660E\u6587\u6848\uFF0C\u8FD9\u91CC\u662F\u8BF4\u660E\u6587\u6848\uFF0C\u8FD9\u91CC\u662F\u8BF4\u660E\u6587\u6848\uFF0C\u8FD9\u91CC\u662F\u8BF4\u660E\u6587\u6848\uFF0C\u8FD9\u91CC\u662F\u8BF4\u660E\u6587\u6848\uFF0C\u8FD9\u91CC\u662F\u8BF4\u660E\u6587\u6848\uFF0C\u8FD9\u91CC\u662F\u8BF4\u660E\u6587\u6848\uFF0C\u8FD9\u91CC\u662F\u8BF4\u660E\u6587\u6848\uFF0C\u8FD9\u91CC\u662F\u8BF4\u660E\u6587\u6848\uFF0C\u8FD9\u91CC\u662F\u8BF4\u660E\u6587\u6848\uFF0C\u8FD9\u91CC\u662F\u8BF4\u660E\u6587\u6848\uFF0C\u8FD9\u91CC\u662F\u8BF4\u660E\u6587\u6848\uFF0C\u8FD9\u91CC\u662F\u8BF4\u660E\u6587\u6848\uFF0C\u8FD9\u91CC\u662F\u8BF4\u660E\u6587\u6848\uFF0C\u8FD9\u91CC\u662F\u8BF4\u660E\u6587\u6848\uFF0C\u8FD9\u91CC\u662F\u8BF4\u660E\u6587\u6848\uFF0C\u8FD9\u91CC\u662F\u8BF4\u660E\u6587\u6848\uFF0C\u8FD9\u91CC\u662F\u8BF4\u660E\u6587\u6848\uFF0C\u8FD9\u91CC\u662F\u8BF4\u660E\u6587\u6848\uFF0C\u8FD9\u91CC\u662F\u8BF4\u660E\u6587\u6848\uFF0C\u8FD9\u91CC\u662F\u8BF4\u660E\u6587\u6848\uFF0C\u8FD9\u91CC\u662F\u8BF4\u660E\u6587\u6848\uFF0C\u8FD9\u91CC\u662F\u8BF4\u660E\u6587\u6848\uFF0C\u8FD9\u91CC\u662F\u8BF4\u660E\u6587\u6848\uFF0C\u8FD9\u91CC\u662F\u8BF4\u660E\u6587\u6848\uFF0C\u8FD9\u91CC\u662F\u8BF4\u660E\u6587\u6848\uFF0C\u8FD9\u91CC\u662F\u8BF4\u660E\u6587\u6848\uFF0C\u8FD9\u91CC\u662F\u8BF4\u660E\u6587\u6848\uFF0C\u8FD9\u91CC\u662F\u8BF4\u660E\u6587\u6848\uFF0C\u8FD9\u91CC\u662F\u8BF4\u660E\u6587\u6848\uFF0C\u8FD9\u91CC\u662F\u8BF4\u660E\u6587\u6848\uFF0C\u8FD9\u91CC\u662F\u8BF4\u660E\u6587\u6848\uFF0C\u8FD9\u91CC\u662F\u8BF4\u660E\u6587\u6848\uFF0C\u8FD9\u91CC\u662F\u8BF4\u660E\u6587\u6848\uFF0C\u8FD9\u91CC\u662F\u8BF4\u660E\u6587\u6848\uFF0C\u8FD9\u91CC\u662F\u8BF4\u660E\u6587\u6848\uFF0C\u8FD9\u91CC\u662F\u8BF4\u660E\u6587\u6848\uFF0C\u8FD9\u91CC\u662F\u8BF4\u660E\u6587\u6848\uFF0C\u8FD9\u91CC\u662F\u8BF4\u660E\u6587\u6848\uFF0C\u8FD9\u91CC\u662F\u8BF4\u660E\u6587\u6848\uFF0C\u8FD9\u91CC\u662F\u8BF4\u660E\u6587\u6848\uFF0C\u8FD9\u91CC\u662F\u8BF4\u660E\u6587\u6848\uFF0C\u8FD9\u91CC\u662F\u8BF4\u660E\u6587\u6848\uFF0C\u8FD9\u91CC\u662F\u8BF4\u660E\u6587\u6848\uFF0C\u8FD9\u91CC\u662F\u8BF4\u660E\u6587\u6848\uFF0C\u8FD9\u91CC\u662F\u8BF4\u660E\u6587\u6848")), React.createElement(Button, { onClick: function onClick() {
                    _this2.openBScrollDialog();
                } }, "\u6253\u5F00\u5168\u5C4F\u6A21\u6001\u6846(BSCroll)"), this.state.visible2 && React.createElement(FullModal, {
                visible: this.state.visible2,
                title: "\u8FD9\u662F\u4E00\u4E2A\u6807\u9898",
                isUseBScroll: true,
                closeCallback: function closeCallback() {
                    _this2.setState({ visible2: false });
                },
                BScrollInitCallback: function BScrollInitCallback(BScroll) {
                    console.log(BScroll);
                }
            }, React.createElement('div', { className: 'modal-text' }, "\u8FD9\u91CC\u662F\u8BF4\u660E\u6587\u6848\uFF0C\u8FD9\u91CC\u662F\u8BF4\u660E\u6587\u6848\uFF0C\u8FD9\u91CC\u662F\u8BF4\u660E\u6587\u6848\uFF0C\u8FD9\u91CC\u662F\u8BF4\u660E\u6587\u6848\uFF0C\u8FD9\u91CC\u662F\u8BF4\u660E\u6587\u6848\uFF0C\u8FD9\u91CC\u662F\u8BF4\u660E\u6587\u6848\uFF0C\u8FD9\u91CC\u662F\u8BF4\u660E\u6587\u6848\uFF0C\u8FD9\u91CC\u662F\u8BF4\u660E\u6587\u6848\uFF0C\u8FD9\u91CC\u662F\u8BF4\u660E\u6587\u6848\uFF0C\u8FD9\u91CC\u662F\u8BF4\u660E\u6587\u6848\uFF0C\u8FD9\u91CC\u662F\u8BF4\u660E\u6587\u6848\uFF0C\u8FD9\u91CC\u662F\u8BF4\u660E\u6587\u6848\uFF0C\u8FD9\u91CC\u662F\u8BF4\u660E\u6587\u6848\uFF0C\u8FD9\u91CC\u662F\u8BF4\u660E\u6587\u6848\uFF0C\u8FD9\u91CC\u662F\u8BF4\u660E\u6587\u6848\uFF0C\u8FD9\u91CC\u662F\u8BF4\u660E\u6587\u6848\uFF0C\u8FD9\u91CC\u662F\u8BF4\u660E\u6587\u6848\uFF0C\u8FD9\u91CC\u662F\u8BF4\u660E\u6587\u6848\uFF0C\u8FD9\u91CC\u662F\u8BF4\u660E\u6587\u6848\uFF0C\u8FD9\u91CC\u662F\u8BF4\u660E\u6587\u6848\uFF0C\u8FD9\u91CC\u662F\u8BF4\u660E\u6587\u6848\uFF0C\u8FD9\u91CC\u662F\u8BF4\u660E\u6587\u6848\uFF0C\u8FD9\u91CC\u662F\u8BF4\u660E\u6587\u6848\uFF0C\u8FD9\u91CC\u662F\u8BF4\u660E\u6587\u6848\uFF0C\u8FD9\u91CC\u662F\u8BF4\u660E\u6587\u6848\uFF0C\u8FD9\u91CC\u662F\u8BF4\u660E\u6587\u6848\uFF0C\u8FD9\u91CC\u662F\u8BF4\u660E\u6587\u6848\uFF0C\u8FD9\u91CC\u662F\u8BF4\u660E\u6587\u6848\uFF0C\u8FD9\u91CC\u662F\u8BF4\u660E\u6587\u6848\uFF0C\u8FD9\u91CC\u662F\u8BF4\u660E\u6587\u6848\uFF0C\u8FD9\u91CC\u662F\u8BF4\u660E\u6587\u6848\uFF0C\u8FD9\u91CC\u662F\u8BF4\u660E\u6587\u6848\uFF0C\u8FD9\u91CC\u662F\u8BF4\u660E\u6587\u6848\uFF0C\u8FD9\u91CC\u662F\u8BF4\u660E\u6587\u6848\uFF0C\u8FD9\u91CC\u662F\u8BF4\u660E\u6587\u6848\uFF0C\u8FD9\u91CC\u662F\u8BF4\u660E\u6587\u6848\uFF0C\u8FD9\u91CC\u662F\u8BF4\u660E\u6587\u6848\uFF0C\u8FD9\u91CC\u662F\u8BF4\u660E\u6587\u6848\uFF0C\u8FD9\u91CC\u662F\u8BF4\u660E\u6587\u6848\uFF0C\u8FD9\u91CC\u662F\u8BF4\u660E\u6587\u6848\uFF0C\u8FD9\u91CC\u662F\u8BF4\u660E\u6587\u6848\uFF0C\u8FD9\u91CC\u662F\u8BF4\u660E\u6587\u6848\uFF0C\u8FD9\u91CC\u662F\u8BF4\u660E\u6587\u6848\uFF0C\u8FD9\u91CC\u662F\u8BF4\u660E\u6587\u6848\uFF0C\u8FD9\u91CC\u662F\u8BF4\u660E\u6587\u6848\uFF0C\u8FD9\u91CC\u662F\u8BF4\u660E\u6587\u6848\uFF0C\u8FD9\u91CC\u662F\u8BF4\u660E\u6587\u6848\uFF0C\u8FD9\u91CC\u662F\u8BF4\u660E\u6587\u6848\uFF0C\u8FD9\u91CC\u662F\u8BF4\u660E\u6587\u6848\uFF0C\u8FD9\u91CC\u662F\u8BF4\u660E\u6587\u6848\uFF0C\u8FD9\u91CC\u662F\u8BF4\u660E\u6587\u6848\uFF0C\u8FD9\u91CC\u662F\u8BF4\u660E\u6587\u6848\uFF0C\u8FD9\u91CC\u662F\u8BF4\u660E\u6587\u6848\uFF0C\u8FD9\u91CC\u662F\u8BF4\u660E\u6587\u6848\uFF0C\u8FD9\u91CC\u662F\u8BF4\u660E\u6587\u6848\uFF0C\u8FD9\u91CC\u662F\u8BF4\u660E\u6587\u6848\uFF0C\u8FD9\u91CC\u662F\u8BF4\u660E\u6587\u6848\uFF0C\u8FD9\u91CC\u662F\u8BF4\u660E\u6587\u6848\uFF0C\u8FD9\u91CC\u662F\u8BF4\u660E\u6587\u6848\uFF0C\u8FD9\u91CC\u662F\u8BF4\u660E\u6587\u6848"))));
        }
    }]);

    return App;
}(Component);

ReactDOM.render(React.createElement(App, null), document.getElementById('root'));