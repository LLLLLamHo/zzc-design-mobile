import React from 'react';
import classnames from 'classnames';
import './index.scss';

export interface PopupProps {
    prefixCls?: string,
    style?: React.CSSProperties,
}

export default class Tabs extends React.PureComponent<PopupProps> {
    static defaultProps = {
        prefixCls: 'zzc-tabs',
        style: {}
    }

    render () {
        const { prefixCls, style } = this.props;
        return (
            <div
                className={classnames( `${prefixCls}-box` )}
                style={style}
            >
                <div className={`${prefixCls}-tab-list`}>
                    <div className={`${prefixCls}-tab-list-item`}>tab one</div>
                    <div className={`${prefixCls}-tab-list-item`}>tab two</div>
                    <div className={`${prefixCls}-tab-list-item`}>tab three</div>
                </div>
            </div>
        );
    }
}