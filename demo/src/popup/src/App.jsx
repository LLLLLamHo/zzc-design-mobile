import React, {Component} from 'react';
import {Popup, Button, Card, Icon} from 'zzc-design-mobile';
import './index.scss';
import '../../../style/style.scss';

class Content extends Component {
    setContent() {
        const arr = [];
        for (let i = 0; i < 2000; i++ ) {
            arr.push(<p key={`${i}`}>文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容</p>);
        }
        return arr;
    }
    render () {
        return [
            <p>文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容</p>,
            <p>文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容</p>,
            <p>文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容</p>,
            <p>文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容</p>,
            <p>文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容</p>
        ];
    }
}

export default class App extends Component {
    constructor( props ) {
        super( props );
        this.state = {
            text: new Date().getTime(),
            visible: false,
            visible2: false,
            visible3: false,
            visible4: false,
            visible5: false,
            visible6: false,
            visible7: false,
            countryList: ['美国', '英国', '法国', '德国', '巴西', '中国', '韩国', '朝鲜', '日本', '俄罗斯', '新西兰', '澳大利亚', '印度', '泰国', '缅甸', '老挝']
        };
    }

    openButtomPopup() {
        this.setState( {
            visible: true
        } );
    }

    openTopPopup() {
        this.setState( {
            visible2: true
        } );
    }

    openLeftPopup() {
        this.setState( {
            visible3: true
        } );
    }
    openRightPopup() {
        this.setState( {
            visible4: true
        } );
    }
    openNoMaskClosePopup() {
        this.setState( {
            visible5: true
        } );
    }
    openNoMaskPopup() {
        this.setState( {
            visible6: true
        } );
    }

    clickEvent() {
        this.setState({
            text: new Date().getTime()
        });
    }

    renderCallback() {
        console.log('showed');
    }

    openPreRenderPopup() {
        this.setState( {
            visible7: true
        } );
    }

