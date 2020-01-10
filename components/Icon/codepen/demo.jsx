const { Component } = React;
const { Icon } = zds;

class App extends Component {
    render () {
        return (
            <div className='zzc-demo'>
                <div className='zzc-demo-header'>
                    <h1 className='zzc-demo-title'>Icon 图标</h1>
                    <h2>zzc-design定义了一些常用的svg图标</h2>
                    <h2>点击图片可以复制使用</h2>
                </div>
                <div className='zzc-demo-body'>
                    <Icon type='success_fill' />
                </div>
            </div>

        );
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
)