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
        onClick: function () {  },
        classNameProps: '',
        style: {
        },
        activeStyle: {
        },
        activeClassName: undefined
    };

    setActiveClassName( activeClassName, type = 'default' ) {
        const activeClassNameIsUndefined = isUndefined( activeClassName );
        const className = classNames( {
            [`${this.props.prefixCls}-active-${type}`]: activeClassNameIsUndefined,
            [`${this.props.prefixCls}-active-${activeClassName}`]: !activeClassNameIsUndefined
        } );

        return className;
    }

    render() {
        const { children, classNameProps, prefixCls, type, full, size, inline, disabled, style, activeStyle, activeClassName, onClick } = this.props;
        const btnClassNames = classNames(
            prefixCls,
            classNameProps,
            {
                [`${prefixCls}-${size}`]: size,
                [`${prefixCls}-full`]: full,
                [`${prefixCls}-${type}`]: type,
                [`${prefixCls}-inline`]: inline,
                [`${prefixCls}-disabled`]: disabled
            }
        );
        return (
            <TouchFeedback
                activeStyle={disabled ? false : activeStyle}
                activeClassName={this.setActiveClassName( activeClassName, type )}
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