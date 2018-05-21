
import React from 'react';
import ReactDOM from 'react-dom';
import { isObject, isDOM } from '../typeof';
import { animationEvents } from '../Event';
import { addClass, removeClass, hasClass } from '../class';

export interface AnimateProps {
    animationName?: string | object,
    visible: boolean,
    onEnd?: Function
}

export default class Animate extends React.PureComponent<AnimateProps> {
    static defaultProps = {
        animationName: null,
        visible: false,
        onEnd: () => { }
    }

    componentDidMount (): void {
        this.addAnimationEvent();
        this.runHookEvent( true );
    }

    componentDidUpdate (): void {
        this.runHookEvent( false );
    }

    // 执行触发钩子事件
    runHookEvent ( isFirst: boolean ): void {
        if ( this.props.visible ) {
            this.enterEvent();
        } else if ( !isFirst ) {
            this.leaveEvent();
        }
    }

    // 绑定动画事件
    addAnimationEvent (): void {
        const node = ReactDOM.findDOMNode( this );
        if ( isDOM( node ) ) {
            animationEvents.addEndEventListener( node, this.animationEvent, this );
        }
    }

    // 进入动画钩子
    enterEvent (): void {
        const { animationName }: any = this.props;
        const node = ReactDOM.findDOMNode( this );
        if ( isDOM( node ) ) {
            if ( isObject( animationName ) ) {
                const { enter, enterActive } = animationName;
                addClass( node, enter );
                addClass( node, enterActive );
            } else {
                addClass( node, animationName );
            }
        }
    }

    // 离开动画钩子
    leaveEvent (): void {
        const { animationName }: any = this.props;
        const node = ReactDOM.findDOMNode( this );
        if ( isDOM( node ) ) {
            if ( isObject( animationName ) ) {
                const { leave, leaveActive } = animationName;
                addClass( node, leave );
                addClass( node, leaveActive );
            } else {
                removeClass( node, animationName );
            }
        }
    }

    // 动画完成触发事件
    animationEvent ( event ): void {
        event.stopPropagation();
        const { animationName }: any = this.props;
        const { enter, enterActive } = animationName;
        const node = ReactDOM.findDOMNode( this );
        if ( isDOM( node ) ) {
            let animationType = 'enter';
            // 当传入object会清楚enter钩子，如果只是传入一个字符串，会保留class直至关闭才去掉class
            if ( isObject( animationName ) ) {
                if ( hasClass( node, enter ) ) {
                    removeClass( node, enter );
                    removeClass( node, enterActive );
                } else {
                    animationType = 'leave';
                }
            } else if ( hasClass( node, animationName ) && !!this.props.visible ) {
                animationType = 'leave';
            }
            this.props.onEnd && this.props.onEnd( animationType );
        }
    }

    render (): any {
        const { children } = this.props;
        return ( children );
    }
}