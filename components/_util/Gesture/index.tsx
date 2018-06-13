import React from 'react';
import { shouldTriggerDirection, calcMutliFingerStatus, calcMoveStatus, calcRotation, getMovingDirection, getDirectionEventName, getEventName, shouldTriggerSwipe } from './util';
import { PRESS, DIRECTION_ALL, DIRECTION_VERTICAL, DIRECTION_HORIZONTAL } from './config';
/*
  https://github.com/react-component/gesture/blob/master/src/index.tsx
  有需要参考这个路径添加手势
  现在只提供滑动的手势
*/

export declare type Finger = {
    x: number // e.touches[i].pageX
    y: number // e.touches[i].pageY
};

export declare type MutliFingerStatu = {
    x: number, // x轴
    y: number, // y轴
    z: number, // 比例
    time: number, // 时间
    angle: number, // 角度
    velocity: number // 速度
};

export declare type GestureHandler = ( s: IGestureStatus ) => void;

export interface GestureProps {
    children: JSX.Element,
    enableRotate?: boolean,
    enablePinch?: boolean,
    direction?: 'all' | 'vertical' | 'horizontal';

    // pinch: s.zoom
    onPinch?: GestureHandler;
    onPinchStart?: GestureHandler;
    onPinchMove?: GestureHandler;
    onPinchEnd?: GestureHandler;
    onPinchCancel?: GestureHandler;
    onPinchIn?: GestureHandler;
    onPinchOut?: GestureHandler;

    // rotate: s.angle
    onRotate?: GestureHandler;
    onRotateStart?: GestureHandler;
    onRotateMove?: GestureHandler;
    onRotateEnd?: GestureHandler;
    onRotateCancel?: GestureHandler;

    // pan: s.delta
    onPan?: GestureHandler;
    onPanStart?: GestureHandler;
    onPanMove?: GestureHandler;
    onPanEnd?: GestureHandler;
    onPanCancel?: GestureHandler;
    onPanLeft?: GestureHandler;
    onPanRight?: GestureHandler;
    onPanUp?: GestureHandler;
    onPanDown?: GestureHandler;

    // tap
    onTap?: GestureHandler;

    // long tap
    onPress?: GestureHandler;
    onPressUp?: GestureHandler;

    // swipe
    onSwipe?: GestureHandler;
    onSwipeLeft?: GestureHandler;
    onSwipeRight?: GestureHandler;
    onSwipeUp?: GestureHandler;
    onSwipeDown?: GestureHandler;
}
export interface IGestureStatus {
    touches: Finger[],
    time: number,
    mutliFingerStatus: MutliFingerStatu,
    startTouches: Finger[],
    startTime: number
    startMutliFingerStatus: MutliFingerStatu,
    preTouches: Finger[],
    moveStatus: MutliFingerStatu,
    direction: number,
    pan?: boolean,
    swipe?: boolean,
    press?: boolean,
    pinch?: boolean,
    scale?: number,
    rotate?: boolean,
    rotation?: number;
}

const directionMap = {
    all: DIRECTION_ALL,
    vertical: DIRECTION_VERTICAL,
    horizontal: DIRECTION_HORIZONTAL
};

export default class Gesture extends React.PureComponent<GestureProps> {
    static defaultProps = {
        enableRotate: false,
        enablePinch: false,
        direction: 'all'
    };

    protected gesture: IGestureStatus;
    protected event: any;
    private pressTimer: any;
    private directionSetting: number;

    constructor( props ) {
        super( props );
        this.directionSetting = directionMap[props.direction];// 初始化当前方向设定
    }

    componentWillUnmount() {
        this.cleanPressTimer();
    }

    now (): number {
        return new Date().getTime();
    }

    getGestureState (): IGestureStatus {
        if ( !this.gesture ) {
            return this.gesture;
        }
        return {
            ...this.gesture
        };
    }

    initGestureStatus ( e: any ): void {
        const touches = this.getTouches( e );
        const now = this.now();
        const { enablePinch, enableRotate } = this.props;

        // 当没有开启选择和缩放手势时候不去计算当前的手势状态
        let mutliFingerStatus;
        if ( touches.length > 1 && ( enablePinch || enableRotate ) ) {
            mutliFingerStatus = calcMutliFingerStatus( touches );
        }

        this.setGestureState( {
            touches,
            time: now,
            startTouches: touches,
            startTime: now,
            startMutliFingerStatus: mutliFingerStatus,
            mutliFingerStatus
        } );
    }

    clearGestureStatus (): void {
        delete this.gesture;
    }

    updateGestureStatus ( e: any ): void {
        const time = this.now();
        // 更新时间
        this.setGestureState( {
            time
        } );
        if ( !e.touches || !e.touches.length ) {
            return;
        }

        const { startTime, startTouches, pinch, rotate } = this.gesture;
        const touches = this.getTouches( e );
        const moveStatus = calcMoveStatus( startTouches, touches, time - startTime );
        let mutliFingerStatus;
        if ( pinch || rotate ) {
            mutliFingerStatus = calcMutliFingerStatus( touches );
        }

        this.setGestureState( {
            /* update status snapshot */
            touches,
            mutliFingerStatus,
            /* update duration status */
            moveStatus
        } );
    }

