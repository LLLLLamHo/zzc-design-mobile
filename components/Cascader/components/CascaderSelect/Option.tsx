import React from 'react';
import classnames from 'classnames';
import * as PropTypes from 'prop-types';
import { SelectOptionProps } from './propsType';

import Icon from '../../../Icon';
export default class Radio extends React.Component<SelectOptionProps> {
    constructor(props) {
        super(props);
    }

    static contextTypes = {
        select: PropTypes.any,
    };

    onChange = () => {
        const { select } = this.context;
        if (this.props.disabled) return;
        if (select) {
            select.onOptionClick(this.props.value, this.props);
        }
    }

    render() {
        const { select } = this.context;
        let { disabled, label, value, children, prefixCls } = this.props, isActive = false;
        if (select) {
            isActive = select.value === value;
        }
        prefixCls = prefixCls ? prefixCls : 'zds-cascader-select';
        return (
            <div className={classnames(`${prefixCls}-item`, {
                'is-disabled': disabled,
                'is-active': isActive,
            })}
            onClick={this.onChange}>
                <div className={`${prefixCls}-text`}>
                    { children || label }
                </div>
                <Icon className={`${prefixCls}-icon-check`} type="success_fill" />
            </div>
        );
    }
}