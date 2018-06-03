import React from 'react';
import classnames from 'classnames';
import TabsItem from './tabItem';
import TabsListUnserlineProps from './tabsListUnserline';
import { getTabItemSize } from '../util/';
import { isArray } from '../../_util/typeof';

export interface TabsListProps {
    prefixCls?: string,
    tabBarUnderlineStyle?: React.CSSProperties
    tabBarPosition?: string,
    tabs?: Array<tabs>,
    onChange: Function,
    currIndex: number,
    maxTabLength: number,
    animated?: boolean
}

export interface tabs {
    title: string | JSX.Element
}

export default class TabsList extends React.PureComponent<TabsListProps> {
    setTabIsActive ( prefixCls, currIndex, key ) {
        return classnames(
            `${prefixCls}-ls-item`,
            {
                [`${prefixCls}-active`]: ( key == currIndex )
            }
        );
    }

    onChange ( key: number ): void {
        this.props.onChange( key );
    }

    setTabItem ( size: any ): any {
        const { prefixCls, tabs, currIndex, tabBarPosition } = this.props;
        const style = tabBarPosition == 'top' || tabBarPosition == 'bottom' ? { width: `${size}%` } : { height: `${size}%` };
        return ( tabs && tabs.map( ( item, key ) => (
            <TabsItem
                key={`zzc-tabitem-${key}`}
                itemKey={`zzc-tab-${key}`}
                className={this.setTabIsActive( prefixCls, currIndex, key )}
                clickEvent={() => { this.onChange( key ); }}
                style={style}
                item={item}
            />
        ) ) );
    }

    setTabList (): JSX.Element | null {
        const { prefixCls, tabs, currIndex, maxTabLength, animated, tabBarPosition, tabBarUnderlineStyle } = this.props;
        if ( isArray( tabs ) ) {
            const size = getTabItemSize( maxTabLength );
            const cls = classnames(
                `${prefixCls}-ls`,
                {
                    [`${prefixCls}-ls-horizontal`]: tabBarPosition == 'top' || tabBarPosition == 'bottom',
                    [`${prefixCls}-ls-vertical`]: tabBarPosition == 'left' || tabBarPosition == 'right'
                },
            );
            return (
                <div className={cls}>
                    {this.setTabItem( size )}
                    <TabsListUnserlineProps
                        tabBarUnderlineStyle={tabBarUnderlineStyle}    
                        currIndex={currIndex}
                        tabBarPosition={tabBarPosition}
                        animated={animated}
                        prefixCls={prefixCls}
                        size={size}
                    />
                </div>
            );
        }
        return null;
    }

    render () {
        return ( this.setTabList() );
    }
}