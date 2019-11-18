'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

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

var _classnames2 = require('classnames');

var _classnames3 = _interopRequireDefault(_classnames2);

var _Step = require('./Step');

var _Step2 = _interopRequireDefault(_Step);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Steps = function (_React$PureComponent) {
    (0, _inherits3.default)(Steps, _React$PureComponent);

    function Steps(props) {
        (0, _classCallCheck3.default)(this, Steps);
        return (0, _possibleConstructorReturn3.default)(this, (Steps.__proto__ || (0, _getPrototypeOf2.default)(Steps)).call(this, props));
    }

    (0, _createClass3.default)(Steps, [{
        key: 'getStatus',
        value: function getStatus(current, index) {
            var status = 'wait';
            if (current < index) {
                status = 'wait';
            } else if (current > index) {
                status = 'finish';
            } else if (current === index) {
                status = 'active';
            }
            return status;
        }
    }, {
        key: 'hasTag',
        value: function hasTag(children) {
            return _react2.default.Children.toArray(children).some(function (child) {
                return !!child.props.tag;
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                className = _props.className,
                direction = _props.direction,
                children = _props.children,
                alignCenter = _props.alignCenter,
                current = _props.current,
                style = _props.style;

            var stepNumber = current;
            return _react2.default.createElement(
                'div',
                { className: (0, _classnames3.default)('zds-steps', (0, _defineProperty3.default)({
                        'is-horizontal': direction === 'horizontal',
                        'is-vertical': direction === 'vertical'
                    }, '' + className, !!className)), style: style },
                _react2.default.createElement(
                    'div',
                    { className: 'zds-steps-scroller' },
                    _react2.default.createElement(
                        'div',
                        { className: 'zds-steps-wrapper', style: { paddingTop: this.hasTag(children) ? '30px' : 0 } },
                        _react.Children.map(children, function (child, index) {
                            if (_react2.default.isValidElement(child)) {
                                var newProps = {
                                    active: stepNumber === index,
                                    alignCenter: alignCenter,
                                    status: _this2.getStatus(stepNumber, index)
                                };
                                return _react2.default.cloneElement(child, newProps);
                            }
                            return null;
                        })
                    )
                )
            );
        }
    }]);
    return Steps;
}(_react2.default.PureComponent);

exports.default = Steps;

Steps.Step = _Step2.default;
Steps.defaultProps = {
    current: 0,
    direction: 'horizontal'
};