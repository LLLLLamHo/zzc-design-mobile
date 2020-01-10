const { Component } = React;
const { FullModal, Button } = zds;

class App extends Component {
    constructor( props ) {
        super( props );
        this.state = {
            visible: false,
            visible2: false
        };
    }

    openDefaultDialog() {
        this.setState( {
            visible: true
        } );
    }

    openBScrollDialog() {
        this.setState( {
            visible2: true
        } );
    }

    render() {
        return (
            <div className='zzc-demo'>
                <div className='zzc-demo-header'>
                    <h1 className='zzc-demo-title'>FullModal 全屏模态框</h1>
                </div>
                <div className='zzc-demo-body'>
                    <Button onClick={() => { this.openDefaultDialog(); }}>打开全屏模态框</Button>
                    {this.state.visible && <FullModal
                        visible={this.state.visible}
                        title='这是一个标题'
                        closeCallback={() => { this.setState( { visible: false } ); }}
                    >
                        <div className='modal-text'>这里是说明文案，这里是说明文案，这里是说明文案，这里是说明文案，这里是说明文案，这里是说明文案，这里是说明文案，这里是说明文案，这里是说明文案，这里是说明文案，这里是说明文案，这里是说明文案，这里是说明文案，这里是说明文案，这里是说明文案，这里是说明文案，这里是说明文案，这里是说明文案，这里是说明文案，这里是说明文案，这里是说明文案，这里是说明文案，这里是说明文案，这里是说明文案，这里是说明文案，这里是说明文案，这里是说明文案，这里是说明文案，这里是说明文案，这里是说明文案，这里是说明文案，这里是说明文案，这里是说明文案，这里是说明文案，这里是说明文案，这里是说明文案，这里是说明文案，这里是说明文案，这里是说明文案，这里是说明文案，这里是说明文案，这里是说明文案，这里是说明文案，这里是说明文案，这里是说明文案，这里是说明文案，这里是说明文案，这里是说明文案，这里是说明文案，这里是说明文案，这里是说明文案，这里是说明文案，这里是说明文案，这里是说明文案，这里是说明文案，这里是说明文案，这里是说明文案，这里是说明文案，这里是说明文案，这里是说明文案</div>
                    </FullModal>}
                    <Button onClick={() => { this.openBScrollDialog(); }}>打开全屏模态框(BSCroll)</Button>
                    {this.state.visible2 && <FullModal
                        visible={this.state.visible2}
                        title='这是一个标题'
                        isUseBScroll
                        closeCallback={() => { this.setState( { visible2: false } ); }}
                        BScrollInitCallback={(BScroll) => { console.log(BScroll); }}
                    >
                        <div className='modal-text'>这里是说明文案，这里是说明文案，这里是说明文案，这里是说明文案，这里是说明文案，这里是说明文案，这里是说明文案，这里是说明文案，这里是说明文案，这里是说明文案，这里是说明文案，这里是说明文案，这里是说明文案，这里是说明文案，这里是说明文案，这里是说明文案，这里是说明文案，这里是说明文案，这里是说明文案，这里是说明文案，这里是说明文案，这里是说明文案，这里是说明文案，这里是说明文案，这里是说明文案，这里是说明文案，这里是说明文案，这里是说明文案，这里是说明文案，这里是说明文案，这里是说明文案，这里是说明文案，这里是说明文案，这里是说明文案，这里是说明文案，这里是说明文案，这里是说明文案，这里是说明文案，这里是说明文案，这里是说明文案，这里是说明文案，这里是说明文案，这里是说明文案，这里是说明文案，这里是说明文案，这里是说明文案，这里是说明文案，这里是说明文案，这里是说明文案，这里是说明文案，这里是说明文案，这里是说明文案，这里是说明文案，这里是说明文案，这里是说明文案，这里是说明文案，这里是说明文案，这里是说明文案，这里是说明文案，这里是说明文案</div>
                    </FullModal>}
                </div>
            </div>
        );
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
)