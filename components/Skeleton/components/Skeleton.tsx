import React, { PureComponent } from 'react';
import classNames from 'classnames';
import config from '../../_util/config';
import Box from './SkeletonBox';
import Item from './SkeletonItem';
import { SkeletonProps } from '../propsType';

export default class Skeleton extends PureComponent<SkeletonProps> {
    constructor(props) {
        super(props);
    }
    static defaultProps = {
        prefixCls: `${config.cls}-skeleton`,
        className: '',
        style: {},
    };

    static Box = Box;
    static Item = Item;

    render() {
        const { style, prefixCls, className, children } = this.props;
        const selectClassName: string = classNames(
            prefixCls,
            className
        );

        return (
            <div style={style} className={selectClassName}>
                {children}
            </div>
        );
    }
}