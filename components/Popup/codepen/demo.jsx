const { Component } = React;
const { Popup, Button, Card, Icon } = zds;

class App extends Component {
    constructor( props ) {
        super( props );
        this.state = {
            text: new Date().getTime(),
            visible: false
        };
    }

    openButtomPopup() {
        this.setState( {
            visible: true
        } );
    }

    render() {
        return (
            <div className='zzc-demo'>
                <div className='zzc-demo-header'>
                    <h1 className='zzc-demo-title'>Popup 弹出菜单</h1>
                    <h2>提供4周弹出的菜单，通过自行配置popup里面的内容实现从4周弹出内容。</h2>
                    <h2>不限高不限宽，只提供4周弹出的动画和对应的回调。</h2>
                </div>
                <div className='zzc-demo-body'>
                    <Button onClick={() => {this.openButtomPopup();}}>从下弹出</Button>
                    <Popup
                        renderCallback={this.renderCallback}
                        maskClose
                        visible={this.state.visible}
                        onClose={() => {
                            this.setState( {
                                visible: false
                            } );
                        }}
                    >
                        <Card full>
                            <Card.Header
                                className='cursor-car-head'
                            >
                                <div
                                    className='cursor-car-close'
                                    onClick={
                                        () => {
                                            this.setState( {
                                                visible: false
                                            } );
                                        }
                                    }
                                >
                                    关闭
                                </div>
                            </Card.Header>
                            <div className='card1-contnt'>
                                <Card.Body borderDirection='left'>
                                    <div className='card-box2'>
                                        <p>{this.state.text}</p>
                                        <Icon size='sm' type='success_outline' />
                                    </div>
                                </Card.Body>
                                <Card.Body borderDirection='right'>
                                    <div className='card-box2'>
                                        <p>右边留空</p>
                                        <Icon size='sm' type='success_outline' />
                                    </div>
                                </Card.Body>
                                <Card.Body>
                                    <div className='card-box2'>
                                        <p>两边留空</p>
                                        <Icon size='sm' type='success_outline' />
                                    </div>
                                </Card.Body>
                            </div>
                        </Card>
                    </Popup>

                </div>
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById( 'root' )
)