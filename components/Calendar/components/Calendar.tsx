import React, { PureComponent } from 'react';
import classNames from 'classnames';
import config from '../../_util/config';
import { CalendarProps } from '../propsType';
import CalendarCloseBox from './CalendarCloseBox';
import CalendarResult from './CalendarResult';
import CalendarWeek from './CalendarWeek';
import CalendarListBox from './CalendarListBox';
import createCalendarMap from '../util/createCalendarMap';
import calendar_i18n from '../util/i18n';
import updateCalendarMap from '../util/updateCalendarMap';

export default class Calendar extends PureComponent<CalendarProps, any> {
    constructor(props) {
        super(props);
        console.log(props)
        this.state = {
            i18n: calendar_i18n(props.lang),
            calendarMap: createCalendarMap(props.lang),
            _startTime: props.startTime ? this.conversionSelectTime(props.startTime) : null,
            _startIndexInfo: null,
            _endTime: props.endTime ? this.conversionSelectTime(props.endTime) : null,
            _endIndexInfo: null
        }
        this.selectItem = this.selectItem.bind(this);
    }
    static defaultProps = {
        prefixCls: `${config.cls}-calendar`,
        className: '',
        style: {},
        lang: 'cn',
        // startTime: new Date(),
        // endTime: new Date('2020/1/27')
    };

    conversionSelectTime(time) {
        if (!time) return null;
        let newTime = new Date(time);
        return {
            Y: newTime.getFullYear(),
            M: newTime.getMonth(),
            D: newTime.getDate(),
            h: newTime.getHours(),
            m: newTime.getMinutes(),
            w: newTime.getDay(),
            t: newTime.getTime()
        }
    }

    // 因为react设计大量循环计算，所以点击选择的规则通过操作DOM来渲染
    selectItem(monthKey, rowKey, itemKey, dayInfo) {

        const { _startTime, _endTime } = this.state;
        if ((!_startTime && !_endTime) || (_startTime && _endTime)) {
            this.updateStartTime(_startTime, _endTime, monthKey, rowKey, itemKey);
        } else if (_startTime && !_endTime) {
            // 需要对end时间做判断，如果小于start时间，那么将这次操作进行更新start
            const start_timestamp = new Date(`${_startTime.Y}/${_startTime.M + 1}/${_startTime.D}`);
            const end_timestamp = new Date(`${dayInfo.y}/${dayInfo.m + 1}/${dayInfo.d}`);
            if ( end_timestamp < start_timestamp ) {
                this.updateStartTime(_startTime, _endTime, monthKey, rowKey, itemKey);
            } else {
                this.updateEndTime(_startTime, _endTime, monthKey, rowKey, itemKey);
            }
        }
    }

    updateStartTime(_startTime, _endTime, monthKey, rowKey, itemKey) {
        const { newMap, select } = updateCalendarMap({
            type: 'start',
            _startTime,
            _endTime,
            _startIndexInfo: this.state._startIndexInfo,
            _endIndexInfo: this.state._endIndexInfo,
            map: this.state.calendarMap,
            monthKey, rowKey, itemKey
        });
        this.setState({
            _startIndexInfo: { monthKey, rowKey, itemKey },
            _endIndexInfo: null,
            _endTime: null,
            _startTime: this.conversionSelectTime(new Date(`${select.y}/${select.m + 1}/${select.d}`)),
            calendarMap: newMap
        });
    }

    updateEndTime(_startTime, _endTime, monthKey, rowKey, itemKey) {
        const { newMap, select } = updateCalendarMap({
            type: 'end',
            _startIndexInfo: this.state._startIndexInfo,
            _startTime,
            _endTime,
            map: this.state.calendarMap,
            monthKey, rowKey, itemKey
        });
        this.setState({
            _endIndexInfo: { monthKey, rowKey, itemKey },
            _endTime: this.conversionSelectTime(new Date(`${select.y}/${select.m + 1}/${select.d}`)),
            calendarMap: newMap
        });
    }

    render() {
        const { style, prefixCls, className, lang } = this.props;
        const { calendarMap, i18n, _startTime, _endTime } = this.state;
        const cardClassName: string = classNames(
            prefixCls,
            className
        );
        console.log(calendarMap)
        return (
            <div style={style} className={cardClassName}>
                <CalendarCloseBox />
                <CalendarResult lang={lang} i18n={i18n} startTime={_startTime} endTime={_endTime} />
                <CalendarWeek weekList={i18n.weekList} />
                <CalendarListBox selectItem={this.selectItem} list={calendarMap} />
            </div>
        );
    }
}