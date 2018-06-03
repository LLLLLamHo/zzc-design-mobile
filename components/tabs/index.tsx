import React from 'react';
import classnames from 'classnames';
import TabBar from './components/tabBar';
import TabContent from './components/tabContent';
import { isFunction, isNull } from '../_util/typeof';
import { TabsProps } from './propsType';
import './index.scss';

export interface TabsState {
    currIndex: number
    preIndex: number
}
export default class Tabs extends React.PureComponent<TabsProps, TabsState> {
    static defaultProps = {
        prefixCls: 'zzc-tabs',
        className: '',
        style: {},
        tabBarUnderlineStyle: {},
        tabs: [],
        defaultIndex: 0,
        index: null,
        onChange: () => { },
        maxTabLength: 3,
        swipeDirection: 'horizontal',
        animated: true,
        swipeable: true,
        isOpenTabBarScroll: true,
        isOpenTabContentScroll: true,
        tabBarPosition: 'top'
    }

    constructor( props: TabsProps ) {
        super( props );
        const index = props.index ? props.index : props.defaultIndex;
        this.state = {
            currIndex: index,
            preIndex: index
        };
        this.onChange = this.onChange.bind( this );
    }

    componentWillReceiveProps ( nextPros: any ): void {
        if ( nextPros.index != null && nextPros.index != this.state.currIndex ) {
            this.setState( {
                currIndex: nextPros.index,
                preIndex: this.state.currIndex
            } );
        }
    }

    onChange ( key: number ): void {
        if ( isFunction( this.props.onChange ) ) {
            this.props.onChange( key );
        }
        this.goToTab( key );
    }

    goToTab ( key: number ): void {
        const { currIndex } = this.state;
        // 当tabs是受控时，不主动更新state，通过外部改变props来改变tabs的state
        if ( isNull( this.props.index ) ) {
            this.setState( {
                currIndex: key,
                preIndex: currIndex
            } );
        }
    }

    render (): JSX.Element {
        const { prefixCls, style, children, tabBarPosition, className } = this.props;
        const direction = tabBarPosition == 'top' || tabBarPosition == 'bottom' ? 'horizontal' : 'vertical';
        const cls = classnames(
            className,
            `${prefixCls}-box`,
            `${prefixCls}-box-${tabBarPosition}`
        );
        return (
            <div
                className={cls}
                style={style}
            >
                <TabBar
                    {...this.props}
                    tabDirection={direction}
                    {...this.state}
                    onChange={this.onChange}
                />
                {
                    children &&
                    <TabContent
                        {...this.props}
                        {...this.state}
                        onChange={this.onChange}
                    >
                        {children}
                    </TabContent>
                }
            </div>
        );
    }
}