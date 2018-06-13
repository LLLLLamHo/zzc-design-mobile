import React, { PureComponent } from 'react';
import classNames from 'classnames';

import '../style/index';
import './index.scss';

export interface ListProps {
        prefixCls?: string,
        preTips?: string,
        endTips?: string,
        className?: string,
        style?: React.CSSProperties
}

export default class List extends PureComponent<ListProps, any> {
    static defaultProps = {
        prefixCls: 'zzc-list',
        className: '',
        style: {},
        preTips: '',
        endTips: ''
    }

    render() {
        const { prefixCls, className, style, children, preTips, endTips } = this.props;
        const listClassNames: string = classNames(
            prefixCls,
            className
        );
        return (
            <div className={listClassNames}
                style={style}>
                {preTips && <p className={`${prefixCls}-pretips`}>{preTips}</p>}

                {children ? (
                    <div className={`${prefixCls}-body`}>{children}</div>
                ) : null}

                {endTips && <p className={`${prefixCls}-endtips`}>{endTips}</p>}
            </div>
        );
    }
}
