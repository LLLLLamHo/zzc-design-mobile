const { Component } = React;
const { Form, Input, Button } = zds;

class FormComponent extends Component {

    onSubmit ( data ) {
        console.log( data );
    }
    render () {
        return (
            <Form onSubmit={this.onSubmit}>
                <Form.Item
                    label='普通文本'
                    htmlFor='text'
                    clearBtn
                >
                    {this.props.form.getFieldDecorator( 'text_1', {
                        rules: [
                            {
                                required: true,
                                message: '信息不能为空'
                            }
                        ]
                    }, <Input placeholder='请输入普通文本' /> )}
                </Form.Item>
                <Form.Item>
                    <Button htmlType='submit'>
                        提交
                    </Button>
                </Form.Item>
            </Form>
        )
    }
}

const MyForm = Form.create( FormComponent );

class App extends Component {
    constructor( props ) {
        super( props );
        this.state = {};
    }

    render () {
        const { name, age } = this.state;

        return (
            <div className='zzc-demo'>
                <div className='zzc-demo-header'>
                    <h1 className='zzc-demo-title'>Form</h1>
                    <h2>Form表单，组合Input和各种输入组件使用</h2>
                </div>
                <div className='zzc-demo-body'>
                    <MyForm/>
                </div>
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById( 'root' )
)