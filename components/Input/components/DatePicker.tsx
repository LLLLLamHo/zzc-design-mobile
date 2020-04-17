import React, { PureComponent } from 'react';
import classNames from 'classnames';
import config from '../../_util/config';
import { InputDatePickerProps, InputDatePickerState } from '../propsType';
import { DatePickerChangeProps } from '../../DatePicker/propsType';
import { isFunction } from '../../_util/typeof';
import DatePicker from '../../DatePicker';
import moment from 'moment';

export default class Input extends PureComponent<InputDatePickerProps, InputDatePickerState> {
    constructor(props) {
        super(props);
        this.state = {
            isShowDatePicker: false
        }
        this.toggleShowDatePicker = this.toggleShowDatePicker.bind(this);
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
        lang: 'cn',
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
            setFormItemId(id, 'time');
        }
    }

    componentWillUnmount(): void {
        if ( this.props.formDeleteId && isFunction(this.props.formDeleteId) ) {
            this.props.formDeleteId(this.props.id);
        }
    }

    toggleShowDatePicker(isShow: boolean): void {
        this.setState({
            isShowDatePicker: isShow
        })
    }


    changeDatePickerInputValue(item: DatePickerChangeProps) {
        const { onChange, formInputOnChange, formOpt } = this.props;
        if (formInputOnChange && isFunction(formInputOnChange)) {
            formInputOnChange(item.currDate, formOpt || null);
        } else if (onChange && isFunction(onChange)) {
            onChange(item);
        }
    }

    getValue(): string {
        return this.props.value
    }

    transformDatePickerValue(data: any): any {
        if (data.defaultValue != null) {
            throw Error('time 类型的input必须使用value来赋值')
        }
        const { value, timeFormat } = data;
        data.value = data.value ? moment(new Date(value)).format(timeFormat) : '';
        return data;
    }

    createNewProps(): any {
        let newProps = {
            ...this.props
        };
        delete newProps.prefixCls;
        delete newProps.className;
        delete newProps.datePickerData;
        // 清除一些托管到form中传入的的props
        delete newProps._zds_form_initValue;
        delete newProps.formOpt;
        delete newProps.formInputOnChange;
        delete newProps.formInputOnBlur;
        delete newProps.formDeleteId;
        delete newProps.formInputOnFocus;
        delete newProps.setFormItemId;

        newProps = this.transformDatePickerValue(newProps);

        delete newProps.timeFormat;
        return newProps;
    }

    createInput() {
        const { prefixCls, className, onChange, onBlur, onFocus, formInputOnChange, formInputOnBlur, formInputOnFocus, formOpt } = this.props;
        const inputClassName: string = classNames(
            prefixCls,
            className
        );
        const newProps = this.createNewProps();
        return (<input
            {...newProps}
            ref={(item) => { this.input = item; }}
            readOnly={true}
            onClick={() => {
                this.toggleShowDatePicker(true);
            }}
            onChange={() => {
                if (formInputOnChange && isFunction(formInputOnChange)) {
                    formInputOnChange(this.getValue(), formOpt || null);
                } else if (onChange && isFunction(onChange)) {
                    onChange(this.getValue());
                }
            }}
            onBlur={() => {
                if (formInputOnBlur && isFunction(formInputOnBlur)) {
                    formInputOnBlur(formOpt || null);
                } else if (onBlur && isFunction(onBlur)) {
                    onBlur(this.getValue());
                }
            }}
            onFocus={() => {            
                // safari 的bug 不支持input标签的readonly属性
                this.defaultFocus();
                if (formInputOnFocus && isFunction(formInputOnFocus)) {
                    formInputOnFocus(formOpt || null);
                } else if (onFocus && isFunction(onFocus)) {
                    onFocus(this.getValue());
                }
            }}
            type='text'
            className={inputClassName}
        />)
    }
    defaultFocus(){
      this.input&&this.input.blur();
    }
    render(): JSX.Element {
        const { datePickerData, value } = this.props;
        const { isShowDatePicker } = this.state;
        return (
            <React.Fragment>
                {this.createInput()}
                <DatePicker
                    {...Object.assign(this.defaultDatePcikerConfig, datePickerData)}
                    visible={isShowDatePicker}
                    selectTime={value}
                    onValueChange={undefined}
                    onChange={undefined}
                    onClose={() => { this.toggleShowDatePicker(false) }}
                    onSubmit={(data) => { this.changeDatePickerInputValue(data); this.toggleShowDatePicker(false) }}
                />
            </React.Fragment>
        )
    }
}