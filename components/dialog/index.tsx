import React, { PureComponent } from 'react';
import classNames from 'classnames';
import { addClass, removeClass, hasClass } from '../_util/class';
import { animationEvents } from '../_util/Event';
import './index.scss';

export interface ModalProps {
    prefixCls?: string,
    maskClassName?: string,
    boxClassName: string,
    className?: string,
    transitionName: string,
    maskTransitionName: string,
    visible: boolean,
    transparent?: boolean,
    maskClose: boolean,
    closeCallback?: any,
    style?: React.CSSProperties,
    maskStyle?: React.CSSProperties,
    title?: JSX.Element,
    footer?: JSX.Element,
}

export default class Dialog extends PureComponent<ModalProps, any> {
    static defaultProps = {
        prefixCls: 'zzc-dialog',
        className: '',
        maskClassName: '',
        boxClassName: '',
        maskTransitionName: '',
        transitionName: '',
        style: {},
        maskStyle: {},
        visible: false,
        closeCallback () { },
        title: null,
        footer: null,
        maskClose: false,
        transparent: false
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

    mask
    box

    componentDidMount (): void {
        if ( this.props.visible ) {
            this.addAnimationEvent();
            this.addMarkCloseEvent();
        }
    }

    componentDidUpdate(): void {
        if ( !this.props.visible ) {
            this.close();
        }
    }

    addAnimationEvent (): void {
        if ( this.props.maskTransitionName !== '' && this.mask && hasClass( this.mask, `${this.props.prefixCls}-mask` ) ) {
            animationEvents.addEndEventListener( this.mask, this.maskAddAnimationEnd, this );
            addClass( this.mask, 'zzc-fade-enter-active' );
        }

        if ( this.props.transitionName !== '' && this.box && hasClass( this.box, `${this.props.prefixCls}-box` ) ) {
            animationEvents.addEndEventListener( this.box, this.boxAddAnimationEnd, this );
            addClass( this.box, this.setAnimationClass( this.props.transitionName, 'enterActive' ) );
        }

        if ( !this.box && !this.mask ) {
            requestAnimationFrame( () => {
                this.addAnimationEvent();
            } );
        }
    }

    maskAddAnimationEnd( event ): void {
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

    boxAddAnimationEnd( event ): void {
        event.stopPropagation();
        if ( hasClass( this.box, this.setAnimationClass( this.props.transitionName, 'enter' ) ) ) {
            removeClass( this.box, this.setAnimationClass( this.props.transitionName, 'enterActive' ) );
            removeClass( this.box, this.setAnimationClass( this.props.transitionName, 'enter' ) );
        } else if ( this.props.transparent ) { // 当没有mask的情况下，box收起之后触发关闭modal
            requestAnimationFrame( () => {
                this.props.closeCallback();
            } );
        }
    }

    // mask关闭事件
    addMarkCloseEvent (): void {
        const _this = this;
        if ( !this.props.transparent && this.props.maskClose && this.mask ) {
            this.mask.onclick = function () {
                _this.close();
            };
        }
    }

    setAnimationClass( transitionName: string, status: string ): string {
        if ( this.state.animationTypeList[transitionName] ) {
            return this.state.animationTypeList[transitionName][status];
        }
        return '';
    }

    close (): void {
        if ( this.mask && this.props.maskTransitionName !== '' ) {
            addClass( this.mask, this.setAnimationClass( this.props.maskTransitionName, 'leave' ) );
            addClass( this.mask, this.setAnimationClass( this.props.maskTransitionName, 'leaveActive' ) );
        }
        if ( this.box && this.props.transitionName !== '' ) {
            addClass( this.box, this.setAnimationClass( this.props.transitionName, 'leave' ) );
            addClass( this.box, this.setAnimationClass( this.props.transitionName, 'leaveActive' ) );
        } else {
            this.props.closeCallback();
        }
    }

    render() {
        const { prefixCls, className, maskClassName, boxClassName, maskStyle, style, transitionName, maskTransitionName, children, title, footer, transparent } = this.props;
        const newMaskClassName: string = classNames(
            `${prefixCls}-mask`,
            this.setAnimationClass( maskTransitionName, 'enter' ),
            maskClassName
        );
        const newBoxClassName: string = classNames(
            `${prefixCls}-box`,
            this.setAnimationClass( transitionName, 'enter' ),
            boxClassName
        );
        return (
            <div className={classNames( `${prefixCls}`, className )}>
                {!transparent && <div style={maskStyle} ref={( ref ) => { this.mask = ref; }} className={newMaskClassName} />}
                <div style={style} ref={( ref ) => { this.box = ref; }} className={newBoxClassName}>
                    {title && title}
                    {children}
                    {footer && footer}
                </div>
            </div>
        );
    }
}
