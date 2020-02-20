const { Component } = React;
const { Modal, Button, Toast } = zds;

class App extends Component {
    constructor( props ) {
        super( props );
        this.state = {
            visible: false,
            text: '这是一堆文案'
        };
    }

    openDefaultModal() {
        this.setState( {
            visible: true
        } );
    }

    render() {
        return (
            <div className="zzc-demo">
                <div className="zzc-demo-header">
                    <h1 className="zzc-demo-title">Modal 模态弹窗</h1>
                </div>
                <div className="zzc-demo-body">
                    <Button onClick={this.openDefaultModal.bind( this )}>默认按钮Modal</Button>
                    <Modal
                        title={this.state.title}
                        closable
                        visible={this.state.visible}
                        closeCallback={() => { this.setState( { visible: false } ); }}
                    >
                        <div className="modal-text">{this.state.text}</div>
                    </Modal>
                </div>
            </div>

        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById( 'root' )
)