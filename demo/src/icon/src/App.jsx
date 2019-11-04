import React, { Component } from 'react';
import './index.scss';
import '../../../style/style.scss';
import { Icon, Toast } from 'zzc-design-mobile';
import iconConfig from '../../../../es/Icon/icon';

const keys = Object.keys( iconConfig );

const specialSvgName = [
    'arrows',
    'arrows_fill',
    'success',
    'success_fill',
    'success_outline',
    'error',
    'error_fill',
    'error_outline',
    'info_fill',
    'info_outline',
    'warning_fill',
    'warning_outline',
    'checkbox_no_select',
    'man',
    'women',
    'radio_no_select',
    'radio_select'
];

export default class App extends Component {

    copy ( node ) {
        const queIdInput = window.document.getElementById( 'queIdInput' );
        queIdInput.value = node;
        queIdInput.select();
        window.document.execCommand( 'Copy' );
        Toast.info( '复制成功', 2 );
    }

    iconClick ( name ) {
        this.copy( '<Icon type=\'' + name + '\' />' );
    }

    render () {
        return (
            <div className='zzc-demo'>
                <div className='zzc-demo-header'>
                    <h1 className='zzc-demo-title'>Icon 图标</h1>
                    <h2>zzc-design定义了一些常用的svg图标</h2>
                    <h2>点击图片可以复制使用</h2>
                </div>
                <textarea className='queIdInput' id='queIdInput' value='' />
                <div className='zzc-demo-body'>
                    <h5>方向性图标</h5>
                    <div className='icon-box-list'>
                        <div className='icon-box'
                            onClick={() => {
                                this.iconClick( 'arrows' );
                            }}
                        >
                            <Icon type='arrows' />
                            <p>arrows</p>
                        </div>
                        <div className='icon-box'
                            onClick={() => {
                                this.iconClick( 'arrows_fill' );
                            }}
                        >
                            <Icon type='arrows_fill' />
                            <p>arrows_fill</p>
                        </div>
                    </div>
                </div>
                <div className='zzc-demo-body'>
                    <h5>状态类图标</h5>
                    <div className='icon-box-list'>
                        <div className='icon-box'
                            onClick={() => {
                                this.iconClick( 'success' );
                            }}
                        >
                            <Icon type='success' />
                            <p>success</p>
                        </div>
                        <div className='icon-box'
                            onClick={() => {
                                this.iconClick( 'success_fill' );
                            }}
                        >
                            <Icon type='success_fill' />
                            <p>success_fill</p>
                        </div>
                        <div className='icon-box'
                            onClick={() => {
                                this.iconClick( 'success_outline' );
                            }}
                        >
                            <Icon type='success_outline' />
                            <p>success_outline</p>
                        </div>


                        <div className='icon-box'
                            onClick={() => {
                                this.iconClick( 'error' );
                            }}
                        >
                            <Icon type='error' />
                            <p>error</p>
                        </div>
                        <div className='icon-box'
                            onClick={() => {
                                this.iconClick( 'error_fill' );
                            }}
                        >
                            <Icon type='error_fill' />
                            <p>error_fill</p>
                        </div>
                        <div className='icon-box'
                            onClick={() => {
                                this.iconClick( 'error_outline' );
                            }}
                        >
                            <Icon type='error_outline' />
                            <p>error_outline</p>
                        </div>

                        <div className='icon-box'
                            onClick={() => {
                                this.iconClick( 'info_fill' );
                            }}
                        >
                            <Icon type='info_fill' />
                            <p>info_fill</p>
                        </div>
                        <div className='icon-box'
                            onClick={() => {
                                this.iconClick( 'info_outline' );
                            }}
                        >
                            <Icon type='info_outline' />
                            <p>info_outline</p>
                        </div>
                        <div className='icon-box' />
                        <div className='icon-box'
                            onClick={() => {
                                this.iconClick( 'warning_fill' );
                            }}
                        >
                            <Icon type='warning_fill' />
                            <p>warning_fill</p>
                        </div>
                        <div className='icon-box'
                            onClick={() => {
                                this.iconClick( 'warning_outline' );
                            }}
                        >
                            <Icon type='warning_outline' />
                            <p>warning_outline</p>
                        </div>
                        <div className='icon-box' />
                    </div>
                </div>
                <div className='zzc-demo-body'>
                    <h5>表单类图标</h5>
                    <div className='icon-box-list'>
                        <div className='icon-box'
                            onClick={() => {
                                this.iconClick( 'checkbox_no_select' );
                            }}
                        >
                            <Icon type='checkbox_no_select' />
                            <p>checkbox_no_select</p>
                        </div>
                        <div className='icon-box'
                            onClick={() => {
                                this.iconClick( 'man' );
                            }}
                        >
                            <Icon type='man' />
                            <p>man</p>
                        </div>
                        <div className='icon-box'
                            onClick={() => {
                                this.iconClick( 'women' );
                            }}
                        >
                            <Icon type='women' />
                            <p>women</p>
                        </div>
                        <div className='icon-box'
                            onClick={() => {
                                this.iconClick( 'radio_no_select' );
                            }}
                        >
                            <Icon type='radio_no_select' />
                            <p>radio_no_select</p>
                        </div>
                        <div className='icon-box'
                            onClick={() => {
                                this.iconClick( 'radio_select' );
                            }}
                        >
                            <Icon type='radio_select' />
                            <p>radio_select</p>
                        </div>
                    </div>
                </div>
                <div className='zzc-demo-body'>
                    <h5>通用图标集合</h5>
                    <div className='icon-box-list'>
                        {
                            keys.map( ( name, key ) => {
                                const iconName = name.split( 'zds-icon-' )[1];

                                if ( specialSvgName.indexOf( iconName ) != -1 ) {
                                    return null;
                                }

                                return (
                                    <div key={key}
                                        className='icon-box'
                                        onClick={() => {
                                            this.copy( '<Icon type=\'' + iconName + '\' />' );
                                        }}
                                    >
                                        <Icon type={iconName} />
                                        <p>{iconName}</p>
                                    </div>
                                )
                            } )
                        }
                    </div>
                </div>
                <div className='zzc-demo-body'>
                    <h5>不同大小的尺寸,lg(40px),md(36px),sm(24),xs(20),默认28</h5>
                    <Icon type='success_fill' size='lg' />
                    <Icon type='success_fill' size='md' />
                    <Icon type='success_fill' />
                    <Icon type='success_fill' size='sm' />
                    <Icon type='success_fill' size='xs' />
                </div>
                <div className='zzc-demo-body'>
                    <h5>可以自定义颜色</h5>
                    <Icon type='success_fill' style={{ color: 'red' }} />
                    <Icon type='success_fill' style={{ color: 'blue' }} />
                    <Icon type='success_fill' style={{ color: 'green' }} />
                </div>
            </div>

        );
    }
}