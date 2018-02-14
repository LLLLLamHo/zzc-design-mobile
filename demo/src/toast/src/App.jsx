import React, { Component } from 'react';
import './index.scss';
import '../../../style/style.scss';
import { Toast } from 'lib';

export default class App extends Component {

    constructor( props ) {
        super( props );
    }

    markInfo() {
        let toast = Toast.info( '这是一个有mark的info', 2, () => { 
            console.log( '关闭' );
        },true);
    }

    info() {
        let toast = Toast.info( '没有mark的info', 2, () => { 
            console.log( '关闭' );
        },false);
    }

    success() {
        let toast = Toast.success( '提交成功！', 2 );
    }

    error() {
        let toast = Toast.error( '信息错误', 2);
    }

    waring() {
        let toast = Toast.waring( '警告，数据完不整', 2 );
    }

    loading() {
        let toast = Toast.loading( '努力加载中...', 2 );
    }

    render() {

        return (
            <div className="zzc-demo">
                <div className="zzc-demo-header">
                    <h1 className="zzc-demo-title">Toast 轻提示</h1>
                </div>
                <div className="zzc-demo-body">
                    <div id="noMarkInfo" className="btn" onClick={this.markInfo}>带有mark的info</div>
                    <div className="btn" onClick={this.info}>不带有mark的info</div>
                    <div className="btn" onClick={this.success}>success</div>
                    <div className="btn" onClick={this.error}>error</div>
                    <div className="btn" onClick={this.waring}>waring</div>
                    <div className="btn" onClick={this.loading}>loading</div>
                </div>
            </div>

        );
    }
}