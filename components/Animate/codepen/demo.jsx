const { Component } = React;
const { Animate, Button } = zds;

class App extends Component {

    constructor( props ) {
        super( props );
        this.state = {
            visible: false,
            classname: 'chang-box'
        };
    }

    showAnimate () {
        this.setState( {
            visible: true
        }, () => {
            this.setState( {
                classname: this.div.className
            } );
        } );
    }

    closeCallback ( type ) {
        if ( type == 'enter' ) {
            this.setState( {
                visible: false
            }, () => {
                this.setState( {
                    classname: this.div.className
                } );
            } );
        } else {
            this.setState( {
                classname: this.div.className
            } );
        }
    }

    getElement(div) {
        this.div = div;
    }

    render () {
        const { visible, classname } = this.state;
        return (
            <div className='zzc-demo'>
                <div className='zzc-demo-header'>
                    <h1 className='zzc-demo-title'>Animate 动画</h1>
                </div>
                <div className='zzc-demo-body'>
                    <Button onClick={() => { this.showAnimate(); }}>点击触发动画</Button>
                    <p className='cls'>当前className：{classname}</p>
                    <Animate
                        visible={visible}
                        animationName={{
                            enter: 'change-enter',
                            enterActive: 'change-enter-active',
                            leave: 'change-leave',
                            leaveActive: 'change-leave-active'
                        }}
                        onEnd={( type ) => {
                            this.closeCallback( type );
                        }}
                    >
                        <div
                            ref={( div ) => { this.getElement( div ); }}
                            style={{
                                background: visible ? 'blue' : '#fff'
                            }}
                            className='change-box'
                        >动画</div>
                    </Animate>
                </div>
            </div>

        );
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
)