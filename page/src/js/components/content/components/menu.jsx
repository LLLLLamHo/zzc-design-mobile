import React, {
    Component
} from 'react';
import { Menu } from 'antd';

export default class ZZCMenu extends Component {
    constructor( props ) {
        super( props );
        this.state = {
            index: props.index
        };
    }
    createMenu() {
        const { data } = this.props;
        const component = [];
        for ( const key in data ) {
            component.push( <Menu.ItemGroup title={key} key={`${new Date().getTime()}-${key}`}>
                {
                    data[key].map( item => <Menu.Item key={item.key}><p className='zzc-demo-menu-title'>{item.title}<span className='zzc-demo-menu-subtitle'>{item.subTitle}</span></p></Menu.Item> )
                }
            </Menu.ItemGroup> );
        }
        return component;
    }

    render () {
        const { changeTab } = this.props;
        const { index } = this.state;
        return (
            <div className='zzc-demo-menu'>
                <Menu
                    onClick={changeTab}
                    defaultSelectedKeys={[index]}
                    mode='inline'
                    inlineCollapsed={false}
                    forceSubMenuRender
                >
                    <Menu.Item key='index'><p className='zzc-demo-menu-title'>Zzc Design Mobile of React</p></Menu.Item>
                    <Menu.Item key='change'><p className='zzc-demo-menu-title'>更新日志</p></Menu.Item>
                    <Menu.Item key='pull'><p className='zzc-demo-menu-title'>贡献指南</p></Menu.Item>
                    {this.createMenu()}
                </Menu>
            </div>
        );
    }
}