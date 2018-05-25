import React from 'react';

export declare type Finger = {
    x: number // e.touches[i].pageX
    y: number // e.touches[i].pageY
};

export interface GestureProps {
    children: JSX.Element
}

export interface IGestureStatus {
    touches?: Finger[],
    startTouches?: Finger[]
    preTouches?: Finger[] | null
}

export default class Gesture extends React.PureComponent<GestureProps> {
    protected gesture: IGestureStatus

    now (): number {
        return new Date().getTime();
    }

    initGestureStatus ( e: any ): void {
        const touches = this.getTouches( e );
        const now = this.now();
        this.setGestureStatus( {
            touches,
            startTime: now,
            time: now,
            startTouches: touches,
            preTouches: null
        } );
    }

    clearGestureStatus (): void {
        delete this.gesture;
    }

    updateGestureStatus ( e: any ): void {
        this.gesture = {
            touches: this.getTouches( e ),
            preTouches: this.gesture.touches
        };
    }

    setGestureStatus ( params: any ): void {
        if ( !this.gesture ) {
            this.gesture = {};
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

    _handleTouchStart ( e ) {
        this.clearGestureStatus();
        if ( e.touches.length > 1 ) {
            e.preventDefault();
        }
        this.initGestureStatus( e );
    }
    _handleTouchMove ( e ) {
        alert( e.touches.length );
        if ( e.touches.length > 1 ) {
            e.preventDefault();
        }
        this.updateGestureStatus( e );
        console.log( this.gesture );
    }
    _handleTouchCancel ( e ) {
        if ( e.touches.length > 1 ) {
            e.preventDefault();
        }
        this.updateGestureStatus( e );
    }
    _handleTouchEnd ( e ) {
        if ( e.touches.length > 1 ) {
            e.preventDefault();
        }
        this.updateGestureStatus( e );
    }

    render () {
        const { children } = this.props;
        const child = React.Children.only( children );
        const events = {
            onTouchStart: ( e ) => { this._handleTouchStart( e ); },
            onTouchMove: ( e ) => { this._handleTouchMove( e ); },
            onTouchCancel: ( e ) => { this._handleTouchCancel( e ); },
            onTouchEnd: ( e ) => { this._handleTouchEnd( e ); }
        };
        return React.cloneElement( child, {
            ...events
        } );
    }
}