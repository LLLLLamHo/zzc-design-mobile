const { Component } = React;
const { Form, Radio, Card2 } = zds;

class App extends Component {

    constructor( props ) {
        super( props );
        this.state = {
            radioValue1: 'test1'
        };
    }

    onChange1 ( data ) {
        this.setState( {
            radioValue1: data.id
        } );
    }

    render () {
        return (
            <div className='zzc-demo'>
                <div className='zzc-demo-header'>
                    <h1 className='zzc-demo-title'>Radio</h1>
                    <h2>基础单选组件</h2>
                </div>
                <div className='zzc-demo-body'>
                    <Card2 style={{ padding: 0 }}>
                        <Form>
                            <Form.Item
                                label='非受控'
                            >
                                <Radio onChange={( data ) => { console.log( data ) }} defaultChecked name='test'>单选框1</Radio>
                                <Radio onChange={( data ) => { console.log( data ) }} name='test'>单选框2</Radio>
                            </Form.Item>
                            <Form.Item
                                label='受控'
                            >
                                <Radio onChange={( data ) => { this.onChange1( data ) }} checked={this.state.radioValue1 == 'test1'} id='test1' name='test2'>单选框1</Radio>
                                <Radio onChange={( data ) => { this.onChange1( data ) }} checked={this.state.radioValue1 == 'test2'} id='test2' name='test2'>单选框2</Radio>
                            </Form.Item>
                        </Form>
                    </Card2>
                </div>
            </div>
        );
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
)