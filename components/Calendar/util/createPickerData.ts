import {selectTimeInterface} from '../propsType';
import { PickerData, ListData } from '../../Picker/propsType';
export default function createPickerData(timeRange: [number, number], minutesInterval: number, currStartTime: selectTimeInterface, currEndTime: selectTimeInterface, defaultStartTime: string, defaultEndTime: string): Array<PickerData> {
    const [start, end] = timeRange;
    const pickerIime: Array<ListData> = [];
    const MAX = 23;
    let startIndex = 0;
    let endIndex = 0;

    let selectStartTime = currStartTime ? `${currStartTime.h}:${currStartTime.m}` : defaultStartTime;
    let selectEndTime = currEndTime ? `${currEndTime.h}:${currEndTime.m}` : defaultEndTime;

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
            if ( c_t == selectStartTime) {
                startIndex = pickerIime.length;
            }
            if ( c_t == selectEndTime) {
                endIndex = pickerIime.length;
            }
            pickerIime.push({
                text: time,
                dataKey: time
            });
        }
    }

    const pickerInfo = [
        {
            className: 'zds-calendar-t-p-s',
            itemClassName: 'zds-calendar-t-p-s-i',
            scrollType: 'start-time',
            selectIndex: startIndex,
            listData: pickerIime
        },
        {
            className: 'zds-calendar-t-r-s',
            itemClassName: 'zds-calendar-t-r-s-i',
            scrollType: 'end-time',
            selectIndex: endIndex,
            listData: pickerIime
        },
    ];
    return pickerInfo;
}