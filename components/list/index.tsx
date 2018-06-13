import React, { PureComponent } from 'react';
import classNames from 'classnames';

import '../style/index';
import './index.scss';

export interface ListProps {
        prefixCls?: string,
        title?: string,
        preTips: string,
        className?: string,
        style?: React.CSSProperties
}

export default class List extends PureComponent<ListProps, any> {
    static defaultProps = {
        prefixCls: 'zzc-list',
        className: '',
        style: {}
    }

    render() {
        const { prefixCls, className, style, children} = this.props;
        const listClassNames: string = classNames(
            prefixCls,
            className
        );
        return (
            <div className={listClassNames}
                style={style}>
                {children ? (
                    <div className={`${prefixCls}-body`}>{children}</div>
                ) : null}
            </div>
        );
    }
}
