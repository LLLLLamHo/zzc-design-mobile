import React from 'react';
import classnames from 'classnames';
export interface TabsListUnserlineProps {
    prefixCls?: string,
    tabBarUnderlineStyle?: React.CSSProperties,
    currIndex?: number,
    size: string,
    animated?: boolean,
    tabBarPosition?: string,
    linePosition: number
}
export interface itemObject {
    title: string | JSX.Element
}

export default function TabsListUnserlineProps( props: TabsListUnserlineProps ) {
    const { prefixCls, size, animated, tabBarPosition, tabBarUnderlineStyle, linePosition } = props;
    const unlineTransform = tabBarPosition == 'top' || tabBarPosition == 'bottom' ? `translate3d(${linePosition}px,0,0)` : `translate3d(0,${linePosition}px,0)`;
    let style = tabBarPosition == 'top' || tabBarPosition == 'bottom' ? { width: `${size}px`,transform: unlineTransform } : { height: `${size}px`,transform: unlineTransform };
    style = Object.assign( {}, style, tabBarUnderlineStyle );
    const cls = classnames(
        `${prefixCls}-ls-unline`,
        `${prefixCls}-ls-unline-${tabBarPosition}`,
        {
            [`${prefixCls}-ls-unline-am`]: animated
        }
    );
    return (
        <div
            className={cls}
            style={style}
        />
    );
}