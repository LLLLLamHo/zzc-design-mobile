const { Component } = React;
const { DatePicker, Card } = zds;

class App extends Component {

    constructor( props ) {
        super( props );
        const today = new Date();
        const minDay = new Date();
        const maxDay = new Date();
        this.state = {
            isShow1: false,
            time1: '2019/07/19'
        };
    }

    onValueChange ( date ) {
        console.log( date );
    }

    show ( index ) {
        this.state[`isShow${index}`] = true;
        this.setState( this.state );
    }

    close ( index ) {
        this.state[`isShow${index}`] = false;
        this.setState( this.state );
    }

    submit ( data, index ) {
        this.state[`isShow${index}`] = false;
        this.state[`time${index}`] = data.currDate;
        this.setState( this.state );
    }

    renderCallback () {
        console.log( 'showed' );
    }

    render () {
        return (
            <div className='zzc-demo'>
                <div className='zzc-demo-header'>
                    <h1 className='zzc-demo-title'>DatePicker 日期选择框</h1>
                    <h2>提供各种时间维度的滑动选择框</h2>
                </div>
                <div className='zzc-demo-body full'>
                    <Card full>
                        <Card.Body borderDirection='left'>
                            <div className='card-box2' onClick={() => { this.show( 1 ); }}>
                                <p>日期选择框,当前日期：{this.state.time1}</p>
                            </div>
                        </Card.Body>
                    </Card>
                    <DatePicker
                        reverse
                        renderCallback={this.renderCallback}
                        visible={this.state.isShow1}
                        minuteStep={15}
                        mode='date'
                        selectTime={new Date( this.state.time1 )}
                        onValueChange={( date ) => { this.onValueChange( date ); }}
                        onClose={() => { this.close( 1 ); }}
                        onSubmit={( data ) => { this.submit( data, 1 ); }}
                    />
                </div>
            </div>
        );
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
)