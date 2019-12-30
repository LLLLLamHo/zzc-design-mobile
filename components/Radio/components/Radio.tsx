import React, { PureComponent } from 'react';
import classNames from 'classnames';
import config from '../../_util/config';
import { RadioProps, createCheckPropsReturn } from '../propsType';
import { isFunction, isNull, isUndefined } from '../../_util/typeof';
import RadioGrounp from './RadioGrounp';
import Icon from '../../Icon';

export default class Radio extends PureComponent<RadioProps> {
    constructor(props) {
        super(props);
    }
    static defaultProps = {
        prefixCls: `${config.cls}-radio`,
        className: '',
        style: {},
        // disabled: false,
    };

    static RadioGrounp = RadioGrounp;

    // componentDidMount(): void {
    //         // 渲染完成后，需要通知form组件记录value，完成数据绑定
    //         const { id, value, _zds_form_initValue, setFormItemId, formOpt } = this.props;
    //         if (_zds_form_initValue && isFunction(_zds_form_initValue)) {
    //             _zds_form_initValue(id, value, formOpt);
    //         }
    //         if (setFormItemId && isFunction(setFormItemId)) {
    //             setFormItemId(id);
    //         }
    // }

    changeRadioHandle(e, name: string, id: string): void {
        const target = e.target;
        const currStatus = target.checked;
        const { checked, onChange, value } = this.props;
        // 非受控,需要通过代码控制字体颜色, 只有没有指明value和checked参数的情况下，才通过dom来操作选中颜色
        if (isUndefined(checked) && isUndefined(value)) {
            const radioBoxs = document.querySelectorAll(`[zds-radio-name=${name}]`);
            radioBoxs.forEach((item) => {
                const itemClass = item.className;
                if (item.getAttribute('zds-radio-id') == id && itemClass.indexOf('checked') == -1) {
                    item.className = item.className + ' checked';
                } else if (itemClass.indexOf('checked') != -1) {
                    item.className = itemClass.replace(' checked', '');
                }
            });
        }

        onChange && isFunction(onChange) && onChange({
            checked: currStatus,
            id,
            name
        });
    }

    createCheckProps(): createCheckPropsReturn {
        const { defaultChecked, checked, value, id } = this.props;
        let currChecked: boolean;
        let checkProps: any;

        if (!isUndefined(value)) {
            currChecked = value == id;
            checkProps = { checked: currChecked };
        } else {
            // 非受控
            currChecked = !!defaultChecked;
            checkProps = { defaultChecked: currChecked };
            // 受控
            if (!isUndefined(checked)) {
                currChecked = !!checked;
                checkProps = { checked: currChecked };
            }
        }


        return { currChecked, checkProps };
    }

    createIcon(): JSX.Element | null {
        const { radioType, id } = this.props;
        if ( radioType == 'sex' ) {
            switch (id) {
                case 'man': return <Icon style={{width: '14px', height: '14px'}} type='man' />;
                case 'women': return <Icon style={{width: '14px', height: '14px'}} type='women' />;
            }
        }
        return null;
    }

    createInput(): JSX.Element | null {
        const { prefixCls, className, children, name, disabled } = this.props;
        let { id } = this.props;

        if (!id) {
            id = `radio-id-${Math.floor(Math.random() * 10000)}`;
        }

        if (isNull(name) || isUndefined(name)) {
            console.error('单选框的name参数不能为空！');
            return null;
        }

        const { currChecked, checkProps } = this.createCheckProps();

        const radioClassName: string = classNames(
            prefixCls,
            className,
            { 'checked': currChecked },
            { 'disabled': disabled}
        );
        const newProps = {
            ...this.props
        };

        delete newProps.prefixCls;
        delete newProps.className;
        // 清除一些托管到form中传入的的props
        delete newProps._zds_form_initValue;
        delete newProps.formOpt;
        delete newProps.formInputOnChange;
        delete newProps.formInputOnBlur;
        delete newProps.formInputOnFocus;
        delete newProps.setFormItemId;
        return (
            <label htmlFor={id}>
                <div
                    className={radioClassName}
                    zds-radio-name={name}
                    zds-radio-id={id}
                >
                    <input
                        disabled={disabled}
                        {...checkProps}
                        onChange={(e) => { this.changeRadioHandle(e, name, id) }}
                        type='radio'
                        name={name}
                        id={id}
                    />
                    {this.createIcon()}
                    {children}
                </div>
            </label>
        )


        // return (<input
        //     {...newProps}
        //     onChange={(e) => {
        //         if (formInputOnChange && isFunction(formInputOnChange)) {
        //             formInputOnChange(e.target.value, formOpt || null);
        //         } else if (onChange && isFunction(onChange)) {
        //             onChange(e);
        //         }
        //     }}
        //     onBlur={(e) => {
        //         if (formInputOnBlur && isFunction(formInputOnBlur)) {
        //             formInputOnBlur( formOpt || null);
        //         } else if (onBlur && isFunction(onBlur)) {
        //             onBlur(e);
        //         }
        //     }}
        //     onFocus={(e) => {
        //         if (formInputOnFocus && isFunction(formInputOnFocus)) {
        //             formInputOnFocus( formOpt || null);
        //         } else if (onFocus && isFunction(onFocus)) {
        //             onFocus(e);
        //         }
        //     }}
        //     type={htmlType}
        //     className={inputClassName}
        // />)
    }

    render(): JSX.Element | null {
        return this.createInput()
    }
}