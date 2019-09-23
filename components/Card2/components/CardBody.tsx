import React, { PureComponent } from 'react';
import classNames from 'classnames';
import config from '../../_util/config';
import { CardBodyProps } from '../propsType';

export default class CardBody extends PureComponent<CardBodyProps, any> {
    constructor(props) {
        super(props);
    }
    static defaultProps = {
        prefixCls: `${config.cls}-card2-body`,
        className: '',
        style: {},
    };

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