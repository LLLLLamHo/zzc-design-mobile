import React, { PureComponent } from 'react';
import classNames from 'classnames';
import config from '../../_util/config';
import { SkeletonItemProps } from '../propsType';

export default class SkeletonItem extends PureComponent<SkeletonItemProps> {
    constructor(props) {
        super(props);
    }
    static defaultProps = {
        prefixCls: `${config.cls}-skeleton-item`,
        className: '',
        style: {},
        height: null,
        width: null
    };

    render() {
        const { style, prefixCls, className, height, width } = this.props;
        const selectClassName: string = classNames(
            prefixCls,
            className
        );

        return (
            <div style={{...style, height: height, width: width}} className={selectClassName}/>
        );
    }
}