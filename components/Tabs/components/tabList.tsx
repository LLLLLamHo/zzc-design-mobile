import React from 'react';
import classnames from 'classnames';
import TabsItem from './tabItem';
import TabsListUnserlineProps from './tabsListUnserline';
import { getTabItemSize } from '../util/';
import config from '../../_util/config';
import { isArray } from '../../_util/typeof';

export interface TabsListProps {
    prefixCls?: string,
    tabBarUnderlineStyle?: React.CSSProperties
    tabBarPosition?: string,
    tabs?: Array<tabs>,
    saveTabItem: Function,
    onChange: Function,
    currIndex: number,
    maxTabLength: number,
    animated?: boolean,
    tabItems: Array<any>
    status: string
}

export interface tabs {
    title: string | JSX.Element
}

export default class TabsList extends React.PureComponent<TabsListProps> {
    setTabIsActive(prefixCls?: string, currIndex?: number, key?: number): string {
        return classnames(
            `${prefixCls}-ls-item`,
            {
                [`${prefixCls}-active`]: (key == currIndex)
            }
        );
    }

    onChange(key: number): void {
        this.props.onChange(key);
    }

    setTabItem(size: any): any {
        const { prefixCls, tabs, currIndex, tabBarPosition, saveTabItem } = this.props;
        const style = tabBarPosition == 'top' || tabBarPosition == 'bottom' ? { width: `${size}%` } : { height: `${size}%` };
        return (tabs && tabs.map((item, key) => (
            <TabsItem
                prefixCls={prefixCls}
                saveTabItem={saveTabItem}
                key={`${config.cls}-tabitem-${key}`}
                itemKey={`${config.cls}-tab-${key}`}
                className={this.setTabIsActive(prefixCls, currIndex, key)}
                clickEvent={() => { this.onChange(key); }}
                style={style}
                index={key}
                item={item}
            />
        )));
    }

    setTabList(): JSX.Element | null {
        const { prefixCls, tabs, currIndex, maxTabLength, animated, tabBarPosition, tabBarUnderlineStyle, tabItems, status } = this.props;
        if (isArray(tabs)) {
            
            const size = getTabItemSize(maxTabLength);
            let lineSize = size;
            let linePosition= size;
            const cls = classnames(
                `${prefixCls}-ls`,
                {
                    [`${prefixCls}-ls-horizontal`]: tabBarPosition == 'top' || tabBarPosition == 'bottom',
                    [`${prefixCls}-ls-vertical`]: tabBarPosition == 'left' || tabBarPosition == 'right'
                },
            );

            if ( tabItems[currIndex] ) {
                if ( tabBarPosition == 'top' || tabBarPosition == 'bottom' ) {
                    lineSize = tabItems[currIndex].offsetWidth;
                    linePosition = tabItems[currIndex].offsetLeft;
                } else {
                    lineSize = tabItems[currIndex].offsetHeight;
                    linePosition = tabItems[currIndex].offsetTop;
                }
            }

            return (
                <div className={cls}>
                    {this.setTabItem(size)}
                    {status == 'ready' && <TabsListUnserlineProps
                        tabBarUnderlineStyle={tabBarUnderlineStyle}
                        currIndex={currIndex}
                        tabBarPosition={tabBarPosition}
                        animated={animated}
                        prefixCls={prefixCls}
                        size={lineSize}
                        linePosition={linePosition}
                    />}
                </div>
            );
        }
        return null;
    }

    render() {
        return (this.setTabList());
    }
}