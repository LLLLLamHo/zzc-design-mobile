import React, { PureComponent } from 'react';
import classNames from 'classnames';
import config from '../../_util/config';
import { RadioGrounpProps, RadioGrounpState } from '../propsType';
import { isFunction, isArray, isUndefined } from '../../_util/typeof';

export default class RadioGrounp extends PureComponent<RadioGrounpProps, RadioGrounpState> {
    constructor(props) {
        super(props);
        this.state = {
            _value: props.defaultValue
        };
        this.onChangeHandle = this.onChangeHandle.bind(this);
    }
    static defaultProps = {
        prefixCls: `${config.cls}-radio-grounp`,
        className: '',
        style: {},
    };

    componentDidMount(): void {
        // 渲染完成后，需要通知form组件记录value，完成数据绑定
        const { id, value, _zds_form_initValue, setFormItemId, formOpt } = this.props;
        if (_zds_form_initValue && isFunction(_zds_form_initValue)) {
            _zds_form_initValue(id, value, formOpt);
        }
        if (setFormItemId && isFunction(setFormItemId)) {
            setFormItemId(id);
        }
    }

    onChangeHandle(data): void {
        const { formInputOnChange, formOpt } = this.props;
        // 区分是否为form表单托管
        if (formInputOnChange && isFunction(formInputOnChange)) {
            formInputOnChange(data.id, formOpt || null);
        } else {
            const { onChange, value } = this.props;
            const { id } = data;
            if (isUndefined(value)) {
                this.setState({
                    _value: id
                });
            }
            onChange && isFunction(onChange) && onChange(data);
        }
    }

    craeteChildrenItem(children): JSX.Element {
        const { _value } = this.state;
        const { id, name, disabled, radioType, value } = this.props;

        let useValue = _value;
        if (!isUndefined(value)) {
            useValue = value || '';
        }
        if (isArray(children)) {
            return children.map((item, key) => {
                return React.cloneElement(item, {
                    value: useValue,
                    name: id ? id : name,// id是form传递进来的，在radio中当name来使用
                    disabled,
                    radioType,
                    key: `${name}-${key}`,
                    onChange: this.onChangeHandle
                });
            })
        }
        return React.cloneElement(children, {
            useValue,
            name: id ? id : name,// id是form传递进来的，在radio中当name来使用
            disabled,
            radioType,
            onChange: this.onChangeHandle
        });
    }

    render(): JSX.Element {
        const { children, prefixCls, className, style } = this.props;
        const radioClassName: string = classNames(
            prefixCls,
            className
        );
        return (
            <div className={radioClassName} style={style}>
                {this.craeteChildrenItem(children)}
            </div>
        );
    }
}