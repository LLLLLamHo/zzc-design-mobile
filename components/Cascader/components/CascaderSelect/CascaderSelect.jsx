import React from 'react';
import * as PropTypes from 'prop-types';
import classnames from 'classnames';
import Option from './Option';
import './index.scss';

export default class ElSelect extends React.Component {
    constructor(props) {
        super(props);
        let value;
        if ('value' in props) {
            value = props.value;
        } else if('defaultValue' in props) {
            value = props.defaultValue;
        }
        this.state = {
            value
        };
    }

    static Option = Option;

    static defaultProps = {
    }

    static childContextTypes = {
        select: PropTypes.any
    };

    static getDerivedStateFromProps(nextProps, state) {
        if (('value' in nextProps) && nextProps.value !== state.value) {
            return {
                value: nextProps.value
            };
        }
        return null;
    }

    getChildContext() {
        return {
            select: {
                value: this.state.value,
                onOptionClick: this.onSelectChange
            }
        };
    }

    onSelectChange = (value, props) => {
        if (!('value' in this.props)) {
            this.setState({
                value
            });
        }
        value !== this.state.value && typeof this.props.onChange === 'function' && this.props.onChange(value, props);
    }

    render() {
        const { children, className, style } = this.props;
        return (
            <div className={classnames('cascader-select', { className: !!className })} style={style}>
                { children }
            </div>
        )
    }
}
