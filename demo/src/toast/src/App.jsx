import React, { Component } from 'react';
import './index.scss';
import '../../../style/style.scss';
import { Toast, Button } from 'zzcDesign';

let isClose = false;

export default class App extends Component {

    constructor( props ) {
        super( props );
    }

    maskInfo() {
        Toast.info( '这是一个无mask的info', 2, () => {
            console.log( '关闭' );
        }, false );
    }

    loadingInfo() {
        if ( isClose ) {
            isClose = false;
            Toast.hideToast();
        } else { 
            isClose = true;
            Toast.info( '再次点击关闭toast', 0, () => {},false );
        }
    }

    info() {
        Toast.info( '这是一个普通的提示', 2, () => {
            console.log( '关闭' );
        } );
    }

    success() {
        Toast.success( '提交成功！', 2 );
    }

    error() {
        Toast.error( '信息错误', 2);
    }

    waring() {
        Toast.waring( '警告，数据完不整', 2 );
    }

    loading() {
        Toast.loading( '努力加载中...', 2 );
    }

    render() {

        return (
            <div className="zzc-demo">
                <div className="zzc-demo-header">
                    <h1 className="zzc-demo-title">Toast 轻提示</h1>
                </div>
                <div className="zzc-demo-body">
                    <Button onClick={this.maskInfo}>no mask info</Button>
                    <Button onClick={this.info} type="main">info</Button>
                    <Button onClick={this.success} type="main">success</Button>
                    <Button onClick={this.error} type="sub">error</Button>
                    <Button onClick={this.waring} type="sub">waring</Button>
                    <Button onClick={this.loading} type="main">loading</Button>
                    <Button onClick={this.loadingInfo} type="main">再次点击关闭toast</Button>
                </div>
            </div>

        );
    }
}