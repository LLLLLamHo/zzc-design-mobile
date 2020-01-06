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

function initPickerData(props) {
    let pickerData: Array<any> = [];
    if (Array.isArray(props.options)) {
        pickerData.push(props.options);
    }
    return pickerData;
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
        console.log('value: ', value);
        this.state = {
            tabsIndex: 0,
            value,
            pickerData: initPickerData(props),
            selected: ['请选择']
        };
    }

    static defaultProps = {
        prop: {
            value: 'value',
            label: 'label',
            children: 'children'
        }
    }

    static getDerivedStateFromProps(nextProps, state) {
        if (
            (('visible' in nextProps) && state.visible !== nextProps.visible) ||
            (('value' in nextProps) && state.value.length !== nextProps.value.length))
             {
            return {
                value: nextProps.value || [],
                visible: nextProps.visible
            }
        }
        return null;
    }

    onToggleTab = (index) => {
        this.setState({
            tabsIndex: index
        });
    }

    getCityList = (options, province) => {
        const prop = this.props.prop;
        if (!province) return [];
        const index = options.findIndex(item => item[prop.value] === province);
        if (index > -1) {
            return options[index][prop.children]
        }
        return []
    }

    onChange(val, props, index) {
        let { value, selected, tabsIndex } = this.state
        value[index] = val;
        if (!('value' in this.props)) {
            this.setState({
                value: value,
            });
        } else {
            (typeof this.props.onChange === 'function') && this.props.onChange(value);
        }
        selected[index] = props.label;
        const pickerData = this.getOptionsByValue(this.props.options, value);
        requestAnimationFrame(() => {
            let next = ++index;
            if (pickerData[next] && pickerData[next].length) {
                tabsIndex = next;
                (selected[next] = '请选择')
                this.setState({
                    tabsIndex,
                    pickerData,
                    selected: selected.splice(0, next + 1)
                });
                return
            }
            // this.props.onClose();
        })
    }

    onProvinceChange = (val, props) => {
        let value = this.state.value.slice();
        const cityOptions = this.getCityList(this.props.options, val);
        value = [val];
        if (cityOptions && cityOptions.length) {
            this.setValue(value);
            this.setState({
                cityOptions,
                selected: [props.label, '请选择'],
                tabsIndex: 1
            });
        }
        else {
            this.setValue(value);
            this.setState({
                selected: [props.label]
            });
            requestAnimationFrame(() => {
                this.props.onChange(value, this.state.selected);
                this.props.onClose();
            })
        }
    }

    setValue(value) {
        if (!('value' in this.props)) {
            this.setState({
                value
            });
        }
    }

    onCityChange = (val, props) => {
        const value = this.state.value.slice();
        const selected = this.state.selected;
        value[1] = val;
        selected[1] = props.label;
        this.setValue(value);
        this.setState({
            selected: selected,
        });
        requestAnimationFrame(() => {
            this.props.onChange(value, this.state.selected);
            this.props.onClose();
        })
    }

    renderTabbar() {
        const { tabsIndex, selected } = this.state;
        return (
            <div className="zds-cascader-tabbar">
                {
                    selected.map((item, index) => {
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

    getOptionsByValue(options, selectValue: Array<any> = []) {
        const prop = this.props.prop;
        let pickerData: Array<any> = [], option;
        if (!selectValue.length) {
            pickerData.push(options);
            return pickerData;
        }
        option = options;
        pickerData.push(options);
        for (let value of selectValue) {
            if (option) {
                const index = option.findIndex(item => item[prop.value] === value);
                if (index > -1) {
                    const children = option[index][prop.children];
                    if (children) {
                        pickerData.push(children);
                        option = children;
                    }
                }
            };
        }
        return pickerData;
    }

    renderOptionItem(options) {
        const prop = this.props.prop;
        return options.map((item, index) => {
            return (
                <Select.Option
                    value={item[prop.value]}
                    label={item[prop.label]}
                    key={item[prop.value]}></Select.Option>
            )
        });
    }

    render(): JSX.Element | null {
        const { visible, prop, options } = this.props;
        const {  value, pickerData, selected } = this.state;
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
                            <h2 className="zds-cascader-header-title">所在地区</h2>
                            <i className="zds-cascader-header-close">
                                <Icon className="zds-cascader-header-close-inner" type="error" />
                            </i>
                        </header>
                        {/* <PopupHeader border={false} onClose={this.props.onClose} title="所在地区"></PopupHeader> */}
                        {this.renderTabbar()}
                        <Tabs
                            tabs={selected}
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