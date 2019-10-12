import React, { PureComponent } from 'react';
import classNames from 'classnames';
import Icon from '../../Icon';
import config from '../../_util/config';
import { isFunction } from '../../_util/typeof';
import { PromptProps } from '../porpsType';

export default class Prompt extends PureComponent<PromptProps, any> {
    constructor(props) {
        super(props);
        this.handlerClickEvent = this.handlerClickEvent.bind(this);
    }

    static defaultProps = {
        prefixCls: `${config.cls}-prompt`,
        className: '',
        style: {},
        mode: 'defautl',
        type: 'defautl',
        lineClamp: 0,
        contextText: ''
    };

    handlerClickEvent(): void {
        const { onClick } = this.props;
        if (onClick && isFunction(onClick)) {
            onClick();
        }
    }

    getTheme(type?: string): string {
        switch (type) {
            case 'success':
                return "success-theme";
            case 'warn':
                return 'warn-theme';
            default:
                return "neutral-theme";
        }
    }

    renderTypeElement(): JSX.Element {
        const { prefixCls, style, mode, contextText, lineClamp, type, children, className } = this.props;
        const theme = this.getTheme(type || '');
        const classname = classNames(prefixCls, className);
        switch (mode) {
            case 'info':
                return (
                    <div className={`${classname} type-notice ${theme}`} onClick={this.handlerClickEvent} style={style}>
                        <Icon type='info' className={`${prefixCls}-icon-info`} />
                        <div className={`${prefixCls}-content`}>
                            {!!children ? children : <p style={{ 'WebkitLineClamp': lineClamp }} dangerouslySetInnerHTML={{ __html: contextText || '' }}></p>}
                        </div>
                    </div>
                )
            case 'click':
                return (
                    <div className={`${classname} type-notice ${theme}`} onClick={this.handlerClickEvent} style={style}>
                        <div className={`${prefixCls}-content`}>
                            {!!children ? children : <p style={{ 'WebkitLineClamp': lineClamp }} dangerouslySetInnerHTML={{ __html: contextText || '' }}></p>}
                        </div>
                        <Icon type='right' className={`${prefixCls}-icon-right`} />
                    </div>
                )
            case 'info*click':
                return (
                    <div className={`${classname} type-notice ${theme}`} onClick={this.handlerClickEvent} style={style}>
                        <Icon type='info' className={`${prefixCls}-icon-info`} />
                        <div className={`${prefixCls}-content`}>
                            {!!children ? children : <p style={{ 'WebkitLineClamp': lineClamp }} dangerouslySetInnerHTML={{ __html: contextText || '' }}></p>}
                        </div>
                        <Icon type='right' className={`${prefixCls}-icon-right`} />
                    </div>
                )
            default:
                return (
                    <div className={`${classname} type-notice border-notice ${theme}`} onClick={this.handlerClickEvent} style={style}>
                        <div className={`${prefixCls}-content`}>
                            {!!children ? children : <p style={{ 'WebkitLineClamp': lineClamp }} dangerouslySetInnerHTML={{ __html: contextText || '' }}></p>}
                        </div>
                    </div>
                )
        }

    }

    render() {
        return this.renderTypeElement();
    }
}