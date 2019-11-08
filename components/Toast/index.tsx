import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';

import { addClass, removeClass, hasClass } from '../_util/class';
import { animationEvents } from '../_util/Event';
import { isDOM } from '../_util/typeof';
import Icon from '../Icon';
import Alignment from '../_util/alignment';
import config from '../_util/config';
import { zzcComponentUse } from '../_util/gtag';

import '../style/index';
import './index.scss';

const PREFIXCLS: string = `${config.cls}-toast`;
const alignment: any = new Alignment();

let _closeTimer: any = null;
let _toastElem: any = null;
let _duration: number = 2;
let _onClose: any = () => { };
let _parentNode: any = null;

function closeToast(): void {
    addClass( _toastElem, `${config.cls}-fade-leave` );
    addClass( _toastElem, `${config.cls}-fade-leave-active` );
    _closeTimer = null;
}

function countdown(): void {
    _closeTimer = setTimeout( () => {
        closeToast();
    }, _duration * 1000 );
}

function reset(): void {
    animationEvents.removeEndEventListener( _toastElem, addAnimationEnd );
    _parentNode = null;
    _toastElem = null;
    _duration = 2;
}

function addAnimationEnd(): void {
    if ( hasClass( this, `${config.cls}-fade-leave` ) ) {
        _parentNode && _parentNode.parentNode.removeChild( _parentNode );
        _parentNode && ReactDOM.unmountComponentAtNode( _parentNode );
        _duration !== 0 && _onClose();
        reset();
    } else {
        removeClass( this, `${config.cls}-fade-enter-active` );
        removeClass( this, `${config.cls}-fade-enter` );
        _duration !== 0 && countdown();
    }
}

function toggleShow(): void {
    if ( _closeTimer != null ) {
        clearTimeout( _closeTimer );
    }
    _parentNode && _parentNode.parentNode.removeChild( _parentNode );
    _parentNode && ReactDOM.unmountComponentAtNode( _parentNode );
    reset();
    _onClose();
    const item: { type: string, content: any, duration: number, onClose: any, parnetNode: any, mask: boolean } = alignment.get( 'first' );
    getToast( item.type, item.content, item.duration, item.onClose, item.parnetNode, item.mask );
}

function createParentNode( specifiedpParnet: any ): Element {
    const parentNode: any = document.createElement( 'div' );
    if ( isDOM( specifiedpParnet ) ) {
        specifiedpParnet.appendChild( parentNode );
    } else {
        document.body.appendChild( parentNode );
    }
    return parentNode;
}

function getToast( type: string, content: any, duration: number = 2, onClose: any = () => { }, parnetNode: any = null, mask: boolean = true ): void {
    zzcComponentUse( 'Toast', '组件渲染' );
    // only one toast to page
    if ( _toastElem != null ) {
        alignment.save( {
            type,
            content,
            duration,
            parnetNode,
            onClose,
            mask
        } );
        toggleShow();
    } else {
        _duration = duration;
        _parentNode = createParentNode( parnetNode );
        _onClose = onClose;

        const zzcToastCls = classNames(
            PREFIXCLS,
            {
                [`${PREFIXCLS}-nomask`]: !mask,
                [`${PREFIXCLS}-nofixed`]: isDOM( parnetNode )
            },
            {
                [`${PREFIXCLS}-icon`]: type === 'loading' || type === 'success' || type === 'error' || type === 'waring'
            }
        );

        let isIconToast = false;
        if ( type === 'success' || type === 'error' || type === 'waring' || type === 'loading' ) {
            isIconToast = true;
        }

        ReactDOM.render(
            <div className={zzcToastCls}>
                <div className={classNames( `${PREFIXCLS}-notice-content`, isIconToast ? 'logo-box' : '' )}>
                    <div className={classNames( `${PREFIXCLS}-text` )}>
                        {
                            ( type === 'success' || type === 'error' || type === 'waring' || type === 'loading' ) && <Icon type={(() => {
                                switch (type) {
                                    case 'success': return 'success_outline';
                                    case 'error': return 'error_outline';
                                    case 'waring': return 'warning_outline';
                                    case 'loading': return 'loading';
                                }
                            })()} />
                        }
                        <div className={classNames( `${PREFIXCLS}-text-content` )}
                            dangerouslySetInnerHTML={{
                                __html: content
                            }}
                        />
                    </div>
                </div>
            </div>,
            _parentNode
        );
        addAnimationEvent();
    }
}

function addAnimationEvent(): void {
    _toastElem = document.querySelector( `.${PREFIXCLS}-notice-content` );
    if ( _toastElem ) {
        animationEvents.addEndEventListener( _toastElem, addAnimationEnd );
        addClass( _toastElem, `${config.cls}-fade-enter` );
        addClass( _toastElem, `${config.cls}-fade-enter-active` );
    } else {
        requestAnimationFrame( () => {
            addAnimationEvent();
        } );
    }
}

export default class Toast extends Component {
    static info( ...props: Array<any> ) {
        getToast( 'info', props[0], props[1], props[2], props[3], props[4] );
    }
    static success( ...props: Array<any> ) {
        getToast( 'success', props[0], props[1], props[2], props[3], props[4] );
    }
    static error( ...props: Array<any> ) {
        getToast( 'error', props[0], props[1], props[2], props[3], props[4] );
    }
    static waring( ...props: Array<any> ) {
        getToast( 'waring', props[0], props[1], props[2], props[3], props[4] );
    }
    static loading( ...props: Array<any> ) {
        getToast( 'loading', props[0], props[1], props[2], props[3], props[4] );
    }
    static hideToast() { closeToast(); }
}