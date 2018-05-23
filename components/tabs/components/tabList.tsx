import React from 'react';
import classnames from 'classnames';
import TabsItem from './tabItem';
import TabsListUnserlineProps from './tabsListUnserline';
import { isArray } from '../../_util/typeof';

export interface TabsListProps {
    prefixCls?: string,
    tabs?: Array<tabs>,
    onChange: Function,
    currIndex: number,
    maxTabLength: number
}

export interface tabs {
    title: string | JSX.Element
}

export default class TabsList extends React.PureComponent<TabsListProps> {
    setTabIsActive ( prefixCls, currIndex, key ) {
        return classnames(
            `${prefixCls}-list-item`,
            {
                [`${prefixCls}-active`]: ( key == currIndex )
            }
        );
    }

    onChange ( key: number ): void {
        this.props.onChange( key );
    }

    setWidth ( maxLength: any ): string {
        const width = ( 100 / maxLength ).toFixed( 4 );
        return width;
    }

    setTabItem ( width: any ): any {
        const { prefixCls, tabs, currIndex } = this.props;
        return ( tabs && tabs.map( ( item, key ) => (
            <TabsItem
                key={`zzc-tab-${key}-${new Date().getTime()}`}
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
        const { prefixCls, tabs, currIndex, maxTabLength } = this.props;
        if ( isArray( tabs ) ) {
            const width = this.setWidth( maxTabLength );
            return (
                <div className={`${prefixCls}-list`}>
                    {this.setTabItem( width )}
                    <TabsListUnserlineProps
                        className={`${prefixCls}-list-unserline`}
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