import React, { PureComponent } from 'react';
import classNames from 'classnames';

import '../style/index';
import './index.scss';

export interface InputItemProps {
        prefixCls?: string,
        value?: string,
        placeholder: string,
        size?: boolean,
        disabled?: boolean,
        noBorder?: boolean,
        noRadius?: boolean,
        type?: string,
        handleChange?: any,
        className?: string,
        style?: React.CSSProperties
}

export default class InputItem extends PureComponent<InputItemProps, any> {
    static defaultProps = {
        prefixCls: 'zzc-input-item',
        value: '',
        placeholder: '说点什么...',
        size: false,
        disabled: false,
        noBorder: false,
        noRadius: false,
        type: 'text',
        handleChange() { },
        className: '',
        style: {}
    }

    render() {
        const { prefixCls, value, placeholder, size, disabled, noBorder, noRadius, type, handleChange, className, style} = this.props;
        const inputClassNames: string = classNames(
            prefixCls,
            className,
            {
                [`${prefixCls}-${size}`]: size,
                [`${prefixCls}-disabled`]: disabled,
                [`${prefixCls}-noborder`]: noBorder,
                [`${prefixCls}-noradius`]: noRadius
            }
        );
        return (

            <input type={type}
                   className={inputClassNames}
                   style={style}
                   value={value}
                   disabled={disabled}
                   placeholder={placeholder}
                   onChange={handleChange} />
        );
    }
}
