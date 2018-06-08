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
    onClose?: Function,
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
        onClose () { },
        transparent: false,
        direction: 'bottom'
    }

    state = {
        showPopup: this.props.visible,
        animationTypeList: animateConfig
    }

    componentWillReceiveProps ( nextProps ) {
        if ( nextProps.visible ) {
            this.setState( {
                showPopup: true
            } );
        }
    }

    // 获取指定样式
    getAnimationClass ( direction: any ): any {
        const animation = this.state.animationTypeList[`zzc-slide-${direction}`];
        if ( animation ) {
            return animation;
        }
        return direction ? direction : null;
    }

    render () {
        const { visible, children, prefixCls, direction, onClose } = this.props;
        if ( this.state.showPopup ) {
            return (
                <Dialog
                    maskTransitionName='zzc-fade'
                    transitionName={this.getAnimationClass( direction )}
                    prefixCls={prefixCls}
                    boxClassName={`${prefixCls}-${direction}`}
                    visible={visible}
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