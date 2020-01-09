开关组件

## API

适用平台：WEB


## Modal

| 属性           | 说明                           | 类型                              | 默认值    |
| -------------- | ------------------------------ | --------------------------------- | --------- |
| prefixCls      | 组件的公用className前序        | string                            | zds-switch |
| className      | 定义switch的body class          | string                            | 无        |
| style          | 自定义样式                     | object                            | {}        |
| checked      | switch受控状态值                   | boolean                            | false        |
| defaultChecked      | 默认状态值                     | boolean                            | false       |
| disabled      | 设置禁用           | boolean                           | false     |
| onChange        | 状态值改变回调函数  | function                          | 无        |
| onClick | 切换点击回调函数   | function                | 无        |


简单的调用demo

```jsx
export default class App extends Component {

    constructor( props ) {
        super( props );
        this.state = {
            status1: true,
            status2: false,
            status3: true,
            status4: false,
        }
    }
    changeState1(value){
        this.setState({
            status1:value,
        })
    }
    changeState2(value){
        this.setState({
            status2:value,
        })
    }

    render () {
        const{status1,status2,status3,status4}=this.state;
        return (
            <div className="zzc-demo">
                <div className="zzc-demo-header">
                    <h1 className="zzc-demo-title">switch 开关</h1>
                </div>
                <div className="zzc-demo-body">
                    <h5>普通选择</h5>
                    <div className='list'>
                        开启中
                        <Switch checked={status1} onChange={(value) => { this.changeState1(value); }} />
                    </div>
                    <div className='list'>
                        已关闭
                        <Switch checked={status2} onChange={(value) => { this.changeState2(value); }} />
                    </div>

                    <h5>禁用状态</h5>
                    <div className='list'>
                        不可点击
                        <Switch checked disabled  />
                    </div>
                    <div className='list'>
                        不可点击
                        <Switch checked={status3} disabled  />
                    </div>
                    <div className='list'>
                        不可点击
                        <Switch checked={status4} disabled/>
                    </div>
                </div>
                <div style={{height: 100 + 'px'}}></div>
            </div>

        );
    }
}
```
