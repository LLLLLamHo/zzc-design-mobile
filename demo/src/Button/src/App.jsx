import React, { PureComponent } from 'react';
import './index.scss';
import '../../../style/style.scss';
import { Button, Icon } from 'zzc-design-mobile';

const { ButtonGroup } = Button;

export default class App extends PureComponent {
    state = {
        title: 'Button 按钮'
    }
    render () {
        return (
            <div className='zzc-demo'>
                <div className='zzc-demo-header'>
                    <h1 className='zzc-demo-title'>{this.state.title}</h1>
                    <h2>租租车主流程按钮样式</h2>
                </div>
                <div className='zzc-demo-body'>
                    <h5>全局按钮基础样式</h5>
                    <Button>默认按钮</Button>
                    <Button><Icon style={{ marginRight: '5px', width: '18px', height: '18px' }} type='success_outline' />默认按钮</Button>
                    <Button inactive>未激活按钮</Button>
                    <Button disabled>禁用按钮</Button>
                    <h5>全局次级按钮</h5>
                    <Button type='sub'>默认按钮</Button>
                    <Button type='sub' disabled>禁用按钮</Button>
                    <h5>特殊全局按钮</h5>
                    <Button type='special'>默认按钮</Button>
                    <h5>自定义按钮</h5>
                    <Button style={{ background: 'red' }}>自定义style</Button>
                    <Button className='blue'>自定义class</Button>
                    <Button activeStyle={{ background: 'red', color: 'blue' }}>自定义激活style</Button>
                </div>
                <div className='zzc-demo-body'>
                    <h5>行内按钮(默认大小)</h5>
                    <Button inline>确认</Button>
                    <Button inline type='sub'>确认</Button>
                    <Button inline type='special'>确认</Button>
                    <Button inline inactive>确认</Button>
                    <Button inline disabled>确认</Button>
                    <h5>行内按钮(middle)</h5>
                    <Button inline size='middle'>确认</Button>
                    <Button inline size='middle' type='sub'>确认</Button>
                    <Button inline size='middle' type='special'>确认</Button>
                    <Button inline size='middle' inactive>确认</Button>
                    <Button inline size='middle' disabled>确认</Button>
                    <h5>行内按钮(small)</h5>
                    <Button inline size='small'>确认</Button>
                    <Button inline size='small' type='sub'>确认</Button>
                    <Button inline size='small' type='special'>确认</Button>
                    <Button inline size='small' inactive>确认</Button>
                    <Button inline size='small' disabled>确认</Button>
                </div>
                <div className='zzc-demo-body'>
                    <h5>按钮块</h5>
                    <ButtonGroup>
                        <Button>确认</Button>
                        <Button type='sub'>确认</Button>
                    </ButtonGroup>
                    <ButtonGroup>
                        <Button type='special'>重置</Button>
                        <Button style={{ flex: 2 }}>确认</Button>
                    </ButtonGroup>
                    <ButtonGroup>
                        <Button inline size='small'>确认</Button>
                        <Button inline size='small' type='sub'>确认</Button>
                        <Button inline size='small' type='special'>确认</Button>
                    </ButtonGroup>
                    <ButtonGroup direction='left'>
                        <Button inline size='small'>确认</Button>
                        <Button inline size='small' type='sub'>确认</Button>
                        <Button inline size='small' type='special'>确认</Button>
                    </ButtonGroup>
                    <ButtonGroup direction='right'>
                        <Button inline size='small'>确认</Button>
                        <Button inline size='small' type='sub'>确认</Button>
                        <Button inline size='small' type='special'>确认</Button>
                    </ButtonGroup>
                </div>
            </div>

        );
    }
}