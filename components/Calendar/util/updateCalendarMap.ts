export default function updateCalendarMap(data): any {
    const { type, _startIndexInfo, _endIndexInfo, _startTime, _endTime, map, monthKey, rowKey, itemKey } = data;
    if (type == 'start') {
        return _updateStartTime(map, monthKey, rowKey, itemKey, _startIndexInfo, _endIndexInfo);
    } else if (type == 'end') {
        return _updateEndTime(map, _startIndexInfo, monthKey, rowKey, itemKey);
    }
}

function _updateStartTime(map, monthKey, rowKey, itemKey,  _startIndexInfo, _endIndexInfo) {

    // 如果存在之前选择，需要将之前选择的内容清空
    if ( _startIndexInfo ) {
        map[_startIndexInfo.monthKey].list[_startIndexInfo.rowKey][_startIndexInfo.itemKey]['startOnly'] = false;
        map[_startIndexInfo.monthKey].list[_startIndexInfo.rowKey][_startIndexInfo.itemKey]['start'] = false;
    }
    if ( _endIndexInfo ) {
        map[_endIndexInfo.monthKey].list[_endIndexInfo.rowKey][_endIndexInfo.itemKey]['end'] = false;
    }

    const item = map[monthKey].list[rowKey][itemKey];
    item['startOnly'] = true;
    return {
        newMap: [].concat(map),
        select: item
    };
}

function _updateEndTime(map, startTimeInfo, monthKey, rowKey, itemKey) {
    const item = map[monthKey].list[rowKey][itemKey];
    const startItem = map[startTimeInfo.monthKey].list[startTimeInfo.rowKey][startTimeInfo.itemKey];
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
    const {monthKey: s_m_k, rowKey: s_r_k, itemKey: s_i_k} = startTimeInfo;
    const {monthKey: e_m_k, rowKey: e_r_k, itemKey: e_i_k} = endTimeInfo;
    for (  )
}