import React, { PureComponent } from 'react';
import classNames from 'classnames';
import config from '../../_util/config';
import { InputProps, InputState, ChangePhonePrefixHandleProps, GetValueReturnObject } from '../propsType';
import { isFunction } from '../../_util/typeof';
import Textarea from "./Textarea"
import InputSelect from './Select';
import InputDatePicker from './DatePicker';
import PhoneNumberPrefix from './phoneNumberPrefix';

export default class Input extends PureComponent<InputProps, InputState> {
    constructor(props) {
        super(props);
        this.state = {
            phonePrefix: props.phonePrefix,
        }
        this.changePhonePrefixHandle = this.changePhonePrefixHandle.bind(this);
    }
    private input: HTMLInputElement | null;
    static Textarea = Textarea;
    static Select = InputSelect;
    static DatePicker = InputDatePicker;

    static defaultProps = {
        prefixCls: `${config.cls}-input`,
        className: '',
        style: {},
        inputType: 'text',
        htmlType: 'text',
        lang: 'cn',
        phonePrefix: '+86',
        showPhonePrefix: false,
        phonePrefixList_cn: [
            { id: '+86', detail: '中国大陆 +(86)' },
            { id: '+852', detail: '香港（中国） +(852)' },
            { id: '+886', detail: '台湾（中国） +(882)' },
            { id: '+853', detail: '澳门（中国） +(853)' },
            { id: '+1', detail: '美国 +(1)' },
            { id: 'other', detail: '其他' }
        ],
        phonePrefixList_hk: [
            { id: '+86', detail: '中國大陸 +(86)' },
            { id: '+852', detail: '香港（中國） +(852)' },
            { id: '+886', detail: '臺灣（中國） +(882)' },
            { id: '+853', detail: '澳門（中國） +(853)' },
            { id: '+1', detail: '美國 +(1)' },
            { id: 'other', detail: '其他' }
        ],
        name: null,
        id: null,
        placeholder: '',
        disabled: false,
    };

    componentDidMount(): void {
        // 渲染完成后，需要通知form组件记录value，完成数据绑定
        const { id, _zds_form_initValue, setFormItemId, formOpt } = this.props;
        if (_zds_form_initValue && isFunction(_zds_form_initValue)) {
            _zds_form_initValue(id, this.getValue(), formOpt);
        }
        if (setFormItemId && isFunction(setFormItemId)) {
            setFormItemId(id, this.props.inputType);
        }
    }

    getValue(e?: React.ChangeEvent<any>): string | GetValueReturnObject {
        const { showPhonePrefix, inputType } = this.props;
        if (inputType == 'phone' && showPhonePrefix) {
            return {
                phonePrefix: this.state.phonePrefix,
                value: e ? e.target.value : this.input ? this.input.value : ''
            }
        } else {
            return e ? e.target.value : this.input ? this.input.value : ''
        }
    }

    createNewProps(): any {
        let newProps = {
            ...this.props
        };
        delete newProps.prefixCls;
        delete newProps.className;
        delete newProps.htmlType;
        delete newProps.showPhonePrefix;
        delete newProps.phonePrefix;
        delete newProps.phonePrefixList_cn;
        delete newProps.phonePrefixList_hk;
        delete newProps.inputType;

        // 清除一些托管到form中传入的的props
        delete newProps._zds_form_initValue;
        delete newProps.formOpt;
        delete newProps.formInputOnChange;
        delete newProps.formInputOnBlur;
        delete newProps.formInputOnFocus;
        delete newProps.setFormItemId;
        return newProps;
    }

    createInput() {
        const { prefixCls, className, htmlType, onChange, onBlur, onFocus, formInputOnChange, formInputOnBlur, formInputOnFocus, formOpt } = this.props;
        const inputClassName: string = classNames(
            prefixCls,
            className
        );
        const newProps = this.createNewProps();
        return (<input
            {...newProps}
            ref={(item) => { this.input = item; }}
            onChange={(e) => {
                if (formInputOnChange && isFunction(formInputOnChange)) {
                    formInputOnChange(this.getValue(e), formOpt || null);
                } else if (onChange && isFunction(onChange)) {
                    onChange(this.getValue(e));
                }
            }}
            onBlur={(e) => {
                if (formInputOnBlur && isFunction(formInputOnBlur)) {
                    formInputOnBlur(formOpt || null);
                } else if (onBlur && isFunction(onBlur)) {
                    onBlur(this.getValue(e));
                }
            }}
            onFocus={(e) => {
                if (formInputOnFocus && isFunction(formInputOnFocus)) {
                    formInputOnFocus(formOpt || null);
                } else if (onFocus && isFunction(onFocus)) {
                    onFocus(this.getValue(e));
                }
            }}
            type={htmlType}
            className={inputClassName}
        />)
    }

    // 手机号码前缀修改需要触发onchang通知
    changePhonePrefixHandle(item: ChangePhonePrefixHandleProps): void {
        const { formInputOnChange, formOpt, onChange } = this.props;
        this.setState({
            phonePrefix: item.id == 'other' ? item.detail : item.id
        }, () => {
            // 触发onChange的回调通知
            // 开启前缀选择返回特殊值
            if (this.input) {
                if (formInputOnChange && isFunction(formInputOnChange)) {
                    formInputOnChange(this.getValue(), formOpt || null);
                } else if (onChange && isFunction(onChange)) {
                    onChange(this.getValue());
                }
            }
        });
    }

    render(): JSX.Element {
        const { inputType, showPhonePrefix, phonePrefixList_cn, phonePrefixList_hk, lang } = this.props;
        const { phonePrefix } = this.state;
        if (inputType == 'phone' && showPhonePrefix) {
            return (
                <PhoneNumberPrefix
                    onChange={this.changePhonePrefixHandle}
                    lang={lang || 'cn'}
                    currPrefix={phonePrefix}
                    phonePrefixList={lang == 'cn' ? phonePrefixList_cn : phonePrefixList_hk}
                >
                    {this.createInput()}
                </PhoneNumberPrefix>
            );
        }
        return this.createInput()
    }
}