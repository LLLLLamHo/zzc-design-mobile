const { Component } = React;
const { TouchFeedback } = zds;

class App extends Component {
    state = {
        title: 'TouchFeedback 点击反馈'
    }
    render () {
        return (
            <div className='zzc-demo'>
                <div className='zzc-demo-header'>
                    <h1 className='zzc-demo-title'>{this.state.title}</h1>
                    <h2>基础组件，用于对点击操作的反馈，一般用于按钮组件</h2>
                </div>
                <div className='zzc-demo-body'>
                    <TouchFeedback
                        activeClassName='active-class'
                    >
                        <div className='touch-btn'>点击添加ClassName</div>
                    </TouchFeedback>
                </div>
            </div>

        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById( 'root' )
)