import React from 'react';
import classnames from 'classnames';
import TabsPane from './tabPane';
import Gesture from '../../_util/Gesture';
import { setLayoutScroll, getTranslate3dStyle } from '../util';
import { TabContentProps } from '../propsType';
import { isArray } from '../../_util/typeof';

export default class TabrContent extends React.PureComponent<TabContentProps> {
    private layout: HTMLDivElement
    setContentWrapStyle () {
        const { currIndex, swipeDirection } = this.props;
        const value = currIndex ? `-${currIndex * 100}%` : '0';
        this.onPan.setCurrentOffset( value );
        return getTranslate3dStyle( value, swipeDirection );
    }

    renderContentList () {
        const { children, prefixCls, animated } = this.props;
        const warpCls = classnames(
            `${prefixCls}-content-wrap`,
            {
                [`${prefixCls}-content-wrap-am`]: animated
            }
        );

        return (
            <div className={warpCls} style={this.setContentWrapStyle()} ref={( refs ) => { this.setLayout( refs ); }}>
                <div className={`${prefixCls}-content`}>
                    {children && children instanceof Array && children.map( ( ( item, key ) => (
                        <TabsPane
                            prefixCls={prefixCls}
                            key={`zzc-tabs-content-item-${key}-${new Date().getTime()}`}
                        >
                            {item}
                        </TabsPane>
                    ) ) )}
                </div>
            </div>
        );
    }

    renderContnt () {
        const { children, prefixCls, isOpenTabContentScroll } = this.props;
        if ( children && !isArray( children ) ) {
            return (
                <div className={`${prefixCls}-content`}>
                    <TabsPane
                        prefixCls={prefixCls}
                    >
                        {children}
                    </TabsPane>
                </div>
            );
        }

        if ( isOpenTabContentScroll ) {
            return (
                <Gesture
                    {...this.onPan}
                >
                    {this.renderContentList()}
                </Gesture>
            );
        }
        return this.renderContentList();
    }

    setLayout ( div ): void {
        this.layout = div;
    }

    onPan = ( () => {
        // 默认是0
        let lastOffset: number | string = 0;
        let finalOffset: number = 0;
        const maxIndex = this.props.tabs.length - 1;
        const isVertical = this.props.swipeDirection == 'vertical';
        const getOffset = () => {
            let offset = +`${lastOffset}`.replace( '%', '' );
            if ( `${lastOffset}`.indexOf( '%' ) >= 0 ) {
                offset /= 100;
                offset *= isVertical ? this.layout.clientHeight : this.layout.clientWidth;
            }
            return offset;
        };

        if ( !this.props.animated ) {
            return {
                setCurrentOffset: ( offset: number | string ) => lastOffset = offset
            };
        }

        return {
            onPanStart: () => {
                this.layout.className = `${this.props.prefixCls}-content-wrap`;
            },
            onPanMove: ( status ) => {
                // 将上次记录到的offset加上这次move的距离得出本次offset的值
                let offset = isVertical ? getOffset() + status.moveStatus.y : getOffset() + status.moveStatus.x;
                // 最大滚动距离是负数
                const maxScrollOffset = isVertical ? -this.layout.scrollHeight + this.layout.clientHeight : -this.layout.scrollWidth + this.layout.clientWidth;
                // 当move向左的时候永远为负数，向右的时候永远是正数
                // 计算当前offset不能小于0和大于最大滚动距离。
                offset = Math.min( offset, 0 );
                offset = Math.max( offset, maxScrollOffset );
                setLayoutScroll( this.layout, offset, 'px', isVertical );
                // 记录每次滑动后计算的offset
                finalOffset = offset;
            },
            onPanEnd: () => {
                // 记录这次滑动的最后offset
                lastOffset = finalOffset;
                const originCls = this.layout.className;
                this.layout.className = `${originCls} ${this.props.prefixCls}-content-wrap-am`;
                if ( this.props.swipeable ) {
                    // 当滑动的距离大于当前Item宽度的50%，则跳转到下一个item，否则归为。
                    let swiperIndex = isVertical ? Math.round( Math.abs( lastOffset ) / this.layout.clientHeight ) : Math.round( Math.abs( lastOffset ) / this.layout.clientWidth );
                    swiperIndex = swiperIndex > maxIndex ? maxIndex : swiperIndex;
                    lastOffset = `-${swiperIndex * 100}%`;
                    if ( swiperIndex == this.props.currIndex ) {
                        this.layout.style.transform = isVertical ? `translate3d(0px, -${swiperIndex * 100}%, 0px)` : `translate3d(-${swiperIndex * 100}%, 0px, 0px)`;
                    } else {
                        this.props.onChange( swiperIndex );
                    }
                }
            },
            setCurrentOffset: ( offset: number | string ) => lastOffset = offset
        };
    } )()

    render () {
        const { prefixCls, swipeDirection } = this.props;
        const cls = classnames(
            `${prefixCls}-content-box`,
            `${prefixCls}-content-box-${swipeDirection}`
        );

        return (
            <div className={cls}>
                {this.renderContnt()}
            </div>
        );
    }
}