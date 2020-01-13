import React, { Component } from 'react';
import './index.scss';
import '../../../style/style.scss';
import { Icon, Toast, Button } from 'zzc-design-mobile';

let isClose = false;

export default class App extends Component {

    constructor( props ) {
        super( props );
    }

    maskInfo () {
        Toast.info( '两行toast文案两行toast文案最长不超过2行', 2, () => {
            console.log( '关闭' );
        }, null, false );
    }

    loadingInfo () {
        if ( isClose ) {
            isClose = false;
            Toast.hideToast();
        } else {
            isClose = true;
            Toast.info( '再次点击关闭toast', 0, () => { }, null, false );
        }
    }

    info () {
        Toast.info( '这是一个普通的提示', 2, () => {
            console.log( '关闭' );
        } );
    }

    success () {
        Toast.success( '成功提示', 2 );
    }

    error () {
        Toast.error( <p>失败提示</p>, 2 );
    }

    waring () {
        Toast.waring( '警示信息', 2 );
    }

    loading () {
        Toast.loading( '正在加载', 5 );
    }

    parentInfo () {
        Toast.info( '指定父级显示Toast', 2, () => {
            console.log( '关闭' );
        }, document.querySelector( '.box' ) );
    }

    render () {
        return (
            <div className="zzc-demo">
                <div className="zzc-demo-header">
                    <h1 className="zzc-demo-title">Toast 轻提示</h1>
                </div>
                <div className="zzc-demo-body">
                    <Button onClick={this.maskInfo}>no mask info</Button>
                    <Button onClick={this.info} type="main">info</Button>
                    <Button onClick={this.success} type="main"><Icon type='success_outline' style={{ color: '#fff', marginRight: '10px' }} size='xs' />success</Button>
                    <Button onClick={this.error} type="sub">error</Button>
                    <Button onClick={this.waring} type="sub">waring</Button>
                    <Button onClick={this.loading} type="main">loading</Button>
                    <Button onClick={this.loadingInfo} type="main">再次点击关闭toast</Button>
                    <Button onClick={this.parentInfo} type="main">指定父级显示Toast</Button>
                    <div className='box'>
                        <h1>123123</h1>
                    </div>
                </div>
            </div>

        );
    }
}