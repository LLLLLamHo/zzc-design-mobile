'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

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

var _FormItem = require('./FormItem');

var _FormItem2 = _interopRequireDefault(_FormItem);

var _create = require('./create');

var _create2 = _interopRequireDefault(_create);

var _context = require('./context');

var _typeof = require('../../_util/typeof');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Form = function (_PureComponent) {
    (0, _inherits3.default)(Form, _PureComponent);

    function Form(props) {
        (0, _classCallCheck3.default)(this, Form);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Form.__proto__ || (0, _getPrototypeOf2.default)(Form)).call(this, props));

        _this.state = {};
        return _this;
    }

    (0, _createClass3.default)(Form, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                prefixCls = _props.prefixCls,
                className = _props.className,
                children = _props.children,
                _onSubmit = _props.onSubmit;

            if (!children) {
                return null;
            }
            return _react2.default.createElement(
                _context.FormHOC.Consumer,
                null,
                function (data) {
                    return _react2.default.createElement(
                        'form',
                        { ref: function ref(formComponent) {
                                if (data && (0, _typeof.isFunction)(data.getFormComponent)) {
                                    data.getFormComponent(formComponent);
                                }
                            }, onSubmit: function onSubmit(e) {
                                if (_onSubmit && (0, _typeof.isFunction)(_onSubmit)) {
                                    if (data && (0, _typeof.isFunction)(data.formOnSubmit)) {
                                        var _data$formOnSubmit = data.formOnSubmit(),
                                            errList = _data$formOnSubmit.errList,
                                            outputData = _data$formOnSubmit.outputData;

                                        _onSubmit(errList, outputData);
                                    }
                                    e.preventDefault();
                                }
                            }, className: (0, _classnames2.default)(prefixCls, className) },
                        children
                    );
                }
            );
        }
    }]);
    return Form;
}(_react.PureComponent);

exports.default = Form;

Form.defaultProps = {
    prefixCls: _config2.default.cls + '-form',
    className: '',
    onSubmit: null
};
Form.create = _create2.default;
Form.Item = _FormItem2.default;