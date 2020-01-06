import React from 'react';
import classnames from 'classnames';
import config from '../../_util/config';
import { SwitchProps, SwitchState } from '../propsTypes';
import '../index.scss';

export default class Switch extends React.Component<SwitchProps, SwitchState> {
    constructor(props) {
        super(props);
        let checked = false;
        if ('checked' in props) {
            checked = !!props.checked
        } else {
            checked = !!props.defaultChecked
        }
        this.state = { checked };
    }
    static defaultProps = {
        prefixCls: `${config.cls}-switch`,
        checkedChildren: null,
        unCheckedChildren: null,
        className: '',
        defaultChecked: false,
        onChange () { },
        disabled: false,
        style: {
        },
    }


    static getDerivedStateFromProps (nextProps) {
        const { checked } = nextProps
        const newState: { checked?: boolean } = {};
        !!('checked' in nextProps) && (newState.checked = !!checked);
        return newState;
    }

    handlerClickEvent = e => {
        const { checked } = this.state;
        const { onClick } = this.props;
        const newChecked = !checked;
        this.setCheckedStatus(newChecked, e);
        onClick instanceof Function && onClick(newChecked, e);
    }

    setCheckedStatus = (checked, e) => {
        const { disabled, onChange } = this.props;
        if (!!disabled) {
            return;
        }
        if (!('checked' in this.props)) {
            this.setState({
                checked
            })
        }
        onChange instanceof Function && onChange(checked, e);

    }
    render () {
        const { className, disabled, checkedChildren, unCheckedChildren, style } = this.props;
        const { checked } = this.state;
        let switchClassName = classnames(
            'zds-switch',
            className,
            {
                'zds-switch-checked': !!checked
            },
            {
                'zds-switch-disabled': !!disabled
            }

        )
        return (
            <div
                style={style}
                className={switchClassName}
                data-checkstatus={checked}
                // disabled ={disabled}
                onClick={this.handlerClickEvent}
            >
                {(!!checkedChildren || !!unCheckedChildren) && (
                    <span className='zds-switch-inner'>
                        {!!checked ? checkedChildren : unCheckedChildren}
                    </span>
                )}
            </div>
        )
    }
}
