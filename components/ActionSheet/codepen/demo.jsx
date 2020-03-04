const { Component } = React;
const { ActionSheet, Card2, Icon } = zds;

export default class App extends Component {
    constructor( props ) {
        super( props );
        this.state = {
            isShow: false,
        };
        this.btnGrounp = [
            {
                content: '选项一',
                className: 'test',
                type: 'main',
                onClick: () => { window.alert( '点击选项一' ) }
            },
            {
                content: <p>选项二</p>,
                className: 'test',
                type: 'main',
                onClick: () => { window.alert( '点击选项一' ) }
            }
        ];
        this.toggleSelect1 = this.toggleSelect1.bind( this );
    }

    toggleSelect1 ( isShow ) {
        this.setState( {
            isShow: isShow
        } );
    }

    render () {
        const { isShow, select1, data1 } = this.state;
        return (
            <div className='zzc-demo'>
                <div className='zzc-demo-header'>
                    <h1 className='zzc-demo-title'>ActionSheet 模拟IOS按钮动作条</h1>
                </div>
                <div className='zzc-demo-body full'>
                    <h5>基本使用</h5>
                    <Card2>
                        <Card2.Header
                            title={<p>点击选择</p>}
                            extra={<Icon type='arrows' style={{ width: '20px', height: '30px' }} />}
                            onClick={() => {
                                this.toggleSelect1( true );
                            }}
                        />
                    </Card2>
                    <ActionSheet
                        isShow={isShow}
                        onChange={( item ) => {
                            console.log( item );
                            this.changeData1( item );
                        }}
                        title='标题'
                        cancelText='取消'
                        btnGrounp={this.btnGrounp}
                        onClose={() => {
                            console.log( 'onClose' )
                            this.setState( {
                                isShow: false
                            } )
                        }}
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