const EVENT_NAME_MAP = {
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

const endEventsTransitionend = [];
const endEventsAnimationend = [];

function detectEvents() {
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

function addEventListener( node, eventName, eventListener, _this ) {
    if ( _this ) {
        node.addEventListener( eventName, eventListener.bind( _this ), false );
    } else {
        node.addEventListener( eventName, eventListener, false );
    }
}

function removeEventListener( node, eventName, eventListener, _this ) {
    if ( _this ) {
        node.removeEventListener( eventName, eventListener.bind( _this ), false );
    } else {
        node.removeEventListener( eventName, eventListener, false );
    }
}

const transitionEvents = {
    addEndEventListener( node, eventListener, _this ) {
        if ( endEventsTransitionend.length === 0 ) {
            window.setTimeout( eventListener, 0 );
            return;
        }

        _this = _this ? _this : null;

        endEventsTransitionend.forEach( ( endEvents ) => {
            addEventListener( node, endEvents, eventListener, _this );
        } );
    },
    removeEndEventListener( node, eventListener, _this ) {
        if ( endEventsTransitionend.length === 0 ) {
            return;
        }
        endEventsTransitionend.forEach( ( endEvent ) => {
            removeEventListener( node, endEvent, eventListener, _this );
        } );
    }
};

const animationEvents = {

    addEndEventListener( node, eventListener, _this ) {
        if ( endEventsAnimationend.length === 0 ) {
            window.setTimeout( eventListener, 0 );
            return;
        }
        _this = _this ? _this : null;

        endEventsAnimationend.forEach( ( endEvents ) => {
            addEventListener( node, endEvents, eventListener, _this );
        } );
    },
    removeEndEventListener( node, eventListener, _this ) {
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