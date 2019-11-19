import React, { PureComponent } from 'react';
import classnames from 'classnames';
import { EasyCalculatorProps } from '../propsType';

function getButtonStatus(val, props) {
    const { min = -Infinity, max = Infinity } = props;
    return {
        isIncreaseDisabled: val >= max,
        isDecreaseDisabled: val <= min
    };
}
export default class EasyCalculator extends PureComponent<EasyCalculatorProps, any> {
    constructor( props ) {
        super( props );
        let value: number = this.getValidValue(props);
        const obj = getButtonStatus(value, props);
        this.state = {
            inputValue: value,
            isDecreaseDisabled: obj.isDecreaseDisabled,
            isIncreaseDisabled: obj.isIncreaseDisabled,
        };
    }

    static defaultProps = {
        step: 1
    }

    getValidValue(props): number {
        let value: number = 0;
        if ('value' in props) {
            value = props.value;
        }
        else {
            value = props.defaultValue;
        }
        value = value < props.min ? props.min : value;
        value = value > props.max ? props.max : value;
        return value;
    }

    componentWillReceiveProps(nextProps) {
        if (('value' in nextProps) && nextProps.value !== this.state.inputValue) {
            let value = this.getValidValue(nextProps);
            const precisionFactor = Math.pow(10, this.getNumPrecision());
            value = this.toPrecision((value * precisionFactor) / precisionFactor);
            this.setState({
                inputValue: value,
                ...getButtonStatus(value, nextProps)
            });
        }
    }

    onDecrease = () => {
        const { inputValue } = this.state;
        const step = this.props.step || 1;
        const precisionFactor = Math.pow(10, this.getNumPrecision());
        let value = this.toPrecision((inputValue * precisionFactor -  precisionFactor * step) / precisionFactor);
        const { isDecreaseDisabled, isIncreaseDisabled } = getButtonStatus(value, this.props);
        value = this.getValidValue({ ...this.props, value });
        if (!('value' in this.props)) {
            this.setState({
                inputValue: value,
                isDecreaseDisabled,
                isIncreaseDisabled
            }, () => {
                typeof this.props.onChange === 'function' && this.props.onChange(this.state.inputValue);
            });
            return;
        }
        typeof this.props.onChange === 'function' && this.props.onChange(value);
    }

    onIncrease = () => {
        const { inputValue } = this.state;
        let step = this.props.step || 1;
        const precisionFactor = Math.pow(10, this.getNumPrecision());
        let value = this.toPrecision((inputValue * precisionFactor + precisionFactor * step) / precisionFactor);
        value = this.getValidValue({ ...this.props, value });
        if (!('value' in this.props)) {
            this.setState({
                inputValue: value,
                ...getButtonStatus(value, this.props)
            }, () => {
                typeof this.props.onChange === 'function' && this.props.onChange(this.state.inputValue);
            });
            return;
        }
        typeof this.props.onChange === 'function' && this.props.onChange(value);
    }

    getNumPrecision(): number {
        const { precision, step } = this.props;
        const { inputValue } = this.state;
        const stepPrecision = this.getPrecision(step);
        if (precision !== undefined) {
          if (stepPrecision > precision) {
            console.warn('[Warn][EasyCalculator]precision should not be less than the decimal places of step');
          }
          return precision;
        } else {
          return Math.max(this.getPrecision(inputValue), stepPrecision);
        } 
    }

    getPrecision(value) {
        if (value === undefined) return 0;
        const valueString = value.toString();
        const dotPosition = valueString.indexOf('.');
        let precision = 0;
        if (dotPosition !== -1) {
          precision = valueString.length - dotPosition - 1;
        }
        return precision;
    }

    toPrecision(num: number, precision?: number): any {
        if (precision === undefined) precision = this.getNumPrecision();
        const value: string = parseFloat(Number(num).toFixed(precision)) + '';
        return parseFloat(value);
    }

    componentWillMount() {

    }

    componentDidMount() {
        
    }

    render() {
        const { inputValue,
                isDecreaseDisabled,
                isIncreaseDisabled } = this.state;
        const { prefixCls = 'zds-calculator', className, style } = this.props;
        return (
            <div className={classnames(`${prefixCls}`, className ? className : '')} style={style}>
                <span role="button" className={classnames(`${prefixCls}-decrease`, { 'is-disabled': isDecreaseDisabled })} onClick={this.onDecrease}></span>
                <span role="button" className={classnames(`${prefixCls}-increase`, { 'is-disabled': isIncreaseDisabled })} onClick={this.onIncrease}></span>
                <div className={`${prefixCls}-input`}>
                    <span className={`${prefixCls}-input-inner`}>{inputValue}</span>
                </div>
            </div>
        )
    }
}
