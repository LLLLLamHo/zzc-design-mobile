import React from 'react';
import classnames from 'classnames';
export interface TabsListUnserlineProps {
    prefixCls?: string,
    style: React.CSSProperties,
    tabUnderlineAnimation?: boolean
}

export interface itemObject {
    title: string | JSX.Element
}

export default function TabsListUnserlineProps( props: TabsListUnserlineProps ) {
    const { prefixCls, style, tabUnderlineAnimation } = props;
    const cls = classnames(
        `${prefixCls}-ls-unline`,
        {
            [`${prefixCls}-ls-unline-am`]: tabUnderlineAnimation
        }
    );
    return (
        <div
            className={cls}
            style={style}
        />
    );
}