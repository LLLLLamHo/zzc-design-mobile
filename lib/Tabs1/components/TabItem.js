'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = TabsItem;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function TabsItem(props) {
    var index = props.index,
        itemKey = props.itemKey,
        className = props.className,
        clickEvent = props.clickEvent,
        style = props.style,
        item = props.item,
        saveTabItem = props.saveTabItem,
        prefixCls = props.prefixCls;

    return _react2.default.createElement(
        'div',
        { key: itemKey, className: className, style: style, onClick: function onClick() {
                clickEvent();
            } },
        _react2.default.createElement(
            'div',
            { className: prefixCls + '-item-box', ref: function ref(item) {
                    item && saveTabItem(index, item);
                } },
            _react2.default.isValidElement(item) ? item : item.title
        )
    );
}