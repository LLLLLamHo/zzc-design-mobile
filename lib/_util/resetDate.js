"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.resetDate = resetDate;
function resetDate(date) {
    return date < 10 ? "0" + date : "" + date;
}