import React, { PureComponent } from 'react';
import config from '../../_util/config';
import Icon from '../../Icon';
import { CalendarProps } from '../propsType';

export default class CalendarCloseBox extends PureComponent<any, any> {
    constructor( props ) {
        super( props );
    }
    static defaultProps = {
        prefixCls: `${config.cls}-calendar`,
    };

    render() {
        const { prefixCls } = this.props;

        return (
            <div className={`${prefixCls}-close-box`}>
                <div className={`${prefixCls}-close-btn`}>
                    <Icon type='error' size='xs'/>
                </div>
            </div>
        );
    }
}