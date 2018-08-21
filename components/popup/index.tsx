import React from 'react';
import Dialog from '../dialog';
import animateConfig from '../_util/animateConfig';
import config from '../_util/config';
import { initGtag, zzcComponentUse } from '../_util/gtag';
import './index.scss';

initGtag( 'Popup' );
export interface PopupProps {
    prefixCls?: string,
    visible: boolean,
    style?: React.CSSProperties,
    maskStyle?: React.CSSProperties,
    maskClose?: boolean,
    onClose?: Function,
    renderCallback?: Function,
    transparent?: boolean,
    direction?: string
}

export default class Popup extends React.PureComponent<PopupProps> {
    constructor( props ) {
        super( props );
        zzcComponentUse( 'Popup', '组件渲染' );
    }
    static defaultProps = {
        prefixCls: `${config.cls}-popup`,
        visible: false,
        style: {},
        maskStyle: {},
        maskClose: false,
        onClose () { },
        transparent: false,
        direction: 'bottom'
    }

    state = {
        showPopup: this.props.visible,
        animationTypeList: animateConfig
    }

    private maskShowed: boolean = false;
    private boxShowed: boolean = false;
    private rendered: boolean = false;

    componentWillReceiveProps ( nextProps ) {
        if ( nextProps.visible ) {
            this.setState( {
                showPopup: true
            } );
        }
    }

    // 获取指定样式
    getAnimationClass ( direction: any ): any {
        const animation = this.state.animationTypeList[`${config.cls}-slide-${direction}`];
        if ( animation ) {
            return animation;
        }
        return direction ? direction : null;
    }

    boxAnimated( type: string ): void {
        this.boxShowed = type == 'enter';
        if ( this.boxShowed && this.maskShowed ) {
            this.renderCallback();
        }
    }
    maskAnimated( type: string ): void {
        this.maskShowed = type == 'enter';
        if ( this.boxShowed && this.maskShowed ) {
            this.renderCallback();
        }
    }

    renderCallback(): void {
        !this.rendered && this.props.renderCallback && this.props.renderCallback();
    }

    render () {
        const { visible, children, prefixCls, direction, onClose } = this.props;
        if ( this.state.showPopup ) {
            return (
                <Dialog
                    maskTransitionName={`${config.cls}-fade`}
                    transitionName={this.getAnimationClass( direction )}
                    prefixCls={prefixCls}
                    boxClassName={`${prefixCls}-${direction}`}
                    visible={visible}
                    boxAnimated={( type ) => { this.boxAnimated( type ); }}
                    maskAnimated={( type ) => { this.maskAnimated( type ); }}
                    closeCallback={() => {
                        this.setState( { showPopup: false } );
                        onClose && onClose();
                    }}
                    {...this.props}
                >
                    {children}
                </Dialog>
            );
        }
        return null;
    }
}