const { Component } = React;
const { Switch } = zds;

class App extends Component {
    constructor( props ) {
        super( props );
        this.state = {
            status1: true
        }
    }
    changeState1 ( value ) {
        this.setState( {
            status1: value
        } );
    }
    render () {
        const { status1 } = this.state;
        return (
            <div className="zzc-demo">
                <div className="zzc-demo-header">
                    <h1 className="zzc-demo-title">switch 开关</h1>
                </div>
                <div className="zzc-demo-body">
                    <h5>普通选择</h5>
                    <div className='list'>
                        开启中
                        <Switch checked={status1} onChange={( value ) => { this.changeState1( value ); }} />
                    </div>
                </div>
            </div>

        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById( 'root' )
)