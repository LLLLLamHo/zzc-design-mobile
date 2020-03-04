'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _config = require('../../_util/config');

var _config2 = _interopRequireDefault(_config);

var _Popup = require('../../Popup');

var _Popup2 = _interopRequireDefault(_Popup);

var _typeof = require('../../_util/typeof');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ActionSheet = function (_PureComponent) {
    (0, _inherits3.default)(ActionSheet, _PureComponent);

    function ActionSheet(props) {
        (0, _classCallCheck3.default)(this, ActionSheet);

        var _this = (0, _possibleConstructorReturn3.default)(this, (ActionSheet.__proto__ || (0, _getPrototypeOf2.default)(ActionSheet)).call(this, props));

        _this.state = {
            visible: false
        };
        return _this;
    }

    (0, _createClass3.default)(ActionSheet, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            if (this.props.isShow) {
                this.togglePopup(true);
            }
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if (nextProps.isShow) {
                this.togglePopup(true);
            } else if (!nextProps.isShow && this.props.isShow) {
                this.togglePopup(false);
            }
        }
    }, {
        key: 'togglePopup',
        value: function togglePopup(isShow) {
            this.setState({
                visible: isShow
            });
        }
    }, {
        key: 'createTitle',
        value: function createTitle(title) {
            var prefixCls = this.props.prefixCls;

            return _react2.default.createElement(
                'div',
                { className: prefixCls + '-header' },
                _react2.default.createElement(
                    'p',
                    null,
                    title
                )
            );
        }
    }, {
        key: 'createBody',
        value: function createBody(btnGrounp) {
            var _props = this.props,
                prefixCls = _props.prefixCls,
                onClose = _props.onClose;

            return _react2.default.createElement(
                'div',
                { className: prefixCls + '-body' },
                btnGrounp.map(function (item, key) {
                    var _item$type = item.type,
                        type = _item$type === undefined ? 'default' : _item$type,
                        _item$autoClose = item.autoClose,
                        autoClose = _item$autoClose === undefined ? true : _item$autoClose,
                        className = item.className,
                        content = item.content,
                        style = item.style,
                        _onClick = item.onClick;

                    return _react2.default.createElement(
                        'div',
                        { key: key, className: prefixCls + '-item', onClick: function onClick() {
                                _onClick && (0, _typeof.isFunction)(_onClick) && _onClick();
                                // 默认点击关闭
                                autoClose && onClose && (0, _typeof.isFunction)(onClose) && onClose();
                            } },
                        _react2.default.createElement(
                            'p',
                            { className: (className || '') + ' ' + type, style: style },
                            content
                        )
                    );
                })
            );
        }
    }, {
        key: 'createFooter',
        value: function createFooter(cancelText) {
            var _props2 = this.props,
                prefixCls = _props2.prefixCls,
                onClose = _props2.onClose;

            return _react2.default.createElement(
                'div',
                { className: prefixCls + '-footer' },
                _react2.default.createElement(
                    'div',
                    { className: prefixCls + '-item', onClick: function onClick() {
                            onClose && (0, _typeof.isFunction)(onClose) && onClose();
                        } },
                    _react2.default.createElement(
                        'p',
                        null,
                        cancelText
                    )
                )
            );
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props3 = this.props,
                style = _props3.style,
                prefixCls = _props3.prefixCls,
                className = _props3.className,
                _onClose = _props3.onClose,
                title = _props3.title,
                btnGrounp = _props3.btnGrounp,
                cancelText = _props3.cancelText,
                maskClose = _props3.maskClose,
                bodyStyle = _props3.bodyStyle;

            var actionsheetClassName = (0, _classnames2.default)(prefixCls, className);
            return _react2.default.createElement(
                _Popup2.default,
                { bodyStyle: (0, _assign2.default)({}, bodyStyle), maskClose: maskClose, visible: this.state.visible, onClose: function onClose() {
                        _this2.setState({
                            visible: false
                        }, function () {
                            _onClose && _onClose();
                        });
                    } },
                _react2.default.createElement(
                    'div',
                    { style: style, className: actionsheetClassName },
                    title && this.createTitle(title),
                    btnGrounp && this.createBody(btnGrounp),
                    cancelText && this.createFooter(cancelText)
                )
            );
        }
    }]);
    return ActionSheet;
}(_react.PureComponent);

exports.default = ActionSheet;

ActionSheet.defaultProps = {
    prefixCls: _config2.default.cls + '-actionsheet',
    className: '',
    style: {},
    title: '',
    btnGrounp: '',
    cancelText: '',
    isShow: false,
    onClose: null,
    maskClose: true
};