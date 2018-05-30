import React from 'react';
import classnames from 'classnames';
import TabsItem from './tabItem';
import TabsListUnserlineProps from './tabsListUnserline';
import { getTabItemWidht } from '../util/';
import { isArray } from '../../_util/typeof';

export interface TabsListProps {
    prefixCls?: string,
    tabs?: Array<tabs>,
    onChange: Function,
    currIndex: number,
    maxTabLength: number,
    tabUnderlineAnimation?: boolean
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

    setTabItem ( width: any ): any {
        const { prefixCls, tabs, currIndex } = this.props;
        return ( tabs && tabs.map( ( item, key ) => (
            <TabsItem
                key={`zzc-tabitem-${key}`}
                itemKey={`zzc-tab-${key}`}
                className={this.setTabIsActive( prefixCls, currIndex, key )}
                clickEvent={() => { this.onChange( key ); }}
                style={{
                    width: `${width}%`
                }}
                item={item}
            />
        ) ) );
    }

    setPosition ( currIndex: any ): string {
        return ( currIndex * 100 ).toFixed( 4 );
    }

    setTabList (): JSX.Element | null {
        const { prefixCls, tabs, currIndex, maxTabLength, tabUnderlineAnimation } = this.props;
        if ( isArray( tabs ) ) {
            const width = getTabItemWidht( maxTabLength );
            return (
                <div className={`${prefixCls}-ls`}>
                    {this.setTabItem( width )}
                    <TabsListUnserlineProps
                        tabUnderlineAnimation={tabUnderlineAnimation}
                        prefixCls={prefixCls}
                        style={{
                            width: `${width}%`,
                            transform: `translate3d(${this.setPosition( currIndex )}%,0,0)`
                        }}
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