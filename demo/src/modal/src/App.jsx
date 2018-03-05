import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import '../../../style/style.scss';
import { Modal, Button, Toast } from 'zzcDesign';

let isClose = false;

export default class App extends Component {

    constructor( props ) {
        super( props );
        this.state = {
            visible: false,
            visible2: false,
            title: '带标题区的 Modal'
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
                        closable={true}
                        visible={this.state.visible}
                        closeCallback={() => { this.setState( { visible: false } ); }}
                    >
                        <div className="modal-text">这是一个文案...</div>
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
                                    style: { color: '#254FCB' }
                                }
                            },
                            {
                                text: '确认',
                                onPress: () => {
                                    console.log( '点击确认' )
                                },
                                props: {
                                    type: 'main',
                                    className: 'aaaa'
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
                        markClose={true}
                        buttons={[
                            {
                                text: '确认',
                                onPress: () => new Promise( ( resolve ) => {
                                    Toast.info( 'onPress Promise', 1 );
                                    setTimeout( resolve, 1000 );
                                } ),
                                props: {
                                    type: 'main',
                                    className: 'aaaa'
                                }

                            }
                        ]}
                        closeCallback={() => { this.setState( { visible3: false } ); }}
                    >
                        <div className="modal-text">这是一个文案...</div>
                    </Modal>
                </div>
            </div>

        );
    }
}