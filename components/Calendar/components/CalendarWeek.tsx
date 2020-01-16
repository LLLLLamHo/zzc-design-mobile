import React, { PureComponent } from 'react';
import config from '../../_util/config';
import { CalendarWeekProps } from '../propsType';

export default class CalendarWeek extends PureComponent<CalendarWeekProps, any> {
    constructor(props) {
        super(props);
    }
    static defaultProps = {
        prefixCls: `${config.cls}-calendar`,
    };

    render() {
        const { prefixCls, weekList } = this.props;

        return (
            <div className={`${prefixCls}-week-box`}>
                {weekList.map((item, key) => {
                    return (
                        <div className='item' key={key}>
                            <p>{item}</p>
                        </div>
                    )
                })}
            </div>
        );
    }
}