    render() {
        return (
            <div className='zzc-demo'>
                <div className='zzc-demo-header'>
                    <h1 className='zzc-demo-title'>Popup 弹出菜单</h1>
                    <h2>提供4周弹出的菜单，通过自行配置popup里面的内容实现从4周弹出内容。</h2>
                    <h2>不限高不限宽，只提供4周弹出的动画和对应的回调。</h2>
                </div>
                <div className='zzc-demo-body'>
                    <Button onClick={() => {this.openButtomPopup();}}>从下弹出</Button>
                    <Popup
                        renderCallback={this.renderCallback}
                        maskClose
                        visible={this.state.visible}
                        onClose={() => {
                            this.setState( {
                                visible: false
                            } );
                        }}
                    >
                        <Card full>
                            <Card.Header
                                className='cursor-car-head'
                            >
                                <div
                                    className='cursor-car-close'
                                    onClick={
                                        () => {
                                            this.setState( {
                                                visible: false
                                            } );
                                        }
                                    }
                                >
                                    关闭
                                </div>
                            </Card.Header>
                            <div className='card1-contnt'>
                                <Card.Body borderDirection='left'>
                                    <div className='card-box2' onClick={this.clickEvent.bind(this)}>
                                        <p>{this.state.text}</p>
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
                                        <p>文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容</p>
                                        <p>文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容</p>
                                        <p>文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容</p>
                                        <p>文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容</p>
                                        <p>文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容</p>
                                        <p>文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容</p>
                                        <p>文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容</p>
                                        <p>文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容</p>
                                        <p>文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容</p>
                                        <p>文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容</p>
                                        <p>文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容</p>
                                        <p>文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容</p>
                                        <p>文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容</p>
                                        <p>文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容</p>
                                        <p>文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容</p>
                                        <p>文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容</p>
                                        <p>文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容</p>
                                        <p>文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容</p>
                                        <p>文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容</p>
                                        <p>文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容</p>
                                        <p>文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容</p>
                                    </div>
                                </Card.Body>
                            </div>
                        </Card>
                    </Popup>

                </div>
                <div className='zzc-demo-body'>
                    <Button onClick={() => {this.openTopPopup();}}>从上弹出</Button>
                    <Popup
                        direction='top'
                        maskClose={true}
                        visible={this.state.visible2}
                        onClose={() => {
                            this.setState( {
                                visible2: false
                            } );
                        }}
                    >
                        <Card full>
                            <Card.Header
                                className='cursor-car-head'
                            >
                                <div
                                    className='cursor-car-close'
                                    onClick={
                                        () => {
                                            this.setState( {
                                                visible2: false
                                            } );
                                        }
                                    }
                                >
                                    关闭
                                </div>
                            </Card.Header>
                            <div className='card1-contnt'>
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
                                        <p>文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容</p>
                                        <p>文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容</p>
                                        <p>文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容</p>
                                        <p>文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容</p>
                                        <p>文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容</p>
                                        <p>文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容</p>
                                        <p>文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容</p>
                                        <p>文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容</p>
                                        <p>文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容</p>
                                        <p>文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容</p>
                                        <p>文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容</p>
                                        <p>文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容</p>
                                        <p>文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容</p>
                                        <p>文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容</p>
                                        <p>文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容</p>
                                        <p>文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容</p>
                                        <p>文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容</p>
                                        <p>文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容</p>
                                        <p>文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容</p>
                                        <p>文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容</p>
                                        <p>文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容</p>
                                    </div>
                                </Card.Body>
                            </div>
                        </Card>
                    </Popup>
                </div>
                <div className='zzc-demo-body'>
                    <Button onClick={() => {this.openLeftPopup();}}>从左弹出</Button>
                    <Popup
                        direction='left'
                        maskClose={true}
                        visible={this.state.visible3}
                        onClose={() => {
                            this.setState( {
                                visible3: false
                            } );
                        }}
                    >
                        <Card full className='card2'>
                            <Card.Header
                                className='cursor-car-head'
                            >
                                <div
                                    className='cursor-car-close'
                                    onClick={
                                        () => {
                                            this.setState( {
                                                visible3: false
                                            } );
                                        }
                                    }
                                >
                                    关闭
                                </div>
                            </Card.Header>
                            <div className='card2-contnt'>
                                {
                                    this.state.countryList.map( ( item, key ) => {
                                        return (
                                            <Card.Body borderDirection='left' key={`left-${key}`}>
                                                <div className='card-box2'>
                                                    <p>{item}</p>
                                                    <Icon size='sm' type='success' />
                                                </div>
                                            </Card.Body>
                                        );
                                    } )
                                }
                            </div>
                        </Card>
                    </Popup>
                </div>
                <div className='zzc-demo-body'>
                    <Button onClick={() => {this.openRightPopup();}}>从右弹出</Button>
                    <Popup
                        direction='right'
                        maskClose={true}
                        visible={this.state.visible4}
                        onClose={() => {
                            this.setState( {
                                visible4: false
                            } );
                        }}
                    >
                        <Card full className='card2'>
                            <Card.Header
                                className='cursor-car-head'
                            >
                                <div
                                    className='cursor-car-close'
                                    onClick={
                                        () => {
                                            this.setState( {
                                                visible4: false
                                            } );
                                        }
                                    }
                                >
                                    关闭
                                </div>
                            </Card.Header>
                            <div className='card2-contnt'>
                                {
                                    this.state.countryList.map( ( item, key ) => {
                                        return (
                                            <Card.Body borderDirection='left' key={`right-${key}`}>
                                                <div className='card-box2'>
                                                    <p>{item}</p>
                                                    <Icon size='sm' type='success' />
                                                </div>
                                            </Card.Body>
                                        );
                                    } )
                                }
                            </div>
                        </Card>
                    </Popup>
                </div>
                <div className='zzc-demo-body'>
                    <Button onClick={() => {this.openNoMaskClosePopup();}}>禁止点击mask关闭popup</Button>
                    <Popup
                        visible={this.state.visible5}
                        onClose={() => {
                            this.setState( {
                                visible5: false
                            } );
                        }}
                    >
                        <Card full>
                            <Card.Header
                                className='cursor-car-head'
                            >
                                <div
                                    className='cursor-car-close'
                                    onClick={
                                        () => {
                                            this.setState( {
                                                visible5: false
                                            } );
                                        }
                                    }
                                >
                                    关闭
                                </div>
                            </Card.Header>
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
                        </Card>
                    </Popup>

                </div>
                <div className='zzc-demo-body'>
                    <Button onClick={() => {this.openNoMaskPopup();}}>不创建mask</Button>
                    <Popup
                        transparent={true}
                        visible={this.state.visible6}
                        onClose={() => {
                            this.setState( {
                                visible6: false
                            } );
                        }}
                    >
                        <Card full>
                            <Card.Header
                                className='cursor-car-head'
                            >
                                <div
                                    className='cursor-car-close'
                                    onClick={
                                        () => {
                                            this.setState( {
                                                visible6: false
                                            } );
                                        }
                                    }
                                >
                                    关闭
                                </div>
                            </Card.Header>
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
                        </Card>
                    </Popup>
                </div>

                <div className='zzc-demo-body'>
                    <Button onClick={() => {this.openPreRenderPopup();}}>预渲染popup</Button>
                    <Popup
                        maskClose
                        preRender
                        visible={this.state.visible7}
                        onClose={() => {
                            this.setState( {
                                visible7: false
                            } );
                        }}
                    >
                        <Card full>
                            <Card.Header
                                className='cursor-car-head'
                            >
                                <div
                                    className='cursor-car-close'
                                    onClick={
                                        () => {
                                            this.setState( {
                                                visible7: false
                                            } );
                                        }
                                    }
                                >
                                    关闭
                                </div>
                            </Card.Header>
                            <Card.Body borderDirection='left'>
                                <div className='card-box2'>
                                    <p>文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容</p>
                                    <p>文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容</p>
                                    <p>文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容</p>
                                    <Content/>
                                </div>
                            </Card.Body>
                        </Card>
                    </Popup>
                </div>
            </div>
        );
    }
}