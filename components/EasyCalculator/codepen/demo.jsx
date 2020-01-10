const { Component } = React;
const { EasyCalculator } = zds;

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0
        }
    }
    onChange = (val) => {
        this.setState({
            value: val
        })
    }
    render () {
        const { value } = this.state;
        return (
            <div className='zzc-demo'>
                <div className='zzc-demo-header'>
                    <h1 className='zzc-demo-title'>计数器</h1>
                </div>
                <div className='zzc-demo-body full'>
                    <div className="demo-item">
                        <h5>基本使用</h5>
                        <div className='wrapper'>
                            <EasyCalculator defaultValue={0} />
                        </div>
                        <p className="desc"></p>
                    </div>
                </div>
            </div>
        );
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
)