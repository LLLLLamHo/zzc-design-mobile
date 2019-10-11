import React, { PureComponent } from 'react';
import classnames from 'classnames';
import config from '../../_util/config';
import FormItem from './FormItem';
import create from './create';
import { FormProps } from '../propsType';
import { FormHOC } from './context';
import { isFunction } from '../../_util/typeof';


export default class Form extends PureComponent<FormProps, any> {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    static defaultProps = {
        prefixCls: `${config.cls}-form`,
        className: '',
        onSubmit: null
    };

    static create = create;
    static Item = FormItem;

    render(): any {
        const { prefixCls, className, children, onSubmit } = this.props;
        if (!children) {
            return null;
        }
        return (
            <FormHOC.Consumer>
                {(data) => {
                    return <form
                        ref={(formComponent) => {
                            if (data && isFunction(data.getFormComponent)) {
                                data.getFormComponent(formComponent);
                            }
                        }}
                        onSubmit={(e) => {
                            if ( onSubmit && isFunction(onSubmit) ) {
                                if (data && isFunction(data.formOnSubmit)) {
                                    onSubmit(data.formOnSubmit());
                                }
                                e.preventDefault();
                            }
                        }}
                        className={classnames(prefixCls, className)}
                    >
                        {children}
                    </form>
                }}
            </FormHOC.Consumer>

        )
    }
}