'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = updateCalendarMap;
function updateCalendarMap(data) {
    var type = data.type,
        _data$_startIndexInfo = data._startIndexInfo,
        _startIndexInfo = _data$_startIndexInfo === undefined ? null : _data$_startIndexInfo,
        _data$_endIndexInfo = data._endIndexInfo,
        _endIndexInfo = _data$_endIndexInfo === undefined ? null : _data$_endIndexInfo,
        map = data.map,
        monthKey = data.monthKey,
        rowKey = data.rowKey,
        itemKey = data.itemKey,
        calendarMode = data.calendarMode,
        i18n = data.i18n;

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
    };
}
function _updateStartTime(map, monthKey, rowKey, itemKey, _startIndexInfo, _endIndexInfo, calendarMode, i18n) {
    // 如果存在之前选择，需要将之前选择的内容清空
    if (_startIndexInfo && _endIndexInfo) {
        var oldStartMonthIndex = _getMapCurrDateItemIndex2(map, _startIndexInfo.monthKey);
        var oldEndMonthIndex = _getMapCurrDateItemIndex2(map, _endIndexInfo.monthKey);
        map[oldStartMonthIndex].list[_startIndexInfo.rowKey][_startIndexInfo.itemKey]['start'] = false;
        map[oldStartMonthIndex].list[_startIndexInfo.rowKey][_startIndexInfo.itemKey]['startOnly'] = false;
        map[oldStartMonthIndex].list[_startIndexInfo.rowKey][_startIndexInfo.itemKey]['_sub'] = false;
        map[oldEndMonthIndex].list[_endIndexInfo.rowKey][_endIndexInfo.itemKey]['end'] = false;
        map[oldEndMonthIndex].list[_endIndexInfo.rowKey][_endIndexInfo.itemKey]['_sub'] = false;
        map = _updateActiveTime(map, _startIndexInfo, _endIndexInfo, false);
        map[_endIndexInfo.monthKey].list[_endIndexInfo.rowKey][_endIndexInfo.itemKey]['end'] = false;
        map[_endIndexInfo.monthKey].list[_endIndexInfo.rowKey][_endIndexInfo.itemKey]['_sub'] = false;
    }
    if (_startIndexInfo) {
        var _oldStartMonthIndex = _getMapCurrDateItemIndex2(map, _startIndexInfo.monthKey);
        map[_oldStartMonthIndex].list[_startIndexInfo.rowKey][_startIndexInfo.itemKey]['startOnly'] = false;
        map[_oldStartMonthIndex].list[_startIndexInfo.rowKey][_startIndexInfo.itemKey]['start'] = false;
        map[_oldStartMonthIndex].list[_startIndexInfo.rowKey][_startIndexInfo.itemKey]['_sub'] = false;
    }
    var startDateIndex = _getMapCurrDateItemIndex2(map, monthKey);
    var item = map[startDateIndex].list[rowKey][itemKey];
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
function _updateEndTime(map, startTimeInfo, monthKey, rowKey, itemKey, calendarMode, i18n) {
    var startDateIndex = _getMapCurrDateItemIndex(map, startTimeInfo);
    var endDateIndex = _getMapCurrDateItemIndex2(map, monthKey);
    var startItem = map[startDateIndex].list[startTimeInfo.rowKey][startTimeInfo.itemKey];
    var item = map[endDateIndex].list[rowKey][itemKey];
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
    map = _updateActiveTime(map, startTimeInfo, { monthKey: monthKey, rowKey: rowKey, itemKey: itemKey }, true);
    return {
        newMap: map.concat([]),
        select: item
    };
}
function _updateResetCalendar(map, startIndexInfo, endIndexInfo) {
    var startDateIndex = _getMapCurrDateItemIndex(map, startIndexInfo);
    var endDateIndex = _getMapCurrDateItemIndex(map, endIndexInfo);
    var startDayItem = map[startDateIndex].list[startIndexInfo.rowKey][startIndexInfo.itemKey];
    var endDayItem = map[endDateIndex].list[endIndexInfo.rowKey][endIndexInfo.itemKey];
    startDayItem['start'] = false;
    startDayItem['startOnly'] = false;
    endDayItem['end'] = false;
    map = _updateActiveTime(map, startIndexInfo, endIndexInfo, false);
    return {
        newMap: map.concat([]),
        select: null
    };
}
function _getMapCurrDateItemIndex(map, info) {
    var monthKey = info.monthKey;

    return monthKey - map[0].m;
}
function _getMapCurrDateItemIndex2(map, number) {
    return number - map[0].m;
}
function _updateActiveTime(map, startTimeInfo, endTimeInfo, isActive) {
    var s_r_k = startTimeInfo.rowKey,
        s_i_k = startTimeInfo.itemKey;
    var e_r_k = endTimeInfo.rowKey,
        e_i_k = endTimeInfo.itemKey;
    // 快速定位开始位置，当前渲染的月份列表中第一位是第几个月，然后和当前选中日期的月份相减，得出具体下标
    // 假设当前渲染月份是三月到明年三月，12个月份，如果当前选中的日期是3月份，那么需要将当前monthKey - map中的第一个itm的m，获取当前选中的月份具体在数组中的第几个

    var s_m_k = _getMapCurrDateItemIndex(map, startTimeInfo);
    var e_m_k = _getMapCurrDateItemIndex(map, endTimeInfo);
    for (var i = s_m_k; i <= e_m_k; i++) {
        var monthData = map[i];
        // 当start那一行进行更新时，才默认开始下标未当前start的index，否则为0
        var rowStartIndex = s_m_k == i ? s_r_k : 0;
        for (var n = rowStartIndex; n < monthData.list.length; n++) {
            // @ts-ignore
            var rowItem = monthData.list[n];
            // 当start那一行进行更新时，才默认开始下标未当前start的index，否则为0
            var itmeStartIndex = s_m_k == i && s_r_k == n ? s_i_k : 0;
            for (var k = itmeStartIndex; k < rowItem.length; k++) {
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