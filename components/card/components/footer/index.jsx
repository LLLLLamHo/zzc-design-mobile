import React, { PureComponent } from 'react';
import classNames from 'classnames';
import './index.scss';

export default class Footer extends PureComponent {
    static defaultProps = {
        prefixCls: 'zzc-card-footer',
        className: '',
        children: false,
        noBorder: false,
        style: {}
    }

    render() {
        const { style, className, prefixCls, noBorder, children } = this.props;
        const footerClassName = classNames(
            prefixCls,
            className,
            {
                [`${prefixCls}-noborder`]: noBorder
            }
        );
        return (
            <div style={style} className={footerClassName}>
                {!!children && children}
            </div>
        );
    }
}