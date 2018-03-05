import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import '../../../style/style.scss';
import { Alert, Button, Toast } from 'zzcDesign';

let isClose = false;

export default class App extends Component {

    constructor( props ) {
        super( props );
    }

    // componentDidMount() {

    //     setTimeout( () => {
    //         Alert( {
    //             title: '标题',
    //             closable: true
    //         } );
    //         Alert( {
    //             title: '标题2',
    //             closable: true
    //         } );
    //     }, 100 );
    // }

    defaultBtn() {
        Alert( {
            title: '标题',
            closable: true
        } );
    }

    titleAlert() {
        Alert( {
            title: '标题',
            buttons: [
                {
                    text: '取消',
                    onPress: () => {
                        return false;
                    },
                    props: {
                        style: { color: '#254FCB' }
                    }
                }
            ],
            style: {
                color:'blue'
            },
            className: 'a233'
        } );
    }

    contentAlert() {
        Alert( {
            title: '标题',
            content: <p>asdasdasdasd</p>,
            buttons: [
                {
                    text: '取消',
                    onPress: () => {
                        console.log( '点击取消' )
                    },
                    props: {
                        style: { color: '#254FCB' }
                    }
                }
            ]
        } );
    }

    doubleBtnAlert() {
        Alert( {
            title: '标题',
            content: <p>asdasdasdasd</p>,
            buttons: [
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
            ]
        } );
    }

    markCloseAlert() {
        Alert( {
            title: '标题',
            content: <p>asdasdasdasd</p>,
            markClose: true,
            buttons: [
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
            ]
        } );
    }

    autoCloseAlert() {
        let closeEvent = Alert( {
            title: '标题',
            buttons: [
                {
                    text: '取消',
                    onPress: () => {
                        console.log( '点击取消' )
                    },
                    props: {
                        style: { color: '#254FCB' }
                    }
                }
            ]
        } );

        setTimeout( () => {
            closeEvent();
        }, 2000 );
    }

    promiseAlert() {
        Alert( {
            title: '发起一个请求',
            buttons: [
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
            ]
        } );
    }

    imgAlert() {
        Alert( {
            title: '标题',
            content: <div><img src="http://imgcdn50.zuzuche.com/world/base/329/214/556/f89e270b09ef8651fa4fea12867543d5.jpg!/fw/150/quality/100/format/png" /></div>,
            closeCallback: function () { console.log('Alert关闭了') },
            buttons: [
                {
                    text: '取消',
                    onPress: () => {
                        console.log( '点击取消' )
                    },
                    props: {
                        style: { color: '#254FCB' }
                    }
                }
            ]
        } );
    }

    render() {

        return (
            <div className="zzc-demo">
                <div className="zzc-demo-header">
                    <h1 className="zzc-demo-title">Alert 警告弹窗</h1>
                </div>
                <div className="zzc-demo-body">
                    <Button onClick={this.defaultBtn}>使用默认按钮</Button>
                    <Button onClick={this.titleAlert}>只有标题的Alert</Button>
                    <Button onClick={this.contentAlert}>带有内容的Alert</Button>
                    <Button onClick={this.doubleBtnAlert}>双按钮Alert</Button>
                    <Button onClick={this.markCloseAlert}>点击mark关闭Alert</Button>
                    <Button onClick={this.autoCloseAlert}>2秒后自动关闭Alert</Button>
                    <Button onClick={this.promiseAlert}>延迟关闭Alert</Button>
                    <Button onClick={this.imgAlert}>带图片的Alert</Button>
                </div>
            </div>

        );
    }
}