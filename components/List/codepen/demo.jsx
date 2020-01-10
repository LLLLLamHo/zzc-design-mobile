const { Component } = React;
const { List, Icon, Toast } = zds;
const { ListItem } = List;

class App extends Component {
    render () {
        return (
            <div className='zzc-demo'>
                <div className='zzc-demo-header'>
                    <h1 className='zzc-demo-title'>List 列表</h1>
                    <h2>列表布局，主要分为List组件和List.Item组件配合使用</h2>
                </div>
                <div className='zzc-demo-body full'>
                    <h5>基本使用</h5>
                    <List>
                        <ListItem
                            title={<p>只有标题</p>}
                        />
                        <ListItem
                            title={<p>标题加上图标</p>}
                            extra={<Icon type='arrows' style={{ width: '18px', height: '18px' }} />}
                        />
                        <ListItem
                            title={<p>超级长的图标超级长的图标超级长的图标超级长的图标</p>}
                            extra={<Icon type='arrows' style={{ width: '18px', height: '18px' }} />}
                        >
                            <div>内容项描述内容项描述内容项描述内容项描述内容项描述内容项描述内容项描述内容项描述内容项描述内容项描述内容项描述内容项描述</div>
                        </ListItem>
                        <ListItem
                            title={<p>图标点击</p>}
                            extra={<Icon type='arrows' style={{ width: '18px', height: '18px' }} />}
                            extraClick={() => {
                                Toast.info( '点击图标', 2 );
                            }}
                        />
                        <ListItem
                            title={<p>带有内容的Item</p>}
                            extra={<Icon type='arrows' style={{ width: '18px', height: '18px' }} />}
                            extraClick={() => {
                                Toast.info( '点击图标', 2 );
                            }}
                        >
                            <div>内容项描述内容项描述内容项描述内容项描述</div>
                        </ListItem>
                    </List>
                </div>
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById( 'root' )
)