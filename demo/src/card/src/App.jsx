import React, {PureComponent} from 'react';
import {Card, Button, Icon, Toast} from 'zzc-design-mobile';
import './index.scss';
import '../../../style/style.scss';

export default class App extends PureComponent {
    constructor( props ) {
        super( props );
        this.state = {
            title: '卡片标题'
        };
    }
    render() {
        return (
            <div className='zzc-demo'>
                <div className='zzc-demo-header'>
                    <h1 className='zzc-demo-title'>Card 卡片</h1>
                    <h2>卡片布局，主要分为占满整形和非占满整形的布局方式，分为3个部分，Header、Body、Fotter三个主要组成部分。</h2>
                </div>
                <div className='zzc-demo-body full'>
                    <Card>
                        <Card.Header title={this.state.title} extra='this is extra' />
                        <Card.Body>
                            <div className='card-box1'>
                                <p>文本内容</p>
                            </div>
                        </Card.Body>
                        <Card.Body>
                            <div className='card-box1'>
                                <p>文本内容</p>
                            </div>
                        </Card.Body>
                        <Card.Footer>
                            <Button noBorder full>按钮</Button>
                        </Card.Footer>
                    </Card>
                </div>
                <div className='zzc-demo-body full'>
                    <Card>
                        <Card.Header
                            className='cursor-car-head'
                            title='点击头部'
                            extra={<Icon size='sm' type='waring' />}
                            titleOnClick={() => {
                                Toast.info( '点击title回调事件', 1 );
                            }}
                            extraOnClick={() => {
                                Toast.info( '点击extra回调事件', 1 );
                            }}
                        />
                        <Card.Body borderDirection='left'>
                            <div className='card-box1'>
                                <p>下划线左留空</p>
                            </div>
                        </Card.Body>
                        <Card.Body borderDirection='right'>
                            <div className='card-box1'>
                                <p>下划线右留空</p>
                            </div>
                        </Card.Body>
                        <Card.Body>
                            <div className='card-box1'>
                                <p>文本内容............</p>
                            </div>
                        </Card.Body>
                        <Card.Footer>
                            <div className='btn-group'>
                                <Button noRadius noBorder inline>按钮1</Button>
                                <Button noRadius noBorder inline type='main'>按钮2</Button>
                            </div>
                        </Card.Footer>
                    </Card>
                </div>
                <div className='zzc-demo-body full'>
                    <Card full>
                        <Card.Header title='卡片标题' extra='this is extra' />
                        <Card.Body borderDirection='left'>
                            <div className='card-box2'>
                                <p>文本内容</p>
                                <Icon size='sm' type='success' />
                            </div>
                        </Card.Body>
                        <Card.Body>
                            <div className='card-box2'>
                                <p>文本内容</p>
                                <Icon size='sm' type='success' />
                            </div>
                        </Card.Body>
                    </Card>
                </div>
                <div className='zzc-demo-body full'>
                    <Card full>
                        <Card.Header
                            className='cursor-car-head'
                            title='点击头部'
                            extra={<Icon size='sm' type='waring' />}
                            titleOnClick={() => {
                                Toast.info( '点击title回调事件', 1 );
                            }}
                            extraOnClick={() => {
                                Toast.info( '点击extra回调事件', 1 );
                            }}
                        />
                        <Card.Body borderDirection='left'>
                            <div className='card-box2'>
                                <p>左边留空</p>
                                <Icon size='sm' type='success' />
                            </div>
                        </Card.Body>
                        <Card.Body borderDirection='right'>
                            <div className='card-box2'>
                                <p>右边留空</p>
                                <Icon size='sm' type='success' />
                            </div>
                        </Card.Body>
                        <Card.Body>
                            <div className='card-box2'>
                                <p>两边留空</p>
                                <Icon size='sm' type='success' />
                            </div>
                        </Card.Body>
                        <Card.Body>
                            <div className='card-box2'>
                                <p>文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容</p>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        );
    }
}