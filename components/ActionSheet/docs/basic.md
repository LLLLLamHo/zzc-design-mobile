模拟IOS按钮动作条

## API

适用平台：WEB

## ActionSheet

| 属性       | 说明                                  | 类型                                         | 默认值   |
| ---------- | ------------------------------------- | -------------------------------------------- | -------- |
| prefixCls  | 组件的公用className前序               | string                                       | zzc-card |
| className  | 样式类名                              | string                                       | 无       |
| style      | 自定义样式                            | object                                       | {}       |
| bodyStyle  | 自定义popup的body样式                 | object                                       | {}       |
| title      | title内容                             | string                        \| JSX.Element | null     |
| cancelText | 取消按钮的内容                        | string                        \| JSX.Element | null     |
| isShow     | 是否显示                              | boolean                                      | false    |
| maskClose  | 遮罩层是否点击关闭                    | boolean                                      | true     |
| btnGrounp  | 按钮组                                | Array<BtnItemProps>                          | []       |
| onClose    | 提供给弹窗关闭的控制方法 | Function                                     | null     |

## BtnItemProps
| 属性      | 说明            | 类型                           | 默认值    |
| --------- | --------------- | ------------------------------ | --------- |
| content   | 显示字段        | string \| JSX.Element          |           |
| type      | 类型, 默认颜色  | 'default' \| 'main' \| 'error' | 'default' |
| style     | 内联样式        | object                         | {}        |
| className | 自定义class名称 | stirng                         | ''        |
| onClick   | 点击回调函数    | function                       | null      |
| autoClose | 点击自动关闭    | boolean                        | true      |

### demo代码

```jsx
export default class App extends PureComponent {
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
```


