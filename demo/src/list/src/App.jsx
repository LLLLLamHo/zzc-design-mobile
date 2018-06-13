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
                    <h5>默认</h5>
                </div>
                <List>
                    <ListItem>
                        这是标题
                    </ListItem>
                    <ListItem space='left'>
                        这是标题
                    </ListItem>
                </List>
            </div>

        );
    }
}
