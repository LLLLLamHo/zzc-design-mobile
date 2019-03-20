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

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _typeof = require('../_util/typeof');

var _Event = require('../_util/Event');

var _class = require('../_util/class');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Animate = function (_React$PureComponent) {
    (0, _inherits3.default)(Animate, _React$PureComponent);

    function Animate() {
        (0, _classCallCheck3.default)(this, Animate);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Animate.__proto__ || (0, _getPrototypeOf2.default)(Animate)).apply(this, arguments));

        _this.animateStatus = null;
        return _this;
    }

    (0, _createClass3.default)(Animate, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.addAnimationEvent();
            this.runHookEvent(true);
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            // 防止重复执行动画，必须当前状态和传入参数不一样才执行动画钩子
            if (this.props.visible && this.animateStatus !== 'enter' || !this.props.visible && this.animateStatus !== 'leave') {
                this.runHookEvent(false);
            }
        }
        // 执行触发钩子事件

    }, {
        key: 'runHookEvent',
        value: function runHookEvent(isFirst) {
            if (isFirst && this.props.visible || !isFirst && this.props.visible && this.animateStatus == 'leave') {
                this.enterEvent();
            } else if (!isFirst && !this.props.visible && this.animateStatus == 'enter') {
                this.leaveEvent();
            } else if (!isFirst && this.props.visible) {
                this.enterEvent();
            }
        }
        // 绑定动画事件

    }, {
        key: 'addAnimationEvent',
        value: function addAnimationEvent() {
            var node = _reactDom2.default.findDOMNode(this);
            if ((0, _typeof.isDOM)(node)) {
                _Event.animationEvents.addEndEventListener(node, this.animationEvent, this);
            }
        }
        // 进入动画钩子

    }, {
        key: 'enterEvent',
        value: function enterEvent() {
            var animationName = this.props.animationName;

            var node = _reactDom2.default.findDOMNode(this);
            if ((0, _typeof.isDOM)(node)) {
                if ((0, _typeof.isObject)(animationName)) {
                    var enter = animationName.enter,
                        enterActive = animationName.enterActive,
                        leave = animationName.leave,
                        leaveActive = animationName.leaveActive;
                    // 在进行动画进入钩子之前，先确定如果存在离开钩子，先进行清除

                    (0, _class.hasClass)(node, leave) && (0, _class.removeClass)(node, leave);
                    (0, _class.hasClass)(node, leaveActive) && (0, _class.removeClass)(node, leaveActive);
                    (0, _class.addClass)(node, enter);
                    (0, _class.addClass)(node, enterActive);
                } else {
                    (0, _class.addClass)(node, animationName);
                }
                this.animateStatus = 'enter';
            }
        }
        // 离开动画钩子

    }, {
        key: 'leaveEvent',
        value: function leaveEvent() {
            var animationName = this.props.animationName;

            var node = _reactDom2.default.findDOMNode(this);
            if ((0, _typeof.isDOM)(node)) {
                if ((0, _typeof.isObject)(animationName)) {
                    var leave = animationName.leave,
                        leaveActive = animationName.leaveActive;

                    (0, _class.addClass)(node, leave);
                    (0, _class.addClass)(node, leaveActive);
                } else {
                    (0, _class.removeClass)(node, animationName);
                }
                this.animateStatus = 'leave';
            }
        }
        // 动画完成触发事件

    }, {
        key: 'animationEvent',
        value: function animationEvent(event) {
            event.stopPropagation();
            var animationName = this.props.animationName;
            var enter = animationName.enter,
                enterActive = animationName.enterActive,
                leave = animationName.leave,
                leaveActive = animationName.leaveActive;

            try {
                var node = _reactDom2.default.findDOMNode(this);
                if ((0, _typeof.isDOM)(node)) {
                    var animationType = 'enter';
                    // 当传入object会清除enter钩子，如果只是传入一个字符串，会保留class直至关闭才去掉class
                    if ((0, _typeof.isObject)(animationName)) {
                        // 当切换enter和leave速度过来会导致bug，需要判断是否会存在enter和leave的class
                        if ((0, _class.hasClass)(node, enter)) {
                            (0, _class.removeClass)(node, enter);
                            (0, _class.removeClass)(node, enterActive);
                            if ((0, _class.hasClass)(node, leave)) {
                                animationType = 'leave';
                                (0, _class.removeClass)(node, leave);
                                (0, _class.removeClass)(node, leaveActive);
                            }
                        } else {
                            animationType = 'leave';
                            (0, _class.removeClass)(node, leave);
                            (0, _class.removeClass)(node, leaveActive);
                        }
                    } else if ((0, _class.hasClass)(node, animationName) && !!this.props.visible) {
                        animationType = 'leave';
                        (0, _class.removeClass)(node, leave);
                        (0, _class.removeClass)(node, leaveActive);
                    }
                    this.props.onEnd && this.props.onEnd(animationType);
                }
            } catch (err) {
                // console.log( err );
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var children = this.props.children;

            return children;
        }
    }]);
    return Animate;
}(_react2.default.PureComponent);

exports.default = Animate;

Animate.defaultProps = {
    animationName: null,
    visible: false,
    onEnd: function onEnd() {}
};