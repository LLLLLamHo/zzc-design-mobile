const EVENT_NAME_MAP: any = {
    transitionend: {
        transition: 'transitionend',
        WebkitTransition: 'webkitTransitionEnd',
        MozTransition: 'mozTransitionEnd',
        OTransition: 'oTransitionEnd',
        msTransition: 'MSTransitionEnd'
    },

    animationend: {
        animation: 'animationend',
        WebkitAnimation: 'webkitAnimationEnd',
        MozAnimation: 'mozAnimationEnd',
        OAnimation: 'oAnimationEnd',
        msAnimation: 'MSAnimationEnd'
    }
};

const endEventsTransitionend: Array<any> = [];
const endEventsAnimationend: Array<any> = [];

// 查看浏览器事件支持
function detectEvents(): void {
    // 判断是否支持AnimationEvent
    if ( 'AnimationEvent' in window ) {
        delete EVENT_NAME_MAP.animationend.WebkitAnimation;
    }
    // 判断是否支持TransitionEvent
    if ( 'TransitionEvent' in window ) {
        delete EVENT_NAME_MAP.transitionend.WebkitTransition;
    }

    Object.keys( EVENT_NAME_MAP.animationend ).forEach( function ( key ) {
        endEventsAnimationend.push( EVENT_NAME_MAP.animationend[key] );
    } );

    Object.keys( EVENT_NAME_MAP.transitionend ).forEach( function ( key ) {
        endEventsTransitionend.push( EVENT_NAME_MAP.transitionend[key] );
    } );
}

// 绑定事件
function addEventListener( node: Element, eventName: string, eventListener: any, _this: any ): void {
    if ( _this ) {
        node.addEventListener( eventName, eventListener.bind( _this ), false );
    } else {
        node.addEventListener( eventName, eventListener, false );
    }
}

// 删除事件
function removeEventListener( node: Element, eventName: string, eventListener: any, _this: any ): void {
    if ( _this ) {
        node.removeEventListener( eventName, eventListener.bind( _this ), false );
    } else {
        node.removeEventListener( eventName, eventListener, false );
    }
}

// 绑定过度事件
const transitionEvents: any = {
    addEndEventListener( node: Element, eventListener: any, _this: any ): void {
        if ( endEventsTransitionend.length === 0 ) {
            window.setTimeout( eventListener, 0 );
            return;
        }

        _this = _this ? _this : null;

        endEventsTransitionend.forEach( ( endEvents ) => {
            addEventListener( node, endEvents, eventListener, _this );
        } );
    },
    removeEndEventListener( node: Element, eventListener: any, _this: any ): void {
        if ( endEventsTransitionend.length === 0 ) {
            return;
        }
        endEventsTransitionend.forEach( ( endEvent ) => {
            removeEventListener( node, endEvent, eventListener, _this );
        } );
    }
};

// 绑定动画事件
const animationEvents: any = {

    addEndEventListener( node: Element, eventListener: any, _this: any ): void {
        if ( endEventsAnimationend.length === 0 ) {
            window.setTimeout( eventListener, 0 );
            return;
        }
        _this = _this ? _this : null;

        endEventsAnimationend.forEach( ( endEvents ) => {
            addEventListener( node, endEvents, eventListener, _this );
        } );
    },
    removeEndEventListener( node: Element, eventListener: any, _this: any ): void {
        if ( endEventsAnimationend.length === 0 ) {
            return;
        }
        endEventsAnimationend.forEach( ( endEvent ) => {
            removeEventListener( node, endEvent, eventListener, _this );
        } );
    }
};

if ( typeof window !== 'undefined' && typeof document !== 'undefined' ) {
    detectEvents();
}

export {
    transitionEvents,
    animationEvents
};