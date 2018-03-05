import React from 'react';
import classnames from 'classnames';
import loadSprite from './loadSprite.jsx';

import './index.scss';

export default class Icon extends React.PureComponent {
    componentDidMount() {
        loadSprite();
    }

    static defaultProps = {
        prefixCls: 'zzc-icon',
        type: undefined,
        size: 'md',
        className: '',
        style: {}
    }

    render() {
        const { prefixCls, type, size, className, style } = this.props;
        const cls = classnames(
            className,
            prefixCls,
            `${prefixCls}-${size}`,
            `${prefixCls}-${type}`
        );

        return (
            <svg className={cls} style={style}>
                <use xlinkHref={`#${prefixCls}-${type}`} />
            </svg>
        );
    }
}
