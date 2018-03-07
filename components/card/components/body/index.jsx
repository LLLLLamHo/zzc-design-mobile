import React, { PureComponent } from 'react';
import classNames from 'classnames';
import './index.scss';

export default class Body extends PureComponent {
    static defaultProps = {
        prefixCls: 'zzc-card-body',
        className: '',
        children: false,
        full: false,
        noBorder: false,
        style: {},
        borderDirection: 'center'
    }

    render() {
        const { borderDirection, style, className, prefixCls, children, full, noBorder } = this.props;
        const bodyClassName = classNames(
            prefixCls,
            className,
            { [`${prefixCls}-full`]: full },
            { [`${prefixCls}-noborder`]: noBorder },
            { [`${prefixCls}-border-${borderDirection}`]: borderDirection === 'left' || borderDirection === 'right' }
        );

        return (
            <section style={style} className={bodyClassName}>
                <div className={classNames( `${prefixCls}-box` )}>
                    {!!children && children}
                </div>
            </section>
        );
    }
}