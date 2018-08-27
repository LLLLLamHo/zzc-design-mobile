import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import Modal from '../modal';
import config from '../_util/config';
import { zzcComponentUse } from '../_util/gtag';
import './index.scss';

class Alert {
    opt: any
    parentNode: Element
    _alert: any

    constructor( opt ) {
        const defaultPorps = {
            prefixCls: `${config.cls}-alert`,
            className: '',
            style: {},
            title: '',
            content: null,
            buttons: [],
            maskClose: false,
            closable: false,
            closeCallback() { }
        };
        zzcComponentUse( 'Alert', '组件渲染' );
        this.opt = Object.assign( defaultPorps, opt );
        const { title, content, prefixCls, className } = this.opt;
        this.parentNode = this.createParentNode( className );

        this._alert = ReactDOM.render(
            <Modal
                transitionName={`${config.cls}-zoom`}
                visible
                {...this.opt}
                title={this.createTitle( title, prefixCls, content )}
                closeCallback={() => { this.removeAlert(); }}
            >
                {content && <div className={classNames( `${prefixCls}-body-content` )}>{content}</div>}
            </Modal>,
            this.parentNode
        );
    }

    createParentNode( className: string ): Element {
        const parentNode = document.createElement( 'div' );
        parentNode.className = className;
        document.body.appendChild( parentNode );
        return parentNode;
    }

    createTitle( title: string, prefixCls: string, content: any ): JSX.Element | null {
        if ( title !== '' ) {
            return ( <h1
                className={
                    classNames(
                        `${prefixCls}-title`,
                        {
                            [`${prefixCls}-only-title`]: !content
                        }
                    )
                }
            >
                {title}
            </h1> );
        }
        return null;
    }

    removeAlert(): void {
        this.parentNode && ReactDOM.unmountComponentAtNode( this.parentNode );
        if ( this.parentNode && this.parentNode.parentNode ) {
            this.parentNode.parentNode.removeChild( this.parentNode );
            this.opt.closeCallback();
        }
    }

    close(): void {
        if ( this._alert && this._alert.setState ) {
            this._alert.setState( {
                visible: false
            } );
        } else {
            this.removeAlert();
        }
    }
}

export default function ( opt: any ) {
    const alert: any = new Alert( opt );
    return alert.close.bind( alert );
}