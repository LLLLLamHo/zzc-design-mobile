import React from 'react';
import classnames from 'classnames';
import { initMinDate, initMaxDate, initSelectDate, getLastDate, getFirstDate } from '../util/date';
import { createDateListData, createDateTimeListData, createTimeListData, createYearListData, createMonthListData, createHourListData } from '../util/setListData';
import { getModeDateData, getModeTimeData, getModeDateTimeData, getModeYearData, getModeMonthData, getModeHourData } from '../util/getScrollData';
import Picker from '../../Picker';
import Icon from '../../Icon';
import Button from '../../Button';
import Popup from '../../Popup';
import { isFunction, isDate } from '../../_util/typeof';
import langTextObject from '../../_util/i18n';
import { DatePickerProps, DatePickerState, ListItem, BScrollArray } from '../propsType';
import config from '../../_util/config';

export default class DatePicker extends React.Component<DatePickerProps, DatePickerState> {
    static defaultProps = {
        prefixCls: `${config.cls}-datepicker`,
        className: '',
        style: {},
        title: null,
        buttonText: null,
        mode: 'date',
        lang: 'cn',
        minDate: '',
        maxDate: '',
        selectTime: null,
        minuteStep: 1,
        warningText: null,
        use12hour: false,
        visible: false,
        maskClose: true,
        reverse: false
    }

    private BScrollList: BScrollArray = {};

    constructor(props) {
        super(props);
        this.initDate(null);
        this.touchEnd = this.touchEnd.bind(this);
        this.renderAfter = this.renderAfter.bind(this);
        this.close = this.close.bind(this);
        this.submit = this.submit.bind(this);
    }

    shouldComponentUpdate(nextProps, nextState): boolean {
        if (JSON.stringify(nextProps) != JSON.stringify(this.props) || JSON.stringify(nextState) != JSON.stringify(this.state)) {
            return true;
        }
        return false;
    }

    componentDidUpdate() {
        !this.props.visible && this.resetPicker();
    }

    resetPicker(): void {
        const { selectTime, mode, minDate, maxDate } = this.props;
        const calcMinDate = initMinDate(minDate);
        const calcMaxDate = initMaxDate(maxDate);
        // 关闭的时候，如果当前滑动框选中的日期和当前传入的时间一样，则无需进行reset
        const calcTime = this.initDateObject(null, selectTime, mode, calcMinDate, calcMaxDate);
        this.initDate(calcTime);
    }

    initDateObject(time, selectTime, mode, minDate, maxDate): Date {
        let calcTime;
        if (isDate(time)) {
            calcTime = time;
        } else if (mode == 'hour') {
            calcTime = new Date(`1993/09/17 ${selectTime}`);
        } else if (mode == 'time') {
            calcTime = new Date(`1993/09/17 ${selectTime}`);
        } else if (mode == 'year') {
            calcTime = new Date(`${selectTime}/01/01`);
        } else if (mode == 'month') {
            calcTime = new Date(`1993/${selectTime}/01`);
        } else if (selectTime == '') {
            calcTime = new Date();
        } else {
            calcTime = isDate(selectTime) ? selectTime : new Date(selectTime);
        }

        // 只有在一开始初始化和reset的时候才出发强制重置
        if (time == null) {
            // 当初始化时间时，如果当前选中时间超出了限制范围，则强制重置
            const minDateTime = new Date(`${minDate.year}/${minDate.month}/${minDate.day} ${minDate.hour}:${minDate.minute}`);
            const maxDateTime = new Date(`${maxDate.year}/${maxDate.month}/${maxDate.day} ${maxDate.hour}:${maxDate.minute}`);

            if (calcTime < minDateTime) {
                return minDateTime;
            }

            if (calcTime > maxDateTime) {
                return maxDateTime;
            }
        }
        return calcTime;
    }

    initDate(time: Date | null): void {
        const { minDate, maxDate, selectTime, lang, mode, minuteStep, use12hour } = this.props;
        const calcMinDate = initMinDate(minDate);
        const calcMaxDate = initMaxDate(maxDate);
        const calcTime = this.initDateObject(time, selectTime, mode, calcMinDate, calcMaxDate);
        const langData = langTextObject[lang];
        const calcCurrDate = initSelectDate(calcTime, calcMinDate, calcMaxDate);
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
        switch (mode) {
            case 'date': createDateListData(listData, calcMinDate, calcMaxDate, calcCurrDate, langData);
                break;
            case 'datetime': createDateTimeListData(listData, calcMinDate, calcMaxDate, calcCurrDate, use12hour, minuteStep, langData);
                break;
            case 'time': createTimeListData(listData, calcMinDate, calcMaxDate, calcCurrDate, use12hour, minuteStep, langData);
                break;
            case 'hour': createHourListData(listData, calcMinDate, calcMaxDate, calcCurrDate, use12hour, langData);
                break;
            case 'year': createYearListData(listData, calcMinDate, calcMaxDate, calcCurrDate, langData);
                break;
            case 'month': createMonthListData(listData, calcMinDate, calcMaxDate, calcCurrDate, langData);
                break;
        }
        this.state = Object.assign({}, listData, { langData });
        time && this.setState(this.state);
    }

