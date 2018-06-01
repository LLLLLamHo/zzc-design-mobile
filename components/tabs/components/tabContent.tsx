import React from 'react';
import classnames from 'classnames';
import TabsPane from './tabPane';
import Gesture from '../../_util/Gesture';
import { setLayoutScroll, getTranslate3dStyle } from '../util';
import { TabContentProps } from '../propsType';

export default class TabrContent extends React.PureComponent<TabContentProps> {
    private layout: HTMLDivElement
    setContentWrapStyle () {
        const { currIndex, tabDirection } = this.props;
        const value = currIndex ? `-${currIndex * 100}%` : '0';
        this.onPan.setCurrentOffset( value );
        return getTranslate3dStyle( value, tabDirection );
    }

    renderContnt () {
        const { children, prefixCls, animated } = this.props;
        if ( children && !children.length ) {
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

        const warpCls = classnames(
            `${prefixCls}-content-wrap`,
            {
                [`${prefixCls}-content-wrap-am`]: animated
            }
        );
        return (
            <Gesture
                {...this.onPan}
            >
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
            </Gesture>
        );
    }

    setLayout ( div ): void {
        this.layout = div;
    }

    onPan = ( () => {
        // 默认是0
        let lastOffset: number | string = 0;
        let finalOffset: number = 0;
        const maxIndex = this.props.tabs.length - 1;

        const getOffset = () => {
            let offset = +`${lastOffset}`.replace( '%', '' );
            if ( `${lastOffset}`.indexOf( '%' ) >= 0 ) {
                offset /= 100;
                offset *= this.layout.clientWidth;
            }
            return offset;
        };

        return {
            onPanStart: () => {
                this.layout.className = `${this.props.prefixCls}-content-wrap`;
            },
            onPanMove: ( status ) => {
                console.log( getOffset() );
                // 将上次记录到的offset加上这次move的距离得出本次offset的值
                let offset = getOffset() + status.moveStatus.x;
                // 最大滚动距离是负数
                const maxScrollOffset = -this.layout.scrollWidth + this.layout.clientWidth;
                // 当move向左的时候永远为负数，向右的时候永远是正数
                // 计算当前offset不能小于0和大于最大滚动距离。
                offset = Math.min( offset, 0 );
                offset = Math.max( offset, maxScrollOffset );
                setLayoutScroll( this.layout, offset, 'px', this.props.tabDirection == 'vertical' );
                this.layout.style.transform = `translate3d(${offset}px, 0px, 0px)`;
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
                    let swiperIndex = Math.round( Math.abs( lastOffset ) / this.layout.clientWidth );
                    swiperIndex = swiperIndex > maxIndex ? maxIndex : swiperIndex;
                    lastOffset = `-${swiperIndex * 100}%`;
                    if ( swiperIndex == this.props.currIndex ) {
                        this.layout.style.transform = `translate3d(-${swiperIndex * 100}%, 0px, 0px)`;
                    } else {
                        this.props.onChange( swiperIndex );
                    }
                }
            },
            setCurrentOffset: ( offset: number | string ) => lastOffset = offset
        };
    } )()

    render () {
        return this.renderContnt();
    }
}