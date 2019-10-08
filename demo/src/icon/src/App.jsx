import React, { Component } from 'react';
import './index.scss';
import '../../../style/style.scss';
import { Icon } from 'zzc-design-mobile';

export default class App extends Component {

    constructor( props ) {
        super( props );
    }

    render() {

        return (
            <div className="zzc-demo">
                <div className="zzc-demo-header">
                    <h1 className="zzc-demo-title">Icon 图标</h1>
                    <h2>zzc-design定义了一些常用的svg图标</h2>
                </div>
                <div className="zzc-demo-body">
                    <Icon fill="red" width="300px" height="300px" type="success" />
                    <Icon type="error" />
                    <Icon type="waring" />
                    <Icon type="arrow-right" />
                    <Icon type="confirm" />
                    <Icon type="info" />
                    <Icon type="right" />
                </div>
                <div className="zzc-demo-body">
                    <h5>不同大小的图标</h5>
                    <Icon size="lg" type="success" />
                    <Icon type="success" />
                    <Icon size="sm" type="success" />
                    <Icon size="xs" type="success" />
                </div>
                <div className="zzc-demo-body">
                    <h5>不同颜色的图标</h5>
                    <Icon style={{ fill: 'green' }} type="success" />
                    <Icon style={{ fill: 'red' }} type="error" />
                    <Icon style={{ fill: 'blue' }} type="waring" />
                </div>
            </div>

        );
    }
}