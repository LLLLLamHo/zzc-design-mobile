'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = updateCalendarMap;
function updateCalendarMap(data) {
    var type = data.type,
        _startIndexInfo = data._startIndexInfo,
        _endIndexInfo = data._endIndexInfo,
        _startTime = data._startTime,
        _endTime = data._endTime,
        map = data.map,
        monthKey = data.monthKey,
        rowKey = data.rowKey,
        itemKey = data.itemKey;

    if (type == 'start') {
        return _updateStartTime(map, monthKey, rowKey, itemKey, _startIndexInfo, _endIndexInfo);
    } else if (type == 'end') {
        return _updateEndTime(map, _startIndexInfo, monthKey, rowKey, itemKey);
    }
}
function _updateStartTime(map, monthKey, rowKey, itemKey, _startIndexInfo, _endIndexInfo) {
    // 如果存在之前选择，需要将之前选择的内容清空
    if (_startIndexInfo) {
        map[_startIndexInfo.monthKey].list[_startIndexInfo.rowKey][_startIndexInfo.itemKey]['startOnly'] = false;
        map[_startIndexInfo.monthKey].list[_startIndexInfo.rowKey][_startIndexInfo.itemKey]['start'] = false;
    }
    if (_endIndexInfo) {
        map[_endIndexInfo.monthKey].list[_endIndexInfo.rowKey][_endIndexInfo.itemKey]['end'] = false;
    }
    var item = map[monthKey].list[rowKey][itemKey];
    item['startOnly'] = true;
    return {
        newMap: [].concat(map),
        select: item
    };
}
function _updateEndTime(map, startTimeInfo, monthKey, rowKey, itemKey) {
    var item = map[monthKey].list[rowKey][itemKey];
    var startItem = map[startTimeInfo.monthKey].list[startTimeInfo.rowKey][startTimeInfo.itemKey];
    startItem['startOnly'] = false;
    startItem['start'] = true;
    item['end'] = true;
    // _updateActiveTime(map, startTimeInfo, {monthKey, rowKey, itemKey})
    return {
        newMap: [].concat(map),
        select: item
    };
}
function _updateActiveTime(map, startTimeInfo, endTimeInfo) {
    var s_m_k = startTimeInfo.monthKey,
        s_r_k = startTimeInfo.rowKey,
        s_i_k = startTimeInfo.itemKey;
    var e_m_k = endTimeInfo.monthKey,
        e_r_k = endTimeInfo.rowKey,
        e_i_k = endTimeInfo.itemKey;

    for (;;) {}
}