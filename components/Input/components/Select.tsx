import React, { PureComponent } from 'react';
import classNames from 'classnames';
import config from '../../_util/config';
import { InputSelectProps, InputSelectState, GetValueReturnObject } from '../propsType';
import { SelectOnChangeProps } from '../../Select1/propsType';
import { isFunction } from '../../_util/typeof';
import Select from '../../Select1';

export default class Input extends PureComponent<InputSelectProps, InputSelectState> {
    constructor(props) {
        super(props);
        this.state = {
            isShowSelect: false,
        }
        this.toggleShowSelect = this.toggleShowSelect.bind(this);
    }

    static defaultProps = {
        prefixCls: `${config.cls}-input`,
        className: '',
        style: {},
        selectBodyStyle: {},
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
            setFormItemId(id, 'select');
        }
    }

    componentWillUnmount(): void {
        if ( this.props.formDeleteId && isFunction(this.props.formDeleteId) ) {
            this.props.formDeleteId(this.props.id);
        }
    }

    toggleShowSelect(isShow: boolean): void {
        this.setState({
            isShowSelect: isShow
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

    getValue(): string | GetValueReturnObject {
        // select框，input中显示的并非其value，所以需要转换，但是获取value的方式都是从props中获取，不能取input的value
        return {
            selectData: this.props.selectData,
            value: this.props.value
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

    createNewProps(): any {
        let newProps = {
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
        delete newProps.formDeleteId;
        delete newProps.setFormItemId;
        delete newProps.selectBodyStyle;

        newProps = this.transformSelectValue(newProps);
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
            readOnly={true}
            onClick={() => {
                this.toggleShowSelect(true);
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

    render(): JSX.Element {
        const { selectData, selectBodyStyle } = this.props;
        const { isShowSelect } = this.state;
        return (
            <React.Fragment>
                {this.createInput()}
                <Select
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
                />
            </React.Fragment>
        )
    }
}