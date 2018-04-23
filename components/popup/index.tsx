import React from 'react';
import Dialog from '../dialog';
import animateConfig from '../_util/animateConfig';
import './index.scss';

export interface PopupProps {
    prefixCls?: string,
    visible: boolean,
    style?: React.CSSProperties,
    maskStyle?: React.CSSProperties,
    maskClose?: boolean,
    closeCallback?: Function,
    maskTransitionName?: string,
    transitionName?: string,
    transparent?: boolean,
    direction?: string
}

export default class Popup extends React.PureComponent<PopupProps> {
    static defaultProps = {
        prefixCls: 'zzc-popup',
        visible: false,
        style: {},
        maskStyle: {},
        maskClose: false,
        closeCallback () { },
        maskTransitionName: 'zzc-fade',
        transitionName: 'zzc-slide-bottom',
        transparent: false,
        direction: 'bottom'
    }

    state = {
        animationTypeList: animateConfig
    }

    // 获取指定样式
    getAnimationClass ( transitionName: any ): any {
        if ( this.state.animationTypeList[transitionName] ) {
            return this.state.animationTypeList[transitionName];
        }
        return transitionName ? transitionName : null;
    }

    render () {
        const { visible, children, prefixCls } = this.props;
        console.log( this.state.animationTypeList );
        return (
            <Dialog
                prefixCls={prefixCls}
                visible={visible}
                {...this.props}
            >
                {children}
            </Dialog>
        );
    }
}