'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.createDateListData = createDateListData;
exports.createDateTimeListData = createDateTimeListData;
exports.createTimeListData = createTimeListData;
exports.createYearListData = createYearListData;
exports.createMonthListData = createMonthListData;
exports.createHour12ListData = createHour12ListData;

var _pickerData = require('./pickerData');

function createDateListData(obj, calcMinDate, calcMaxDate, calcCurrDate, langData) {
    obj.yearList = (0, _pickerData.setYearListData)(calcMinDate.year, calcMaxDate.year, calcCurrDate.year, langData);
    obj.monthList = (0, _pickerData.setMonthListData)(calcCurrDate.month, langData);
    obj.dayList = (0, _pickerData.setDayListData)(calcCurrDate, langData);
}
function createDateTimeListData(obj, calcMinDate, calcMaxDate, calcCurrDate, use12hour, minuteStep, langData) {
    obj.yearList = (0, _pickerData.setYearListData)(calcMinDate.year, calcMaxDate.year, calcCurrDate.year, langData);
    obj.monthList = (0, _pickerData.setMonthListData)(calcCurrDate.month, langData);
    obj.dayList = (0, _pickerData.setDayListData)(calcCurrDate, langData);
    obj.hourList = (0, _pickerData.setHoursListData)(calcCurrDate, use12hour, langData);
    obj.minuteList = (0, _pickerData.setMinuteListData)(calcCurrDate, minuteStep, langData);
    if (use12hour) {
        createHour12ListData(obj, calcCurrDate, langData);
    }
}
function createTimeListData(obj, calcCurrDate, use12hour, minuteStep, langData) {
    obj.hourList = (0, _pickerData.setHoursListData)(calcCurrDate, use12hour, langData);
    obj.minuteList = (0, _pickerData.setMinuteListData)(calcCurrDate, minuteStep, langData);
    if (use12hour) {
        createHour12ListData(obj, calcCurrDate, langData);
    }
}
function createYearListData(obj, calcMinDate, calcMaxDate, calcCurrDate, langData) {
    obj.yearList = (0, _pickerData.setYearListData)(calcMinDate.year, calcMaxDate.year, calcCurrDate.year, langData);
}
function createMonthListData(obj, calcCurrDate, langData) {
    obj.monthList = (0, _pickerData.setMonthListData)(calcCurrDate.month, langData);
}
function createHour12ListData(obj, calcCurrDate, langData) {
    obj.hour12List = (0, _pickerData.setHour12ListData)(calcCurrDate.hour, langData);
}