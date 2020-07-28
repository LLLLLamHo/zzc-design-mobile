'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = trim;
function trim(type, value) {
    switch (type) {
        case 'start':
            value = value.replace(/(^\s*)/g, "");
            break;
        case 'end':
            value = value.replace(/(\s*$)/g, "");
            break;
        default:
            value = value.replace(/(^\s*)|(\s*$)/g, "");
    }
    return value;
}