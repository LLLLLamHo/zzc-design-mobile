import React from 'react';
import classnames from 'classnames';
import Gesture from '../../_util/Gesture';
import TabsList from './tabList';
import { TabBarProps } from '../propsType';
import { setLayoutScroll, getTabItemSize, getTranslate3dStyle } from '../util/';

export interface TabBarState {
    canScroll: boolean
    wrapStyle: string
}

export default class TabBar extends React.PureComponent<TabBarProps, TabBarState> {
    private layout : HTMLDivElement

    constructor( props: TabBarProps ) {
        super( props );
        this.state = {
            canScroll: props.tabs && props.tabs.length > props.maxTabLength,
            wrapStyle: this.getWarpContentStyle( props.currIndex )
        };
    }

    componentWillReceiveProps ( nextProps: TabBarProps ) {
        if ( this.props.currIndex != nextProps.currIndex ) {
            this.setState( {
                wrapStyle: this.getWarpContentStyle( nextProps.currIndex )
            } );
        }
    }

    getWarpContentStyle ( index: number ): string {
        const { maxTabLength, tabs } = this.props;
        let offset = '0';
        const calcMaxTabLength = maxTabLength - 1;
        if ( index >= ( calcMaxTabLength - 1 ) && index < tabs.length - 1 ) {
            offset = `-${getTabItemSize( maxTabLength ) * ( index - ( calcMaxTabLength - 1 ) )}%`;
        }

        if ( index == ( tabs.length - 1 ) ) {
            offset = `-${getTabItemSize( maxTabLength ) * ( ( index - 1 ) - ( calcMaxTabLength - 1 ) )}%`;
        }

        this.onPan.setCurrentOffset( offset );
        return offset;
    }

    setWrapStyle ( wrapStyle: string ) {
        return getTranslate3dStyle( wrapStyle, this.props.tabDirection );
    }

    onChange ( key: number ): void {
        this.setState( {
            wrapStyle: this.getWarpContentStyle( key )
        } );
        this.props.onChange( key );
    }

    onPan = ( () => {
        // 默认是0
        let lastOffset: number | string = 0;
        let finalOffset: number = 0;
        const { animated } = this.props;
        const isVertical = this.props.tabDirection == 'vertical';

        const getOffset = () => {
            let offset = +`${lastOffset}`.replace( '%', '' );
            if ( `${lastOffset}`.indexOf( '%' ) >= 0 ) {
                offset /= 100;
                offset *= isVertical ? this.layout.clientHeight : this.layout.clientWidth;
            }
            return offset;
        };

        return {
            onPanStart: () => {
                if ( animated ) {
                    this.layout.className = `${this.props.prefixCls}-bar-wrap`;
                }
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
                if ( animated ) {
                    this.layout.className = `${originCls} ${this.props.prefixCls}-bar-wrap-am`;
                }
            },
            setCurrentOffset: ( offset: number | string ) => lastOffset = offset
        };
    } )()

    renderTabbar () {
        const { currIndex, prefixCls, tabs, maxTabLength, animated, tabBarPosition, tabBarUnderlineStyle } = this.props;
        const { wrapStyle } = this.state;
        const cls = classnames(
            `${prefixCls}-bar-wrap`,
            {
                [`${prefixCls}-bar-wrap-am`]: animated
            }
        );
        return (
            <div
                className={cls}
                ref={( refs ) => { this.setLayout( refs ); }}
                style={this.setWrapStyle( wrapStyle )}
            >
                <TabsList
                    tabBarUnderlineStyle={tabBarUnderlineStyle}    
                    tabBarPosition={tabBarPosition}
                    animated={animated}
                    maxTabLength={maxTabLength}
                    prefixCls={prefixCls}
                    tabs={tabs}
                    currIndex={currIndex}
                    onChange={( key ) => { this.onChange( key ); }}
                />
            </div>
        );
    }

    wrapTabsList (): JSX.Element {
        const { isOpenTabBarScroll } = this.props;
        const { canScroll } = this.state;
        const onPan = this.onPan;
        // 当tabs数量大于最大显示数量的时候需要加入手势提供滑动
        if ( canScroll && isOpenTabBarScroll ) {
            return (
                <Gesture
                    {...onPan}
                >
                    {this.renderTabbar()}
                </Gesture>
            );
        }
        return this.renderTabbar();
    }

    setLayout ( div ): void {
        this.layout = div;
    }

    render (): JSX.Element {
        const { prefixCls } = this.props;
        return (
            <div className={`${prefixCls}-bar-box`}>
                {this.wrapTabsList()}
            </div>
        );
    }
}