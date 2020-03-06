import React, { PureComponent } from 'react';
import config from '../../_util/config';
import getWeek from '../util/getWeek';
import { CalendarResultProps } from '../propsType';

export default class CalendarResult extends PureComponent<CalendarResultProps, any> {
    constructor(props) {
        super(props);
    }
    static defaultProps = {
        prefixCls: `${config.cls}-calendar`,
    };

    createLeft(startTime, endTime, mode) {
        const { prefixCls, i18n } = this.props;
        if (startTime && endTime) {
            return (
                <div className={`${prefixCls}-left`}>
                    <p className='title'>{i18n.left_title}</p>
                    <p className='time'>{startTime.M + 1}{i18n.month}{startTime.D}</p>
                    {
                        mode == 'day*time' ? 
                        <p className='hour'>{startTime.h < 10 ? `0${startTime.h}` : startTime.h}:{startTime.m < 10 ? `0${startTime.m}` : startTime.m}</p>:
                    <p className='week'>{i18n.week}{getWeek(startTime.w, this.props.lang)}</p>
                    }
                </div>
            );
        } else if (startTime) {
            return (
                <div className={`${prefixCls}-left`}>
                    <p className='time'>{startTime.M + 1}{this.props.i18n.month}{startTime.D}</p>
                </div>
            );
        } else {
            return (
                <div className={`${prefixCls}-left`}>
                    <p className='placeholder'>{this.props.i18n.left_placeholder}</p>
                </div>
            );
        }
    }

    createRight(startTime, endTime, mode) {
        const { prefixCls, i18n } = this.props;
        if (startTime && endTime) {
            return (
                <div className={`${prefixCls}-right`}>
                    <p className='title'>{i18n.right_title}</p>
                    <p className='time'>{endTime.M + 1}{i18n.month}{endTime.D}</p>
                    {
                        mode == 'day*time' ? 
                        <p className='hour'>{endTime.h < 10 ? `0${endTime.h}` : endTime.h}:{endTime.m < 10 ? `0${endTime.m}` : endTime.m}</p> : 
                        <p className='week'>{i18n.week}{getWeek(endTime.w, this.props.lang)}</p>
                    }
                </div>
            );
        } else if (startTime) {
            return (
                <div className={`${prefixCls}-right`}>
                    <p className='placeholder'>{this.props.i18n.right_placeholder}</p>
                </div>
            );
        } else {
            return null;
        }
    }

    createCenter(startTime, endTime) {
        const { i18n } = this.props;
        if (startTime && endTime) {
            return (
                <div className='center'>
                    <p className='day'>{Math.ceil((endTime.t - startTime.t) / 86400000) || 1}{i18n.day}</p>
                </div>
            );
        }
        return null;
    }

    render() {
        const { prefixCls, startTime, endTime, mode } = this.props;

        return (
            <div className={`${prefixCls}-result-box`}>
                {this.createLeft(startTime, endTime, mode)}
                {this.createCenter(startTime, endTime)}
                {this.createRight(startTime, endTime, mode)}
            </div>
        );
    }
}