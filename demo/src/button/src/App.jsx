import React, { Component } from 'react';
import './index.scss';
import '../../../style/style.scss';
import { Button, Icon } from 'zzcDesign';

let isClose = false;

export default class App extends Component {

    constructor( props ) {
        super( props );
    }

    render() {

        return (
            <div className="zzc-demo">
                <div className="zzc-demo-header">
                    <h1 className="zzc-demo-title">Button 按钮</h1>
                    <h2>租租车主流程主要分为两个颜色按钮，一个是main，蓝色，一个是sub，红色，附带2个颜色的高亮和加深的颜色。</h2>
                </div>
                <div className="zzc-demo-body">
                    <h5>颜色、类型</h5>
                    <Button><div className="icon-button"><Icon style={{fill:'green'}} size="sm" className="aaa" type="success"/>default</div></Button>
                    <Button type="main">main</Button>
                    <Button type="main-lh">main-lh</Button>
                    <Button type="main-dk">main-dk</Button>
                    <Button type="sub">sub</Button>
                    <Button type="sub-lh">sub-lh</Button>
                    <Button type="sub-dk">sub-dk</Button>
                    <Button ghost type="main">空心main</Button>
                    <Button ghost type="sub">空心sub</Button>
                    <Button disabled>disabled</Button>
                </div>
                <div className="zzc-demo-body">
                    <h5>尺寸、大小</h5>
                    <Button type="main">default main</Button>
                    <Button size='lg' type="main">lg main</Button>
                    <Button size='sm' type="main">sm main</Button>
                    <Button size='xs' type="main">xs main</Button>
                </div>
                <div className="zzc-demo-body">
                    <h5>inline</h5>
                    <Button inline size='sm'>inline1</Button>
                    <Button inline size='sm' type="main">inline2</Button>
                    <Button inline size='sm' type="sub">inline3</Button>
                    <Button ghost inline size='xs' type="main">inline2</Button>
                    <Button ghost inline size='xs' type="sub">inline3</Button>
                </div>
                <div className="zzc-demo-body full">
                    <h5>占满</h5>
                    <Button full type="main">full main</Button>
                </div>
                <div className="zzc-demo-body">
                    <h5>自定义样式</h5>
                    <Button activeStyle={{ background: 'blue' }} style={{ background: 'green', color: '#fff' }}>自定义样式</Button>
                    <Button activeClassName='custom'>自定义active</Button>
                    <Button activeStyle={false}>禁止active</Button>
                </div>
            </div>

        );
    }
}