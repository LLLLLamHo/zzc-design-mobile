import React, { PureComponent } from 'react';
import config from '../../_util/config';
import Button from '../../Button';
import Picker from '../../Picker';
import Icon from '../../Icon';
import {isFunction} from '../../_util/typeof';
import createPickerData from '../util/createPickerData';
import { CalendarFooterProps, CalendarFooterState } from '../propsType';
import moment from 'moment'

export default class CalendarFooter extends PureComponent<CalendarFooterProps, CalendarFooterState> {
    constructor(props) {
        super(props);
        this.state = {
            time: [props.currStartTime.h, props.currStartTime.m, props.currEndTime.h, props.currEndTime.m],
            pickerList: createPickerData(props.timeRange, props.minutesInterval, props.currStartTime, props.currEndTime, props.defaultStartTime, props.defaultEndTime)
        };
    }
    static defaultProps = {
        prefixCls: `${config.cls}-calendar`,
    };

    footerItem;

    componentDidMount(): void {
        this.props.renderCallback(this.footerItem.offsetHeight);
    }

    componentWillReceiveProps(nextProps){
        if (this.props.timeRange != nextProps.timeRange) {
            this.props.changeSelectTime(nextProps)
            this.setState({
                pickerList: createPickerData(nextProps.timeRange, nextProps.minutesInterval, nextProps.currStartTime, nextProps.currEndTime, nextProps.defaultStartTime, nextProps.defaultEndTime)
            })
        }
    }

    createTimePicker(): JSX.Element {
        const { i18n } = this.props;

        return (
            <div className='time-picker-box'>
                <div className='title-box'>
                    <div className='title'>
                        <p>{i18n.time_picker_title}</p>
                    </div>
                    <div className='title'>
                        <p>{i18n.time_return_title}</p>
                    </div>
                </div>
                <div className='picker-box'>
                    <Picker
                        height={117.5}
                        onTouchEnd={(scrollIndex, itemIndex) => { this.changeTime(scrollIndex, itemIndex); }}
                        pickerData={this.state.pickerList}
                    />
                </div>
            </div>
        );
    }

    changeTime(scrollIndex: string, itemIndex: number): void {
        const { pickerList } = this.state;
        const {listData} = pickerList[scrollIndex];
        this.state.time[scrollIndex] = listData[itemIndex].dataKey || null
        let scrollType = 'start-time';
        let selectItem = { dataKey: `${this.state.time[0]}:${this.state.time[1]}` };

        if(+scrollIndex > 1){
            scrollType = 'end-time';
            selectItem.dataKey =  `${this.state.time[2]}:${this.state.time[3]}`
        };

        this.props.selectTimePicker(scrollType, selectItem);
        // const index = scrollIndex == 'start-time' ? 0 : 1;
        // const {listData} = pickerList[index];
        // const selectItem = listData ? listData[itemIndex] : null;
        // if (selectItem) {
        //     console.log(scrollIndex, selectItem)

        //     this.props.selectTimePicker(scrollIndex, selectItem);
        // }
    }

    createTips(): JSX.Element | null {
        const { calendarTips, defaultCalendarTips, mode } = this.props;
        const className = mode == 'day' ? 'calendar-tips-box mode-day' : 'calendar-tips-box';
        if ( calendarTips != null && calendarTips != '' ) {
            return (
                <div className={className}>
                    <Icon type='info_outline' />
                    <p>{calendarTips}</p>
                </div>
            );
        } else if ( defaultCalendarTips != null && defaultCalendarTips != '' ) {
            return (
                <div className={className}>
                    <Icon type='info_outline' />
                    <p>{defaultCalendarTips}</p>
                </div>
            );
        } else {
            return null;
        }

    }

    render(): JSX.Element {
        const { prefixCls, i18n, defaultCalendarTips, submit, mode, currStartTime, currEndTime, dayCalculator } = this.props;

        return (
            <div className={`${prefixCls}-footer`} ref={(div) => {this.footerItem = div}}>
                {mode == 'day*time' && this.createTimePicker()}
                {/* {this.createTips()} */}
                <div className='btn-box'>
                    {/* <Button className='reset-btn' type='special' onClick={reset}>{i18n.reset_btn_text}</Button> */}
                    <div className='pickup-return-text'>
                        <div className='pickup-text'>取车：{currStartTime ? moment(currStartTime.t).format(moment().isSame(currStartTime.t, 'year') ? 'MM月DD日 HH:mm' : 'YYYY年MM月DD日 HH:mm') : '未设置'}</div>
                        <div className='return-text'>还车：{currEndTime ? moment(currEndTime.t).format(moment().isSame(currEndTime.t, 'year') ? 'MM月DD日 HH:mm' : 'YYYY年MM月DD日 HH:mm') : '未设置'}</div>
                        {
                            defaultCalendarTips && currEndTime && currStartTime && currEndTime.t - currStartTime.t < 86400000 &&<div className='extra-text'><Icon type='info_outline' className='icon' />{defaultCalendarTips}</div>
                        }
                        
                    </div>
                    <Button className='submit-btn' onClick={submit}>{i18n.submit_btn_text_1}{currStartTime && currEndTime && (dayCalculator && isFunction(dayCalculator) ? dayCalculator(currStartTime.t, currEndTime.t) : (`${Math.ceil((currEndTime.t - currStartTime.t) / 86400000) || 1}`))}{i18n.submit_btn_text_2}</Button>
                </div>
            </div>
        );
    }
}