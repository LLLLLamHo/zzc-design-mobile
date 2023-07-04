import React, { PureComponent } from 'react';
import config from '../../_util/config';
import Icon from '../../Icon';
import { CalendarCloseBoxProps } from '../propsType';

export default class CalendarCloseBox extends PureComponent<CalendarCloseBoxProps, any> {
    constructor( props ) {
        super( props );
    }
    static defaultProps = {
        prefixCls: `${config.cls}-calendar`,
    };

    render(): JSX.Element {
        const { prefixCls, popupTitle, onClose } = this.props;

        return (
            <div className={`${prefixCls}-close-box`}>
                <div className={`${prefixCls}-close-box-title`}>{popupTitle}</div>
                <div 
                    className={`${prefixCls}-close-btn`} 
                    onClick={() => {onClose()}}
                >
                    <Icon type='error' size='xs'/>
                </div>
            </div>
        );
    }
}