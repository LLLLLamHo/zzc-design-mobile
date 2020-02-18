多选项选择器组件

## API

适用平台：WEB

## MoreSelect

| 属性      | 说明                                  | 类型                                         | 默认值   |
| --------- | ------------------------------------- | -------------------------------------------- | -------- |
| prefixCls | 组件的公用className前序               | string                                       | zzc-card |
| className | 样式类名                              | string                                       | 无       |
| style     | 自定义样式                            | object                                       | {}       |
| bodyStyle | 自定义popup的body样式                 | object                                       | {}       |
| title     | title内容                             | string                        \| JSX.Element | null     |
| isShow    | 是否显示                              | boolean                                      | false    |
| maskClose | 遮罩层是否点击关闭                    | boolean                                      | true     |
| data      | 选择器内容                            | Array<data>                                  | []       |
| onChange  | 点击选择项后出发，返回对应item的data  | Function                                     | null     |
| onClose   | 弹框关闭后触发，返回选择的item的index | Function                                     | null     |

## data
| 属性  | 说明     | 类型        | 默认值 |
| ----- | -------- | ----------- | ------ |
| title | 显示字段 | string      |        |
| list  | 子选项   | Array<item> | []     |

## item
| 属性  | 说明         | 类型                               | 默认值 |
| ----- | ------------ | ---------------------------------- | ------ |
| text  | 显示字段     | string \| JSX.Element              |        |
| type  | 类型         | 'normal' \| 'active' \| 'disabled' |        |
| value | 值           | any                                |        |
| click | 点击回调函数 | function                           | null   |

### 回调函数

回调函数主要用于对于select组件中某个item的点击事件做特殊处理，例如`其他`，点击后打开输入框等。
最后必须执行next函数，将选中的`value`传入next函数当中，继续执行。

```jsx
click: (item, key, key2, next) => {
    next('xxxx国驾照');
}
```

### demo代码

```jsx
export default class App extends PureComponent {
    constructor( props ) {
        super( props );
        this.state = {
            showSelect1: false,
            select1: null,
            data1: [
                {
                    title: '常用区号',
                    list: [
                        {
                            text: '中国大陆+(86)',
                            type: 'active',
                            value: 'code1'
                        },
                        {
                            text: '香港(中国) +852',
                            type: 'normal',
                            value: 'code2'
                        },
                        {
                            text: '台湾(中国) +852',
                            type: 'normal',
                            value: 'code3'
                        },
                        {
                            text: '澳门(中国) +852',
                            type: 'normal',
                            value: 'code4'
                        }
                    ]
                },
                {
                    title: 'A',
                    list: [
                        {
                            text: '爱尔兰 +852',
                            type: 'normal',
                            value: 'code5'
                        },
                        {
                            text: '阿根廷 +852',
                            type: 'normal',
                            value: 'code6'
                        },
                        {
                            text: '澳大利亚 +852',
                            type: 'normal',
                            value: 'code7'
                        },
                        {
                            text: 'A国家 +00',
                            type: 'normal',
                            value: 'code8'
                        }
                    ]
                },
                {
                    title: 'B',
                    list: [
                        {
                            text: 'B国家 +00',
                            type: 'normal',
                            value: 'code9'
                        },
                        {
                            text: 'B国家 +00',
                            type: 'normal',
                            value: 'code10'
                        },
                        {
                            text: 'B国家 +00',
                            type: 'normal',
                            value: 'code11'
                        }
                    ]
                }

            ]

        };
        this.toggleSelect1 = this.toggleSelect1.bind( this );
    }

    toggleSelect1 ( isShow ) {
        this.setState( {
            showSelect1: isShow
        } );
    }

    changeData1 ( item ) {
        const { data1 } = this.state;
        const { value } = item;

        let select1 = null;
        for ( let i = 0; i < data1.length; i++ ) {
            const list = data1[i].list;
            for ( let n = 0; n < list.length; n++ ) {

                if ( list[n].value == value ) {
                    list[n].type = 'active';
                    select1 = list[n].text;
                } else {
                    list[n].type = list[n].type == 'disabled' ? 'disabled' : 'normal';
                }
            }
        }
        this.setState( {
            data1: [].concat( data1 ),
            select1,
            showSelect1: false
        } );
    }

    render () {
        const { showSelect1, select1, data1 } = this.state;
        return (
            <div className='zzc-demo'>
                <div className='zzc-demo-header'>
                    <h1 className='zzc-demo-title'>MoreSelect 多选项选择器</h1>
                    <h2>从下往上弹出的单选选择器</h2>
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
                        >
                            {select1 && <p>{select1}</p>}
                        </Card2.Header>
                    </Card2>
                    <MoreSelect
                        isShow={showSelect1}
                        title='请选择'
                        onChange={( item ) => {
                            console.log( item );
                            this.changeData1( item );
                        }}
                        onClose={() => {
                            console.log( 'onClose' )
                            this.setState( {
                                showSelect1: false
                            } )
                        }}
                        data={data1}
                    />
                </div>
            </div>
        );
    }
}
```


