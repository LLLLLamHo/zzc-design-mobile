import React, { PureComponent } from 'react';
import classNames from 'classnames';
import config from '../../_util/config';
import Popup from '../../Popup';
import List from '../../List';
import Icon from '../../Icon';
import { SelectProps, SelectState, data } from '../propsType';

export default class Select extends PureComponent<SelectProps, SelectState> {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            _data: props.data,
            currIndex: props.data ? this.getCurrSelectItemIndex(props.data) : null
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
        autoClose: true,
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
            this.setState({
                _data: nextProps.data,
                currIndex: nextProps.data ? this.getCurrSelectItemIndex(nextProps.data) : null
            });
        } else if (!nextProps.isShow && this.props.isShow) {
            this.togglePopup(false);
            this.setState({
                _data: nextProps.data,
                currIndex: nextProps.data ? this.getCurrSelectItemIndex(nextProps.data) : null
            });
        }
    }

    getCurrSelectItemIndex(data: Array<data>): null | number {
        for ( let i = 0; i < data.length; i++ ) {
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

    clickItem(index: number): void {
        const { onChange, autoClose } = this.props;
        const { currIndex, _data } = this.state;

        if ( _data[index] && _data[index].type == 'disabled' ) return;

        if ( currIndex != index ) {
            const currItem = currIndex != null ? _data[currIndex] : null;
            const nextCurrItem = index != null ? _data[index] : null;
            if ( currItem) {
                currItem.type = 'normal';
            }
            if ( nextCurrItem) {
                nextCurrItem.type = 'active';
            }
            this.setState({
                currIndex: index,
                _data: _data.concat([])
            });
        }
        // 自由不自动关闭才出发onChange
        if ( !autoClose && onChange ) {
            onChange(_data[index]);
        }
        autoClose && this.togglePopup(false);
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
                            if (item.type == 'active') {
                                return (<List.ListItem
                                    onClick={() => { this.clickItem(key) }}
                                    key={key}
                                    title={<div className={classname}>{item.text}</div>}
                                    extra={<Icon style={{ width: '18px', height: '18px', color: '#2871F7' }} type='success_fill' />}
                                />)
                            }
                            return (
                                <List.ListItem
                                    onClick={() => { this.clickItem(key) }}
                                    key={key}
                                    title={<div className={classname}>{item.text}</div>}
                                />
                            );
                        })
                    }
                </List>
            </div>

        )
    }

    render() {
        const { style, prefixCls, className, title, onClose, maskClose } = this.props;
        const { _data, currIndex } = this.state;
        const selectClassName: string = classNames(
            prefixCls,
            className
        );

        return (
            <Popup
                bodyStyle={{ height: '50%' }}
                maskClose={maskClose}
                visible={this.state.visible}
                onClose={() => {
                    this.setState({
                        visible: false
                    }, () => {
                        onClose && onClose(currIndex);
                    });
                }}
            >
                <div style={style} className={selectClassName}>
                    {title && this.createTitle(title)}
                    {this.createContent(_data)}
                </div>
            </Popup>
        );
    }
}