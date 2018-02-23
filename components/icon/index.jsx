import React from 'react';
import classnames from 'classnames';
import loadSprite from './loadSprite.jsx';

import './index.scss';

const PREFIXCLS = 'zzc-icon';

export default class Icon extends React.PureComponent {
    componentDidMount() {
        loadSprite();
    }

    static defaultProps = {
        type: undefined,
        size: 'md',
        className: '',
        style: {}
    }

    render() {
        const { type, size, className, style } = this.props;
        const cls = classnames(
            className,
            PREFIXCLS,
            `${PREFIXCLS}-${size}`,
            `${PREFIXCLS}-${type}`
        );

        return (
            <svg className={cls} style={style}>
                <use xlinkHref={`#${PREFIXCLS}-${type}`} />
            </svg>
        );
    }
}
