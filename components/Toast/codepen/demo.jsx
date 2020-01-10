const { Component } = React;
const { Toast, Button } = zds;

class App extends Component {
    maskInfo () {
        Toast.info( '两行toast文案两行toast文案最长不超过2行', 2, () => {
            console.log( '关闭' );
        }, null, false );
    }

    render () {
        return (
            <div className="zzc-demo">
                <div className="zzc-demo-header">
                    <h1 className="zzc-demo-title">Toast 轻提示</h1>
                </div>
                <div className="zzc-demo-body">
                    <Button onClick={this.maskInfo}>点击</Button>
                </div>
            </div>

        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById( 'root' )
)