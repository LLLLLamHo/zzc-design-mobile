import React, { Component } from 'react';
import './index.scss';
import '../../../style/style.scss';
import { Icon, Toast } from 'zzc-design-mobile';
import iconConfig from '../../../../es/Icon/icon';

const keys = Object.keys( iconConfig );

export default class App extends Component {

    copy ( node ) {
        const queIdInput = window.document.getElementById( 'queIdInput' );
        queIdInput.value = node;
        queIdInput.select();
        window.document.execCommand( 'Copy' );
        Toast.info( '复制成功', 2 );
    }

    render () {
        return (
            <div className="zzc-demo">
                <div className="zzc-demo-header">
                    <h1 className="zzc-demo-title">Icon 图标</h1>
                    <h2>zzc-design定义了一些常用的svg图标</h2>
                    <h2>点击图片可以复制使用</h2>
                </div>
                <div className="zzc-demo-body">
                    <h5>所有图标集合</h5>
                    <textarea className='queIdInput' id='queIdInput' value='' />
                    <div className='icon-box-list'>
                        {
                            keys.map( ( name, key ) => {
                                const iconName = name.split( 'zds-icon-' )[1];
                                return (
                                    <div key={key} className='icon-box' onClick={() => {
                                        this.copy( '<Icon type=\"' + iconName + '\" />' );
                                    }}>
                                        <Icon type={iconName} />
                                        <p>{iconName}</p>
                                    </div>
                                )
                            } )
                        }
                    </div>
                </div>
                <div className="zzc-demo-body">
                    <h5>不同大小的尺寸,lg(40px),md(36px),sm(24),xs(20),默认28</h5>
                    <Icon type='success_fill' size='lg' />
                    <Icon type='success_fill' size='md' />
                    <Icon type='success_fill' />
                    <Icon type='success_fill' size='sm' />
                    <Icon type='success_fill' size='xs' />
                </div>
                <div className="zzc-demo-body">
                    <h5>可以自定义颜色</h5>
                    <Icon type='success_fill' style={{color: 'red'}}/>
                    <Icon type='success_fill' style={{color: 'blue'}}/>
                    <Icon type='success_fill' style={{color: 'green'}}/>
                </div>
            </div>

        );
    }
}