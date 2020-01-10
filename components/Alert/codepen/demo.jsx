const { Component } = React;
const { Alert, Button } = zds;

class App extends Component {

    constructor( props ) {
        super( props );
    }

    defaultBtn () {
        Alert( {
            title: '标题'
        } );
    }

    titleAlert () {
        Alert( {
            title: '标题',
            style: {
                color: 'blue'
            },
            className: 'a233'
        } );
    }

    contentAlert () {
        Alert( {
            title: '标题',
            content: <p>对话框正文对话框正文对话框正文对话框正文对话框正文对话框正文对话框正文对话框正文对话框正文</p>,
            buttons: [
                {
                    text: '取消',
                    onPress: () => {
                        return false;
                    },
                    props: {
                        type: 'sub',
                        style: { color: '##2871F7', fontWeight: 400, border: 'none' }
                    }
                }
            ],
        } );
    }

    doubleBtnAlert () {
        Alert( {
            title: '标题',
            content: <p>对话框正文对话框正文对话框正文对话框正文对话框正文对话框正文对话框正文对话框正文对话框正文</p>,
            buttons: [
                {
                    text: '取消',
                    onPress: () => {
                        console.log( '点击取消' )
                    },
                    props: {
                        type: 'special',
                        style: { color: '#696E7C', fontWeight: 400,border: 'none' }
                    }
                },
                {
                    text: '确认',
                    onPress: () => {
                        console.log( '点击确认' )
                    },
                    props: {
                        type: 'special',
                        className: 'aaaa',
                        style: { color: '#2871F7', fontWeight: 500, border: 'none' }
                    }

                }
            ]
        } );
    }

    maskCloseAlert () {
        Alert( {
            title: '标题',
            content: <p>asdasdasdasd</p>,
            maskClose: true
        } );
    }

    autoCloseAlert () {
        const closeEvent = Alert( {
            title: '标题'
        } );

        setTimeout( () => {
            console.log( closeEvent );
            closeEvent();
        }, 2000 );
    }

    promiseAlert () {
        Alert( {
            title: '发起一个请求',
            maskClose: true,
            buttons: [
                {
                    text: '确认',
                    onPress: () => new Promise( ( resolve ) => {
                        Toast.info( 'onPress Promise', 1 );
                        setTimeout( resolve, 1000 );
                    } ),
                    props: {
                        type: 'special',
                        className: 'aaaa',
                        style: { color: '#2871F7', fontWeight: 400, border: 'none' }
                    }
                }
            ]
        } );
    }

    imgAlert () {
        Alert( {
            title: '标题',
            content: <div><img src="http://imgcdn50.zuzuche.com/world/base/329/214/556/f89e270b09ef8651fa4fea12867543d5.jpg!/fw/150/quality/100/format/png" /></div>,
            closeCallback: function () { console.log( 'Alert关闭了' ) },
        } );
    }

    radioAlert () {
        Alert( {
            title: '标题',
            content: <p>asdasdasdasd</p>,
            maskClose: true,
            buttonDirection: 'vertical',
            buttons: [
                {
                    text: '推荐操作',
                    onPress: () => {
                    },
                    props: {
                        type: 'special',
                        style: { color: '#696E7C', fontWeight: 400,border: 'none' }
                    }
                },
                {
                    text: '推荐操作',
                    onPress: () => {
                    },
                    props: {
                        type: 'special',
                        className: 'aaaa',
                        style: { color: '#696E7C', fontWeight: 400,border: 'none' }
                    }
                },
                {
                    text: '推荐操作',
                    onPress: () => {
                    },
                    props: {
                        type: 'special',
                        className: 'aaaa',
                        style: { color: '#2871F7', fontWeight: 500,border: 'none' }
                    }

                }
            ]
        } );
    }

    headImgAlert() {
        Alert( {
            title: '标题',
            titleImg: "http://imgcdn5.zuzuche.com/static/37/11/71f75d009747cdd10e19160f2650b3b2.jpg!/fwfh/350x350/quality/100/format/png",
            content: <p>asdasdasdasd</p>,
            maskClose: true
        } );
    }

    render () {
        return (
            <div className="zzc-demo">
                <div className="zzc-demo-header">
                    <h1 className="zzc-demo-title">Alert 警告弹窗</h1>
                </div>
                <div className="zzc-demo-body">
                    <h5>基本使用</h5>
                    <Button onClick={this.defaultBtn}>使用默认按钮</Button>
                    <Button onClick={this.titleAlert}>只有标题的Alert</Button>
                    <Button onClick={this.contentAlert}>带有内容的Alert</Button>
                    <Button onClick={this.doubleBtnAlert}>双按钮Alert</Button>
                    <Button onClick={this.maskCloseAlert}>点击mask关闭Alert</Button>
                    <Button onClick={this.autoCloseAlert}>2秒后自动关闭Alert</Button>
                    <Button onClick={this.promiseAlert}>延迟关闭Alert</Button>
                    <Button onClick={this.imgAlert}>带图片的Alert</Button>
                    <h5>单选框</h5>
                    <Button onClick={this.radioAlert}>Alert单选框</Button>
                    <h5>头部带有图片的Alert</h5>
                    <Button onClick={this.headImgAlert}>点击</Button>
                </div>
            </div>

        );
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
)