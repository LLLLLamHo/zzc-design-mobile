import React, { PureComponent } from 'react';
import classNames from 'classnames';
import config from '../../_util/config';
import { zzcComponentUse } from '../../_util/gtag';
import { CardProps } from '../propsType';

export default class Card extends PureComponent<CardProps, any> {
    constructor( props ) {
        super( props );
        zzcComponentUse( 'Card', '组件渲染' );
    }
    static defaultProps = {
        prefixCls: `${config.cls}-card`,
        className: '',
        full: false,
        style: {}
    };

    render() {
        const { style, prefixCls, full, children, className } = this.props;
        const cardClassName: string = classNames(
            prefixCls,
            className,
            {
                [`${prefixCls}-full`]: full
            }
        );

        return (
            <div style={style} className={cardClassName}>
                <div className={`${prefixCls}-box`}>
                    {children}
                </div>
            </div>
        );
    }
}