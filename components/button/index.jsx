import React, { PureComponent } from 'react';
import classNames from 'classnames';
import TouchFeedback from '../_util/components/TouchFeedback.jsx';
import { isUndefined } from '../_util/typeof';

import '../style/index';
import './index.scss';

export default class Button extends PureComponent {
    static defaultProps = {
        prefixCls: 'zzc-button',
        size: false,
        inline: false,
        full: false,
        disabled: false,
        noBorder: false,
        ghost: false,
        onClick() { },
        className: '',
        style: {
        },
        activeStyle: {
        },
        activeClassName: undefined
    };

    setActiveClassName( activeClassName, type = 'default', ghost ) {
        const activeClassNameIsUndefined = isUndefined( activeClassName );
        const className = classNames( {
            [`${this.props.prefixCls}-active-${type}`]: activeClassNameIsUndefined && !ghost,
            [`${this.props.prefixCls}-active-${type}-ghost`]: activeClassNameIsUndefined && ghost,
            [`${this.props.prefixCls}-active-${activeClassName}`]: !activeClassNameIsUndefined
        } );

        return className;
    }

    render() {
        const { ghost, noBorder, children, className, prefixCls, type, full, size, inline, disabled, style, activeStyle, activeClassName, onClick } = this.props;
        const btnClassNames = classNames(
            prefixCls,
            className,
            {
                [`${prefixCls}-${size}`]: size,
                [`${prefixCls}-full`]: full,
                [`${prefixCls}-${type}`]: type,
                [`${prefixCls}-inline`]: inline,
                [`${prefixCls}-disabled`]: disabled,
                [`${prefixCls}-ghost`]: ghost,
                [`${prefixCls}-noborder`]: noBorder
            }
        );
        return (
            <TouchFeedback
                activeStyle={disabled ? false : activeStyle}
                activeClassName={this.setActiveClassName( activeClassName, type, ghost )}
            >
                <a
                    ref={( ref ) => {
                        this.btn = ref;
                    }}
                    className={
                        btnClassNames
                    }
                    style={
                        style
                    }
                    onClick={onClick}
                >
                    {children}
                </a>
            </TouchFeedback>
        );
    }
}