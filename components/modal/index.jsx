import React, { PureComponent } from 'react';
import Dialog from '../dialog/index.jsx';
import Button from '../button/index.jsx';

import classNames from 'classnames';
import './index.scss';

export default class extends PureComponent {

    static defaultProps = {
        prefixCls: 'zzc-modal',
        maskTransitionName: 'fade',
        style: {},
        maskStyle: {},
        className: '',
        closable: false,
        closeCallback: function () { },
        visible: false,
        type: 'modal',
        title: '',
        transitionName: 'zoom',
        buttons: [],
        markClose: false
    }

    state = {
        visible: this.props.visible
    }

    componentWillReceiveProps( newProps ) {
        if ( this.state.visible != newProps.visible ) {
            this.setState( {
                visible: newProps.visible
            } );
        }
    }

    createAlertFooter( buttons, closable ) {
        if ( closable ) {
            return ( <Button noBorder full onClick={
                () => {
                    this.close();
                }
            }>关闭</Button> );
        } else {
            return (
                buttons.map( ( item, key ) => {
                    return (
                        <div key={`${this.props.prefixCls}-btn-${new Date().getTime()}-${key}`} className={classNames( `${this.props.prefixCls}-btn` )}>
                            {this.createBtn( item )}
                        </div>
                    )
                } )
            );
        }
    }

    createBtn( btn ) {
        const onPress = btn.onPress ? btn.onPress : () => { };
        const _this = this;
        return React.cloneElement(
            <Button noBorder full onClick={
                () => {
                    const res = onPress();
                    if ( res && res.then ) {
                        res.then( () => {
                            this.close();
                        } ).catch( () => { } );
                    } else {
                        this.close();
                    }
                }
            }>
                {btn.text}
            </Button>, {
                ...btn.props
            } );
    }

    close() {
        this.setState( {
            visible: false
        });
    }

    render() {

        const {
            children,
            markClose,
            transitionName,
            prefixCls,
            closable,
            closeCallback,
            className,
            type,
            style,
            maskStyle,
            title,
            buttons,
            visible
        } = this.props;

        if ( visible ) {
            return (
                <Dialog
                    visible={this.state.visible}
                    style={style}
                    maskStyle={maskStyle}
                    markClose={markClose}
                    transitionName={transitionName}
                    boxClassName={classNames( `${prefixCls}-box`, className )}
                    closeCallback={closeCallback}
                >
                    {title && title != '' && <div className={classNames( `${prefixCls}-header` )}>
                        {title}
                    </div>}
                    <div className={classNames( `${prefixCls}-body` )}>
                        {children}
                    </div>
                    <div className={classNames( `${prefixCls}-footer` )}>
                        {this.createAlertFooter( buttons, closable )}
                    </div>
                </Dialog>
            );
        } else {
            return null;
        }
    }
}

