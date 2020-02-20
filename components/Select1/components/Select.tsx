import React, { PureComponent } from 'react';
import classNames from 'classnames';
import config from '../../_util/config';
import Popup from '../../Popup1';
import List from '../../List';
import Icon from '../../Icon';
import { SelectProps, SelectState, data } from '../propsType';
import { isFunction } from '../../_util/typeof';

export default class Select extends PureComponent<SelectProps, SelectState> {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
        };
        this.clickItem = this.clickItem.bind(this);
    }
    static defaultProps = {
        prefixCls: `${config.cls}-select`,
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

    getCurrSelectItemIndex(data: Array<data>): null | number {
        for (let i = 0; i < data.length; i++) {
            if (data[i].type == 'active') {
                return i;
            }
        }
        return null;
    }

    togglePopup(isShow: boolean): void {
        this.setState({
            visible: isShow
        });
    }

    clickItem(index: number, value?: any): void {
        const { onChange, data } = this.props;
        // 自由不自动关闭才出发onChange
        if (onChange) {
            if ( value ) {
                onChange({ key: index, ...data[index], value });
            } else {
                onChange({ key: index, ...data[index] });
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

    createContent(data: Array<data>): JSX.Element {
        const { prefixCls } = this.props;
        return (
            <div className={`${prefixCls}-body`}>
                <List>
                    {
                        data.map((item, key) => {
                            const classname = classNames(
                                `${prefixCls}-item`,
                                {
                                    [`${prefixCls}-item-disabled`]: item.type == 'disabled',
                                    [`${prefixCls}-item-active`]: item.type == 'active'
                                }
                            );
                            return (<List.ListItem
                                onClick={() => { 
                                    if ( item.type != 'disabled' ) {
                                        if ( item.click && isFunction(item.click) ) {
                                            item.click(item, key, (value) => {
                                                this.clickItem(key, value);
                                            });
                                        } else {
                                            this.clickItem(key);
                                        }
                                    }
                                }}
                                key={key}
                                title={<div className={classname}>{item.text}</div>}
                                extra={item.type == 'active' ? <Icon style={{ width: '18px', height: '18px', color: '#2871F7' }} type='success_fill' /> : null}
                            />)
                        })
                    }
                </List>
            </div>

        )
    }

    render() {
        const { style, prefixCls, className, title, onClose, maskClose, data, bodyStyle } = this.props;
        const selectClassName: string = classNames(
            prefixCls,
            className
        );
        return (
            <Popup
                bodyStyle={{height: '60%', ...bodyStyle }}
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