const { Component } = React;
const { Dialog, Button } = zds;

class App extends Component {
    constructor( props ) {
        super( props );
        this.state = {
            visible: false,
            visible2: false,
            visible3: false,
            visible4: false,
            visible5: false,
            visible6: false,
            visible7: false
        };
    }

    openDefaultDialog() {
        this.setState( {
            visible: true
        } );
    }

    openDialog() {
        this.setState( {
            visible2: true
        } );
    }
    openNoMaskDialog() {
        this.setState( {
            visible5: true
        } );
    }
    openAnDialog() {
        this.setState( {
            visible3: true,
            visible4: true
        } );
    }
    openCustomAnDialog() {
        this.setState( {
            visible6: true,
            visible7: true
        } );
    }
    
    render() {
        return (
            <div className='zzc-demo'>
                <div className='zzc-demo-header'>
                    <h1 className='zzc-demo-title'>Dialog 对话框</h1>
                </div>
                <div className='zzc-demo-body'>
                    <Button onClick={() => { this.openDefaultDialog(); }}>默认dialog</Button>
                    {this.state.visible && <Dialog
                        visible={this.state.visible}
                        maskClose
                        closeCallback={() => { this.setState({ visible: false }); }}
                    >
                        <div className='modal-text'>这是一个文案...</div>
                    </Dialog>}

                    <Button onClick={() => { this.openDialog(); }}>带title和footer的dialog</Button>
                    {this.state.visible2 && <Dialog
                        title={<div>123123123</div>}
                        footer={<div><Button onClick={() => { this.setState( { visible2: false } ); }}>关闭</Button></div>}
                        visible={this.state.visible2}
                        closeCallback={() => { this.setState({ visible2: false }); }}
                    >
                        <div className='modal-text'>...这是一个文案...</div>
                    </Dialog>}

                    <Button onClick={() => { this.openNoMaskDialog(); }}>透明背景的dialog</Button>
                    {this.state.visible5 && <Dialog
                        title={<div>123123123</div>}
                        className='black'
                        transparent={true}
                        footer={<div><Button onClick={() => { this.setState( { visible5: false } ); }}>关闭</Button></div>}
                        visible={this.state.visible5}
                        closeCallback={() => { this.setState({ visible5: false }); }}
                    >
                        <div className='modal-text'>...这是一个文案...</div>
                    </Dialog>}

                    <Button onClick={() => { this.openAnDialog(); }}>带动画的dialog</Button>
                    {this.state.visible4 && <Dialog
                        maskTransitionName='zds-fade'
                        transitionName=''
                        maskClose
                        title={<div>123123123</div>}
                        footer={<div><Button onClick={() => { this.setState( { visible3: false } ); }}>关闭</Button></div>}
                        visible={this.state.visible3}
                        closeCallback={() => { this.setState({ visible4: false }); }}
                    >
                        <div className='modal-text'>...这是一个文案...</div>
                    </Dialog>}

                    <Button onClick={() => { this.openCustomAnDialog(); }}>带自定义动画的dialog</Button>
                    {this.state.visible7 && <Dialog
                        className='custom-dialog'
                        maskTransitionName='zds-fade'
                        transitionName='custom-an'
                        boxClassName='custom-dialog-box'
                        maskClose
                        title={<div>自定义动画</div>}
                        footer={<div><Button onClick={() => { this.setState( { visible6: false } ); }}>关闭</Button></div>}
                        visible={this.state.visible6}
                        closeCallback={() => { this.setState({ visible7: false }); }}
                    >
                        <div className='modal-text'>...这是一个文案...</div>
                    </Dialog>}
                </div>
            </div>
        );
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
)