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
    Dialog = _zds.Dialog,
    Button = _zds.Button;

var App = function (_Component) {
    _inherits(App, _Component);

    function App(props) {
        _classCallCheck(this, App);

        var _this = _possibleConstructorReturn(this, (App.__proto__ || (0, _getPrototypeOf2.default)(App)).call(this, props));

        _this.state = {
            visible: false,
            visible2: false,
            visible3: false,
            visible4: false,
            visible5: false,
            visible6: false,
            visible7: false
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
        key: 'openDialog',
        value: function openDialog() {
            this.setState({
                visible2: true
            });
        }
    }, {
        key: 'openNoMaskDialog',
        value: function openNoMaskDialog() {
            this.setState({
                visible5: true
            });
        }
    }, {
        key: 'openAnDialog',
        value: function openAnDialog() {
            this.setState({
                visible3: true,
                visible4: true
            });
        }
    }, {
        key: 'openCustomAnDialog',
        value: function openCustomAnDialog() {
            this.setState({
                visible6: true,
                visible7: true
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return React.createElement('div', { className: 'zzc-demo' }, React.createElement('div', { className: 'zzc-demo-header' }, React.createElement('h1', { className: 'zzc-demo-title' }, "Dialog \u5BF9\u8BDD\u6846")), React.createElement('div', { className: 'zzc-demo-body' }, React.createElement(Button, { onClick: function onClick() {
                    _this2.openDefaultDialog();
                } }, "\u9ED8\u8BA4dialog"), this.state.visible && React.createElement(Dialog, {
                visible: this.state.visible,
                maskClose: true,
                closeCallback: function closeCallback() {
                    _this2.setState({ visible: false });
                }
            }, React.createElement('div', { className: 'modal-text' }, "\u8FD9\u662F\u4E00\u4E2A\u6587\u6848...")), React.createElement(Button, { onClick: function onClick() {
                    _this2.openDialog();
                } }, "\u5E26title\u548Cfooter\u7684dialog"), this.state.visible2 && React.createElement(Dialog, {
                title: React.createElement('div', null, '123123123'),
                footer: React.createElement('div', null, React.createElement(Button, { onClick: function onClick() {
                        _this2.setState({ visible2: false });
                    } }, "\u5173\u95ED")),
                visible: this.state.visible2,
                closeCallback: function closeCallback() {
                    _this2.setState({ visible2: false });
                }
            }, React.createElement('div', { className: 'modal-text' }, "...\u8FD9\u662F\u4E00\u4E2A\u6587\u6848...")), React.createElement(Button, { onClick: function onClick() {
                    _this2.openNoMaskDialog();
                } }, "\u900F\u660E\u80CC\u666F\u7684dialog"), this.state.visible5 && React.createElement(Dialog, {
                title: React.createElement('div', null, '123123123'),
                className: 'black',
                transparent: true,
                footer: React.createElement('div', null, React.createElement(Button, { onClick: function onClick() {
                        _this2.setState({ visible5: false });
                    } }, "\u5173\u95ED")),
                visible: this.state.visible5,
                closeCallback: function closeCallback() {
                    _this2.setState({ visible5: false });
                }
            }, React.createElement('div', { className: 'modal-text' }, "...\u8FD9\u662F\u4E00\u4E2A\u6587\u6848...")), React.createElement(Button, { onClick: function onClick() {
                    _this2.openAnDialog();
                } }, "\u5E26\u52A8\u753B\u7684dialog"), this.state.visible4 && React.createElement(Dialog, {
                maskTransitionName: 'zds-fade',
                transitionName: '',
                maskClose: true,
                title: React.createElement('div', null, '123123123'),
                footer: React.createElement('div', null, React.createElement(Button, { onClick: function onClick() {
                        _this2.setState({ visible3: false });
                    } }, "\u5173\u95ED")),
                visible: this.state.visible3,
                closeCallback: function closeCallback() {
                    _this2.setState({ visible4: false });
                }
            }, React.createElement('div', { className: 'modal-text' }, "...\u8FD9\u662F\u4E00\u4E2A\u6587\u6848...")), React.createElement(Button, { onClick: function onClick() {
                    _this2.openCustomAnDialog();
                } }, "\u5E26\u81EA\u5B9A\u4E49\u52A8\u753B\u7684dialog"), this.state.visible7 && React.createElement(Dialog, {
                className: 'custom-dialog',
                maskTransitionName: 'zds-fade',
                transitionName: 'custom-an',
                boxClassName: 'custom-dialog-box',
                maskClose: true,
                title: React.createElement('div', null, "\u81EA\u5B9A\u4E49\u52A8\u753B"),
                footer: React.createElement('div', null, React.createElement(Button, { onClick: function onClick() {
                        _this2.setState({ visible6: false });
                    } }, "\u5173\u95ED")),
                visible: this.state.visible6,
                closeCallback: function closeCallback() {
                    _this2.setState({ visible7: false });
                }
            }, React.createElement('div', { className: 'modal-text' }, "...\u8FD9\u662F\u4E00\u4E2A\u6587\u6848..."))));
        }
    }]);

    return App;
}(Component);

ReactDOM.render(React.createElement(App, null), document.getElementById('root'));