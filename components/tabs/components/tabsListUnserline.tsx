import React from 'react';

export interface TabsListUnserlineProps {
    className: string,
    style: React.CSSProperties,
}

export interface itemObject {
    title: string | JSX.Element
}

export default function TabsListUnserlineProps( props: TabsListUnserlineProps ) {
    const { className, style } = props;
    return (
        <div
            className={className}
            style={style}
        />
    );
}