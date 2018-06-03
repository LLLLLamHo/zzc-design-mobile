import React from 'react';
import classnames from 'classnames';
export interface TabsListUnserlineProps {
    prefixCls?: string,
    tabBarUnderlineStyle?: React.CSSProperties,
    currIndex?: number,
    size: string,
    animated?: boolean,
    tabBarPosition?: string
}
export interface itemObject {
    title: string | JSX.Element
}

function setPosition ( currIndex: any ): string {
    return ( currIndex * 100 ).toFixed( 4 );
}

export default function TabsListUnserlineProps( props: TabsListUnserlineProps ) {
    const { prefixCls, size, animated, tabBarPosition, currIndex, tabBarUnderlineStyle } = props;
    const unlineTransform = tabBarPosition == 'top' || tabBarPosition == 'bottom' ? `translate3d(${setPosition(currIndex)}%,0,0)` : `translate3d(0,${setPosition(currIndex)}%,0)`;
    let style = tabBarPosition == 'top' || tabBarPosition == 'bottom' ? { width: `${size}%`,transform: unlineTransform } : { height: `${size}%`,transform: unlineTransform };
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