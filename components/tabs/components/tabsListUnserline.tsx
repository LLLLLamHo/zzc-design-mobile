import React from 'react';
import classnames from 'classnames';
export interface TabsListUnserlineProps {
    prefixCls?: string,
    style: React.CSSProperties,
    animated?: boolean
}

export interface itemObject {
    title: string | JSX.Element
}

export default function TabsListUnserlineProps( props: TabsListUnserlineProps ) {
    const { prefixCls, style, animated } = props;
    const cls = classnames(
        `${prefixCls}-ls-unline`,
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