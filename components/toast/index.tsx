import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';

import { addClass, removeClass, hasClass } from '../_util/class';
import { animationEvents } from '../_util/Event';
import Icon from '../icon';
import Alignment from '../_util/alignment';

import '../style/index';
import './index.scss';

const PREFIXCLS: string = 'zzc-toast';
const alignment: any = new Alignment();

let _closeTimer: any = null;
let _toastElem: any = null;
let _duration: number = 2;
let _onClose: any = () => { };
let _parentNode: any = null;

function closeToast(): void {
    addClass( _toastElem, 'zzc-fade-leave' );
    addClass( _toastElem, 'zzc-fade-leave-active' );
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
    if ( hasClass( this, 'zzc-fade-enter' ) ) {
        removeClass( this, 'zzc-fade-enter-active' );
        removeClass( this, 'zzc-fade-enter' );
        _duration !== 0 && countdown();
    } else {
        _parentNode && _parentNode.parentNode.removeChild( _parentNode );
        _parentNode && ReactDOM.unmountComponentAtNode( _parentNode );
        _duration !== 0 && _onClose();
        reset();
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
    const item: { type: string, content: any, duration: number, onClose: any, mask: boolean } = alignment.get( 'first' );
    getToast( item.type, item.content, item.duration, item.onClose, item.mask );
}

function createParentNode(): Element {
    const parentNode: any = document.createElement( 'div' );
    document.body.appendChild( parentNode );
    return parentNode;
}

function getToast( type: string, content: any, duration: number = 2, onClose: any = () => { }, mask: boolean = true ): void {
    // only one toast to page
    if ( _toastElem != null ) {
        alignment.save( {
            type,
            content,
            duration,
            onClose,
            mask
        } );
        toggleShow();
    } else {
        _duration = duration;
        _parentNode = createParentNode();
        _onClose = onClose;

        const zzcToastCls = classNames(
            PREFIXCLS,
            {
                [`${PREFIXCLS}-nomask`]: !mask
            },
            {
                [`${PREFIXCLS}-icon`]: type === 'loading' || type === 'success' || type === 'error' || type === 'waring'
            }
        );

        ReactDOM.render(
            <div className={zzcToastCls}>
                <div className={classNames( `${PREFIXCLS}-notice-content` )}>
                    <div className={classNames( `${PREFIXCLS}-text` )}>
                        {
                            ( type === 'success' || type === 'error' || type === 'waring' || type === 'loading' ) && <Icon style={{ fill: '#fff' }} size='lg' type={type} />
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
        addClass( _toastElem, 'zzc-fade-enter' );
        addClass( _toastElem, 'zzc-fade-enter-active' );
    } else {
        requestAnimationFrame( () => {
            addAnimationEvent();
        } );
    }
}

export default class Toast extends Component {
    static info( ...props: Array<any> ) {
        getToast( 'info', props[0], props[1], props[2], props[3] );
    }
    static success( ...props: Array<any> ) {
        getToast( 'success', props[0], props[1], props[2], props[3] );
    }
    static error( ...props: Array<any> ) {
        getToast( 'error', props[0], props[1], props[2], props[3] );
    }
    static waring( ...props: Array<any> ) {
        getToast( 'waring', props[0], props[1], props[2], props[3] );
    }
    static loading( ...props: Array<any> ) {
        getToast( 'loading', props[0], props[1], props[2], props[3] );
    }
    static hideToast() { closeToast(); }
}