'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

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

var _util = require('./util');

var _config = require('./config');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var directionMap = {
    all: _config.DIRECTION_ALL,
    vertical: _config.DIRECTION_VERTICAL,
    horizontal: _config.DIRECTION_HORIZONTAL
};

var Gesture = function (_React$PureComponent) {
    (0, _inherits3.default)(Gesture, _React$PureComponent);

    function Gesture(props) {
        (0, _classCallCheck3.default)(this, Gesture);

        // 单手指手势事件-结束
        var _this = (0, _possibleConstructorReturn3.default)(this, (Gesture.__proto__ || (0, _getPrototypeOf2.default)(Gesture)).call(this, props));

        _this.doSingleTouchEnd = function (status) {
            var _this$gesture = _this.gesture,
                moveStatus = _this$gesture.moveStatus,
                pinch = _this$gesture.pinch,
                rotate = _this$gesture.rotate,
                press = _this$gesture.press,
                pan = _this$gesture.pan,
                direction = _this$gesture.direction;

            if (pinch || rotate) {
                return;
            }
            if (moveStatus) {
                var z = moveStatus.z,
                    velocity = moveStatus.velocity;
                // 计算是否符合滑动

                var swipe = (0, _util.shouldTriggerSwipe)(z, velocity);
                _this.setGestureState({
                    swipe: swipe
                });
                if (pan) {
                    // pan need end, it's a process
                    // sometimes, start with pan left, but end with pan right....
                    _this.triggerAllowEvent('onPan', status);
                }
                if (swipe) {
                    var directionEvName = (0, _util.getDirectionEventName)(direction);
                    // swipe just need a direction, it's a endpoint
                    _this.triggerAllowEvent('onSwipe', directionEvName);
                    return;
                }
            }
            // 长按放手事件
            if (press) {
                _this.triggerEvent('onPressUp');
                return;
            }
            // tap事件，点击down和up之间少于251毫秒
            _this.triggerEvent('onTap');
        };
        _this.directionSetting = directionMap[props.direction]; // 初始化当前方向设定
        return _this;
    }

    (0, _createClass3.default)(Gesture, [{
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            this.cleanPressTimer();
        }
    }, {
        key: 'now',
        value: function now() {
            return new Date().getTime();
        }
    }, {
        key: 'getGestureState',
        value: function getGestureState() {
            if (!this.gesture) {
                return this.gesture;
            }
            return (0, _assign2.default)({}, this.gesture);
        }
    }, {
        key: 'initGestureStatus',
        value: function initGestureStatus(e) {
            var touches = this.getTouches(e);
            var now = this.now();
            var _props = this.props,
                enablePinch = _props.enablePinch,
                enableRotate = _props.enableRotate;
            // 当没有开启选择和缩放手势时候不去计算当前的手势状态

            var mutliFingerStatus = void 0;
            if (touches.length > 1 && (enablePinch || enableRotate)) {
                mutliFingerStatus = (0, _util.calcMutliFingerStatus)(touches);
            }
            this.setGestureState({
                touches: touches,
                time: now,
                startTouches: touches,
                startTime: now,
                startMutliFingerStatus: mutliFingerStatus,
                mutliFingerStatus: mutliFingerStatus
            });
        }
    }, {
        key: 'clearGestureStatus',
        value: function clearGestureStatus() {
            delete this.gesture;
        }
    }, {
        key: 'updateGestureStatus',
        value: function updateGestureStatus(e) {
            var time = this.now();
            // 更新时间
            this.setGestureState({
                time: time
            });
            if (!e.touches || !e.touches.length) {
                return;
            }
            var _gesture = this.gesture,
                startTime = _gesture.startTime,
                startTouches = _gesture.startTouches,
                pinch = _gesture.pinch,
                rotate = _gesture.rotate;

            var touches = this.getTouches(e);
            var moveStatus = (0, _util.calcMoveStatus)(startTouches, touches, time - startTime);
            var mutliFingerStatus = void 0;
            if (pinch || rotate) {
                mutliFingerStatus = (0, _util.calcMutliFingerStatus)(touches);
            }
            this.setGestureState({
                /* update status snapshot */
                touches: touches,
                mutliFingerStatus: mutliFingerStatus,
                /* update duration status */
                moveStatus: moveStatus
            });
        }
    }, {
        key: 'setGestureState',
        value: function setGestureState(params) {
            if (!this.gesture) {
                this.gesture = {};
            }
            // 记录上一个touches信息
            if (this.gesture.touches) {
                this.gesture.preTouches = this.gesture.touches;
            }
            this.gesture = (0, _assign2.default)({}, this.gesture, params);
        }
    }, {
        key: 'getTouches',
        value: function getTouches(e) {
            return Array.prototype.slice.call(e.touches).map(function (item) {
                return {
                    x: item.screenX,
                    y: item.screenY
                };
            });
        }
        // 触发主事件，例如：onPan

    }, {
        key: 'triggerEvent',
        value: function triggerEvent(name) {
            var cb = this.props[name];
            if (typeof cb === 'function') {
                for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                    args[_key - 1] = arguments[_key];
                }

                // always give user gesture object as first params first
                cb.apply(undefined, [this.getGestureState()].concat(args));
            }
        }
        // 触发子事件，例如：onPanStart

    }, {
        key: 'triggerSubEvent',
        value: function triggerSubEvent(mainEventName, eventStatus) {
            if (eventStatus) {
                var subEventName = (0, _util.getEventName)(mainEventName, eventStatus);

                for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
                    args[_key2 - 2] = arguments[_key2];
                }

                this.triggerEvent.apply(this, [subEventName].concat(args));
            }
        }
        // 合并触发主、子事件

    }, {
        key: 'triggerCombineEvent',
        value: function triggerCombineEvent(mainEventName, eventStatus) {
            for (var _len3 = arguments.length, args = Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
                args[_key3 - 2] = arguments[_key3];
            }

            this.triggerEvent.apply(this, [mainEventName].concat(args));
            this.triggerSubEvent.apply(this, [mainEventName, eventStatus].concat(args));
        }
        // 缩放事件

    }, {
        key: 'triggerPinchEvent',
        value: function triggerPinchEvent(mainEventName, eventStatus) {
            var scale = this.gesture.scale;

            if (eventStatus === 'move' && typeof scale === 'number') {
                // 特殊处理两个事件，当缩放比大于1的时候触发onPinchOut，否则触发onPinchIn
                if (scale > 1) {
                    this.triggerEvent('onPinchOut');
                }
                if (scale < 1) {
                    this.triggerEvent('onPinchIn');
                }
            }
            // 继续触发常规事件

            for (var _len4 = arguments.length, args = Array(_len4 > 2 ? _len4 - 2 : 0), _key4 = 2; _key4 < _len4; _key4++) {
                args[_key4 - 2] = arguments[_key4];
            }

            this.triggerCombineEvent.apply(this, [mainEventName, eventStatus].concat(args));
        }
        // 检查是否多手指手势-开始

    }, {
        key: 'checkIfMultiTouchStart',
        value: function checkIfMultiTouchStart() {
            var _props2 = this.props,
                enablePinch = _props2.enablePinch,
                enableRotate = _props2.enableRotate;
            var touches = this.gesture.touches;

            if (touches.length > 1 && (enablePinch || enableRotate)) {
                // 初始化缩放
                if (enablePinch) {
                    var startMutliFingerStatus = (0, _util.calcMutliFingerStatus)(touches);
                    this.setGestureState({
                        startMutliFingerStatus: startMutliFingerStatus,
                        pinch: true,
                        scale: 1
                    });
                    this.triggerCombineEvent('onPinch', 'start');
                }
                // 初始化旋转
                if (enableRotate) {
                    this.setGestureState({
                        rotate: true,
                        rotation: 0
                    });
                    this.triggerCombineEvent('onRotate', 'start');
                }
            }
        }
        // 检查多手指手势-移动

    }, {
        key: 'checkIfMultiTouchMove',
        value: function checkIfMultiTouchMove() {
            var _gesture2 = this.gesture,
                pinch = _gesture2.pinch,
                rotate = _gesture2.rotate,
                touches = _gesture2.touches,
                startMutliFingerStatus = _gesture2.startMutliFingerStatus,
                mutliFingerStatus = _gesture2.mutliFingerStatus;
            // 一开始时不是双手指触发不进行任何逻辑

            if (!pinch && !rotate) {
                return;
            }
            // 一开是双手指，移动单手指
            if (touches.length < 2) {
                this.setGestureState({
                    pinch: false,
                    rotate: false
                });
                pinch && this.triggerCombineEvent('onPinch', 'cancel');
                rotate && this.triggerCombineEvent('onRotate', 'cancel');
                return;
            }
            // 缩放
            if (pinch) {
                // 缩放比例
                var scale = mutliFingerStatus.z / startMutliFingerStatus.z;
                this.setGestureState({
                    scale: scale
                });
                this.triggerPinchEvent('onPinch', 'move');
            }
            // 旋转
            if (rotate) {
                var rotation = (0, _util.calcRotation)(startMutliFingerStatus, mutliFingerStatus);
                this.setGestureState({
                    rotation: rotation
                });
                this.triggerCombineEvent('onRotate', 'move');
            }
        }
        // 检查单手指手势-移动

    }, {
        key: 'checkIfSingleTouchMove',
        value: function checkIfSingleTouchMove() {
            var _gesture3 = this.gesture,
                pan = _gesture3.pan,
                touches = _gesture3.touches,
                moveStatus = _gesture3.moveStatus,
                preTouches = _gesture3.preTouches;
            // 一旦移动中的手指超过两只则取消pan事件

            if (touches.length > 1) {
                this.setGestureState({
                    pan: false
                });
                pan && this.triggerCombineEvent('onPan', 'cancel');
                return;
            }
            this.event.preventDefault();
            if (moveStatus) {
                var direction = (0, _util.getMovingDirection)(preTouches[0], touches[0]);
                this.setGestureState({
                    direction: direction
                });
                var eventName = (0, _util.getDirectionEventName)(direction);
                // 检查当前允许方向
                if (!this.allowGesture()) {
                    return;
                }
                // 如果start并不满足pan的条件，则当这次move未start处理
                if (!pan) {
                    this.triggerCombineEvent('onPan', 'start');
                    this.setGestureState({
                        pan: true
                    });
                } else {
                    this.triggerCombineEvent('onPan', eventName);
                    this.triggerSubEvent('onPan', 'move');
                }
            }
        }
        // 检查多手指手势事件-结束

    }, {
        key: 'checkIfMultiTouchEnd',
        value: function checkIfMultiTouchEnd(status) {
            var _gesture4 = this.gesture,
                pinch = _gesture4.pinch,
                rotate = _gesture4.rotate;

            if (pinch) {
                this.triggerCombineEvent('onPinch', status);
            }
            if (rotate) {
                this.triggerCombineEvent('onRotate', status);
            }
        }
        // 记录长按

    }, {
        key: 'initPressTimer',
        value: function initPressTimer() {
            var _this2 = this;

            this.cleanPressTimer();
            this.pressTimer = setTimeout(function () {
                _this2.setGestureState({
                    press: true
                });
                _this2.triggerEvent('onPress');
                _this2.pressTimer = null;
            }, _config.PRESS.time);
        }
        // 清楚长按

    }, {
        key: 'cleanPressTimer',
        value: function cleanPressTimer() {
            this.pressTimer && clearTimeout(this.pressTimer);
        }
    }, {
        key: 'triggerAllowEvent',
        value: function triggerAllowEvent(type, status) {
            if (this.allowGesture()) {
                this.triggerCombineEvent(type, status);
            } else {
                this.triggerSubEvent(type, status);
            }
        }
    }, {
        key: '_handleTouchStart',
        value: function _handleTouchStart(e) {
            // 清空状态
            this.clearGestureStatus();
            this.event = e;
            if (e.touches.length > 1) {
                e.preventDefault();
            }
            // 初始化手势状态
            this.initGestureStatus(e);
            // 长按
            this.initPressTimer();
            // 检查多手指手势
            this.checkIfMultiTouchStart();
        }
    }, {
        key: '_handleTouchMove',
        value: function _handleTouchMove(e) {
            // 清楚长按计时
            this.cleanPressTimer();
            this.event = e;
            if (!this.gesture) {
                return;
            }
            // 更新手势状态
            this.updateGestureStatus(e);
            this.checkIfSingleTouchMove();
            this.checkIfMultiTouchMove();
            e.stopPropagation();
            e.preventDefault();
        }
    }, {
        key: '_handleTouchCancel',
        value: function _handleTouchCancel(e) {
            this.cleanPressTimer();
            this.event = e;
            if (e.touches.length > 1) {
                e.preventDefault();
            }
            this.updateGestureStatus(e);
            this.doSingleTouchEnd('cancel');
            this.checkIfMultiTouchEnd('cancel');
        }
    }, {
        key: '_handleTouchEnd',
        value: function _handleTouchEnd(e) {
            this.cleanPressTimer();
            this.event = e;
            if (e.touches.length > 1) {
                e.preventDefault();
            }
            this.updateGestureStatus(e);
            this.doSingleTouchEnd('end');
            this.checkIfMultiTouchEnd('end');
        }
        // 检查是否满足当前配置的方向条件

    }, {
        key: 'allowGesture',
        value: function allowGesture() {
            return (0, _util.shouldTriggerDirection)(this.gesture.direction, this.directionSetting);
        }
        // 设置touchAction

    }, {
        key: 'getTouchAction',
        value: function getTouchAction() {
            var _props3 = this.props,
                enablePinch = _props3.enablePinch,
                enableRotate = _props3.enableRotate;
            var directionSetting = this.directionSetting;

            if (enablePinch || enableRotate || directionSetting === _config.DIRECTION_ALL) {
                return 'pan-x pan-y';
            }
            if (directionSetting === _config.DIRECTION_VERTICAL) {
                return 'pan-x';
            }
            if (directionSetting === _config.DIRECTION_HORIZONTAL) {
                return 'pan-y';
            }
            return 'auto';
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            var children = this.props.children;

            var child = _react2.default.Children.only(children);
            var touchAction = this.getTouchAction();
            var events = {
                onTouchStart: function onTouchStart(e) {
                    _this3._handleTouchStart(e);
                },
                onTouchMove: function onTouchMove(e) {
                    _this3._handleTouchMove(e);
                },
                onTouchCancel: function onTouchCancel(e) {
                    _this3._handleTouchCancel(e);
                },
                onTouchEnd: function onTouchEnd(e) {
                    _this3._handleTouchEnd(e);
                }
            };
            return _react2.default.cloneElement(child, (0, _assign2.default)({}, events, { style: (0, _assign2.default)({ touchAction: touchAction }, child.props.style || {}) }));
        }
    }]);
    return Gesture;
}(_react2.default.PureComponent);

exports.default = Gesture;

Gesture.defaultProps = {
    enableRotate: false,
    enablePinch: false,
    direction: 'all'
};