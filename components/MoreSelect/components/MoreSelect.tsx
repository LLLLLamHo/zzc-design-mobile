import React, { PureComponent } from 'react';
import classNames from 'classnames';
import config from '../../_util/config';
import Popup from '../../Popup1';
import List from '../../List';
import Icon from '../../Icon';
import { MoreSelectProps, MoreSelectState, moreData } from '../propsType';
import { isFunction } from '../../_util/typeof';

export default class MoreSelect extends PureComponent<MoreSelectProps, MoreSelectState> {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
        };
        this.clickItem = this.clickItem.bind(this);
    }
    static defaultProps = {
        prefixCls: `${config.cls}-moreSelect`,
        className: '',
        style: {},
        isShow: false,
        onClose: null,
        title: null,
        data: [],
        onChange: null,
        maskClose: true
    };

    componentDidMount() {
        if (this.props.isShow) {
            this.togglePopup(true);
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.isShow) {
            this.togglePopup(true);
        } else if (!nextProps.isShow && this.props.isShow) {
            this.togglePopup(false);
        }
    }

    togglePopup(isShow: boolean): void {
        this.setState({
            visible: isShow
        });
    }

    clickItem(index1: number, index2: number, value?: any): void {
        const { onChange, data } = this.props;
        // 自由不自动关闭才出发onChange
        if (onChange) {
            if (value) {
                onChange({ key: index1, subKey: index2, ...data[index1].list[index2], value });
            } else {
                onChange({ key: index1, subKey: index2, ...data[index1].list[index2] });
            }
        }
    }

    createTitle(title: string | JSX.Element): JSX.Element {
        const { prefixCls } = this.props;
        return (
            <div className={`${prefixCls}-header`}>
                <h5>{title}</h5>
            </div>
        );
    }

    createContent(data: Array<moreData>): JSX.Element {
        const { prefixCls } = this.props;
        return (
            <div className={`${prefixCls}-body`}>
                {
                    data.map((item, key) => {
                        return (
                            <div key={`item-${key}`} className={`${prefixCls}-item-content`}>
                                <div className={`${prefixCls}-item-title`}>{item.title}</div>
                                <List>
                                    {
                                        item.list.map((item2, key2) => {
                                            const classname = classNames(
                                                `${prefixCls}-item`,
                                                {
                                                    [`${prefixCls}-item-disabled`]: item2.type == 'disabled',
                                                    [`${prefixCls}-item-active`]: item2.type == 'active'
                                                }
                                            );
                                            return (<List.ListItem
                                                className={`${prefixCls}-list-item`}
                                                onClick={() => {
                                                    if (item2.type != 'disabled') {
                                                        if (item2.click && isFunction(item2.click)) {
                                                            item2.click(item2, key, key2, (value) => {
                                                                this.clickItem(key, key2, value);
                                                            });
                                                        } else {
                                                            this.clickItem(key, key2);
                                                        }
                                                    }
                                                }}
                                                key={key2}
                                                title={<div className={classname}>{item2.text}</div>}
                                                extra={item2.type == 'active' ? <Icon style={{ width: '18px', height: '18px', color: '#2871F7' }} type='success_fill' /> : null}
                                            />)
                                        })
                                    }
                                </List>
                            </div>
                        );
                    })
                }
            </div>
        );
    }

    render() {
        const { style, prefixCls, className, title, onClose, maskClose, data, bodyStyle } = this.props;
        const selectClassName: string = classNames(
            prefixCls,
            className
        );
        return (
            <Popup
                bodyStyle={{ height: '80%', ...bodyStyle }}
                maskClose={maskClose}
                visible={this.state.visible}
                onClose={() => {
                    this.setState({
                        visible: false
                    }, () => {
                        onClose && onClose();
                    });
                }}
            >
                <div style={style} className={selectClassName}>
                    {title && this.createTitle(title)}
                    {this.createContent(data)}
                </div>
            </Popup>
        );
    }
}