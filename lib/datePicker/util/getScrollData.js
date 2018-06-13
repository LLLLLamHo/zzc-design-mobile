'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getModeDateData = getModeDateData;
exports.getModeTimeData = getModeTimeData;
exports.getModeDateTimeData = getModeDateTimeData;
exports.getModeYearData = getModeYearData;
exports.getModeMonthData = getModeMonthData;
function getModeDateData(BScrollList, state) {
    var yearBS = BScrollList.year,
        monthBS = BScrollList.month,
        dayBS = BScrollList.day;
    var yearList = state.yearList,
        monthList = state.monthList,
        dayList = state.dayList;

    var year = yearList.listData[yearBS.getSelectedIndex()].dataKey;
    var month = monthList.listData[monthBS.getSelectedIndex()].dataKey;
    var day = dayList.listData[dayBS.getSelectedIndex()].dataKey;
    return year + '-' + resetDate(month) + '-' + resetDate(day);
}
function getModeTimeData(BScrollList, state, use12hour) {
    var hourBS = BScrollList.hour,
        minuteBS = BScrollList.minute,
        hour12BS = BScrollList.hour12;
    var hourList = state.hourList,
        minuteList = state.minuteList,
        hour12List = state.hour12List;

    var hour = hourList.listData[hourBS.getSelectedIndex()].dataKey;
    var minute = minuteList.listData[minuteBS.getSelectedIndex()].dataKey;
    if (use12hour) {
        var isPM = hour12List.listData[hour12BS.getSelectedIndex()].dataKey == 'pm';
        return resetDate(isPM ? hour + 12 : hour) + ':' + resetDate(minute);
    }
    return resetDate(hour) + ':' + resetDate(minute);
}
function getModeDateTimeData(BScrollList, state, use12hour) {
    var dateText = getModeDateData(BScrollList, state);
    var timeText = getModeTimeData(BScrollList, state, use12hour);
    return dateText + ' ' + timeText;
}
function getModeYearData(BScrollList, state) {
    var yearBS = BScrollList.year;
    var yearList = state.yearList;

    var year = yearList.listData[yearBS.getSelectedIndex()].dataKey;
    return year;
}
function getModeMonthData(BScrollList, state, mode) {
    var monthBS = BScrollList.month;
    var monthList = state.monthList;

    var month = monthList.listData[monthBS.getSelectedIndex()].dataKey;
    if (mode == 'month') {
        return month; // 如果mode等于month则不补0
    }
    return resetDate(month);
}
function resetDate(date) {
    return date < 10 ? '0' + date : date;
}