const { Component } = React;
const { Tabs, Icon } = zds;

class App extends Component {
    constructor( props ) {
        super( props );
    }

    render () {
        return (
            <div className='zzc-demo'>
                <div className='zzc-demo-header'>
                    <h1 className='zzc-demo-title'>Tabs 标签页</h1>
                    <h2>提供多个标签页面切换功能</h2>
                </div>
                <div className='zzc-demo-body full'>
                    <Tabs
                        defaultIndex={4}
                        maxTabLength={4}
                        tabs={[
                            { title: 'tab 1' },
                            { title: <div>tab 2</div> },
                            { title: 'tab 3' },
                            { title: 'tab 4' },
                            { title: 'tab 5' },
                            { title: 'tab 6' },
                            { title: 'tab 7' }
                        ]}
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