const { Component } = React;
const { Card2, Icon, Toast } = zds;

class App extends Component {

    render () {
        return (
            <div className='zzc-demo'>
                <div className='zzc-demo-header'>
                    <h1 className='zzc-demo-title'>Card2 卡片</h1>
                    <h2>新的卡片ui布局规范</h2>
                </div>
                <div className='zzc-demo-body full'>
                    <Card2>
                        <Card2.Header
                            title={<p>图标点击</p>}
                            extra={<Icon type='arrows' style={{ width: '18px', height: '18px' }} />}
                            extraClick={() => {
                                Toast.info( '点击图标', 2 );
                            }}
                        />
                    </Card2>
                </div>
                <div className='zzc-demo-body full'>
                    <Card2>
                        <Card2.Header
                            title={<p>带有内容的Item</p>}
                            extra={<Icon type='arrows' style={{ width: '18px', height: '18px' }} />}
                            extraClick={() => {
                                Toast.info( '点击图标', 2 );
                            }}
                        >
                        </Card2.Header>
                        <Card2.Body>
                            <ol>
                                <li><p>文本信息</p></li>
                                <li><p>文本信息</p></li>
                                <li><p>文本信息</p></li>
                            </ol>
                        </Card2.Body>
                    </Card2>
                </div>
            </div>
        );
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
)