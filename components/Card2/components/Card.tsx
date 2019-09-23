import React, { PureComponent } from 'react';
import classNames from 'classnames';
import CardHeader from './CardHeader';
import CardBody from './CardBody';
import config from '../../_util/config';
import { CardProps } from '../propsType';

export default class Card extends PureComponent<CardProps, any> {
    constructor( props ) {
        super( props );
    }
    static defaultProps = {
        prefixCls: `${config.cls}-card2`,
        className: '',
        style: {}
    };

    static Header = CardHeader;
    static Body = CardBody;

    render() {
        const { style, prefixCls, children, className } = this.props;


        const cardClassName: string = classNames(
            prefixCls,
            className
        );

        return (
            <div style={style} className={cardClassName}>
                {children}
            </div>
        );
    }
}