    renderAfter(BScrollList): void {
        this.BScrollList = BScrollList;
    }

    touchEnd(scrollKey): void {
        const { onValueChange, mode, reverse } = this.props;

        let currDateData;
        let currDate;

        if (mode && mode.indexOf('date') != -1) {
            if (mode === 'datetime') {
                const currData = this.getCurrDate(scrollKey).currDate.split(' ');
                const data = currData[0].split('/');
                const time = currData[1].split(':');
                currDateData = data.concat(time);
            } else {
                currDateData = this.getCurrDate(scrollKey).currDate.split('/');
            }
            // 上一次选择的月份的日期在当前选中的月份的日期没有的时候，选中最后一个日期（通过参数确定是选中当前月份的第一日还是最后一日）
            const currYear = parseInt(currDateData[0]);
            const currMonth = parseInt(currDateData[1]);
            const currDay = parseInt(currDateData[2]);
            const currHour = parseInt(currDateData[3]);
            const currMinute = parseInt(currDateData[4]);
            const currDateLastDay = getLastDate(currYear, currMonth);
            // 当只有反转模式下才会判断当前天数会不大于当前月份的最后一天
            const setCurrDateLastDay = reverse ? `${getFirstDate(currYear, currMonth)} ${currHour}:${currMinute}` : currDateLastDay;
            if (currDay > currDateLastDay) {
                currDate = new Date(`${currDateData[0]}/${currDateData[1]}/${setCurrDateLastDay}`);
            } else {
                currDate = new Date(this.getCurrDate(scrollKey).currDate);
            }
        } else if (mode == 'hour') {
            currDate = new Date(`1993/09/17 ${this.getCurrDate(scrollKey).currDate}`);
        } else if (mode == 'time') {
            currDate = new Date(`1993/09/17 ${this.getCurrDate(scrollKey).currDate}`);
        } else if (mode == 'year') {
            currDate = new Date(`${this.getCurrDate(scrollKey).currDate}/09/17`);
        } else if (mode == 'month') {
            currDate = new Date(`1993/${this.getCurrDate(scrollKey).currDate}/17`);
        }
        this.initDate(currDate);
        if (onValueChange && isFunction(onValueChange)) {
            onValueChange(this.getCurrDate(scrollKey));
        }
    }

    getCurrDate(scrollKey = 'all'): any {
        const { mode } = this.props;
        const resultData: { scrollKey: string, currDate: string } = {
            scrollKey,
            currDate: ''
        };
        switch (mode) {
            case 'date': resultData.currDate = getModeDateData(this.BScrollList, this.state);
                break;
            case 'time': resultData.currDate = getModeTimeData(this.BScrollList, this.state, this.props.use12hour);
                break;
            case 'hour': resultData.currDate = getModeHourData(this.BScrollList, this.state, this.props.use12hour);
                break;
            case 'datetime': resultData.currDate = getModeDateTimeData(this.BScrollList, this.state, this.props.use12hour);
                break;
            case 'year': resultData.currDate = getModeYearData(this.BScrollList, this.state);
                break;
            case 'month': resultData.currDate = getModeMonthData(this.BScrollList, this.state, mode);
                break;
        }
        return resultData;
    }

    close(): void {
        const { onClose } = this.props;
        onClose && isFunction(onClose) && onClose();
    }

    submit(): void {
        const { onSubmit } = this.props;
        onSubmit && isFunction(onSubmit) && onSubmit(this.getCurrDate());
    }

    render(): JSX.Element {
        const { prefixCls, className, style, visible, maskClose, renderCallback, title, buttonText, lang, warningText } = this.props;
        const cls = classnames(
            className,
            `${prefixCls}`
        );
        const langData = langTextObject[lang];
        return (
            <Popup
                maskClose={maskClose}
                direction='bottom'
                visible={visible}
                onClose={this.close}
                renderCallback={() => { renderCallback && renderCallback(); }}
            >
                <div
                    className={cls}
                    style={style}
                >
                    <div className={`${cls}-header`}>
                        <p>{title ? title : langData.datePickerTitle}</p>
                    </div>
                    <div className={`${cls}-body`}>
                        <Picker
                            height={157}
                            renderAfter={this.renderAfter}
                            onTouchEnd={this.touchEnd}
                            pickerData={[this.state.yearList, this.state.monthList, this.state.dayList, this.state.hourList, this.state.minuteList, this.state.hour12List]}
                        />
                    </div>
                    <div className={`${cls}-footer`}>
                        {warningText && <div className={`${cls}-warning`}><Icon type="warning_outline" style={{ color: '#696E7C', width: '11px', height: '11px' }}/><p>{warningText}</p></div>}
                        <Button onClick={this.submit}>{buttonText ? buttonText : langData.datePickerButtomText}</Button>
                    </div>
                </div>
            </Popup>
        );
    }
}