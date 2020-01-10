const { Component } = React;
const { Steps } = zds;

class App extends Component {
    constructor( props ) {
        super( props );
        this.state = {
            current: 1
        }
    }

    render () {
        return (
            <div className="zzc-demo">
                <div className="zzc-demo-header">
                    <h1 className="zzc-demo-title">Steps 步骤条</h1>
                </div>
                <div className="zzc-demo-body">
                    <h5>居中的步骤条</h5>
                    <Steps current={this.state.current} alignCenter={true}>
                        <Steps.Step title="行程前"/>
                        <Steps.Step title="行程中"/>
                        <Steps.Step title="行程结束"/>
                    </Steps>
                </div>
            </div>

        );
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
)