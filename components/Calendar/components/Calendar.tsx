import React, { PureComponent } from 'react';
import classNames from 'classnames';
import config from '../../_util/config';
import Popup from '../../Popup';
import { CalendarProps, CalendarState, selectTimeInterface, EchoSelectDataReturn, FormatSubmitEchoData, IRangeInView } from '../propsType';
import CalendarCloseBox from './CalendarCloseBox';
// import CalendarResult from './CalendarResult';
import CalendarWeek from './CalendarWeek';
import CalendarListBox from './CalendarListBox';
import CalendarFooter from './CalendarFooter';
import createCalendarMap from '../util/createCalendarMap';
import calendar_i18n from '../util/i18n';
import updateCalendarMap from '../util/updateCalendarMap';
import { isFunction } from '../../_util/typeof';

export default class Calendar extends PureComponent<CalendarProps, CalendarState> {
    constructor(props) {
        super(props);
        const _startTime = props.startTime ? this.conversionSelectTime(props.startTime, props.defaultStartTime) : null;
        const _endTime = props.endTime ? this.conversionSelectTime(props.endTime, props.defaultEndTime) : null;
        const rangeInViewDate = this.getRangeInViewDate(props.rangeInView);
        // 与外部传入i18n进行合并
        const i18n = props.i18n ? Object.assign(calendar_i18n(props.lang), props.i18n) : calendar_i18n(props.lang);
        let { startIndexInfo, endIndexInfo, calendarMap } = createCalendarMap(props.lang, props.dropOffMaxDays, props.dateExtension, _startTime, _endTime, props.yesterday, i18n, rangeInViewDate);
        if (startIndexInfo && endIndexInfo) {
            const { newMap } = updateCalendarMap({
                type: 'end',
                _startIndexInfo: startIndexInfo,
                _endIndexInfo: endIndexInfo,
                map: calendarMap,
                i18n,
                calendarMode: props.calendarMode,
                ...endIndexInfo
            });
            calendarMap = newMap;
        }
        this.state = {
            i18n,
            calendarMap,
            _startTime: _startTime,
            _startIndexInfo: startIndexInfo,
            _endTime: _endTime,
            _endIndexInfo: endIndexInfo,
            _default_calendar_tips: props.defaultCalendarTips,
            _calendar_tips: props.calendarTips,
            _listBoxPaddingBottom: 30,
            rangeInViewDate,
            timeText: null
        };

        this.selectItem = this.selectItem.bind(this);
        this.resetSelectDay = this.resetSelectDay.bind(this);
        this.selectTimePicker = this.selectTimePicker.bind(this);
        this.submit = this.submit.bind(this);
        this.closeCalendar = this.closeCalendar.bind(this);
        this.footerRenderCallback = this.footerRenderCallback.bind(this);
        this.setTimeText = this.setTimeText.bind(this);
    }
    static defaultProps = {
        prefixCls: `${config.cls}-calendar`,
        className: '',
        style: {},
        lang: 'cn',
        calendarMode: 'default',
        mode: 'day',
        timeRange: [0, 24],
        minutesInterval: 30,
        defaultStartTime: '9:00',
        defaultEndTime: '9:00',
        dayChange: null,
        timeChange: null,
        defaultCalendarTips: '',
        dropOffMaxDays: 0,
        yesterday: false,
        onChange: null,
        onClose: null,
        visible: false,
        dayCalculator: null,
        popupTitle: null
    };


    // timeRange改变同步更新 selectTime 
    updateSelectTime = (props) => {
        const {_startTime,_endTime} = this.state;
        const newStartTime = _startTime ? this.conversionSelectTime(new Date(`${_startTime.Y}/${_startTime.M + 1}/${_startTime.D} ${props.defaultStartTime}`)):null;
        const newEndTime =  _endTime ? this.conversionSelectTime(new Date(`${_endTime.Y}/${_endTime.M + 1}/${_endTime.D} ${props.defaultEndTime}`)):null;
        this.setState({
            _startTime: newStartTime,
            _endTime: newEndTime
        })
    }

    getRangeInViewDate(rangeInView: IRangeInView) {
        return {
            start: rangeInView && rangeInView[0] ? new Date(rangeInView[0] as string) : null,
            end: rangeInView && rangeInView[1] ? new Date(rangeInView[1] as string) : null,
        }
    }

    conversionSelectTime(time, hours?: string): selectTimeInterface | null {
        if (!time) return null;
        let newTime = new Date(time);
        let h, m;
        if (hours) {
            [h, m] = hours.split(':');
        } else {
            h = newTime.getHours();
            m = newTime.getMinutes();
        }
        if (newTime.toString() == 'Invalid Date') return null;
        return {
            Y: newTime.getFullYear(),
            M: newTime.getMonth(),
            D: newTime.getDate(),
            h: +h,
            m: +m,
            w: newTime.getDay(),
            t: newTime.getTime()
        }
    }

