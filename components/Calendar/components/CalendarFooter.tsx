import React, { PureComponent } from 'react';
import config from '../../_util/config';
import { CalendarProps } from '../propsType';

export default class CalendarFooter extends PureComponent<any, any> {
    constructor(props) {
        super(props);
    }
    static defaultProps = {
        prefixCls: `${config.cls}-calendar`,
    };

    render() {
        const { prefixCls } = this.props;

        return (
            <div className={`${prefixCls}-footer`}>
                <div className={`${prefixCls}-footer`}>
                    
                </div>
            </div>
        );
    }
}