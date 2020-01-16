import { updateCalendarMapProps, CalendarMapItem, updateCalendarMapRetrun, selectTimeIndex, i18n, CalendarMapItemRow } from '../propsType';
export default function updateCalendarMap(data: updateCalendarMapProps): any {
    const { type, _startIndexInfo = null, _endIndexInfo = null, map, monthKey, rowKey, itemKey, calendarMode, i18n } = data;
    if (type == 'start' && monthKey != null && rowKey != null && itemKey != null) {
        return _updateStartTime(map, monthKey, rowKey, itemKey, _startIndexInfo, _endIndexInfo, calendarMode, i18n);
    } else if (_startIndexInfo && type == 'end' && monthKey != null && rowKey != null && itemKey != null) {
        return _updateEndTime(map, _startIndexInfo, monthKey, rowKey, itemKey, calendarMode, i18n);
    } else if (_startIndexInfo && _endIndexInfo && type == 'reset') {
        return _updateResetCalendar(map, _startIndexInfo, _endIndexInfo);
    }
    return {
        newMap: map,
        select: null
    }
}

function _updateStartTime(map: Array<CalendarMapItem>, monthKey: number, rowKey: number, itemKey: number, _startIndexInfo: selectTimeIndex | null, _endIndexInfo: selectTimeIndex | null, calendarMode: string, i18n: i18n): updateCalendarMapRetrun {
    // 如果存在之前选择，需要将之前选择的内容清空
    if (_startIndexInfo && _endIndexInfo) {
        map = _updateActiveTime(map, _startIndexInfo, _endIndexInfo, false);
        map[_endIndexInfo.monthKey].list[_endIndexInfo.rowKey][_endIndexInfo.itemKey]['end'] = false;
        map[_endIndexInfo.monthKey].list[_endIndexInfo.rowKey][_endIndexInfo.itemKey]['_sub'] = false;
    }
    if (_startIndexInfo) {
        map[_startIndexInfo.monthKey].list[_startIndexInfo.rowKey][_startIndexInfo.itemKey]['startOnly'] = false;
        map[_startIndexInfo.monthKey].list[_startIndexInfo.rowKey][_startIndexInfo.itemKey]['start'] = false;
        map[_startIndexInfo.monthKey].list[_startIndexInfo.rowKey][_startIndexInfo.itemKey]['_sub'] = false;
    }

    const item = map[monthKey].list[rowKey][itemKey];
    item['startOnly'] = true;

    // 设置选中文案
    if (calendarMode == 'car') {
        item['_sub'] = i18n.picker_car;
    } else {
        item['_sub'] = i18n.picker_default;
    }

    return {
        newMap: map.concat([]),
        select: item
    };
}

function _updateEndTime(map: Array<CalendarMapItem>, startTimeInfo: selectTimeIndex, monthKey: number, rowKey: number, itemKey: number, calendarMode: string, i18n: i18n) {
    const item = map[monthKey].list[rowKey][itemKey];
    const startItem = map[startTimeInfo.monthKey].list[startTimeInfo.rowKey][startTimeInfo.itemKey];
    startItem['startOnly'] = false;
    startItem['start'] = true;
    item['end'] = true;
    // 设置选中文案
    if (calendarMode == 'car') {
        // 是否当前取还
        if ( item.start ) {
            item['_sub'] = i18n.inTheDay_car;
        } else {
            item['_sub'] = i18n.return_car;
            // 初次渲染时直接调用的是_updateEndTime，所以需要在此处重新set多一次_sub字段
            startItem['_sub'] = i18n.picker_car;
        }
    } else {
        item['_sub'] = i18n.return_default;
    }
    map = _updateActiveTime(map, startTimeInfo, { monthKey, rowKey, itemKey }, true);
    return {
        newMap: map.concat([]),
        select: item
    };
}

function _updateResetCalendar(map: Array<CalendarMapItem>, startIndexInfo:selectTimeIndex, endIndexInfo:selectTimeIndex): updateCalendarMapRetrun {
    const startDayItem = map[startIndexInfo.monthKey].list[startIndexInfo.rowKey][startIndexInfo.itemKey];
    const endDayItem = map[endIndexInfo.monthKey].list[endIndexInfo.rowKey][endIndexInfo.itemKey];

    startDayItem['start'] = false;
    startDayItem['startOnly'] = false;
    endDayItem['end'] = false;

    map = _updateActiveTime(map, startIndexInfo, endIndexInfo, false);
    return {
        newMap: map.concat([]),
        select: null
    };
}

function _updateActiveTime(map: Array<CalendarMapItem>, startTimeInfo: selectTimeIndex, endTimeInfo: selectTimeIndex, isActive: boolean): Array<CalendarMapItem> {
    const { monthKey: s_m_k, rowKey: s_r_k, itemKey: s_i_k } = startTimeInfo;
    const { monthKey: e_m_k, rowKey: e_r_k, itemKey: e_i_k } = endTimeInfo;
    for (let i = s_m_k; i <= e_m_k; i++) {
        const monthData: CalendarMapItem = map[i];

        // 当start那一行进行更新时，才默认开始下标未当前start的index，否则为0
        const rowStartIndex = s_m_k == i ? s_r_k : 0;
        for (let n = rowStartIndex; n < monthData.list.length; n++) {
            // @ts-ignore
            const rowItem: Array<CalendarMapItemRow> = monthData.list[n];
            // 当start那一行进行更新时，才默认开始下标未当前start的index，否则为0
            const itmeStartIndex = s_m_k == i && s_r_k == n ? s_i_k : 0;
            for (let k = itmeStartIndex; k < rowItem.length; k++) {
                if (rowItem[k].gone || rowItem[k].empty || !rowItem[k] || !rowItem[k].d) continue;

                if (!rowItem[k].start || !rowItem[k].end || !rowItem[k].startOnly) {

                    rowItem[k].active = isActive;
                }

                if (e_i_k == k && e_r_k == n && e_m_k == i) {
                    return map;
                }

            }
        }
    }
    return map;
}