    // 因为react设计大量循环计算，所以点击选择的规则通过操作DOM来渲染
    selectItem(year, monthKey: number, rowKey: number, itemKey: number, dayInfo): void {
        // 当前点击的日期如果是下一年的情况下，需要对monthKey + 12;
        // monthKey = new Date().getFullYear() != dayInfo.y ? monthKey + 12 : monthKey;

        const { _startTime, _endTime } = this.state;
        if ((!_startTime && !_endTime) || (_startTime && _endTime)) {
            this.updateStartTime(_startTime, _endTime, year, monthKey, rowKey, itemKey);
        } else if (_startTime && !_endTime) {
            // 需要对end时间做判断，如果小于start时间，那么将这次操作进行更新start
            const start_timestamp = new Date(`${_startTime.Y}/${_startTime.M + 1}/${_startTime.D}`);
            const end_timestamp = new Date(`${dayInfo.y}/${dayInfo.m + 1}/${dayInfo.d}`);
            if (end_timestamp < start_timestamp) {
                this.updateStartTime(_startTime, _endTime, year, monthKey, rowKey, itemKey);
            } else {
                this.updateEndTime(_startTime, _endTime, year, monthKey, rowKey, itemKey);
            }
        }
    }

    updateStartTime = (_startTime: selectTimeInterface | null, _endTime: selectTimeInterface | null, year: number, monthKey: number, rowKey: number, itemKey: number): void =>{
        const { defaultStartTime, calendarMode } = this.props;
        const { newMap, select } = updateCalendarMap({
            type: 'start',
            _startIndexInfo: this.state._startIndexInfo,
            _endIndexInfo: this.state._endIndexInfo,
            map: this.state.calendarMap,
            year,
            monthKey, rowKey, itemKey,
            i18n: this.state.i18n,
            calendarMode: calendarMode || 'default'
        });
        this.setState({
            _startIndexInfo: { monthKey, rowKey, itemKey, year },
            _endIndexInfo: null,
            _endTime: null,
            _startTime: this.conversionSelectTime(new Date(`${select.y}/${select.m + 1}/${select.d} ${defaultStartTime}`)),
            calendarMap: newMap,
            _listBoxPaddingBottom: 30
        }, () => {
            this.onChangeEvent('day', 'start');
        });
    }

    updateEndTime(_startTime: selectTimeInterface, _endTime: selectTimeInterface | null, year: number, monthKey: number, rowKey: number, itemKey: number): void {
        const { defaultEndTime } = this.props;
        const { newMap, select } = updateCalendarMap({
            type: 'end',
            _startIndexInfo: this.state._startIndexInfo,
            map: this.state.calendarMap,
            year,
            monthKey, rowKey, itemKey,
            i18n: this.state.i18n,
            calendarMode: this.props.calendarMode || 'default'
        });
        this.setState({
            _endIndexInfo: { monthKey, rowKey, itemKey, year },
            _endTime: this.conversionSelectTime(new Date(`${select.y}/${select.m + 1}/${select.d} ${defaultEndTime}`)),
            calendarMap: newMap
        }, () => {
            this.onChangeEvent('day', 'end');
        });
    }

    resetSelectDay(): void {
        const { newMap } = updateCalendarMap({
            type: 'reset',
            _startIndexInfo: this.state._startIndexInfo,
            _endIndexInfo: this.state._endIndexInfo,
            map: this.state.calendarMap,
            i18n: this.state.i18n,
            calendarMode: this.props.calendarMode || 'default'
        });
        this.setState({
            _startIndexInfo: null,
            _endIndexInfo: null,
            _startTime: null,
            _endTime: null,
            calendarMap: newMap
        });
    }

    selectTimePicker(type: string, selectItem): void {
        const { dataKey } = selectItem;
        const { _startTime, _endTime } = this.state;
        if (type == 'start-time' && _startTime) {
            this.setState({
                _startTime: this.conversionSelectTime(new Date(`${_startTime.Y}/${_startTime.M + 1}/${_startTime.D} ${dataKey}`)),
            }, () => {
                this.onChangeEvent('time', 'start');
            });
        } else if (_endTime) {
            this.setState({
                _endTime: this.conversionSelectTime(new Date(`${_endTime.Y}/${_endTime.M + 1}/${_endTime.D} ${dataKey}`)),
            }, () => {
                this.onChangeEvent('time', 'end');
            });
        }
    }

    onChangeEvent(eventType: string, type: string): void {
        const { timeChange, dayChange } = this.props;
        // let tips = '';
        if (eventType == 'day' && dayChange && isFunction(dayChange)) {
            dayChange(this.echoSelectData(type, this.state._startTime, this.state._endTime));
        } else if (eventType == 'time' && timeChange && isFunction(timeChange)) {
            timeChange(this.echoSelectData(type, this.state._startTime, this.state._endTime));
        }
        // 固定了_calendar_tips
        // if (this.state._calendar_tips != tips) {
        //     this.setState({
        //         _calendar_tips: tips || ''
        //     });
        // }

    }

