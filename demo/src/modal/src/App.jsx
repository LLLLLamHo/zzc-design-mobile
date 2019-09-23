import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import '../../../style/style.scss';
import { Modal, Button, Toast } from 'zzc-design-mobile';

let isClose = false;

export default class App extends Component {

    constructor( props ) {
        super( props );
        this.state = {
            visible: false,
            visible2: false,
            visible3: false,
            visible4: false,
            visible5: false,
            visible6: false,
            title: '带标题区的 Modal',
            text: new Date().getTime()
        };
    }

    openDefaultModal() {
        this.setState( {
            visible: true
        } );
    }

    openCustomModal() {
        this.setState( {
            visible2: true
        } );
    }

    openPromiseModal() {
        this.setState( {
            visible3: true
        } );
    }
    openmaskCloseModal() {
        this.setState( {
            visible4: true
        } );
    }
    openNomaskModal() {
        this.setState( {
            visible5: true
        } );
    }
    openNoTransitionModal() {
        this.setState( {
            visible6: true
        } );
    }

    modalClick() {
        this.setState({
            text: new Date().getTime()
        });
    }

    render() {
        return (
            <div className="zzc-demo">
                <div className="zzc-demo-header">
                    <h1 className="zzc-demo-title">Modal 模态弹窗</h1>
                </div>
                <div className="zzc-demo-body">
                    <Button onClick={this.openDefaultModal.bind( this )}>默认按钮Modal</Button>
                    <Modal
                        title={this.state.title}
                        closable
                        visible={this.state.visible}
                        closeCallback={() => { this.setState( { visible: false } ); }}
                    >
                        <div className="modal-text" onClick={() => { this.modalClick(); }}>{this.state.text}</div>
                    </Modal>
                    <Button onClick={this.openCustomModal.bind( this )}>自定义按钮Modal</Button>
                    <Modal
                        title={this.state.title}
                        visible={this.state.visible2}
                        buttons={[
                            {
                                text: '取消',
                                onPress: () => {
                                    console.log( '点击取消' )
                                },
                                props: {
                                    type: 'special',
                                    style: { color: '#696E7C', border: 'none' }
                                }
                            },
                            {
                                text: '确认',
                                onPress: () => {
                                    console.log( '点击确认' )
                                },
                                props: {
                                    type: 'special',
                                    className: 'aaaa',
                                    style: { color: '#254FCB', border: 'none' }
                                }
            
                            }
                        ]}
                        closeCallback={() => { this.setState( { visible2: false } ); }}
                    >
                        <div className="modal-text">这是一个文案...</div>
                    </Modal>
                    <Button onClick={this.openPromiseModal.bind( this )}>异步关闭Modal</Button>
                    <Modal
                        title={this.state.title}
                        visible={this.state.visible3}
                        buttons={[
                            {
                                text: '确认',
                                onPress: () => new Promise( ( resolve ) => {
                                    Toast.info( 'onPress Promise', 1 );
                                    setTimeout( resolve, 1000 );
                                } ),
                                props: {
                                    type: 'special',
                                    style: { color: '#696E7C', border: 'none' }
                                }

                            }
                        ]}
                        closeCallback={() => { this.setState( { visible3: false } ); }}
                    >
                        <div className="modal-text">这是一个文案...</div>
                    </Modal>
                    <Button onClick={this.openmaskCloseModal.bind( this )}>点击mask关闭modal</Button>
                    <Modal
                        title={this.state.title}
                        visible={this.state.visible4}
                        maskClose
                        closable
                        closeCallback={() => { this.setState( { visible4: false } ); }}
                    >
                        <div className="modal-text">这是一个文案...</div>
                    </Modal>
                    <Button onClick={this.openNomaskModal.bind( this )}>无mask的modal</Button>
                    <Modal
                        title={this.state.title}
                        visible={this.state.visible5}
                        maskClose={true}
                        closable={true}
                        transparent={true}
                        closeCallback={() => { this.setState( { visible5: false } ); }}
                    >
                        <div className="modal-text">这是一个文案...</div>
                    </Modal>
                    <Button type="main" onClick={this.openNoTransitionModal.bind( this )}>不带动画的modal</Button>
                    <Modal
                        title={this.state.title}
                        visible={this.state.visible6}
                        maskClose={true}
                        closable={true}
                        transitionName=''
                        maskTransitionName=''
                        closeCallback={() => { this.setState( { visible6: false } ); }}
                    >
                        <div className="modal-text">这是一个文案...</div>
                    </Modal>
                </div>
            </div>

        );
    }
}