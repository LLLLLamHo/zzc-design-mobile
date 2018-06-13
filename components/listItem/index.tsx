import React, { PureComponent } from 'react';
import classNames from 'classnames';

import '../style/index';
import './index.scss';

export interface ListItemProps {
        prefixCls?: string,
        space?: string,
        className?: string,
        style?: React.CSSProperties,
        inStyle?: React.CSSProperties
}

export default class ListItem extends PureComponent<ListItemProps, any> {
    static defaultProps = {
        prefixCls: 'zzc-list-item',
        space: 'left',
        className: '',
        style: {},
        inStyle: {}
    }

    render() {
        const { prefixCls, space, className, style, inStyle, children} = this.props;
        const listItemClassNames: string = classNames(
            prefixCls,
            className,
            {
                [`${prefixCls}-${space}`]: space !== ''
            }
        );
        return (
            <div className={listItemClassNames}
                style={style}>
                <div className={`${prefixCls}-box`}
                    style={inStyle}>
                    {children ? (
                        <div className={`${prefixCls}-content`}>{children}</div>
                    ) : null}
                </div>
            </div>
        );
    }
}
