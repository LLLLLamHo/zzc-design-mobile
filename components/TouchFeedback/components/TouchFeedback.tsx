import React, { PureComponent } from 'react';
import classNames from 'classnames';
import { isFunction } from '../../_util/typeof';
import { TouchFeedbackProps } from '../propstype';

export default class TouchFeedback extends PureComponent<TouchFeedbackProps, any> {
    constructor( props ) {
        super( props );
    }
    state = {
        active: false
    }
    static defaultProps = {
        activeStyle: null,
        activeClassName: '',
        disabled: false
    }

    triggerEvent ( type: string, isActive: boolean, e: Event ): void {
        // 获取当前触发事件
        // 当有传入对应事件的函数则会触发
        const eventType = `on${type}`;
        if ( this.props[eventType] ) {
            isFunction( this.props[eventType] ) && this.props[eventType]( e );
        }
        if ( isActive !== this.state.active ) {
            this.setState( {
                active: isActive
            } );
        }
    }

    onTouchStart = ( e: Event ): void => {
        this.triggerEvent( 'TouchStart', true, e );
    }

    onTouchMove = ( e: Event ): void => {
        this.triggerEvent( 'TouchMove', false, e );
    }

    onTouchEnd = ( e: Event ): void => {
        this.triggerEvent( 'TouchEnd', false, e );
    }

    onTouchCancel = ( e: Event ): void => {
        this.triggerEvent( 'TouchCancel', false, e );
    }

    onMouseDown = ( e: Event ): void => {
        // 当在pc上传入TouchStart事件会触发事件函数
        if ( this.props.onTouchStart ) {
            this.triggerEvent( 'TouchStart', true, e );
        }
        this.triggerEvent( 'MouseDown', true, e );
    }

    onMouseUp = ( e: Event ): void => {
        // 当在pc上传入TouchEnd事件会触发事件函数
        if ( this.props.onTouchEnd ) {
            this.triggerEvent( 'TouchEnd', true, e );
        }
        this.triggerEvent( 'MouseUp', false, e );
    }

    // m端按下后手指划出元素触发取消touch
    onMouseLeave = ( e: Event ): void => {
        this.triggerEvent( 'MouseLeave', false, e );
    }

    render() {
        const { children, activeStyle, activeClassName, disabled } = this.props;
        const events = {
            onTouchStart: this.onTouchStart,
            onTouchMove: this.onTouchMove,
            onTouchEnd: this.onTouchEnd,
            onTouchCancel: this.onTouchCancel,
            onMouseDown: this.onMouseDown,
            onMouseUp: this.onMouseUp,
            onMouseLeave: this.onMouseLeave
        };

        const child = React.Children.only( children );

        if ( !disabled && this.state.active ) {
            let { style, className } = child.props;

            // 合拼style
            if ( activeStyle ) {
                style = { ...style, ...activeStyle };
            }

            // 生成新classname
            className = classNames( className, activeClassName );
            // 返回一个带有touch的样式和classname的元素
            return React.cloneElement( child, {
                className,
                style,
                ...events
            } );
        }

        // 返回绑定事件的元素
        return React.cloneElement( child, events );
    }
}