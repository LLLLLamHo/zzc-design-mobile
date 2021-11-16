import {selectTimeInterface} from '../propsType';
import { PickerData, ListData } from '../../Picker/propsType';
import { isString } from '../../_util/typeof';

export default function createPickerData(timeRange, minutesInterval: number, currStartTime: selectTimeInterface, currEndTime: selectTimeInterface, defaultStartTime: string, defaultEndTime: string): Array<PickerData> {
    
    const startTimeRange = isString(timeRange) ? ( JSON.parse(timeRange).left || [0,24]) : timeRange ; 
    const endTimeRange = isString(timeRange) ? ( JSON.parse(timeRange).right || [0,24]) : timeRange ;

    const startPickerInfo = _renderPickerData( startTimeRange ,minutesInterval,currStartTime,defaultStartTime);
    const endPickerInfo = _renderPickerData( endTimeRange ,minutesInterval,currEndTime,defaultEndTime);

    const pickerInfo = [
        {
            className: 'zds-calendar-t-p-s',
            itemClassName: 'zds-calendar-t-p-s-i',
            scrollType: 'start-time',
            ...startPickerInfo
        },
        {
            className: 'zds-calendar-t-r-s',
            itemClassName: 'zds-calendar-t-r-s-i',
            scrollType: 'end-time',
            ...endPickerInfo
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