const { Component } = React;
const { Card, Button, Icon, Toast } = zds;

class App extends Component {

    constructor( props ) {
        super( props );
        this.state = {
            title: '卡片标题'
        };
    }
    render() {
        return (
            <div className='zzc-demo'>
                <div className='zzc-demo-header'>
                    <h1 className='zzc-demo-title'>Card 卡片</h1>
                    <h2>卡片布局，主要分为占满整形和非占满整形的布局方式，分为3个部分，Header、Body、Fotter三个主要组成部分。</h2>
                </div>
                <div className='zzc-demo-body full'>
                    <Card>
                        <Card.Header title={this.state.title} extra='this is extra' />
                        <Card.Body>
                            <div className='card-box1'>
                                <p>文本内容</p>
                            </div>
                        </Card.Body>
                        <Card.Footer>
                            <Button>按钮</Button>
                        </Card.Footer>
                    </Card>
                </div>
            </div>
        );
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
)