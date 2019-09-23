import React, { PureComponent } from 'react';
import classNames from 'classnames';
import ListItme from './ListItem';
import config from '../../_util/config';
import { ListProps } from '../propsType';

export default class List extends PureComponent<ListProps, any> {
    constructor( props ) {
        super( props );
    }
    static defaultProps = {
        prefixCls: `${config.cls}-list`,
        className: '',
        style: {}
    };

    static ListItem = ListItme;

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