    setGestureState ( params: any ): void {
        if ( !this.gesture ) {
            this.gesture = {} as any;
        }
        // 记录上一个touches信息
        if ( this.gesture.touches ) {
            this.gesture.preTouches = this.gesture.touches;
        }
        this.gesture = {
            ...this.gesture,
            ...params
        };
    }

    getTouches ( e: any ): any {
        return Array.prototype.slice.call( e.touches ).map( item => ( {
            x: item.screenX,
            y: item.screenY
        } ) );
    }

    // 触发主事件，例如：onPan
    triggerEvent ( name: string, ...args ): void {
        const cb = this.props[name];
        if ( typeof cb === 'function' ) {
            // always give user gesture object as first params first
            cb( this.getGestureState(), ...args );
        }
    }

    // 触发子事件，例如：onPanStart
    triggerSubEvent ( mainEventName: string, eventStatus: string, ...args ): void {
        if ( eventStatus ) {
            const subEventName = getEventName( mainEventName, eventStatus );
            this.triggerEvent( subEventName, ...args );
        }
    }

    // 合并触发主、子事件
    triggerCombineEvent ( mainEventName, eventStatus, ...args ): void {
        this.triggerEvent( mainEventName, ...args );
        this.triggerSubEvent( mainEventName, eventStatus, ...args );
    }

    // 缩放事件
    triggerPinchEvent ( mainEventName, eventStatus, ...args ): void {
        const { scale } = this.gesture;
        if ( eventStatus === 'move' && typeof scale === 'number' ) {
            // 特殊处理两个事件，当缩放比大于1的时候触发onPinchOut，否则触发onPinchIn
            if ( scale > 1 ) {
                this.triggerEvent( 'onPinchOut' );
            }
            if ( scale < 1 ) {
                this.triggerEvent( 'onPinchIn' );
            }
        }
        // 继续触发常规事件
        this.triggerCombineEvent( mainEventName, eventStatus, ...args );
    }

    // 检查是否多手指手势-开始
    checkIfMultiTouchStart (): void {
        const { enablePinch, enableRotate } = this.props;
        const { touches } = this.gesture;
        if ( touches.length > 1 && ( enablePinch || enableRotate ) ) {
            // 初始化缩放
            if ( enablePinch ) {
                const startMutliFingerStatus = calcMutliFingerStatus( touches );
                this.setGestureState( {
                    startMutliFingerStatus,
                    pinch: true,
                    scale: 1
                } );
                this.triggerCombineEvent( 'onPinch', 'start' );
            }
            // 初始化旋转
            if ( enableRotate ) {
                this.setGestureState( {
                    rotate: true,
                    rotation: 0
                } );
                this.triggerCombineEvent( 'onRotate', 'start' );
            }
        }
    }

    // 检查多手指手势-移动
    checkIfMultiTouchMove (): void {
        const { pinch, rotate, touches, startMutliFingerStatus, mutliFingerStatus } = this.gesture;
        // 一开始时不是双手指触发不进行任何逻辑
        if ( !pinch && !rotate ) {
            return;
        }
        // 一开是双手指，移动单手指
        if ( touches.length < 2 ) {
            this.setGestureState( {
                pinch: false,
                rotate: false
            } );
            pinch && this.triggerCombineEvent( 'onPinch', 'cancel' );
            rotate && this.triggerCombineEvent( 'onRotate', 'cancel' );
            return;
        }

        // 缩放
        if ( pinch ) {
            // 缩放比例
            const scale = mutliFingerStatus.z / startMutliFingerStatus.z;
            this.setGestureState( {
                scale
            } );
            this.triggerPinchEvent( 'onPinch', 'move' );
        }
        // 旋转
        if ( rotate ) {
            const rotation = calcRotation( startMutliFingerStatus, mutliFingerStatus );
            this.setGestureState( {
                rotation
            } );
            this.triggerCombineEvent( 'onRotate', 'move' );
        }
    }

    // 检查单手指手势-移动
    checkIfSingleTouchMove (): void {
        const { pan, touches, moveStatus, preTouches } = this.gesture;
        // 一旦移动中的手指超过两只则取消pan事件
        if ( touches.length > 1 ) {
            this.setGestureState( {
                pan: false
            } );
            pan && this.triggerCombineEvent( 'onPan', 'cancel' );
            return;
        }
        this.event.preventDefault();
        if ( moveStatus ) {
            const direction = getMovingDirection( preTouches[0], touches[0] );
            this.setGestureState( {
                direction
            } );
            const eventName = getDirectionEventName( direction );
            // 检查当前允许方向
            if ( !this.allowGesture() ) {
                return;
            }
            // 如果start并不满足pan的条件，则当这次move未start处理
            if ( !pan ) {
                this.triggerCombineEvent( 'onPan', 'start' );
                this.setGestureState( {
                    pan: true
                } );
            } else {
                this.triggerCombineEvent( 'onPan', eventName );
                this.triggerSubEvent( 'onPan', 'move' );
            }
        }
    }
    // 检查多手指手势事件-结束
    checkIfMultiTouchEnd ( status ) {
        const { pinch, rotate } = this.gesture;
        if ( pinch ) {
            this.triggerCombineEvent( 'onPinch', status );
        }
        if ( rotate ) {
            this.triggerCombineEvent( 'onRotate', status );
        }
    }

