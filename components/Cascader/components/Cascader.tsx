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
    selectedLabel: Array<string>,
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
    let selectedLabel: Array<string> = ['请选择'];
    let selectedOptions: Array<any> = [];
    if (!Array.isArray(options)) return { pickerData, selectedLabel, selectedOptions };
    if (!selectValue.length) {
        pickerData.push(options);
        return { pickerData, selectedLabel, selectedOptions };
    }
    option = options;
    pickerData.push(options);
    selectValue.forEach((value, index) => {
        if (option) {
            const fItem = option.find(item => item[prop.value] === value);
            if (fItem) {
                selectedLabel[index] = fItem[prop.label];
                selectedOptions[index] = fItem;
                const children = fItem[prop.children];
                if (children) {
                    pickerData.push(children);
                    option = children;
                }
            }
        };
    });
    return { pickerData, selectedLabel, selectedOptions };
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
        let { pickerData, selectedLabel, selectedOptions } = getOptionsByValue(props, value);
        this.state = {
            tabsIndex: pickerData.length - 1,
            value,
            pickerData,
            selectedLabel,
            selectedOptions
        };
    }

    static defaultProps = {
        title: '所在地区',
        prop: defaultProp
    }

    static getDerivedStateFromProps(nextProps, state) {
        const data: { [prop: string]: any } = {};
        if (('visible' in nextProps) && state.visible !== nextProps.visible) {
            data.visible = nextProps.visible;
        }
        if (('value' in nextProps) && state.value.length !== nextProps.value.length) {
            data.value = nextProps.value;
        }
        if (('options' in nextProps) && !state.pickerData[0].length) {
            // state.pickerData[0] 默认为 options
            let { pickerData, selectedLabel, selectedOptions } = getOptionsByValue(nextProps, state.value);
            data.pickerData = pickerData;
            data.selectedLabel = selectedLabel;
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

    onChange(val, props, index) {
        let { value, selectedLabel, tabsIndex, selectedOptions } = this.state
        value[index] = val;
        value = value.splice(0, index + 1);
        if (!('value' in this.props)) {
            this.setState({
                value,
            });
        }
        selectedLabel[index] = props.label;
        selectedOptions[index] = props;
        const { pickerData } = getOptionsByValue(this.props, value);
        let next = ++index;
        if (pickerData[next] && pickerData[next].length) {
            tabsIndex = next;
            selectedLabel[next] = '请选择';
            this.setState({
                tabsIndex,
                pickerData,
                selectedOptions: selectedOptions.splice(0, next + 1),
                selectedLabel: selectedLabel.splice(0, next + 1)
            });
            return
        }
        (typeof this.props.onChange === 'function') && this.props.onChange(value.slice(), selectedOptions.slice());
        this.props.onClose();
    }

    renderTabbar() {
        const { tabsIndex, selectedLabel } = this.state;
        return (
            <div className="zds-cascader-tabbar">
                {
                    selectedLabel.map((item, index) => {
                        return (
                            <div 
                                className={classnames('zds-cascader-tabbar-item', {
                                    'is-active': tabsIndex === index
                                })}
                                key={`cascader-tabbar-item-${index}`}
                                onClick={() => this.onToggleTab(index)}>
                                    {item}
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
        const {  value, pickerData, selectedLabel } = this.state;
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
                            tabs={selectedLabel}
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