
import React from 'react';
import ReactDOM from 'react-dom';
import { isObject, isDOM } from '../_util/typeof';
import { animationEvents } from '../_util/Event';
import { addClass, removeClass, hasClass } from '../_util/class';
import { AnimateProps } from './propsType';

export default class Animate extends React.PureComponent<AnimateProps> {
    static defaultProps = {
        animationName: null,
        visible: false,
        onEnd: () => { }
    }

    private animateStatus: any = null;

    componentDidMount (): void {
        this.addAnimationEvent();
        this.runHookEvent( true );
    }

    componentDidUpdate (): void {
        // 防止重复执行动画，必须当前状态和传入参数不一样才执行动画钩子
        if ( ( this.props.visible && this.animateStatus !== 'enter' ) || ( !this.props.visible && this.animateStatus !== 'leave' ) ) {
            this.runHookEvent( false );
        }
    }

    // 执行触发钩子事件
    runHookEvent ( isFirst: boolean ): void {
        if ( ( isFirst && this.props.visible ) || ( !isFirst && this.props.visible && this.animateStatus == 'leave' ) ) {
            this.enterEvent();
        } else if ( !isFirst && !this.props.visible && this.animateStatus == 'enter' ) {
            this.leaveEvent();
        } else if ( !isFirst && this.props.visible ) {
            this.enterEvent();
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
                const { enter, enterActive, leave, leaveActive } = animationName;
                // 在进行动画进入钩子之前，先确定如果存在离开钩子，先进行清除
                hasClass( node, leave ) && removeClass( node, leave );
                hasClass( node, leaveActive ) && removeClass( node, leaveActive );
                addClass( node, enter );
                addClass( node, enterActive );
            } else {
                addClass( node, animationName );
            }
            this.animateStatus = 'enter';
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
            this.animateStatus = 'leave';
        }
    }

    // 动画完成触发事件
    animationEvent ( event ): void {
        event.stopPropagation();
        const { animationName }: any = this.props;
        const { enter, enterActive, leave, leaveActive } = animationName;
        try {
            const node = ReactDOM.findDOMNode( this );
            if ( isDOM( node ) ) {
                let animationType = 'enter';
                // 当传入object会清除enter钩子，如果只是传入一个字符串，会保留class直至关闭才去掉class
                if ( isObject( animationName ) ) {
                    // 当切换enter和leave速度过来会导致bug，需要判断是否会存在enter和leave的class
                    if ( hasClass( node, enter ) ) {
                        removeClass( node, enter );
                        removeClass( node, enterActive );
                        if ( hasClass( node, leave ) ) {
                            animationType = 'leave';
                            removeClass( node, leave );
                            removeClass( node, leaveActive );
                        }
                    } else {
                        animationType = 'leave';
                        removeClass( node, leave );
                        removeClass( node, leaveActive );
                    }
                } else if ( hasClass( node, animationName ) && !!this.props.visible ) {
                    animationType = 'leave';
                    removeClass( node, leave );
                    removeClass( node, leaveActive );
                }
                this.props.onEnd && this.props.onEnd( animationType );
            }
        } catch ( err ) {
            // console.log( err );
        }
    }

    render (): any {
        const { children } = this.props;
        return ( children );
    }
}