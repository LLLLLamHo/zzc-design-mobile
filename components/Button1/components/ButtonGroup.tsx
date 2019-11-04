import React, { PureComponent } from 'react';
import classNames from 'classnames';
import config from '../../_util/config';
import { ButtonGroupProps } from '../propsType';

export default class ButtonGroup extends PureComponent<ButtonGroupProps, any> {
    constructor(props) {
        super(props);
    }
    static defaultProps = {
        prefixCls: `${config.cls}-button-group`,
        className: '',
        direction: 'center',
        style: {
        }
    };

    render() {
        const { children, prefixCls, className, style, direction } = this.props;
        const btnGroupClass: string = classNames(
            prefixCls,
            className,
            `${prefixCls}-${direction}`
        );
        return (
            <div
                style={style}
                className={
                    btnGroupClass
                }
            >
                {children}
            </div>
        );
    }
}