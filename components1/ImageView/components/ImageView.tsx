import React, { PureComponent } from 'react';
import classNames from 'classnames';
import config from '../../_util/config';
import Dialog from '../../Dialog';
import Gesture from '../../_util/Gesture';
import { isFunction } from '../../_util/typeof';
import { setLayoutScroll } from '../util';
import { zzcComponentUse } from '../../_util/gtag';

import { ImageViewProps } from '../propsType';

export interface IamgeViewState {
    isRender: boolean
    index: number
}

export default class IamgeView extends PureComponent<ImageViewProps, IamgeViewState> {
    static defaultProps = {
        prefixCls: `${config.cls}-imageview`,
        className: '',
        style: {},
        visible: false,
        imageList: [],
        defaultIndex: 0,
        onChange: () => {},
        onClose: () => {},
        swipeable: true,
        animate: true
    }

    constructor( props ) {
        super( props );
        const { visible, defaultIndex } = this.props;
        this.state = {
            isRender: visible,
            index: defaultIndex ? defaultIndex : 0
        };
        zzcComponentUse( 'ImageView', '组件渲染' );
    }

    private dialog: any;
    private layout: HTMLDivElement;

    componentWillReceiveProps( nextProps ): void {
        if ( nextProps.visible != this.props.visible && nextProps.visible ) {
            if ( nextProps.defaultIndex != this.state.index ) {
                this.setState( {
                    isRender: nextProps.visible,
                    index: nextProps.defaultIndex
                } );
            } else {
                this.setState( {
                    isRender: nextProps.visible
                } );
            }
        } else if ( nextProps.defaultIndex != this.state.index ) {
            this.setState( {
                index: nextProps.defaultIndex
            } );
        }
    }

    onPan = ( () => {
        // 默认是0
        let lastOffset: number | string = 0;
        let lastTime: number = 0;
        let finalOffset: number = 0;
        let startTime: number = 0;
        const maxIndex = this.props.imageList.length - 1;
        const getOffset = () => {
            let offset = +`${lastOffset}`.replace( '%', '' );
            if ( `${lastOffset}`.indexOf( '%' ) >= 0 ) {
                offset /= 100;
                offset *= this.layout.clientWidth;
            }
            return offset;
        };

        return {
            onPanStart: ( status ) => {
                startTime = status.time;
                this.layout.className = `${this.props.prefixCls}-content`;
            },
            onPanMove: ( status ) => {
                // 将上次记录到的offset加上这次move的距离得出本次offset的值
                let offset = getOffset() + status.moveStatus.x;
                // 最大滚动距离是负数
                const maxScrollOffset = -this.layout.scrollWidth + this.layout.clientWidth;
                // 当move向左的时候永远为负数，向右的时候永远是正数
                // 计算当前offset不能小于0和大于最大滚动距离。
                offset = Math.min( offset, 0 );
                offset = Math.max( offset, maxScrollOffset );
                setLayoutScroll( this.layout, offset, 'px' );
                // 记录每次滑动后计算的offset
                finalOffset = offset;
            },
            onPanEnd: ( status ) => {
                // 记录这次滑动的最后offset
                lastOffset = finalOffset;
                lastTime = status.time;
                const originCls = this.layout.className;

                if ( this.props.animate ) {
                    this.layout.className = `${originCls} ${this.props.prefixCls}-content-am`;
                }
                // 当滑动的距离大于当前Item宽度的50%，则跳转到下一个item，否则归为。
                let swiperIndex = Math.round( Math.abs( lastOffset ) / this.layout.clientWidth );
                swiperIndex = swiperIndex > maxIndex ? maxIndex : swiperIndex;
                lastOffset = `-${swiperIndex * 100}%`;

                // 快速滑动识别是否到下一页
                if ( lastTime - startTime < 150 && swiperIndex == this.state.index ) {
                    let index = status.moveStatus.x > 0 ? swiperIndex - 1 : swiperIndex + 1;
                    index = Math.min( index, maxIndex );
                    index = Math.max( index, 0 );
                    this.setState( {
                        index
                    }, () => {
                        this.props.onChange && isFunction( this.props.onChange ) && this.props.onChange( this.state.index );
                    } );
                    this.layout.style.transform = `translate3d(-${( index ) * 100}%, 0px, 0px)`;
                } else {
                    if ( swiperIndex != this.state.index ) {
                        this.setState( {
                            index: swiperIndex
                        }, () => {
                            this.props.onChange && isFunction( this.props.onChange ) && this.props.onChange( this.state.index );
                        } );
                    }
                    this.layout.style.transform = `translate3d(-${swiperIndex * 100}%, 0px, 0px)`;
                }
            },
            setCurrentOffset: ( offset: number | string ) => lastOffset = offset
        };
    } )()

    createImageContent(): JSX.Element {
        const { prefixCls } = this.props;
        this.onPan.setCurrentOffset( `-${this.state.index * 100}%` );
        return (
            <div
                style={{ transform: `translate3d(-${this.state.index * 100}%, 0px, 0px)` }}
                className={`${prefixCls}-content`}
                ref={( div ) => { this.getLayout( div ); }}
                onClick={() => { this.dialog.mask && this.dialog.mask.click && this.dialog.mask.click(); }}
            >
                {this.createImageList()}
            </div>
        );
    }

    createImageList(): JSX.Element {
        const { prefixCls, imageList, swipeable } = this.props;
        const hash = new Date().getTime();
        if ( swipeable && imageList.length > 0 ) {
            return (
                <Gesture
                    {...this.onPan}
                >
                    <div className={`${prefixCls}-swiper`}>
                        {
                            imageList.map( ( item, key ) => (
                                <section key={`imageView-${key}-${hash}`}>
                                    {this.lazyImage( item, key )}
                                </section>
                            ) )
                        }
                    </div>
                </Gesture>
            );
        }
        return (
            <div className={`${prefixCls}-swiper`}>
                {
                    imageList.map( ( item, key ) => (
                        <section key={`imageView-${key}-${hash}`}>
                            <img onClick={() => {this.dialog.mask.click();}} alt='' src={item} />
                        </section>
                    ) )
                }
            </div>
        );
    }

    lazyImage( item, key ): JSX.Element {
        const { index } = this.state;
        if ( index == key || index == key - 1 || index == key + 1 ) {
            return ( <img alt='' onClick={() => {this.dialog.mask.click();}} src={item} /> );
        }
        return ( <img alt='' onClick={() => {this.dialog.mask.click();}} /> );
    }

    getDialog( dialog ): void {
        this.dialog = dialog;
    }

    getLayout( layout ): void {
        this.layout = layout;
    }

    close(): void {
        if ( this.state.isRender ) {
            this.setState( {
                isRender: false
            } );
        }
        this.props.onClose && isFunction( this.props.onClose ) && this.props.onClose( this.state.index );
    }

    render(): JSX.Element | null {
        const { prefixCls, className, style, visible } = this.props;
        const { isRender } = this.state;
        if ( isRender ) {
            return (
                <Dialog
                    getRef={( dialog ) => { this.getDialog( dialog ); }}
                    maskClose
                    maskClassName={`${prefixCls}-mask`}
                    boxClassName={`${prefixCls}-box`}
                    transitionName={`${config.cls}-fade`}
                    maskTransitionName={`${config.cls}-fade`}
                    visible={visible}
                    className={classNames( prefixCls, className )}
                    style={style}
                    closeCallback={() => { this.close(); }}
                >
                    {this.createImageContent()}
                </Dialog>
            );
        }
        return null;
    }
}
