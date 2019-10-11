import React, { PureComponent } from 'react';
import classnames from 'classnames';
import config from '../../_util/config';
import FormItem from './FormItem';
import create from './create';
import { FormProps } from '../propsType';


export default class Form extends PureComponent<FormProps, any> {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    static defaultProps = {
        prefixCls: `${config.cls}-form`,
        className: ''
    };

    static create = create;
    static Item = FormItem;

    render(): any {
        const { prefixCls, className, children } = this.props;
        if (!children) {
            return null;
        }
        return (
            <div className={classnames(prefixCls, className)}>
                {children}
            </div>
        )
    }
}