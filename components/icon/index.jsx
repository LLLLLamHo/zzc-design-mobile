import React from 'react';
import classnames from 'classnames';
import loadSprite from './loadSprite.jsx';

import './index.scss';

const PREFIXCLS = 'zzc-icon';

export default class Icon extends React.PureComponent {
    componentDidMount() {
        loadSprite();
    }
    render() {
        const {
            type,
            size = 'md',
            className,
            ...restProps
        } = this.props;
        const cls = classnames(
            className,
            PREFIXCLS,
            `${PREFIXCLS}-${size}`,
            `${PREFIXCLS}-${type}`
        );
        return (
            <svg className={cls} {...restProps}>
                <use xlinkHref={`#${type}`} />
            </svg>
        );
    }
}
