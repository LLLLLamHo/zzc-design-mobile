import React, { PureComponent } from 'react';
import classNames from 'classnames';
import { addClass, removeClass, hasClass } from '../_util/class.js';
import { animationEvents } from '../_util/Event';
import './index.scss';

export default class extends PureComponent {
    static defaultProps = {
        prefixCls: 'zzc-dialog',
        markClassName: '',
        boxClassName: '',
        maskTransitionName: 'fade',
        transitionName: '',
        style: {},
        maskStyle: {},
        visible: false,
        closeCallback() { }
    }

    state = {
        animationTypeList: {
            zoom: {
                enter: 'zzc-zoom-enter',
                enterActive: 'zzc-zoom-enter-active',
                leave: 'zzc-zoom-leave',
                leaveActive: 'zzc-zoom-leave-active'
            },
            fade: {
                enter: 'zzc-fade-enter',
                enterActive: 'zzc-fade-enter-active',
                leave: 'zzc-fade-leave',
                leaveActive: 'zzc-fade-leave-active'
            }
        }
    }

    componentDidMount() {
        if ( this.props.visible ) {
            this.addAnimationEvent();
        }
    }

    componentDidUpdate() {
        if ( !this.props.visible ) {
            this.close();
        }
    }

    addAnimationEvent() {
        if ( ( this.mask && hasClass( this.mask, `${this.props.prefixCls}-mask` ) ) && ( this.box && hasClass( `${this.props.prefixCls}-box` ) ) ) {
            animationEvents.addEndEventListener( this.mask, this.markAddAnimationEnd, this );
            addClass( this.mask, 'zzc-fade-enter-active' );

            animationEvents.addEndEventListener( this.box, this.boxAddAnimationEnd, this );
            addClass( this.box, this.setAnimationClass( this.props.transitionName, 'enterActive' ) );
        } else {
            requestAnimationFrame( () => {
                this.addAnimationEvent();
            } );
        }
    }

    markAddAnimationEnd( event ) {
        event.stopPropagation();
        if ( hasClass( this.mask, this.setAnimationClass( this.props.maskTransitionName, 'enter' ) ) ) {
            removeClass( this.mask, this.setAnimationClass( this.props.maskTransitionName, 'enterActive' ) );
            removeClass( this.mask, this.setAnimationClass( this.props.maskTransitionName, 'enter' ) );
        } else {
            requestAnimationFrame( () => {
                this.props.closeCallback();
            } );
        }
    }

    boxAddAnimationEnd( event ) {
        event.stopPropagation();
        const _this = this;
        if ( hasClass( this.box, this.setAnimationClass( this.props.transitionName, 'enter' ) ) ) {
            removeClass( this.box, this.setAnimationClass( this.props.transitionName, 'enterActive' ) );
            removeClass( this.box, this.setAnimationClass( this.props.transitionName, 'enter' ) );
            // mark关闭
            if ( this.props.markClose ) {
                document.querySelector( `.${_this.props.prefixCls}-mask` ).onclick = function () {
                    _this.close();
                };
            }
        }
    }


    setAnimationClass( transitionName, status ) {
        if ( this.state.animationTypeList[transitionName] ) {
            return this.state.animationTypeList[transitionName][status];
        }
        return '';
    }

    close() {
        if ( this.box ) {
            addClass( this.box, this.setAnimationClass( this.props.transitionName, 'leave' ) );
            addClass( this.box, this.setAnimationClass( this.props.transitionName, 'leaveActive' ) );
        }
        if ( this.mask ) {
            addClass( this.mask, this.setAnimationClass( this.props.maskTransitionName, 'leave' ) );
            addClass( this.mask, this.setAnimationClass( this.props.maskTransitionName, 'leaveActive' ) );
        }
    }

    render() {
        const { prefixCls, markClassName, boxClassName, maskStyle, style, transitionName, maskTransitionName, children } = this.props;
        const newMaskClassName = classNames(
            `${prefixCls}-mask`,
            this.setAnimationClass( maskTransitionName, 'enter' ),
            markClassName
        );
        const newBoxClassName = classNames(
            `${prefixCls}-box`,
            this.setAnimationClass( transitionName, 'enter' ),
            boxClassName
        );

        return (
            <div className={classNames( `${prefixCls}` )}>
                <div style={maskStyle} ref={( ref ) => { this.mask = ref; }} className={newMaskClassName} />
                <div style={style} ref={( ref ) => { this.box = ref; }} className={newBoxClassName}>
                    {children}
                </div>
            </div>
        );
    }
}
