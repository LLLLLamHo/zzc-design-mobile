import React from 'react';

export interface TabsPaneProps{
    prefixCls?: string
    key?: string
}

export default class TabsPane extends React.PureComponent<TabsPaneProps> {
    render () {
        const { prefixCls, children, key } = this.props;
        return (
            <div key={key} className={`${prefixCls}-content-item`}>
                {children}
            </div>
        );
    }
}