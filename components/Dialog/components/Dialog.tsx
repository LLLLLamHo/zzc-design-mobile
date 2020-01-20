import React, { PureComponent } from 'react';
import classNames from 'classnames';
import Animate from '../../Animate';
import { addClass } from '../../_util/class';
import animateConfig from '../../_util/animateConfig';
import { isFunction } from '../../_util/typeof';
import config from '../../_util/config';
import { DialogProps } from '../propsType';


export default class Dialog extends PureComponent<DialogProps, any> {
    constructor(props) {
        super(props);
        this.maskTouchMove = this.maskTouchMove.bind(this);
    }
    static defaultProps = {
        prefixCls: `${config.cls}-dialog`,
        getRef: () => { },
        className: '',
        maskClassName: '',
        boxClassName: '',
        maskTransitionName: '',
        transitionName: '',
        dialogStyle: {},
        maskStyle: {},
        visible: false,
        closeCallback() { },
        maskAnimated() { },
        boxAnimated() { },
        title: null,
        footer: null,
        maskClose: false,
        transparent: false
    }

    state = {
        animationTypeList: animateConfig
    }

    private box: HTMLDivElement | null
    private mask: HTMLDivElement | null
    private isShowedMask: boolean = false;
    private isShowedBox: boolean = false;

    componentDidMount() {
        
        // 当没有动画效果的时候，创建完毕后需要为mask添加点击关闭事件
        !this.props.transparent && this.props.maskClose && this.addMarkCloseEvent();
        if (this.mask) {
            this.mask.addEventListener('touchmove', this.maskTouchMove, { passive: false });
        }
    }

    componentWillUnmount() {
        if (this.mask) {
            this.mask.removeEventListener('touchmove', this.maskTouchMove);
        }
    }

    // mask关闭事件
    addMarkCloseEvent(): void {
        const _self = this;
        const { closeCallback, transitionName, maskTransitionName, transparent } = this.props;
        if (this.mask) {
            const maskAnimation = this.getAnimationClass(this.props.maskTransitionName);
            const bodyAnimation = this.getAnimationClass(this.props.transitionName);
            this.mask.onclick = function () {
                if (transitionName && transitionName !== '' && !_self.isShowedBox) {
                    return false;
                }

                if (!transparent && maskTransitionName && maskTransitionName !== '' && !_self.isShowedMask) {
                    return false;
                }

                if (bodyAnimation) {
                    addClass(_self.box, bodyAnimation.leave);
                    addClass(_self.box, bodyAnimation.leaveActive);
                }
                // 当没有配置动画点击mask关闭dialog，直接调用
                if (maskAnimation) {
                    addClass(_self.mask, maskAnimation.leave);
                    addClass(_self.mask, maskAnimation.leaveActive);
                } else {
                    closeCallback && closeCallback();
                }
                return false;
            };
        }
    }

    // 获取指定样式
    getAnimationClass(transitionName: any): any {
        if (this.state.animationTypeList[transitionName]) {
            return this.state.animationTypeList[transitionName];
        }
        return transitionName ? transitionName : null;
    }

    // mask是否加入动画
    createDialogMask(): JSX.Element | any {
        const { prefixCls, transparent, maskTransitionName, closeCallback, maskStyle, maskClassName, visible } = this.props;
        const newMaskClassName: string = classNames(
            `${prefixCls}-mask`,
            maskClassName
        );
        if (!transparent) {
            if (maskTransitionName && maskTransitionName !== '') {
                return (
                    <Animate
                        visible={visible}
                        animationName={this.getAnimationClass(maskTransitionName)}
                        onEnd={(type) => {
                            this.isShowedMask = type === 'enter';
                            this.props.maskAnimated && isFunction(this.props.maskAnimated) && this.props.maskAnimated(type);
                            type === 'leave' && closeCallback && closeCallback();
                        }}
                    >
                        <div style={maskStyle} ref={(ref) => { this.mask = ref; }} className={newMaskClassName} />
                    </Animate>
                );
            }
            return (<div style={maskStyle} ref={(ref) => { this.mask = ref; }} className={newMaskClassName} />);
        }
        return null;
    }

    maskTouchMove(event) {
        event.preventDefault();
        event.stopPropagation();
    }

    // dialog主题是否加入动画
    createDialogBody(): JSX.Element | any {
        const { prefixCls, visible, bodyStyle, transparent, boxClassName, transitionName, maskTransitionName, children, title, footer, closeCallback } = this.props;
        const newBoxClassName: string = classNames(
            `${prefixCls}-box`,
            boxClassName
        );
        if (transitionName && transitionName !== '') {
            return (
                <Animate
                    visible={visible}
                    animationName={this.getAnimationClass(transitionName)}
                    onEnd={(type) => {
                        this.isShowedBox = type === 'enter';
                        this.props.boxAnimated && isFunction(this.props.boxAnimated) && this.props.boxAnimated(type);
                        // 当选择不创建mask或者mask不使用动画的时候，body动画结束触发closeCallback
                        type === 'leave' && (transparent || maskTransitionName === '') && closeCallback && closeCallback();
                    }}
                >
                    <div style={bodyStyle} ref={(ref) => { this.box = ref; }} className={newBoxClassName}>
                        {title && title}
                        {children}
                        {footer && footer}
                    </div>
                </Animate>
            );
        }
        return (
            <div style={bodyStyle} ref={(ref) => { this.box = ref; }} className={newBoxClassName}>
                {title && title}
                {children}
                {footer && footer}
            </div>
        );
    }

    render(): JSX.Element {
        const { prefixCls, className, style, preRender, visible } = this.props;
        // preRender预渲染
        if (preRender) {
            return (
                <div className='pre-render-box' style={!visible && !this.isShowedBox ? { display: 'none' } : {}}>
                    <div style={style} className={classNames(`${prefixCls}`, className)}>
                        {this.createDialogMask()}
                        {this.createDialogBody()}
                    </div>
                </div>
            );
        }
        return (
            <div style={style} className={classNames(`${prefixCls}`, className)}>
                {this.createDialogMask()}
                {this.createDialogBody()}
            </div>
        );
    }
}
