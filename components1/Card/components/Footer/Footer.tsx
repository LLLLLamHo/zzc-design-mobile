import React, { PureComponent } from 'react';
import classNames from 'classnames';
import config from '../../../_util/config';
import { CardFooterProps } from './propsType';
import './index.scss';


export default class Footer extends PureComponent<CardFooterProps, any> {
    static defaultProps = {
        prefixCls: `${config.cls}-card-footer`,
        className: '',
        children: null,
        noBorder: false,
        style: {}
    }

    render() {
        const { style, className, prefixCls, noBorder, children } = this.props;
        const footerClassName:string = classNames(
            prefixCls,
            className,
            {
                [`${prefixCls}-noborder`]: noBorder
            }
        );
        return (
            <div style={style} className={footerClassName}>
                {children && children}
            </div>
        );
    }
}