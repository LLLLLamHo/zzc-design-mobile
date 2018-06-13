'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.setLayoutScroll = setLayoutScroll;
exports.getTabItemSize = getTabItemSize;
exports.getTranslate3dStyle = getTranslate3dStyle;
function setLayoutScroll(layout, offset, unit, isVertical) {
    var value = isVertical ? '0px, ' + offset + unit + ', 0px' : '' + offset + unit + ', 0px, 0px';
    var translate3d = 'translate3d(' + value + ')';
    var style = layout.style;
    setTransfrom(style, translate3d);
}
function getTabItemSize(maxTabLength) {
    return (100 / maxTabLength).toFixed(4);
}
function getTranslate3dStyle(value, direction) {
    var offset = direction === 'vertical' ? '0px, ' + value + ', 1px' : value + ', 0px, 1px';
    var translate3d = 'translate3d(' + offset + ')';
    return {
        transform: translate3d,
        WebkitTransform: translate3d,
        MozTransform: translate3d
    };
}
function setTransfrom(style, value) {
    style.transform = value;
    style.WebkitTransform = value;
    style.MozTransform = value;
}