import React, { PureComponent } from 'react';
import classNames from 'classNames';

/*
    <TouchFeedback
        activeStyle={disabled ? false : activeStyle}
        activeClassName={this.setActiveClassName( activeClassName, type, ghost )}
    >
        <a>123</a>
    </TouchFeedback>
 */

export default class TouchFeedback extends PureComponent {
    constructor( props ) {
        super( props );
        this.state = {
            active: false
        };
    }
    static defaultProps = {
        activeStyle: {
        }
    }
    triggerEvent( type, isActive ) {
        if ( isActive !== this.state.active ) {
            this.setState( {
                active: isActive
            } );
        }
    }

    onTouchStart = ( e ) => {
        this.triggerEvent( 'TouchStart', true, e );
    }

    onTouchMove = ( e ) => {
        this.triggerEvent( 'TouchMove', false, e );
    }

    onTouchEnd = ( e ) => {
        this.triggerEvent( 'TouchEnd', false, e );
    }

    onTouchCancel = ( e ) => {
        this.triggerEvent( 'TouchCancel', false, e );
    }

    onMouseDown = ( e ) => {
        if ( this.props.onTouchStart ) {
            this.triggerEvent( 'TouchStart', true, e );
        }
        this.triggerEvent( 'MouseDown', true, e );
    }

    onMouseUp = ( e ) => {
        if ( this.props.onTouchEnd ) {
            this.triggerEvent( 'TouchEnd', false, e );
        }
        this.triggerEvent( 'MouseUp', false, e );
    }

    onMouseLeave = ( e ) => {
        this.triggerEvent( 'MouseLeave', false, e );
    }

    render() {
        const { children, activeStyle, activeClassName } = this.props;

        const events = !activeStyle ? undefined : {
            onTouchStart: this.onTouchStart,
            onTouchMove: this.onTouchMove,
            onTouchEnd: this.onTouchEnd,
            onTouchCancel: this.onTouchCancel,
            onMouseDown: this.onMouseDown,
            onMouseUp: this.onMouseUp,
            onMouseLeave: this.onMouseLeave
        };

        const child = React.Children.only( children );

        if ( activeStyle && this.state.active ) {
            let { style, className } = child.props;
            if ( activeStyle !== false ) {
                if ( activeStyle ) {
                    style = { ...style, ...activeStyle };
                }
                className = classNames( className, activeClassName );
            }
            return React.cloneElement( child, {
                className,
                style,
                ...events
            } );
        }

        return React.cloneElement( child, events );
    }
}