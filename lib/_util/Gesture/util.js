'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.calcMutliFingerStatus = calcMutliFingerStatus;
exports.calcMoveStatus = calcMoveStatus;
exports.getMovingDirection = getMovingDirection;
exports.calcRotation = calcRotation;
exports.getEventName = getEventName;
exports.getDirectionEventName = getDirectionEventName;
exports.shouldTriggerDirection = shouldTriggerDirection;
exports.shouldTriggerSwipe = shouldTriggerSwipe;

var _config = require('./config');

// 计算缩放比率
function _calcTriangleDistance(x, y) {
    return Math.sqrt(x * x + y * y);
}
// 计算角度
function _calcAngle(x, y) {
    var radian = Math.atan2(y, x);
    return 180 / (Math.PI / radian);
}
// 计算手指状态
function calcMutliFingerStatus(touches) {
    // 两只手指
    if (touches.length >= 2) {
        var _touches$ = touches[0],
            x1 = _touches$.x,
            y1 = _touches$.y;
        var _touches$2 = touches[1],
            x2 = _touches$2.x,
            y2 = _touches$2.y;

        var deltaX = x2 - x1;
        var deltaY = y2 - y1;
        return {
            x: deltaX,
            y: deltaY,
            z: _calcTriangleDistance(deltaX, deltaY),
            angle: _calcAngle(deltaX, deltaY)
        };
    }
    return null;
}
// 计算move时的状态
function calcMoveStatus(startTouches, touches, time) {
    var _startTouches$ = startTouches[0],
        x1 = _startTouches$.x,
        y1 = _startTouches$.y;
    var _touches$3 = touches[0],
        x2 = _touches$3.x,
        y2 = _touches$3.y;

    var deltaX = x2 - x1;
    var deltaY = y2 - y1;
    var deltaZ = _calcTriangleDistance(deltaX, deltaY);
    return {
        x: deltaX,
        y: deltaY,
        z: deltaZ,
        time: time,
        velocity: deltaZ / time,
        angle: _calcAngle(deltaX, deltaY)
    };
}
// 获取当前方向
function getMovingDirection(preTouches, touches) {
    // 根据当前的xy值和上一个xy值进行计算方向
    var x1 = preTouches.x,
        y1 = preTouches.y;
    var x2 = touches.x,
        y2 = touches.y;

    var deltaX = x2 - x1;
    var deltaY = y2 - y1;
    // 没有移动
    if (deltaX === 0 && deltaY === 0) {
        return _config.DIRECTION_NONE;
    }
    // 根据变化的数值少决定是横向移动还是竖向移动
    if (Math.abs(deltaX) >= Math.abs(deltaY)) {
        return deltaX < 0 ? _config.DIRECTION_LEFT : _config.DIRECTION_RIGHT;
    }
    return deltaY < 0 ? _config.DIRECTION_UP : _config.DIRECTION_DOWN;
}
// 计算旋转角度
function calcRotation(startMutliFingerStatus, mutliFingerStatus) {
    var startAngle = startMutliFingerStatus.angle;
    var angle = mutliFingerStatus.angle;

    return angle - startAngle;
}
// 拼接事件名称 将move转为Move
function getEventName(prefix, status) {
    return prefix + status[0].toUpperCase() + status.slice(1);
}
// 根据方向标识返回对应的方向事件名称
function getDirectionEventName(direction) {
    var name = void 0;
    switch (direction) {
        case _config.DIRECTION_NONE:
            break;
        case _config.DIRECTION_LEFT:
            name = 'left';
            break;
        case _config.DIRECTION_RIGHT:
            name = 'right';
            break;
        case _config.DIRECTION_UP:
            name = 'up';
            break;
        case _config.DIRECTION_DOWN:
            name = 'down';
            break;
        default:
    }
    return name;
}
// 查看当前方向配置是否满足当前触发的方向
function shouldTriggerDirection(direction, directionSetting) {
    if (directionSetting & direction) {
        return true;
    }
    return false;
}
// 计算是否触发swiper
function shouldTriggerSwipe(delta, velocity) {
    return Math.abs(delta) >= _config.SWIPE.threshold && Math.abs(velocity) > _config.SWIPE.velocity;
}