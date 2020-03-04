import React, { PureComponent } from 'react';
import classNames from 'classnames';
import config from '../../_util/config';
import Popup from '../../Popup';
import { ActionSheetProps, ActionSheetState, BtnItemProps } from '../propsType';
import { isFunction } from '../../_util/typeof';

export default class ActionSheet extends PureComponent<ActionSheetProps, ActionSheetState> {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
        };
    }
    static defaultProps = {
        prefixCls: `${config.cls}-actionsheet`,
        className: '',
        style: {},
        title: '',
        btnGrounp: '',
        cancelText: '',
        isShow: false,
        onClose: null,
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

    createTitle(title) {
        const { prefixCls } = this.props;
        return (
            <div className={`${prefixCls}-header`}>
                <p>{title}</p>
            </div>
        );
    }

    createBody(btnGrounp) {
        const { prefixCls, onClose } = this.props;
        return (
            <div className={`${prefixCls}-body`}>
                {
                    btnGrounp.map((item: BtnItemProps, key) => {
                        const { type = 'default', autoClose = true, className, content, style, onClick } = item;
                        return (
                            <div key={key} className={`${prefixCls}-item`} onClick={() => {
                                onClick && isFunction(onClick) && onClick();
                                // 默认点击关闭
                                autoClose && onClose && isFunction(onClose) && onClose();
                            }}>
                                <p className={`${className || ''} ${type}`} style={style}>{content}</p>
                            </div>
                        );
                    })
                }
            </div>
        );
    }

    createFooter(cancelText) {
        const { prefixCls, onClose } = this.props;
        return (
            <div className={`${prefixCls}-footer`}>
                <div className={`${prefixCls}-item`} onClick={() => {
                    onClose && isFunction(onClose) && onClose();
                }}>
                    <p>{cancelText}</p>
                </div>
            </div>
        );
    }

    render() {
        const { style, prefixCls, className, onClose, title, btnGrounp, cancelText, maskClose, bodyStyle } = this.props;
        const actionsheetClassName: string = classNames(
            prefixCls,
            className
        );
        return (
            <Popup
                bodyStyle={{ ...bodyStyle }}
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
                <div style={style} className={actionsheetClassName}>
                    {title && this.createTitle(title)}
                    {btnGrounp && this.createBody(btnGrounp)}
                    {cancelText && this.createFooter(cancelText)}
                </div>
            </Popup>
        );
    }
}