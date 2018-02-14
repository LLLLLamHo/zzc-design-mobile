import React, { Component } from 'react';
import './index.scss';
import '../../../style/style.scss';
import { Toast } from 'zzcDesign';

let isClose = false;

export default class App extends Component {

    constructor( props ) {
        super( props );
    }

    markInfo() {
        Toast.info( '这是一个无mark的info', 2, () => {
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
        Toast.error( '信息错误', 2 );
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
                    <div id="noMarkInfo" className="btn" onClick={this.markInfo}>no mark info</div>
                    <div className="btn" onClick={this.info}>info</div>
                    <div className="btn" onClick={this.success}>success</div>
                    <div className="btn" onClick={this.error}>error</div>
                    <div className="btn" onClick={this.waring}>waring</div>
                    <div className="btn" onClick={this.loading}>loading</div>
                    <div className="btn" onClick={this.loadingInfo}>再次点击关闭toast</div>
                </div>
            </div>

        );
    }
}