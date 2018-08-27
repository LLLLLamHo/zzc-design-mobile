import React, { PureComponent } from 'react';
import classNames from 'classnames';
import config from '../../../_util/config';
import './index.scss';
import { CardBodyProps } from './propsType';

export default class BodyEntrance extends PureComponent<CardBodyProps, any> {
    static defaultProps = {
        prefixCls: `${config.cls}-card-body`,
        className: '',
        children: null,
        full: false,
        noBorder: false,
        style: {},
        borderDirection: 'center'
    }

    render() {
        const { borderDirection, style, className, prefixCls, children, full, noBorder } = this.props;
        const bodyClassName: string = classNames(
            prefixCls,
            className,
            { [`${prefixCls}-full`]: full },
            { [`${prefixCls}-noborder`]: noBorder },
            { [`${prefixCls}-border-${borderDirection}`]: borderDirection === 'left' || borderDirection === 'right' }
        );

        return (
            <section style={style} className={bodyClassName}>
                <div className={classNames( `${prefixCls}-box` )}>
                    {children && children}
                </div>
            </section>
        );
    }
}