    echoSelectData(type: string, start: selectTimeInterface | null, end: selectTimeInterface | null): EchoSelectDataReturn | null {
        // 输出日期格式
        if (this.props.mode == 'day') {
            if (start) {
                delete start.h;
                delete start.m;
            }
            return {
                type,
                start,
                end
            };
        } else if (this.props.mode == 'day*time') {
            return {
                type,
                start,
                end
            };
        } else {
            return null;
        }
    }

    formatSubmitEchoData(): FormatSubmitEchoData {
        const { _startTime, _endTime } = this.state;
        const { mode } = this.props;
        if (mode == 'day' && _startTime && _endTime) {
            return {
                start: `${_startTime.Y}/${_startTime.M + 1}/${_startTime.D}`,
                end: `${_endTime.Y}/${_endTime.M + 1}/${_endTime.D}`
            }
        } else if (mode == 'day*time' && _startTime && _endTime) {
            return {
                start: `${_startTime.Y}/${_startTime.M + 1}/${_startTime.D} ${_startTime.h < 10 ? `0${_startTime.h}` : _startTime.h}:${_startTime.m < 10 ? `0${_startTime.m}` : _startTime.m}`,
                end: `${_endTime.Y}/${_endTime.M + 1}/${_endTime.D} ${_endTime.h < 10 ? `0${_endTime.h}` : _endTime.h}:${_endTime.m < 10 ? `0${_endTime.m}` : _endTime.m}`
            }
        } else {
            return {
                start: null,
                end: null
            }
        }
    }

    closeCalendar(): void {
        const { onClose } = this.props;
        onClose && isFunction(onClose) && onClose();
    }

    submit(): void {
        const { _startTime, _endTime } = this.state;
        if (!_startTime || !_endTime) return;
        const { onChange } = this.props;
        if (onChange && isFunction(onChange)) {
            onChange(this.formatSubmitEchoData())
            // 固定了_calendar_tips
            // const tips = onChange(this.formatSubmitEchoData());
            // if (this.state._calendar_tips != tips) {
            //     this.setState({
            //         _calendar_tips: tips || ''
            //     });
            // }
        }
    }

    setTimeText(t){
        this.setState({
            timeText: t
        })
    }

    footerRenderCallback(footerHeight: number): void {
        this.setState({
            _listBoxPaddingBottom: footerHeight + 30
        });
    }

    render() {
        const { style, prefixCls, popupTitle, className, mode, timeRange, minutesInterval, defaultStartTime, defaultEndTime, visible, maskClose, height = '85vh', dayCalculator, pickupCityLocalTimeStr } = this.props;
        const { calendarMap, i18n, _startTime, _endTime, _default_calendar_tips, _calendar_tips, _listBoxPaddingBottom } = this.state;
        const cardClassName: string = classNames(
            prefixCls,
            className
        );
        return (
            <Popup visible={!!visible} bodyStyle={{ height }} maskClose={maskClose} onClose={this.closeCalendar}>
                <div style={style} className={cardClassName}>
                    <CalendarCloseBox popupTitle={popupTitle} onClose={this.closeCalendar} />
                    {/* <CalendarResult lang={lang || 'cn'} i18n={i18n} mode={mode || 'day'} startTime={_startTime} endTime={_endTime} dayCalculator={dayCalculator} /> */}
                    {/* <div className='now-text'>{timeText}</div> */}
                    <CalendarWeek weekList={i18n.weekList} />
                    <CalendarListBox
                        paddingBottom={_listBoxPaddingBottom}
                        selectItem={this.selectItem}
                        list={calendarMap}
                        startTime={_startTime}
                        endTime={_endTime}
                        monthList={i18n.monthList || null}
                        listAcrossTheYearText={i18n.listAcrossTheYearText}
                        setTimeText={this.setTimeText}
                    />
                    <Popup
                        style={{ bottom: 0, top: 'unset', height: 'auto' }}
                        transparent={true}
                        visible={!!_startTime && !!_endTime}
                    >
                        <CalendarFooter
                            renderCallback={this.footerRenderCallback}
                            timeRange={timeRange || [0, 24]}
                            minutesInterval={minutesInterval || 30}
                            i18n={i18n}
                            reset={this.resetSelectDay}
                            submit={this.submit}
                            mode={mode || 'day'}
                            currStartTime={_startTime}
                            currEndTime={_endTime}
                            changeSelectTime={this.updateSelectTime}
                            defaultStartTime={defaultStartTime}
                            defaultEndTime={defaultEndTime}
                            selectTimePicker={this.selectTimePicker}
                            defaultCalendarTips={_default_calendar_tips}
                            calendarTips={_calendar_tips}
                            dayCalculator={dayCalculator}
                            pickupCityLocalTimeStr={pickupCityLocalTimeStr}
                        />
                    </Popup>
                </div>
            </Popup>
        );
    }
}