const { Component } = React;
const { Button, Icon } = zds;
const { ButtonGroup } = Button;

class App extends Component {

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
                    <h5>全局次级按钮</h5>
                    <Button type='sub'>默认按钮</Button>
                </div>
                <div className='zzc-demo-body'>
                    <h5>行内按钮(默认大小)</h5>
                    <Button inline>确认</Button>
                    <h5>行内按钮(middle)</h5>
                    <Button inline size='middle'>确认</Button>
                    <h5>行内按钮(small)</h5>
                    <Button inline size='small'>确认</Button>
                </div>
                <div className='zzc-demo-body'>
                    <h5>按钮块</h5>
                    <ButtonGroup>
                        <Button>确认</Button>
                        <Button type='sub'>确认</Button>
                    </ButtonGroup>
                </div>
            </div>

        );
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
)