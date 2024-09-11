'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.createDateListData = createDateListData;
exports.createYearAndMonthListData = createYearAndMonthListData;
exports.createDateTimeListData = createDateTimeListData;
exports.createTimeListData = createTimeListData;
exports.createHourListData = createHourListData;
exports.createYearListData = createYearListData;
exports.createMonthListData = createMonthListData;
exports.createHour12ListData = createHour12ListData;

var _pickerData = require('./pickerData');

function createDateListData(obj, calcMinDate, calcMaxDate, calcCurrDate, langData, monthList) {
    obj.yearList = (0, _pickerData.setYearListData)(calcMinDate.year, calcMaxDate.year, calcCurrDate.year, langData);
    obj.monthList = (0, _pickerData.setMonthListData)(calcCurrDate, calcMinDate, calcMaxDate, langData, monthList);
    obj.dayList = (0, _pickerData.setDayListData)(calcCurrDate, calcMinDate, calcMaxDate, langData);
}
function createYearAndMonthListData(obj, calcMinDate, calcMaxDate, calcCurrDate, langData, monthList) {
    obj.yearList = (0, _pickerData.setYearListData)(calcMinDate.year, calcMaxDate.year, calcCurrDate.year, langData);
    obj.monthList = (0, _pickerData.setMonthListData)(calcCurrDate, calcMinDate, calcMaxDate, langData, monthList);
}
function createDateTimeListData(obj, calcMinDate, calcMaxDate, calcCurrDate, use12hour, minuteStep, langData, monthList, hourRange, hourUnit) {
    obj.yearList = (0, _pickerData.setYearListData)(calcMinDate.year, calcMaxDate.year, calcCurrDate.year, langData);
    obj.monthList = (0, _pickerData.setMonthListData)(calcCurrDate, calcMinDate, calcMaxDate, langData, monthList);
    obj.dayList = (0, _pickerData.setDayListData)(calcCurrDate, calcMinDate, calcMaxDate, langData);
    obj.hourList = (0, _pickerData.setHoursListData)(calcCurrDate, use12hour, calcMinDate, calcMaxDate, hourRange, hourUnit);
    obj.minuteList = (0, _pickerData.setMinuteListData)(calcCurrDate, minuteStep, calcMinDate, calcMaxDate, langData, hourRange);
    if (use12hour) {
        createHour12ListData(obj, calcMinDate, calcMaxDate, calcCurrDate, langData);
    }
}
function createTimeListData(obj, calcMinDate, calcMaxDate, calcCurrDate, use12hour, minuteStep, langData, hourRange, hourUnit) {
    obj.hourList = (0, _pickerData.setHoursListData)(calcCurrDate, use12hour, calcMinDate, calcMaxDate, hourRange, hourUnit);
    obj.minuteList = (0, _pickerData.setMinuteListData)(calcCurrDate, minuteStep, calcMinDate, calcMaxDate, langData, hourRange);
    if (use12hour) {
        createHour12ListData(obj, calcMinDate, calcMaxDate, calcCurrDate, langData);
    }
}
function createHourListData(obj, calcMinDate, calcMaxDate, calcCurrDate, use12hour, langData, hourRange, hourUnit) {
    obj.hourList = (0, _pickerData.setHoursListData)(calcCurrDate, use12hour, calcMinDate, calcMaxDate, hourRange, hourUnit);
    if (use12hour) {
        createHour12ListData(obj, calcMinDate, calcMaxDate, calcCurrDate, langData);
    }
}
function createYearListData(obj, calcMinDate, calcMaxDate, calcCurrDate, langData) {
    obj.yearList = (0, _pickerData.setYearListData)(calcMinDate.year, calcMaxDate.year, calcCurrDate.year, langData);
}
function createMonthListData(obj, calcMinDate, calcMaxDate, calcCurrDate, langData, monthList) {
    obj.monthList = (0, _pickerData.setMonthListData)(calcCurrDate, calcMinDate, calcMaxDate, langData, monthList);
}
function createHour12ListData(obj, calcMinDate, calcMaxDate, calcCurrDate, langData) {
    obj.hour12List = (0, _pickerData.setHour12ListData)(calcCurrDate, calcMinDate, calcMaxDate, langData);
}