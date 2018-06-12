import React, { PureComponent } from 'react';
import classNames from 'classnames';
import Dialog from '../dialog';
import Button from '../button';
import langTextObject from '../_util/i18n';
import './index.scss';

export interface ModalProps {
    prefixCls?: string,
    className?: string,
    activeClassName: string,
    maskTransitionName: string,
    transitionName: string,
    title: string,
    inline?: boolean,
    full?: boolean,
    disabled?: boolean,
    noBorder?: boolean,
    visible: boolean,
    closable: boolean,
    ghost?: boolean,
    transparent?: boolean,
    maskClose: boolean,
    closeCallback?: any,
    onClick?: any,
    lang?: 'cn' | 'hk' | 'en'
    buttons?: Array<any>,
    style?: React.CSSProperties,
    maskStyle?: React.CSSProperties,
    footer?: JSX.Element,
}

export default class Modal extends PureComponent<ModalProps, any> {
    static defaultProps = {
        prefixCls: 'zds-modal',
        maskTransitionName: 'zds-fade',
        style: {},
        maskStyle: {},
        className: '',
        closable: false,
        closeCallback() { },
        visible: false,
        title: '',
        transitionName: 'zds-zoom',
        buttons: [],
        maskClose: false,
        transparent: false,
        lang: 'cn'
    }

    state = {
        visible: this.props.visible
        lang: langTextObject[this.props.lang]
    }

    componentWillReceiveProps( newProps ): void {
        if ( this.state.visible !== newProps.visible ) {
            this.setState( {
                visible: newProps.visible
            } );
        }
    }

    createAlertFooter( closable: boolean, buttons?: Array<any> ): any {
        const { lang } = this.state;
        if ( closable ) {
            return (
                <Button
                    noBorder
                    full
                    onClick={
                        () => {
                            this.close();
                        }
                    }
                >
                    {lang.close}
                </Button>
            );
        } else if ( buttons && buttons.length > 0 ) {
            return (
                buttons.map( ( item, key ) => (
                    <div key={`${this.props.prefixCls}-btn-${new Date().getTime()}-${key}`} className={classNames( `${this.props.prefixCls}-btn` )}>
                        {this.createBtn( item )}
                    </div>
                ) )
            );
        }
        return null;
    }

    createBtn ( btn: {text:string, onPress:any, props: any} ): JSX.Element {
        const onPress = btn.onPress ? btn.onPress : () => { };
        return React.cloneElement( <Button
            noBorder
            full
            onClick={( event ) => {
                event.stopPropagation();
                const res = onPress();
                if ( res && res.then ) {
                    res.then( () => {
                        this.close();
                    } ).catch( () => { } );
                } else {
                    this.close();
                }
            }}
        >
            {btn.text}
        </Button>, { ...btn.props } );
    }

    close (): void {
        const { transitionName, maskTransitionName, closeCallback } = this.props;
        // 当没有提供动画，无法触发动画事件触发外部传入的closeCallback，所以当没有动画则主动触发外部closeCallback
        if ( transitionName === '' && maskTransitionName === '' ) {
            closeCallback && closeCallback();
        } else {
            this.setState( {
                visible: false
            } );
        }
    }

    createTitle( title: string ): any {
        const { prefixCls } = this.props;
        if ( title && title !== '' ) {
            return (
                <div className={classNames( `${prefixCls}-header` )}>
                    {title}
                </div>
            );
        }
        return null;
    }

    createFooter() {
        const { prefixCls, buttons, closable } = this.props;
        return (
            <div className={classNames( `${prefixCls}-footer` )}>
                {this.createAlertFooter( closable, buttons )}
            </div>
        );
    }

    render() {
        const {
            children,
            maskClose,
            transitionName,
            maskTransitionName,
            prefixCls,
            closeCallback,
            className,
            style,
            maskStyle,
            title,
            visible,
            transparent
        } = this.props;

        if ( visible ) {
            return (
                <Dialog
                    transparent={transparent}
                    maskTransitionName={maskTransitionName}
                    visible={this.state.visible}
                    style={style}
                    maskStyle={maskStyle}
                    maskClose={maskClose}
                    transitionName={transitionName}
                    boxClassName={classNames( `${prefixCls}-box`, className )}
                    closeCallback={closeCallback}
                    title={this.createTitle( title )}
                    footer={this.createFooter()}
                >
                    <div className={classNames( `${prefixCls}-body` )}>
                        {children}
                    </div>
                </Dialog>
            );
        }
        return null;
    }
}

