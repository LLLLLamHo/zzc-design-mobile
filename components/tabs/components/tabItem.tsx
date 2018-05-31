import React from 'react';

export interface TabsItemProps {
    itemKey: string,
    className: string,
    clickEvent: Function,
    style: React.CSSProperties,
    item: itemObject
}

export interface itemObject {
    title: string | JSX.Element
}

export default function TabsItem( props: TabsItemProps ) {
    const { itemKey, className, clickEvent, style, item } = props;
    return (
        <div
            key={itemKey}
            className={className}
            style={style}
            onClick={() => { clickEvent(); }}
        >
            {item.title}
        </div>
    );
}