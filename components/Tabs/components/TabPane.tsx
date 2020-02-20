import React from 'react';

export interface TabsPaneProps{
    prefixCls?: string
    itemKey?: string
}

export default class TabsPane extends React.PureComponent<TabsPaneProps> {
    render () {
        const { prefixCls, children, itemKey } = this.props;
        return (
            <div key={itemKey} className={`${prefixCls}-content-item`}>
                {children}
            </div>
        );
    }
}