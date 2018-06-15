import React, { PureComponent } from 'react';
import { List, ListItem } from 'zzc-design-mobile';
import './index.scss';
import '../../../style/style.scss';

export default class App extends PureComponent {
    state = {
        title: 'List 列表'
    }

    render() {
        return (
            <div className='zzc-demo'>
                <div className='zzc-demo-header'>
                    <h1 className='zzc-demo-title'>{this.state.title}</h1>
                    <h2>列表展示</h2>
                </div>
                <div className='zzc-demo-body'>
                    <h5>基础列表</h5>
                    <List preTips='这是前置描述，用于阐述下方内容，也可作为辅助标题使用'
                        endTips='这是后置描述，一般用来作为上方内容的补充说明'
                    >
                        <ListItem label='这是五个字' extra='这是箭头'>
                            这是内容
                        </ListItem>
                        <ListItem space='left'>
                            这是内容
                        </ListItem>
                        <ListItem space='right'>
                            这是内容
                        </ListItem>
                    </List>
                </div>
            </div>

        );
    }
}
