import React from 'react';

export interface TabsItemProps {
    itemKey: string,
    className: string,
    clickEvent: Function,
    style: React.CSSProperties,
    item: itemObject
    index: number
    saveTabItem: Function
    prefixCls?: string
}

export interface itemObject {
    title: string | JSX.Element
}

export default function TabsItem(props: TabsItemProps) {
    const { index, itemKey, className, clickEvent, style, item, saveTabItem, prefixCls } = props;
    return (
        <div
            key={itemKey}
            className={className}
            style={style}
            onClick={() => { clickEvent(); }}
        >
            <div className={`${prefixCls}-item-box`} ref={(item) => { item && saveTabItem(index, item) }}>{React.isValidElement(item) ? item : item.title}</div>
        </div>
    );
}