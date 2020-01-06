import React, { PureComponent } from 'react';
import classNames from 'classnames';
import config from '../../_util/config';
import { InputProps, InputState, ChangePhonePrefixHandleProps, GetValueReturnObject } from '../propsType';
import { SelectOnChangeProps } from '../../Select/propsType';
import { DatePickerChangeProps } from '../../DatePicker/propsType';
import { isFunction } from '../../_util/typeof';
import PhoneNumberPrefix from './phoneNumberPrefix';
import Select from '../../Select';
import DatePicker from '../../DatePicker';
import moment from 'moment';

export default class Input extends PureComponent<InputProps, InputState> {
    constructor(props) {
        super(props);
        this.state = {
            phonePrefix: props.phonePrefix,
            isShowSelect: false,
            isShowDatePicker: false
        }
        this.toggleShowDatePicker = this.toggleShowDatePicker.bind(this);
        this.toggleShowSelect = this.toggleShowSelect.bind(this);
        this.changePhonePrefixHandle = this.changePhonePrefixHandle.bind(this);
    }
    private input: HTMLInputElement | null;
    private defaultDatePcikerConfig = {
        lang: 'cn',
        reverse: false,
        maskClose: true,
        use12hour: false,
        minuteStep: 15,
        minDate: null,
        maxDate: null,
        mode: 'date',
        buttonText: null,
        title: null,
        warningText: null
    }

    static defaultProps = {
        prefixCls: `${config.cls}-input`,
        className: '',
        style: {},
        selectBodyStyle: {},
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
        datePickerData: {},
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

    toggleShowSelect(isShow: boolean): void {
        this.setState({
            isShowSelect: isShow
        })
    }

    toggleShowDatePicker(isShow: boolean): void {
        this.setState({
            isShowDatePicker: isShow
        })
    }

    changeSelectInputValue(item: SelectOnChangeProps): void {
        const { onChange, formInputOnChange, formOpt, selectData } = this.props;
        if (formInputOnChange && isFunction(formInputOnChange)) {
            if (selectData) {
                const { data, title } = selectData;
                const newData = data.map((curr) => {
                    if (curr.type == 'disabled') {
                        return curr;
                    }
                    if (curr.value != item.value) {
                        curr.type = 'normal'
                        return curr;
                    }
                    curr.type = 'active';
                    return curr;
                });

                formInputOnChange({
                    selectData: { data: newData, title },
                    value: item.value
                }, formOpt || null);
            }
        } else if (onChange && isFunction(onChange)) {
            onChange(item);
        }
    }

    changeDatePickerInputValue(item: DatePickerChangeProps) {
        const { onChange, formInputOnChange, formOpt } = this.props;
        if (formInputOnChange && isFunction(formInputOnChange)) {
            formInputOnChange(item.currDate, formOpt || null);
        } else if (onChange && isFunction(onChange)) {
            onChange(item);
        }
    }

    getValue(e?: React.ChangeEvent<any>): string | GetValueReturnObject {
        const { showPhonePrefix, inputType } = this.props;
        if (inputType == 'phone' && showPhonePrefix) {
            return {
                phonePrefix: this.state.phonePrefix,
                value: e ? e.target.value : this.input ? this.input.value : ''
            }
        } else if (inputType == 'select') {
            // select框，input中显示的并非其value，所以需要转换，但是获取value的方式都是从props中获取，不能取input的value
            return {
                selectData: this.props.selectData,
                value: this.props.value
            }
        } else if (inputType == 'time') {
            return this.props.value
        } else {
            return e ? e.target.value : this.input ? this.input.value : ''
        }
    }

    transformSelectValue(data: any): any {
        if (data.defaultValue != null) {
            throw Error('select 类型的input必须使用value来赋值')
        }

        const { selectData } = data;
        if (selectData && data.value != null) {
            const { data: selectList } = selectData;
            for ( let i = 0; i < selectList.length; i++ ) {
                if ( selectList[i].value == data.value ) {
                    data.value = selectList[i].text;
                }
            }
        } else {
            data.value = '';// 默认为空
        }
        delete data.selectData;
        return data;
    }

    transformDatePickerValue(data: any): any {
        if (data.defaultValue != null) {
            throw Error('time 类型的input必须使用value来赋值')
        }
        const { value, timeFormat } = data;
        data.value = moment(new Date(value)).format(timeFormat);
        return data;
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
        delete newProps.datePickerData;
        // 清除一些托管到form中传入的的props
        delete newProps._zds_form_initValue;
        delete newProps.formOpt;
        delete newProps.formInputOnChange;
        delete newProps.formInputOnBlur;
        delete newProps.formInputOnFocus;
        delete newProps.setFormItemId;
        delete newProps.selectBodyStyle;

        // 对select类型的input需要对value进行转换
        if (newProps.inputType == 'select') {
            newProps = this.transformSelectValue(newProps);
        } else if (newProps.inputType == 'time' && newProps.timeFormat && newProps.value) {
            newProps = this.transformDatePickerValue(newProps);
        }
        delete newProps.timeFormat;
        delete newProps.inputType;
        return newProps;
    }

    createInput() {
        const { prefixCls, className, htmlType, onChange, onBlur, onFocus, formInputOnChange, formInputOnBlur, formInputOnFocus, formOpt, inputType } = this.props;
        const inputClassName: string = classNames(
            prefixCls,
            className
        );
        const newProps = this.createNewProps();
        return (<input
            {...newProps}
            readOnly={inputType == 'select' || inputType == 'time'}
            ref={(item) => { this.input = item; }}
            onClick={() => {
                inputType == 'select' && this.toggleShowSelect(true);
                inputType == 'time' && this.toggleShowDatePicker(true);
            }}
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
        const { inputType, showPhonePrefix, phonePrefixList_cn, phonePrefixList_hk, lang, selectData, datePickerData, value, selectBodyStyle } = this.props;
        const { phonePrefix, isShowSelect, isShowDatePicker } = this.state;
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
        return (
            <React.Fragment>
                {this.createInput()}
                {inputType == 'select' && <Select
                    bodyStyle={selectBodyStyle}
                    onChange={(data) => {
                        this.changeSelectInputValue(data);
                        this.toggleShowSelect(false);
                    }}
                    isShow={isShowSelect}
                    onClose={() => {
                        this.toggleShowSelect(false);
                    }}
                    title={selectData && selectData.title}
                    data={selectData ? selectData.data : []}
                />}
                {inputType == 'time' && <DatePicker
                    {...Object.assign(this.defaultDatePcikerConfig, datePickerData)}
                    visible={isShowDatePicker}
                    selectTime={value}
                    onValueChange={undefined}
                    onChange={undefined}
                    onClose={() => { this.toggleShowDatePicker(false) }}
                    onSubmit={(data) => { this.changeDatePickerInputValue(data); this.toggleShowDatePicker(false) }}
                />}
            </React.Fragment>
        )
    }
}