    // 单手指手势事件-结束
    doSingleTouchEnd = ( status ) => {
        const { moveStatus, pinch, rotate, press, pan, direction } = this.gesture;
        if ( pinch || rotate ) {
            return;
        }
        if ( moveStatus ) {
            const { z, velocity } = moveStatus;
            // 计算是否符合滑动
            const swipe = shouldTriggerSwipe( z, velocity );
            this.setGestureState( {
                swipe
            } );
            if ( pan ) {
                // pan need end, it's a process
                // sometimes, start with pan left, but end with pan right....
                this.triggerAllowEvent( 'onPan', status );
            }
            if ( swipe ) {
                const directionEvName = getDirectionEventName( direction );
                // swipe just need a direction, it's a endpoint
                this.triggerAllowEvent( 'onSwipe', directionEvName );
                return;
            }
        }
        // 长按放手事件
        if ( press ) {
            this.triggerEvent( 'onPressUp' );
            return;
        }
        // tap事件，点击down和up之间少于251毫秒
        this.triggerEvent( 'onTap' );
    }
    // 记录长按
    initPressTimer (): void {
        this.cleanPressTimer();
        this.pressTimer = setTimeout( () => {
            this.setGestureState( {
                press: true
            } );
            this.triggerEvent( 'onPress' );
            this.pressTimer = null;
        }, PRESS.time );
    }

    // 清楚长按
    cleanPressTimer (): void {
        this.pressTimer && clearTimeout( this.pressTimer );
    }

    triggerAllowEvent ( type, status ) {
        if ( this.allowGesture() ) {
            this.triggerCombineEvent( type, status );
        } else {
            this.triggerSubEvent( type, status );
        }
    }

    _handleTouchStart ( e: any ): void {
        // 清空状态
        this.clearGestureStatus();
        this.event = e;
        if ( e.touches.length > 1 ) {
            e.preventDefault();
        }
        // 初始化手势状态
        this.initGestureStatus( e );
        // 长按
        this.initPressTimer();
        // 检查多手指手势
        this.checkIfMultiTouchStart();
    }
    _handleTouchMove ( e: any ): any {
        // 清楚长按计时
        this.cleanPressTimer();
        this.event = e;
        if ( !this.gesture ) {
            return;
        }
        // 更新手势状态
        this.updateGestureStatus( e );
        this.checkIfSingleTouchMove();
        this.checkIfMultiTouchMove();

        e.stopPropagation();
        e.preventDefault();
    }
    _handleTouchCancel ( e: any ): void {
        this.cleanPressTimer();
        this.event = e;
        if ( e.touches.length > 1 ) {
            e.preventDefault();
        }
        this.updateGestureStatus( e );
        this.doSingleTouchEnd( 'cancel' );
        this.checkIfMultiTouchEnd( 'cancel' );
    }
    _handleTouchEnd ( e: any ): void {
        this.cleanPressTimer();
        this.event = e;
        if ( e.touches.length > 1 ) {
            e.preventDefault();
        }
        this.updateGestureStatus( e );
        this.doSingleTouchEnd( 'end' );
        this.checkIfMultiTouchEnd( 'end' );
    }

    // 检查是否满足当前配置的方向条件
    allowGesture (): boolean {
        return shouldTriggerDirection( this.gesture.direction, this.directionSetting );
    }

    // 设置touchAction
    getTouchAction (): string {
        const { enablePinch, enableRotate } = this.props;
        const { directionSetting } = this;
        if ( enablePinch || enableRotate || directionSetting === DIRECTION_ALL ) {
            return 'pan-x pan-y';
        }
        if ( directionSetting === DIRECTION_VERTICAL ) {
            return 'pan-x';
        }
        if ( directionSetting === DIRECTION_HORIZONTAL ) {
            return 'pan-y';
        }
        return 'auto';
    }

    render () {
        const { children } = this.props;
        const child = React.Children.only( children );
        const touchAction = this.getTouchAction();
        const events = {
            onTouchStart: ( e ) => { this._handleTouchStart( e ); },
            onTouchMove: ( e ) => { this._handleTouchMove( e ); },
            onTouchCancel: ( e ) => { this._handleTouchCancel( e ); },
            onTouchEnd: ( e ) => { this._handleTouchEnd( e ); }
        };
        return React.cloneElement( child, {
            ...events,
            style: {
                touchAction,
                ...( child.props.style || {} )
            }
        } );
    }
}