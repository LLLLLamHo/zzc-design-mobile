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
    Animate = _zds.Animate,
    Button = _zds.Button;

var App = function (_Component) {
    _inherits(App, _Component);

    function App(props) {
        _classCallCheck(this, App);

        var _this = _possibleConstructorReturn(this, (App.__proto__ || (0, _getPrototypeOf2.default)(App)).call(this, props));

        _this.state = {
            visible: false,
            classname: 'chang-box'
        };
        return _this;
    }

    _createClass(App, [{
        key: 'showAnimate',
        value: function showAnimate() {
            var _this2 = this;

            this.setState({
                visible: true
            }, function () {
                _this2.setState({
                    classname: _this2.div.className
                });
            });
        }
    }, {
        key: 'closeCallback',
        value: function closeCallback(type) {
            var _this3 = this;

            if (type == 'enter') {
                this.setState({
                    visible: false
                }, function () {
                    _this3.setState({
                        classname: _this3.div.className
                    });
                });
            } else {
                this.setState({
                    classname: this.div.className
                });
            }
        }
    }, {
        key: 'getElement',
        value: function getElement(div) {
            this.div = div;
        }
    }, {
        key: 'render',
        value: function render() {
            var _this4 = this;

            var _state = this.state,
                visible = _state.visible,
                classname = _state.classname;

            return React.createElement('div', { className: 'zzc-demo' }, React.createElement('div', { className: 'zzc-demo-header' }, React.createElement('h1', { className: 'zzc-demo-title' }, "Animate \u52A8\u753B")), React.createElement('div', { className: 'zzc-demo-body' }, React.createElement(Button, { onClick: function onClick() {
                    _this4.showAnimate();
                } }, "\u70B9\u51FB\u89E6\u53D1\u52A8\u753B"), React.createElement('p', { className: 'cls' }, "\u5F53\u524DclassName\uFF1A", classname), React.createElement(Animate, {
                visible: visible,
                animationName: {
                    enter: 'change-enter',
                    enterActive: 'change-enter-active',
                    leave: 'change-leave',
                    leaveActive: 'change-leave-active'
                },
                onEnd: function onEnd(type) {
                    _this4.closeCallback(type);
                }
            }, React.createElement('div', {
                ref: function ref(div) {
                    _this4.getElement(div);
                },
                style: {
                    background: visible ? 'blue' : '#fff'
                },
                className: 'change-box'
            }, "\u52A8\u753B"))));
        }
    }]);

    return App;
}(Component);

ReactDOM.render(React.createElement(App, null), document.getElementById('root'));