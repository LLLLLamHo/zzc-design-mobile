import React, { PureComponent } from 'react';
import classNames from 'classnames';
import Animate from '../_util/Animate';
import { addClass } from '../_util/class';
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
    closeCallback: Function,
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

    box
    mask

    componentDidMount (): void {
        this.addMarkCloseEvent();
    }

    // mask关闭事件
    addMarkCloseEvent (): void {
        const _this = this;
        if ( !this.props.transparent && this.props.maskClose && this.mask ) {
            const maskAnimation = _this.getAnimationClass( _this.props.maskTransitionName );
            const bodyAnimation = _this.getAnimationClass( _this.props.transitionName );
            this.mask.onclick = function () {
                addClass( _this.box, bodyAnimation.leave );
                addClass( _this.box, bodyAnimation.leaveActive );
                addClass( _this.mask, maskAnimation.leave );
                addClass( _this.mask, maskAnimation.leaveActive );
            };
        }
    }

    // 获取指定样式
    getAnimationClass ( transitionName: any ): any {
        if ( this.state.animationTypeList[transitionName] ) {
            return this.state.animationTypeList[transitionName];
        }
        return transitionName ? transitionName : null;
    }

    // mask是否加入动画
    createDialogMask (): JSX.Element | any {
        const { prefixCls, transparent, maskTransitionName, closeCallback, maskStyle, maskClassName, visible } = this.props;
        const newMaskClassName: string = classNames(
            `${prefixCls}-mask`,
            maskClassName
        );
        if ( !transparent ) {
            if ( maskTransitionName && maskTransitionName !== '' ) {
                return (
                    <Animate
                        visible={visible}
                        animationName={this.getAnimationClass( maskTransitionName )}
                        onEnd={( type ) => {
                            type === 'leave' && closeCallback();
                        }}
                    >
                        <div style={maskStyle} ref={( ref ) => { this.mask = ref; }} className={newMaskClassName} />
                    </Animate>
                );
            }
            return ( <div style={maskStyle} ref={( ref ) => { this.mask = ref; }} className={newMaskClassName} /> );
        }
        return null;
    }

    // dialog主题是否加入动画
    createDialogBody (): JSX.Element | any {
        const { prefixCls, visible, boxClassName, style, transitionName, children, title, footer } = this.props;
        const newBoxClassName: string = classNames(
            `${prefixCls}-box`,
            boxClassName
        );
        if ( transitionName && transitionName !== '' ) {
            return (
                <Animate
                    visible={visible}
                    animationName={this.getAnimationClass( transitionName )}
                >
                    <div style={style} ref={( ref ) => { this.box = ref; }} className={newBoxClassName}>
                        {title && title}
                        {children}
                        {footer && footer}
                    </div>
                </Animate>
            );
        }
        return (
            <div style={style} ref={( ref ) => { this.box = ref; }} className={newBoxClassName}>
                {title && title}
                {children}
                {footer && footer}
            </div>
        );
    }

    render(): JSX.Element {
        const { prefixCls, className } = this.props;
        return (
            <div className={classNames( `${prefixCls}`, className )}>
                {this.createDialogMask()}
                {this.createDialogBody()}
            </div>
        );
    }
}
