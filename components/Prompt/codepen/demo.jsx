const { Component } = React;
const { Prompt, Toast } = zds;

class App extends Component {

    constructor( props ) {
        super( props );
    }

    render () {

        return (
            <div className="zzc-demo">
                <div className="zzc-demo-header">
                    <h1 className="zzc-demo-title">Prompt 全局提示</h1>
                </div>
                <div className="zzc-demo-body">
                    <Prompt>
                        <p>中立提示文案</p>
                    </Prompt>
                </div>
            </div>

        );
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
)