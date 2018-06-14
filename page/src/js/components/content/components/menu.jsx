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
                    <Menu.Item key='index'><p className='zzc-demo-menu-title'>zzc-design-mobile</p></Menu.Item>
                    {this.createMenu()}
                </Menu>
            </div>
        );
    }
}