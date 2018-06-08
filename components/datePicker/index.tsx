import React from 'react';
import classnames from 'classnames';
import { initMinDate, initMaxDate, initSelectDate } from './util/date';
import { createDateListData, createDateTimeListData, createTimeListData, createYearListData, createMonthListData } from './util/setListData';
import { getModeDateData, getModeTimeData, getModeDateTimeData, getModeYearData, getModeMonthData } from './util/getScrollData';
import Picker from '../picker';
import Popup from '../Popup';
import { isFunction } from '../_util/typeof';
import { DatePickerProps, DatePickerState, ListItem, DateData, BScrollArray } from './propsType';
import './index.scss';
import langTextObject from '../_util/i18n';
export default class DatePicker extends React.Component<DatePickerProps, DatePickerState> {
    static defaultProps = {
        prefixCls: 'zzc-datepicker',
        className: '',
        style: {},
        mode: 'date',
        lang: 'cn',
        minDate: '',
        maxDate: '',
        selectTime: null,
        minuteStep: 1,
        use12hour: false,
        visible: false,
        maskClose: true
    }

    private BScrollList: BScrollArray = {};

    constructor( props ) {
        super( props );
        this.initDate();
        this.touchEnd = this.touchEnd.bind( this );
        this.renderAfter = this.renderAfter.bind( this );
        this.close = this.close.bind( this );
        this.submit = this.submit.bind( this );
    }

    initDate() {
        const { minDate, maxDate, selectTime, lang, mode, minuteStep, use12hour } = this.props;
        const langData = langTextObject[lang];
        const calcMinDate = initMinDate( minDate );
        const calcMaxDate = initMaxDate( maxDate );
        const calcCurrDate = initSelectDate( selectTime, calcMinDate );

        const listData: {
        yearList: null | ListItem
        monthList: null | ListItem
        dayList: null | ListItem
        hourList: null | ListItem
        minuteList: null | ListItem
        hour12List: null | ListItem
        } = {
            yearList: null,
            monthList: null,
            dayList: null,
            hourList: null,
            minuteList: null,
            hour12List: null
        };

        // 根据模式初始化数据
        switch ( mode ) {
        case 'date': createDateListData( listData, calcMinDate, calcMaxDate, calcCurrDate, langData );
            break;
        case 'datetime': createDateTimeListData( listData, calcMinDate, calcMaxDate, calcCurrDate, use12hour, minuteStep, langData );
            break;
        case 'time': createTimeListData( listData, calcCurrDate, use12hour, minuteStep, langData );
            break;
        case 'year': createYearListData( listData, calcMinDate, calcMaxDate, calcCurrDate, langData );
            break;
        case 'month': createMonthListData( listData, calcCurrDate, langData );
            break;
        }

        this.state = Object.assign( {}, listData, { langData } );
    }

    renderAfter( BScrollList ): void {
        this.BScrollList = BScrollList;
    }

    touchEnd( scrollKey ): void {
        const { onValueChange } = this.props;
        if ( onValueChange && isFunction( onValueChange ) ) {
            onValueChange( this.getCurrDate( scrollKey ) );
        }
    }

    getCurrDate( scrollKey = 'all' ): any {
        const { mode } = this.props;
        const resultData : { scrollKey: string, currDate:string } = {
            scrollKey,
            currDate: ''
        };
        switch ( mode ) {
        case 'date': resultData.currDate = getModeDateData( this.BScrollList, this.state );
            break;
        case 'time': resultData.currDate = getModeTimeData( this.BScrollList, this.state, this.props.use12hour );
            break;
        case 'datetime': resultData.currDate = getModeDateTimeData( this.BScrollList, this.state, this.props.use12hour );
            break;
        case 'year': resultData.currDate = getModeYearData( this.BScrollList, this.state );
            break;
        case 'month': resultData.currDate = getModeMonthData( this.BScrollList, this.state );
            break;
        }
        return resultData;
    }

    close() {
        const { onClose } = this.props;
        onClose && isFunction( onClose ) && onClose();
    }

    submit() {
        const { onSubmit } = this.props;
        onSubmit && isFunction( onSubmit ) && onSubmit( this.getCurrDate() );
    }

    render (): JSX.Element {
        const { prefixCls, className, style, visible, maskClose } = this.props;
        const cls = classnames(
            className,
            `${prefixCls}`
        );

        return (
            <Popup
                maskClose={maskClose}
                direction='bottom'
                visible={visible}
            >
                <div
                    className={cls}
                    style={style}
                >
                    <div className={`${cls}-header`}>
                        <div className={`${cls}-header-close`} onClick={this.close}>取消</div>
                        <div className={`${cls}-header-title`}>请选择时间</div>
                        <div className={`${cls}-header-submit`} onClick={this.submit}>确定</div>
                    </div>
                    <Picker
                        renderAfter={this.renderAfter}
                        onTouchEnd={this.touchEnd}
                        pickerData={[this.state.yearList, this.state.monthList, this.state.dayList, this.state.hourList, this.state.minuteList, this.state.hour12List]}
                    />
                </div>
            </Popup>
        );
    }
}