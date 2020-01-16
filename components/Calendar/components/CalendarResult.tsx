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
        if (startTime && endTime) {
            return (
                <div className='left'>
                    <p className='title'>{this.props.i18n.left_title}</p>
                    <p className='time'>{startTime.M + 1}月{startTime.D}</p>
                    {
                        mode == 'day*time' ? 
                        <p className='hour'>{startTime.h < 10 ? `0${startTime.h}` : startTime.h}:{startTime.m < 10 ? `0${startTime.m}` : startTime.m}</p>:
                        <p className='week'>周{getWeek(startTime.w, this.props.lang)}</p>
                    }
                </div>
            );
        } else if (startTime) {
            return (
                <div className='left'>
                    <p className='time'>{startTime.M + 1}月{startTime.D}</p>
                </div>
            );
        } else {
            return (
                <div className='left'>
                    <p className='placeholder'>{this.props.i18n.left_placeholder}</p>
                </div>
            );
        }
    }

    createRight(startTime, endTime, mode) {
        if (startTime && endTime) {
            return (
                <div className='right'>
                    <p className='title'>{this.props.i18n.right_title}</p>
                    <p className='time'>{endTime.M + 1}月{endTime.D}</p>
                    {
                        mode == 'day*time' ? 
                        <p className='hour'>{endTime.h < 10 ? `0${endTime.h}` : endTime.h}:{endTime.m < 10 ? `0${endTime.m}` : endTime.m}</p> : 
                        <p className='week'>周{getWeek(endTime.w, this.props.lang)}</p>
                    }
                </div>
            );
        } else if (startTime) {
            return (
                <div className='right'>
                    <p className='placeholder'>{this.props.i18n.right_placeholder}</p>
                </div>
            );
        } else {
            return null;
        }
    }

    createCenter(startTime, endTime) {
        if (startTime && endTime) {
            return (
                <div className='center'>
                    <p className='day'>{Math.ceil((endTime.t - startTime.t) / 86400000) || 1}天</p>
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