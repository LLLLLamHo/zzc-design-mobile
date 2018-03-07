import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import Modal from '../modal/index.jsx';
import './index.scss';

class Alert {
    constructor( opt ) {
        const defaultPorps = {
            prefixCls: 'zzc-alert',
            className: '',
            style: {},
            title: '',
            content: null,
            buttons: [],
            markClose: false,
            closable: false,
            closeCallback() { }
        };

        this.opt = Object.assign( defaultPorps, opt );
        const { title, content, prefixCls, className } = this.opt;
        this.parentNode = this.createParentNode( className );
        this.closed = false;

        this._alert = ReactDOM.render(
            <Modal
                type='alert'
                transitionName='zoom'
                visible
                {...this.opt}
                title=''
                closeCallback={() => { this.removeAlert(); }}
            >
                <React.Fragment>
                    {
                        title &&
                        <h1
                            className={
                                classNames(
                                    `${prefixCls}-body-title`,
                                    {
                                        [`${prefixCls}-body-only-title`]: !content
                                    }
                                )
                            }
                        >
                            {title}
                        </h1>
                    }
                    {content && <div className={classNames( `${prefixCls}-body-content` )}>{content}</div>}
                </React.Fragment>
            </Modal>,
            this.parentNode
        );
    }

    createParentNode( className ) {
        const parentNode = document.createElement( 'div' );
        parentNode.className = className;
        document.body.appendChild( parentNode );
        return parentNode;
    }

    removeAlert() {
        this.parentNode && ReactDOM.unmountComponentAtNode( this.parentNode );
        if ( this.parentNode && this.parentNode.parentNode ) {
            this.parentNode.parentNode.removeChild( this.parentNode );
            this.opt.closeCallback();
        }
    }

    close() {
        if ( this._alert && this._alert.setState ) {
            this._alert.setState( {
                visible: false
            } );
        } else {
            this.removeAlert();
        }
    }
}

export default function ( opt ) {
    const alert = new Alert( opt );
    return alert.close.bind( alert );
}