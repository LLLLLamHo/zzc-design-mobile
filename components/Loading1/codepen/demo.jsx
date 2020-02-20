const { Component } = React;
const { Button, Loading } = zds;

class App extends Component {
    constructor( props ) {
        super( props );
        this.state = {
            visible: false
        };
    }

    openDefaultLoading() {
        this.setState({
            visible: true
        }, () => {
            setTimeout(() => {
                this.setState({
                    visible: false
                });
            },3000);
        });
    }

    render() {
        return (
            <div className='zzc-demo'>
                <div className='zzc-demo-header'>
                    <h1 className='zzc-demo-title'>Loading 加载弹窗</h1>
                </div>
                <div className='zzc-demo-body'>
                    <Button onClick={this.openDefaultLoading.bind( this )}>默认Loading</Button>
                    <Loading
                        visible={this.state.visible}
                        text='努力加载中....'
                        closeCallback={() => {console.log(123)}}
                    />
                </div>
            </div>

        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById( 'root' )
)