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
    obj.monthList = (0, _pickerData.setMonthListData)(calcCurrDate, calcMinDate, calcMaxDate, langData);
    obj.dayList = (0, _pickerData.setDayListData)(calcCurrDate, calcMinDate, calcMaxDate, langData);
}
function createDateTimeListData(obj, calcMinDate, calcMaxDate, calcCurrDate, use12hour, minuteStep, langData) {
    obj.yearList = (0, _pickerData.setYearListData)(calcMinDate.year, calcMaxDate.year, calcCurrDate.year, langData);
    obj.monthList = (0, _pickerData.setMonthListData)(calcCurrDate, calcMinDate, calcMaxDate, langData);
    obj.dayList = (0, _pickerData.setDayListData)(calcCurrDate, calcMinDate, calcMaxDate, langData);
    obj.hourList = (0, _pickerData.setHoursListData)(calcCurrDate, use12hour, calcMinDate, calcMaxDate, langData);
    obj.minuteList = (0, _pickerData.setMinuteListData)(calcCurrDate, minuteStep, calcMinDate, calcMaxDate, langData);
    if (use12hour) {
        createHour12ListData(obj, calcMinDate, calcMaxDate, calcCurrDate, langData);
    }
}
function createTimeListData(obj, calcMinDate, calcMaxDate, calcCurrDate, use12hour, minuteStep, langData) {
    obj.hourList = (0, _pickerData.setHoursListData)(calcCurrDate, use12hour, calcMinDate, calcMaxDate, langData);
    obj.minuteList = (0, _pickerData.setMinuteListData)(calcCurrDate, minuteStep, calcMinDate, calcMaxDate, langData);
    if (use12hour) {
        createHour12ListData(obj, calcMinDate, calcMaxDate, calcCurrDate, langData);
    }
}
function createYearListData(obj, calcMinDate, calcMaxDate, calcCurrDate, langData) {
    obj.yearList = (0, _pickerData.setYearListData)(calcMinDate.year, calcMaxDate.year, calcCurrDate.year, langData);
}
function createMonthListData(obj, calcMinDate, calcMaxDate, calcCurrDate, langData) {
    obj.monthList = (0, _pickerData.setMonthListData)(calcCurrDate, calcMinDate, calcMaxDate, langData);
}
function createHour12ListData(obj, calcMinDate, calcMaxDate, calcCurrDate, langData) {
    obj.hour12List = (0, _pickerData.setHour12ListData)(calcCurrDate, calcMinDate, calcMaxDate, langData);
}