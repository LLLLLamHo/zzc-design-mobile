import { updateCalendarMapProps, CalendarMapItem, updateCalendarMapRetrun, selectTimeIndex, i18n, CalendarMapItemRow } from '../propsType';

const currYear = new Date().getFullYear();

export default function updateCalendarMap(data: updateCalendarMapProps): any {
    const { type, _startIndexInfo = null, _endIndexInfo = null, map, monthKey, rowKey, itemKey, calendarMode, i18n, year } = data;
    if (type == 'start' && year != null && monthKey != null && rowKey != null && itemKey != null) {
        return _updateStartTime(map, year, monthKey, rowKey, itemKey, _startIndexInfo, _endIndexInfo, calendarMode, i18n);
    } else if (_startIndexInfo && type == 'end' && year != null && monthKey != null && rowKey != null && itemKey != null) {
        return _updateEndTime(map, _startIndexInfo, year, monthKey, rowKey, itemKey, calendarMode, i18n);
    } else if (_startIndexInfo && _endIndexInfo && type == 'reset') {
        return _updateResetCalendar(map, _startIndexInfo, _endIndexInfo);
    }
    return {
        newMap: map,
        select: null
    }
}

function _updateStartTime(map: Array<CalendarMapItem>, year: number, monthKey: number, rowKey: number, itemKey: number, _startIndexInfo: selectTimeIndex | null, _endIndexInfo: selectTimeIndex | null, calendarMode: string, i18n: i18n): updateCalendarMapRetrun {

    // 如果存在之前选择，需要将之前选择的内容清空
    if (_startIndexInfo && _endIndexInfo) {
        const oldStartMonthIndex = _getMapCurrDateItemIndex2(map, _startIndexInfo.year, _startIndexInfo.monthKey);
        const oldEndMonthIndex = _getMapCurrDateItemIndex2(map, _endIndexInfo.year, _endIndexInfo.monthKey);
        map[oldStartMonthIndex].list[_startIndexInfo.rowKey][_startIndexInfo.itemKey]['start'] = false;
        map[oldStartMonthIndex].list[_startIndexInfo.rowKey][_startIndexInfo.itemKey]['startOnly'] = false;
        map[oldStartMonthIndex].list[_startIndexInfo.rowKey][_startIndexInfo.itemKey]['_sub'] = false;
        map[oldEndMonthIndex].list[_endIndexInfo.rowKey][_endIndexInfo.itemKey]['end'] = false;
        map[oldEndMonthIndex].list[_endIndexInfo.rowKey][_endIndexInfo.itemKey]['_sub'] = false;

        map = _updateActiveTime(map, _startIndexInfo, _endIndexInfo, false);
        // map[_endIndexInfo.monthKey].list[_endIndexInfo.rowKey][_endIndexInfo.itemKey]['end'] = false;
        // map[_endIndexInfo.monthKey].list[_endIndexInfo.rowKey][_endIndexInfo.itemKey]['_sub'] = false;
    }
    if (_startIndexInfo) {
        const oldStartMonthIndex = _getMapCurrDateItemIndex2(map, _startIndexInfo.year, _startIndexInfo.monthKey);
        map[oldStartMonthIndex].list[_startIndexInfo.rowKey][_startIndexInfo.itemKey]['startOnly'] = false;
        map[oldStartMonthIndex].list[_startIndexInfo.rowKey][_startIndexInfo.itemKey]['start'] = false;
        map[oldStartMonthIndex].list[_startIndexInfo.rowKey][_startIndexInfo.itemKey]['_sub'] = false;
    }
    const startDateIndex = _getMapCurrDateItemIndex2(map, year, monthKey);
    const item = map[startDateIndex].list[rowKey][itemKey];
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

function _updateEndTime(map: Array<CalendarMapItem>, startTimeInfo: selectTimeIndex, year: number, monthKey: number, rowKey: number, itemKey: number, calendarMode: string, i18n: i18n) {
    const startDateIndex = _getMapCurrDateItemIndex(map, startTimeInfo);
    const endDateIndex = _getMapCurrDateItemIndex2(map, year, monthKey);
    const startItem = map[startDateIndex].list[startTimeInfo.rowKey][startTimeInfo.itemKey];
    const item = map[endDateIndex].list[rowKey][itemKey];

    startItem['startOnly'] = false;
    startItem['start'] = true;
    item['end'] = true;
    // 设置选中文案
    if (calendarMode == 'car') {
        // 是否当前取还
        if (item.start) {
            item['_sub'] = i18n.inTheDay_car;
        } else {
            item['_sub'] = i18n.return_car;
            // 初次渲染时直接调用的是_updateEndTime，所以需要在此处重新set多一次_sub字段
            startItem['_sub'] = i18n.picker_car;
        }
    } else {
        item['_sub'] = i18n.return_default;
    }
    map = _updateActiveTime(map, startTimeInfo, { monthKey, rowKey, itemKey, year }, true);
    return {
        newMap: map.concat([]),
        select: item
    };
}

function _updateResetCalendar(map: Array<CalendarMapItem>, startIndexInfo: selectTimeIndex, endIndexInfo: selectTimeIndex): updateCalendarMapRetrun {
    const startDateIndex = _getMapCurrDateItemIndex(map, startIndexInfo);
    const endDateIndex = _getMapCurrDateItemIndex(map, endIndexInfo);

    const startDayItem = map[startDateIndex].list[startIndexInfo.rowKey][startIndexInfo.itemKey];
    const endDayItem = map[endDateIndex].list[endIndexInfo.rowKey][endIndexInfo.itemKey];

    startDayItem['start'] = false;
    startDayItem['_sub'] = false;
    startDayItem['startOnly'] = false;
    endDayItem['end'] = false;
    endDayItem['_sub'] = false;

    map = _updateActiveTime(map, startIndexInfo, endIndexInfo, false);
    return {
        newMap: map.concat([]),
        select: null
    };
}

function _getMapCurrDateItemIndex(map: Array<CalendarMapItem>, info: selectTimeIndex) {
    const { monthKey, year } = info;
    const isNextYear = currYear < year;
    return isNextYear ? monthKey + 12 - map[0].m : monthKey - map[0].m;
}

function _getMapCurrDateItemIndex2(map: Array<CalendarMapItem>, year: number, number) {
    const isNextYear = currYear < year;
    return isNextYear ? number + 12 - map[0].m : number - map[0].m;
}

function _updateActiveTime(map: Array<CalendarMapItem>, startTimeInfo: selectTimeIndex, endTimeInfo: selectTimeIndex, isActive: boolean): Array<CalendarMapItem> {
    const { rowKey: s_r_k, itemKey: s_i_k } = startTimeInfo;
    const { rowKey: e_r_k, itemKey: e_i_k } = endTimeInfo;
    // 快速定位开始位置，当前渲染的月份列表中第一位是第几个月，然后和当前选中日期的月份相减，得出具体下标
    // 假设当前渲染月份是三月到明年三月，12个月份，如果当前选中的日期是3月份，那么需要将当前monthKey - map中的第一个itm的m，获取当前选中的月份具体在数组中的第几个
    const s_m_k = _getMapCurrDateItemIndex(map, startTimeInfo);
    const e_m_k = _getMapCurrDateItemIndex(map, endTimeInfo);

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