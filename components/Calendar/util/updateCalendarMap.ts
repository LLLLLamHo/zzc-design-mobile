export default function updateCalendarMap(data): any {
    const { type, _startIndexInfo, _endIndexInfo, _startTime, _endTime, map, monthKey, rowKey, itemKey, calendarMode, i18n } = data;
    if (type == 'start') {
        return _updateStartTime(map, monthKey, rowKey, itemKey, _startIndexInfo, _endIndexInfo, calendarMode, i18n);
    } else if (type == 'end') {
        return _updateEndTime(map, _startIndexInfo, monthKey, rowKey, itemKey, calendarMode, i18n);
    }
}

function _updateStartTime(map, monthKey, rowKey, itemKey,  _startIndexInfo, _endIndexInfo, calendarMode, i18n) {
    // 如果存在之前选择，需要将之前选择的内容清空
    if ( _endIndexInfo ) {
        map = _updateActiveTime(map, _startIndexInfo, _endIndexInfo, false);
        map[_endIndexInfo.monthKey].list[_endIndexInfo.rowKey][_endIndexInfo.itemKey]['end'] = false;
        map[_endIndexInfo.monthKey].list[_endIndexInfo.rowKey][_endIndexInfo.itemKey]['_sub'] = false;
    }
    if ( _startIndexInfo ) {
        map[_startIndexInfo.monthKey].list[_startIndexInfo.rowKey][_startIndexInfo.itemKey]['startOnly'] = false;
        map[_startIndexInfo.monthKey].list[_startIndexInfo.rowKey][_startIndexInfo.itemKey]['start'] = false;
        map[_startIndexInfo.monthKey].list[_startIndexInfo.rowKey][_startIndexInfo.itemKey]['_sub'] = false;
    }

    const item = map[monthKey].list[rowKey][itemKey];
    item['startOnly'] = true;
    
    // 设置选中文案
    if ( calendarMode == 'car' ) {
        item['_sub'] = i18n.picker_car;
    } else {
        item['_sub'] = i18n.picker_default;
    }

    return {
        newMap: [].concat(map),
        select: item
    };
}

function _updateEndTime(map, startTimeInfo, monthKey, rowKey, itemKey, calendarMode, i18n) {
    const item = map[monthKey].list[rowKey][itemKey];
    const startItem = map[startTimeInfo.monthKey].list[startTimeInfo.rowKey][startTimeInfo.itemKey];
    startItem['startOnly'] = false;
    startItem['start'] = true;
    item['end'] = true;
     // 设置选中文案
     if ( calendarMode == 'car' ) {
        item['_sub'] = i18n.return_car;
    } else {
        item['_sub'] = i18n.return_default;
    }
    map = _updateActiveTime(map, startTimeInfo, {monthKey, rowKey, itemKey}, true);
    return {
        newMap: [].concat(map),
        select: item
    };
}

function _updateActiveTime(map, startTimeInfo, endTimeInfo, isActive) {
    const {monthKey: s_m_k, rowKey: s_r_k, itemKey: s_i_k} = startTimeInfo;
    const {monthKey: e_m_k, rowKey: e_r_k, itemKey: e_i_k} = endTimeInfo;
    for ( let i = s_m_k; i <= e_m_k; i++ ) {
        const monthData = map[i];

        // 当start那一行进行更新时，才默认开始下标未当前start的index，否则为0
        const rowStartIndex = s_m_k == i ? s_r_k : 0;
        for ( let n = rowStartIndex; n < monthData.list.length; n++) {
            const rowItem = monthData.list[n];

            // 当start那一行进行更新时，才默认开始下标未当前start的index，否则为0
            const itmeStartIndex = s_m_k == i && s_r_k && s_r_k == n ? s_i_k : 0;

            for ( let k = itmeStartIndex; k < rowItem.length; k++) {
                if ( rowItem[k].gone || rowItem.empty || !rowItem || rowItem.d == '' ) continue;

                if ( !rowItem[k].start || !rowItem[k].end || !rowItem[k].startOnly ) {
                    rowItem[k].active = isActive;
                }
                if ( e_i_k == k && e_r_k == n && e_m_k == i) {
                    return map;
                }
                
            }
        }
    }
    return map;
}