import React, { Component } from 'react';
import classnames from 'classnames';
import Select from './CascaderSelect';
import Popup from '../../Popup';
import Tabs from '../../Tabs';
import Icon from '../../Icon';
import { CascaderProps, CascaderState } from '../propsType';

interface Cascader {
    state: CascaderState
}

type GetOptionsByValue = {
    pickerData: Array<any>,
    selectedOptions: Array<any>,
}

const defaultProp = {
    value: 'value',
    label: 'label',
    children: 'children'
}
function getOptionsByValue(props, selectValue: Array<any> = []): GetOptionsByValue {
    const prop = props.prop;
    const options = props.options;
    let pickerData: Array<any> = [], option;
    let selectedOptions: Array<any> = [];
    if (!Array.isArray(options)) return { pickerData, selectedOptions };
    option = options;
    pickerData.push(options);
    selectValue.forEach((value, index) => {
        if (option) {
            const fItem = option.find(item => item[prop.value] === value);
            if (fItem) {
                const children = fItem[prop.children];
                selectedOptions[index] = fItem;
                if (children) {
                    pickerData.push(children);
                    option = children;
                }
            }
        };
    });
    return { pickerData, selectedOptions };
}

class Cascader extends Component<CascaderProps> {
    constructor(props) {
        super(props);
        let value = [];
        if (('value' in props)) {
            value = props.value;
        } else {
            value = props.defaultValue || [];
        }
        let { pickerData, selectedOptions } = getOptionsByValue(props, value);
        this.state = {
            tabsIndex: pickerData.length - 1,
            value,
            pickerData,
            selectedOptions
        };
    }

    static defaultProps = {
        title: '所在地区',
        prop: defaultProp
    }

    static getDerivedStateFromProps(nextProps, state) {
        const data: { [prop: string]: any } = {};
        if (('value' in nextProps) && state.value.length !== nextProps.value.length) {
            data.value = nextProps.value;
        }
        if (('options' in nextProps) && state.pickerData[0] !== nextProps.options) {
            // state.pickerData[0] 默认为 options
            let { pickerData, selectedOptions } = getOptionsByValue(nextProps, state.value);
            data.pickerData = pickerData;
            data.selectedOptions = selectedOptions;
            data.tabsIndex = pickerData.length - 1;
        }
        return Object.keys(data).length ? data : null;
    }

    onToggleTab = (index) => {
        this.setState({
            tabsIndex: index
        });
    }

    onChange(val, optionProps, index) {
        let { value, tabsIndex, selectedOptions } = this.state
        const { loadData, prop = defaultProp } = this.props;
        const targetOption = optionProps.option;
        value[index] = val;
        value = value.splice(0, index + 1);
        if (!('value' in this.props)) {
            this.setState({
                value,
            });
        }
        if (targetOption.isLeaf === false && !targetOption[prop.children] && loadData) {
            loadData(targetOption);
            return
        }
        selectedOptions[index] = optionProps.option;
        const { pickerData } = getOptionsByValue(this.props, value);
        let next = ++index;
        if (pickerData[next] && pickerData[next].length) {
            tabsIndex = next;
            this.setState({
                tabsIndex,
                pickerData,
                selectedOptions: selectedOptions.splice(0,  next),
            });
            return
        }
        (typeof this.props.onChange === 'function') && this.props.onChange(value.slice(), selectedOptions.slice());
        this.props.onClose();
    }

    renderTabbar() {
        const { tabsIndex, selectedOptions, pickerData } = this.state;
        const { prop = defaultProp } = this.props;
        return (
            <div className="zds-cascader-tabbar">
                {
                    pickerData.map((_item, index) => {
                        const option = selectedOptions[index];
                        return (
                            <div 
                                className={classnames('zds-cascader-tabbar-item', {
                                    'is-active': tabsIndex === index
                                })}
                                key={`cascader-tabbar-item-${index}`}
                                onClick={() => this.onToggleTab(index)}>
                                    { option ? option[prop.label] : '请选择' }
                            </div>
                        )
                    })
                }
            </div>
        )
    }

    renderOptionItem(options) {
        const prop = this.props.prop || defaultProp;
        return options.map((item) => {
            return (
                <Select.Option
                    option={item}
                    value={item[prop.value]}
                    label={item[prop.label]}
                    key={item[prop.value]}></Select.Option>
            )
        });
    }

    render(): JSX.Element | null {
        const { visible, options, title } = this.props;
        const {  value, pickerData } = this.state;
        let _options: Array<any> = pickerData;
        if (!pickerData.length) {
            _options = options;
        }
        const tabsContent = _options.map((item: Array<any>, index) => {
            const itemValue = value[index] || undefined
            return (
                <div className="zds-cascader-item" key={`cascader-item-${index}`}>
                    <Select value={itemValue} onChange={(val, props) => this.onChange(val, props, index)}>
                        { this.renderOptionItem(item) }
                    </Select>
                </div>
            )
        })
        return (
            <Popup
                visible={visible}
                bodyStyle={{height: '85%'}}
                onClose={this.props.onClose}
                maskClose={true}>
                    <div className="zds-cascader">
                        <header className="zds-cascader-header">
                            <h2 className="zds-cascader-header-title">{title}</h2>
                            <i className="zds-cascader-header-close" onClick={() => this.props.onClose()}>
                                <Icon className="zds-cascader-header-close-inner" type="error" />
                            </i>
                        </header>
                        { this.renderTabbar() }
                        <Tabs
                            tabs={[]}
                            defaultIndex={0}
                            className="zds-cascader-body"
                            maxTabLength={3}
                            index={this.state.tabsIndex}
                            swipeable={false}
                            isOpenTabContentScroll={false}
                            onChange={( key ) => {
                                this.setState( {
                                    tabsIndex: key
                                } );
                            }}
                        >
                            { tabsContent }
                        </Tabs>
                    </div>
                </Popup>
        )
    }
}

export default Cascader