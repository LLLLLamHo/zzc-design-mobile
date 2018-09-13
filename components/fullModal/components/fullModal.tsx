import React, { PureComponent, ReactNode } from 'react';
import classNames from 'classnames';
import BScroll from 'better-scroll'
import Dialog from '../../dialog';
import TouchFeedback from '../../touchFeedback';
import config from '../../_util/config';
import { zzcComponentUse } from '../../_util/gtag';
import { FullModalProps } from '../propsTyps';

export default class FullModal extends PureComponent<FullModalProps, any> {
    constructor( props ) {
        super( props );
        zzcComponentUse( 'FullModal', '组件渲染' );
    }

    static defaultProps = {
        prefixCls: `${config.cls}-full-modal`,
        style: {},
        visible: false,
        title: '',
        className: '',
        isUseBScroll: false,
        BScrollOpt: {},
        BScrollInitCallback: () => {}
    }

    private body: HTMLDivElement | null;

    componentDidMount() {
        const { isUseBScroll, BScrollOpt, BScrollInitCallback } = this.props;
        if ( isUseBScroll && this.body ) {
            const scroll = new BScroll( this.body, BScrollOpt );
            BScrollInitCallback && BScrollInitCallback( scroll );
        }
    }

    createBScrollElem( children?: ReactNode ): ReactNode {
        const { prefixCls } = this.props;
        return (
            <div
                className={`${prefixCls}-body ${prefixCls}-wrapper`}
                ref={
                    ( elem ) => {
                        this.body = elem;
                    }
                }
            >
                <div
                    className={`${prefixCls}-wrapper-content`}
                >
                    {children}
                </div>
            </div>
        );
    }

    createDefaultElem( children?: ReactNode ): ReactNode {
        const { prefixCls } = this.props;
        return (
            <div className={`${prefixCls}-body`}>
                {children}
            </div>
        );
    }

    render() {
        const {
            children,
            prefixCls,
            className,
            style,
            visible,
            title,
            closeCallback,
            isUseBScroll
        } = this.props;

        if ( visible ) {
            return (
                <Dialog
                    visible={visible}
                    style={style}
                    className={`${className}`}
                    transparent
                    boxClassName={`${prefixCls}-box`}
                >
                    <div className={classNames( `${prefixCls}-content`, className )}>
                        <div className={`${prefixCls}-head`}>
                            <h5>{title}</h5>
                        </div>
                        {isUseBScroll ? this.createBScrollElem( children ) : this.createDefaultElem( children )}
                        <div className={`${prefixCls}-footer`}>
                            <TouchFeedback
                                activeClassName={`${prefixCls}-btn-active`}
                                onTouchEnd={() => { closeCallback(); }}
                            >
                                <div className={`${prefixCls}-btn`}>
                                    <span />
                                </div>
                            </TouchFeedback>
                        </div>
                    </div>
                </Dialog>
            );
        }
        return null;
    }
}

