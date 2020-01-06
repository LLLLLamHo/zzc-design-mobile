import React, { PureComponent } from 'react';
import classNames from 'classnames';
import config from '../../_util/config';
import { SkeletonBoxProps } from '../propsType';

export default class SkeletonBox extends PureComponent<SkeletonBoxProps> {
    constructor(props) {
        super(props);
    }
    static defaultProps = {
        prefixCls: `${config.cls}-skeleton-box`,
        className: '',
        style: {},
        justify: 'flex-start',
        align: 'flex-start',
        direction: "row"
    };

    render() {
        const { style, prefixCls, className, justify, align, direction, children } = this.props;
        const selectClassName: string = classNames(
            prefixCls,
            className
        );

        return (
            <div style={{...style, alignItems: align, justifyContent: justify, flexDirection: direction}} className={selectClassName}>
                {children}
            </div>
        );
    }
}