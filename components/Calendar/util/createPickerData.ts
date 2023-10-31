import { selectTimeInterface} from '../propsType';
import { PickerData, ListData } from '../../Picker/propsType';
import { isString } from '../../_util/typeof';

export default function createPickerData(timeRange, minutesInterval: number, currStartTime: selectTimeInterface, currEndTime: selectTimeInterface, defaultStartTime: string, defaultEndTime: string): Array<PickerData> {
    
    const startTimeRange = isString(timeRange) ? ( JSON.parse(timeRange).left || [0,24]) : timeRange ; 
    const endTimeRange = isString(timeRange) ? ( JSON.parse(timeRange).right || [0,24]) : timeRange ;

    const startPickerHourInfo = _renderPickerDataHour( startTimeRange,currStartTime,defaultStartTime);
    const startPickerMinuteInfo = _renderPickerDataMinute( minutesInterval,currStartTime,defaultEndTime);

    const endPickerHourInfo = _renderPickerDataHour( endTimeRange,currEndTime,defaultEndTime);
    const endPickerMinuteInfo = _renderPickerDataMinute( minutesInterval,currEndTime,defaultEndTime);

    const pickerInfo = [
        {
            className: 'zds-calendar-t-p-s-d',
            itemClassName: 'zds-calendar-t-p-s-d-i',
            scrollType: '0',
            ...startPickerHourInfo
        },
        {
            className: 'zds-calendar-t-p-s-t',
            itemClassName: 'zds-calendar-t-p-s-t-i',
            scrollType: '1',
            ...startPickerMinuteInfo
        },
        {
            className: 'zds-calendar-t-r-s-d',
            itemClassName: 'zds-calendar-t-r-s-d-i',
            scrollType: '2',
            ...endPickerHourInfo
        },
        {
            className: 'zds-calendar-t-r-s-t',
            itemClassName: 'zds-calendar-t-r-s-t-i',
            scrollType: '3',
            ...endPickerMinuteInfo
        },
    ];
    return pickerInfo;
}

export function _renderPickerData(timeRange: [number, number],minutesInterval: number, currTime: selectTimeInterface, defaultTime: string,): Object {
    const [start, end] = timeRange;
    const pickerIime: Array<ListData> = [];
    const MAX = 23;
    let Index = 0;

    let selectTime = currTime ? `${currTime.h}:${currTime.m}` : defaultTime;
    
    for (let i = start; i <= end; i++) {

        if ( i > MAX) {
            break;
        }

        let step;
        if (60 % minutesInterval == 0) {
            step = 60 / minutesInterval;
        } else {
            step = 0;
        }
        for (let n = 0; n < step; n++) {
            const h = i < 10 ? `0${i}` : i;
            const m = n * minutesInterval;

            if ( i == end && n > 0) {
                break;
            }

            const minutes = m < 10 ? `0${m}`: m;

            const c_t = `${i}:${m}`;

            const time = `${h}:${minutes}`;
            if ( c_t == selectTime) {
                Index = pickerIime.length;
            }
           
            pickerIime.push({
                text: time,
                dataKey: time
            });
        }
    }
    return {
        selectIndex: Index,
        listData: pickerIime
    } 
}

export function _renderPickerDataHour(timeRange: [number, number], currTime: selectTimeInterface, defaultTime: string): Object {
    const [start, end] = timeRange;
    const pickerIime: Array<ListData> = [];
    const MAX = 23;
    let Index = 0;
    let selectDay = currTime ? `${currTime.h}` : defaultTime.split(":")[0];

    for (let i = start; i <= end; i++) {

        if ( i > MAX) {
            break;
        }
        if(selectDay === i.toString()){ Index = i }
        pickerIime.push({
            text: i > 9 ? i.toString() : '0' + i,
            dataKey: i > 9 ? i.toString() : '0' + i
        });
        
    }
    return {
        selectIndex: Index,
        listData: pickerIime
    } 
}


export function _renderPickerDataMinute(minutesInterval: number, currTime: selectTimeInterface, defaultTime: string): Object {
    const pickerIime: Array<ListData> = [];
    let Index = 0;
    let selectTime = currTime ? `${currTime.m}` : defaultTime.split(":")[1];
    let step;
    if (60 % minutesInterval == 0) {
        step = 60 / minutesInterval;
    } else {
        step = 0;
    }
    for (let n = 0; n < step; n++) {
        const m = n * minutesInterval;
        const minutes = m < 10 ? `0${m}`: m;
        const c_t = `${m}`;
        const time = `${minutes}`;
        if ( c_t == selectTime) {
            Index = n;
        }
        
        pickerIime.push({
            text: time,
            dataKey: time
        });
    }
    return {
        selectIndex: Index,
        listData: pickerIime
    } 
}