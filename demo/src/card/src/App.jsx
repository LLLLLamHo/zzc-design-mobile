import React, { Component } from 'react';
import './index.scss';
import '../../../style/style.scss';
import { Card, Button, Icon } from 'zzcDesign';

let isClose = false;

export default class App extends Component {

    constructor( props ) {
        super( props );
    }

    render() {

        return (
            <div className="zzc-demo">
                <div className="zzc-demo-header">
                    <h1 className="zzc-demo-title">Card 卡片</h1>
                    <h2>卡片布局，主要分为占满整形和非占满整形的布局方式，分为3个部分，Header、Body、Fotter三个主要组成部分。</h2>
                </div>
                <div className="zzc-demo-body full">
                    <Card>
                        <Card.Header title="卡片标题" extra="this is extra" />
                        <Card.Body>
                            <div className="card-box1">
                                <p>文本内容</p>
                            </div>
                        </Card.Body>
                        <Card.Body>
                            <div className="card-box1">
                                <p>文本内容</p>
                            </div>
                        </Card.Body>
                        <Card.Footer>
                            <Button noBorder full>按钮</Button>
                        </Card.Footer>
                    </Card>
                </div>
                <div className="zzc-demo-body full">
                    <Card full>
                        <Card.Header title="卡片标题" extra="this is extra" />
                        <Card.Body borderDirection='left'>
                            <div className="card-box2">
                                <p>文本内容</p>
                                <Icon size="sm" type="success"/>
                            </div>
                        </Card.Body>
                        <Card.Body>
                            <div className="card-box2">
                                <p>文本内容</p>
                                <Icon size="sm" type="success"/>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        );
    }
}