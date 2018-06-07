import React from 'react';
import classnames from 'classnames';
import { initMinDate, initMaxDate, initSelectDate } from './util/date';
import { setYearListData, setMonthListData, setDayListData, setHoursListData, setMinuteListData } from './util/pickerData';
import Picker from '../picker';
import { DatePickerProps, DatePickerState, ListItem, DateData } from './propsType';
import './index.scss';
import { cn, hk } from '../_util/i18n';

export default class DatePicker extends React.Component<DatePickerProps, DatePickerState> {
    static defaultProps = {
        prefixCls: 'zzc-datepicker',
        className: '',
        style: {},
        mode: 'date',
        lang: 'cn',
        minDate: '',
        maxDate: '',
        selectTime: null
    }

    constructor( props ) {
        super( props );
        this.initDate();
    }

    initDate() {
        const { minDate, maxDate, selectTime, lang, mode } = this.props;
        const langData = lang == 'cn' ? cn : hk;
        const calcMinDate = initMinDate( minDate );
        const calcMaxDate = initMaxDate( maxDate );
        const calcCurrDate = initSelectDate( selectTime, calcMinDate );

        let yearList: null | ListItem = null;
        let monthList: null | ListItem = null;
        let dayList: null | ListItem = null;
        let hourList: null | ListItem = null;
        let minuteList: null | ListItem = null;
        // 根据模式初始化数据
        if ( mode == 'date' ) {
            yearList = setYearListData( calcMinDate.year, calcMaxDate.year, calcCurrDate.year, langData );
            monthList = setMonthListData( calcCurrDate.month, langData );
            dayList = setDayListData( calcCurrDate, langData );
        } else if ( mode == 'datetime' ) {
            yearList = setYearListData( calcMinDate.year, calcMaxDate.year, calcCurrDate.year, langData );
            monthList = setMonthListData( calcCurrDate.month, langData );
            dayList = setDayListData( calcCurrDate, langData );
            hourList = setHoursListData( calcCurrDate, langData );
            minuteList = setMinuteListData( calcCurrDate, langData );
        } else if ( mode == 'time' ) {
            hourList = setHoursListData( calcCurrDate, langData );
            minuteList = setMinuteListData( calcCurrDate, langData );
        } else if ( mode == 'year' ) {
            yearList = setYearListData( calcMinDate.year, calcMaxDate.year, calcCurrDate.year, langData );
        } else if ( mode == 'month' ) {
            monthList = setMonthListData( calcCurrDate.month, langData );
        }
        this.state = {
            langData,
            yearList,
            monthList,
            dayList,
            hourList,
            minuteList
        };
    }

    render (): JSX.Element {
        const { prefixCls, className, style } = this.props;
        const cls = classnames(
            className,
            `${prefixCls}`
        );

        return (
            <div
                className={cls}
                style={style}
            >
                <Picker
                    pickerData={[this.state.yearList, this.state.monthList, this.state.dayList, this.state.hourList, this.state.minuteList]}
                />
            </div>
        );
    }
}