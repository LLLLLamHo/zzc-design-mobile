import React, { PureComponent } from 'react';
import classNames from 'classnames';
import Dialog from '../../Dialog';
import Button from '../../Button';
import langTextObject from '../../_util/i18n';
import config from '../../_util/config';
import { ModalProps } from '../porpsType';


export default class Modal extends PureComponent<ModalProps, any> {
    constructor(props) {
        super(props);
    }
    static defaultProps = {
        prefixCls: `${config.cls}-modal`,
        maskTransitionName: `${config.cls}-fade`,
        style: {},
        maskStyle: {},
        className: '',
        closable: false,
        closeCallback() { },
        visible: false,
        title: '',
        transitionName: `${config.cls}-zoom`,
        buttons: [],
        buttonDirection: 'horizontally',
        maskClose: false,
        transparent: false,
        lang: 'cn'
    }

    state = {
        isRenderModal: this.props.visible,
        visible: this.props.visible,
        lang: langTextObject[this.props.lang]
    }

    private maskShowed: boolean = false;
    private boxShowed: boolean = false;

    componentWillReceiveProps(newProps): void {
        if (this.state.visible !== newProps.visible) {
            if (newProps.visible) {
                this.setState({
                    isRenderModal: newProps.visible,
                    visible: newProps.visible
                });
            } else if (this.props.visible !== newProps.visible) {
                this.close();
            }
        }
    }

    createAlertFooter(closable?: boolean, buttons?: Array<any>): any {
        const { transitionName, maskTransitionName, transparent, prefixCls } = this.props;
        const { lang } = this.state;
        if (closable && (!buttons || buttons.length == 0)) {
            return (
                <Button
                    type='special'
                    className={`${prefixCls}-btn`}
                    style={{
                        border: 'none'
                    }}
                    onClick={
                        () => {
                            // 防止enter动画没有结束就点击关闭引起bug
                            if (transitionName && transitionName !== '' && !this.boxShowed) {
                                return false;
                            }

                            if (!transparent && maskTransitionName && maskTransitionName !== '' && !this.maskShowed) {
                                return false;
                            }
                            this.close();
                            return false;
                        }
                    }
                >
                    {lang.close}
                </Button>
            );
        } else if (buttons && buttons.length > 0) {
            return (
                buttons.map((item, key) => (
                    <div key={`${this.props.prefixCls}-btn-${new Date().getTime()}-${key}`} className={classNames(`${this.props.prefixCls}-btn`)}>
                        {this.createBtn(item)}
                    </div>
                ))
            );
        }
        return null;
    }

    createBtn(btn: { text: string, onPress: any, props: any }): JSX.Element {
        const onPress = btn.onPress ? btn.onPress : () => { };
        const { transitionName, maskTransitionName, transparent } = this.props;
        return React.cloneElement(<Button
            onClick={(event) => {
                // 防止enter动画没有结束就点击关闭引起bug
                if (transitionName && transitionName !== '' && !this.boxShowed) {
                    return false;
                }

                if (!transparent && maskTransitionName && maskTransitionName !== '' && !this.maskShowed) {
                    return false;
                }
                event.stopPropagation();
                const res = onPress();
                if (res && res.then) {
                    res.then(() => {
                        this.close();
                    }).catch(() => { });
                } else {
                    this.close();
                }
                return false;
            }}
        >
            {btn.text}
        </Button>, { ...btn.props });
    }

    close(): void {
        const { transitionName, maskTransitionName } = this.props;
        // 当没有提供动画，无法触发动画事件触发外部传入的closeCallback，所以当没有动画则主动触发外部closeCallback
        if (transitionName === '' && maskTransitionName === '') {
            this.closeCallback();
        } else {
            this.setState({
                visible: false
            });
        }
    }

    createTitle(title?: string): any {
        const { prefixCls } = this.props;
        if (title && title !== '') {
            return (
                <div className={classNames(`${prefixCls}-header`)}>
                    {title}
                </div>
            );
        }
        return null;
    }

    createFooter() {
        const { prefixCls, buttons, closable, buttonDirection } = this.props;
        return (
            <div className={classNames([`${prefixCls}-footer`, `${prefixCls}-${buttonDirection}-footer`])}>
                {this.createAlertFooter(closable, buttons)}
            </div>
        );
    }

    closeCallback() {
        this.setState({
            isRenderModal: false,
            visible: false
        }, () => {
            this.props.closeCallback();
        });
    }

    // 防止enter动画没有结束就点击关闭引起bug
    maskAnimated(type: string): void {
        this.maskShowed = type === 'enter';
    }
    // 防止enter动画没有结束就点击关闭引起bug
    boxAnimated(type: string): void {
        this.boxShowed = type === 'enter';
    }

    render() {
        const {
            children,
            maskClose,
            transitionName,
            maskTransitionName,
            prefixCls,
            className,
            maskStyle,
            title,
            transparent,
            buttons,
            closable,
            style
        } = this.props;
        if (this.state.isRenderModal) {
            return (
                <Dialog
                    style={style}
                    transparent={transparent}
                    maskTransitionName={maskTransitionName}
                    visible={this.state.visible}
                    maskStyle={maskStyle}
                    maskClose={maskClose}
                    maskAnimated={(type) => { this.maskAnimated(type); }}
                    boxAnimated={(type) => { this.boxAnimated(type); }}
                    transitionName={transitionName}
                    boxClassName={classNames(`${prefixCls}-box`, className)}
                    closeCallback={() => { this.closeCallback(); }}
                    title={this.createTitle(title)}
                    footer={closable || (buttons && buttons.length > 0) ? this.createFooter() : null}
                >
                    <div className={classNames(`${prefixCls}-body`)}>
                        {children}
                    </div>
                </Dialog>
            );
        }
        return null;
    }
}

