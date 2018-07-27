import React, { PureComponent, ReactNode } from 'react';
import classNames from 'classnames';
import ListItem from '../listItem';

import '../style/index';
import './index.scss';

export interface InputItemProps {
        prefixCls?: string,
        className?: string,
        style?: React.CSSProperties,
        type?: string,
        value?: string,
        placeholder: string,
        disabled?: boolean,
        onChange?: any,
        onFocus?: any,
        onBlur?: any,
        inline?: boolean,
        theme: string,
        label?: ReactNode | null,
        extra?: ReactNode | null,
        noBorder?: boolean
}

export default class InputItem extends PureComponent<InputItemProps, any> {
    static defaultProps = {
        prefixCls: 'zzc-input-item',
        className: '',
        style: {},
        type: 'text',
        value: '',
        placeholder: '说点什么...',
        disabled: false,
        onChange() { },
        onFocus() { },
        onBlur() { },
        inline: false,
        theme: 'default',
        label: '',
        extra: '',
        noBorder: false
    }

    render() {
        const { prefixCls, className, style, type, value, placeholder, disabled, onChange, label, extra, noBorder} = this.props;
        const inputClassNames: string = classNames(
            prefixCls,
            className,
            {
                [`${prefixCls}-disabled`]: disabled
            }
        );
        return (
            <ListItem label={label}
                extra={extra}
                noBorder={noBorder} >
                <input type={type}
                   className={inputClassNames}
                   style={style}
                   value={value}
                   placeholder={placeholder}
                   onChange={onChange}
                   disabled={disabled} />
            </ListItem>
        );
    }
}
