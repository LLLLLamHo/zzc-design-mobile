import { DIRECTION_NONE, DIRECTION_LEFT, DIRECTION_RIGHT, DIRECTION_UP, DIRECTION_DOWN, SWIPE } from './config';

export declare type MutliFingerStatu = {
    x: number,
    y: number,
    z: number,
    time?: number,
    angle: number,
    velocity?: number
};

export declare type Finger = {
    x: number // e.touches[i].pageX
    y: number // e.touches[i].pageY
};


// 计算缩放比率
function _calcTriangleDistance( x: number, y: number ): number {
    return Math.sqrt( ( x * x ) + ( y * y ) );
}

// 计算角度
function _calcAngle ( x: number, y: number ): number {
    const radian = Math.atan2( y, x );
    return 180 / ( Math.PI / radian );
}

// 计算手指状态
export function calcMutliFingerStatus ( touches: any ) {
    // 两只手指
    if ( touches.length >= 2 ) {
        const { x: x1, y: y1 } = touches[0];
        const { x: x2, y: y2 } = touches[1];
        const deltaX = x2 - x1;
        const deltaY = y2 - y1;
        return {
            x: deltaX,
            y: deltaY,
            z: _calcTriangleDistance( deltaX, deltaY ),
            angle: _calcAngle( deltaX, deltaY )
        };
    }
    return null;
}

// 计算move时的状态
export function calcMoveStatus( startTouches: Finger[], touches: Finger[], time: number ): MutliFingerStatu {
    const { x: x1, y: y1 } = startTouches[0];
    const { x: x2, y: y2 } = touches[0];
    const deltaX = x2 - x1;
    const deltaY = y2 - y1;
    const deltaZ = _calcTriangleDistance( deltaX, deltaY );
    return {
        x: deltaX,
        y: deltaY,
        z: deltaZ,
        time,
        velocity: deltaZ / time,
        angle: _calcAngle( deltaX, deltaY )
    };
}

// 获取当前方向
export function getMovingDirection ( preTouches: Finger, touches: Finger ): number {
    // 根据当前的xy值和上一个xy值进行计算方向
    const { x: x1, y: y1 } = preTouches;
    const { x: x2, y: y2 } = touches;
    const deltaX = x2 - x1;
    const deltaY = y2 - y1;
    // 没有移动
    if ( deltaX === 0 && deltaY === 0 ) {
        return DIRECTION_NONE;
    }
    // 根据变化的数值少决定是横向移动还是竖向移动
    if ( Math.abs( deltaX ) >= Math.abs( deltaY ) ) {
        return deltaX < 0 ? DIRECTION_LEFT : DIRECTION_RIGHT;
    }
    return deltaY < 0 ? DIRECTION_UP : DIRECTION_DOWN;
}

// 计算旋转角度
export function calcRotation( startMutliFingerStatus: MutliFingerStatu, mutliFingerStatus: MutliFingerStatu ): number {
    const { angle: startAngle } = startMutliFingerStatus;
    const { angle } = mutliFingerStatus;
    return angle - startAngle;
}

// 拼接事件名称 将move转为Move
export function getEventName( prefix: string, status: any ): string {
    return prefix + status[0].toUpperCase() + status.slice( 1 );
}

// 根据方向标识返回对应的方向事件名称
export function getDirectionEventName( direction: number ): string {
    let name;
    switch ( direction ) {
    case DIRECTION_NONE:
        break;
    case DIRECTION_LEFT:
        name = 'left';
        break;
    case DIRECTION_RIGHT:
        name = 'right';
        break;
    case DIRECTION_UP:
        name = 'up';
        break;
    case DIRECTION_DOWN:
        name = 'down';
        break;
    default:
    }
    return name;
}

// 查看当前方向配置是否满足当前触发的方向
export function shouldTriggerDirection( direction: number, directionSetting: number ): boolean {
    if ( directionSetting & direction ) {
        return true;
    }
    return false;
}

// 计算是否触发swiper
export function shouldTriggerSwipe( delta: number, velocity: number ): Boolean {
    return Math.abs( delta ) >= SWIPE.threshold && Math.abs( velocity ) > SWIPE.velocity;
}
