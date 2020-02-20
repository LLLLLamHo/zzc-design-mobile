标签页

## API

适用平台：WEB

用于让用户在不同的视图中进行切换。


## Tabs

| 属性                   | 说明                                                            | 类型                               | 默认值     |
| ---------------------- | --------------------------------------------------------------- | ---------------------------------- | ---------- |
| prefixCls              | 组件的公用className前序                                         | string                             | zds-tabs   |
| className              | 为zzc-tabs-box添加额外class                                     | string                             | ''         |
| style                  | 为zzc-tabs-box添加额外style样式                                 | object                             | {}         |
| tabBarPosition         | tabbar的位置'top'、'bottom'、'left'、'right'                    | string                             | 'top'      |
| tabs                   | 标签页组件的item数据                                            | array                             | []         |
| defaultIndex           | 默认选中的tab下标值                                             | number/string                      | 0          |
| index                  | 指定当前激活的tab（受控）                                      | number/string                      | null       |
| onChange               | 点击tab切换激活的回调事件（当使用受控tab的时候，建议配合使用） | function                           |            |
| maxTabLength           | 最多同时显示多少个tab                                          | number                             | 3          |
| animated               | 切换动画                                                        | boolean                            | true       |
| swipeable              | 内容是否可以滑动切换                                            | boolean                            | true       |
| swipeDirection         | 内容滑动方向                                                    | string（'horizontal'、'vertical'） | horizontal |
| isOpenTabBarScroll     | 是否可以tabbar滑动滚动                                          | boolean                            | true       |
| isOpenTabContentScroll | 是否可以内容滑动滚动                                            | boolean                            | true       |
| tabBarUnderlineStyle   | 为下划线添加额外style样式                                       | object                             | {}         |


### tabs属性字段
| 属性  | 说明       | 类型                  | 默认值 |
| ----- | ---------- | --------------------- | ------ |
| title | tabs的item | string/reactComponent |        |

#### 基本用法
```jsx
<Tabs
    maxTabLength={2}
    index={0}
    tabs={[
        {title: 'tab 1'},
        {title: 'tab 2'}
    ]}
    onChange={( key ) => {
        this.setState( {
            tabsIndex: key
        } );
    }}
>
    {[
        <div>自定义主体1</div>,
        <div>自定义主体2</div>
    ]}
</Tabs>
```

这种将主体包裹在`Tabs`内部，就可以提供滑动切换等功能。但是也可以用另外一种用法，就是通过当前选中的`index`决定渲染哪一个组件。


```jsx
<Tabs
    maxTabLength={2}
    index={this.state.tabsIndex}
    tabs={[
        {title: 'tab 1'},
        {title: 'tab 2'}
    ]}
    onChange={( key ) => {
        this.setState( {
            tabsIndex: key
        } );
    }}
/>
{this.state.tabsIndex == 0 && <div>自定义主体1</div>}
{this.state.tabsIndex == 1 &&<div>自定义主体2</div>}
```

## 异步渲染tab的主体内容如何实现

### 异步渲染函数
```jsx
lazyRender ( key ) {
    if ( key == 1 ) {
        new Promise( ( resolve, reject ) => {
            setTimeout( () => {
                const component = ( <div className='item-content2'>
                    <h1>车辆详情</h1>
                    <ul>
                        <li>车辆详情.....</li>
                        <li>车辆详情.....</li>
                    </ul>
                </div> );
                resolve( component );
            }, 3000 );
        } ).then( ( component ) => {
            this.setState( {
                lazyComponent1: component
            } );
        } );
    } else {
        new Promise( ( resolve, reject ) => {
            setTimeout( () => {
                const component = ( <div className='item-content2'>
                    <h1>用户评论</h1>
                    <ul>
                        <li>用户评论.....</li>
                        <li>用户评论.....</li>
                        </ul>
                    </div> );
                    resolve( component );
                }, 3000 );
            } ).then( ( component ) => {
                this.setState( {
                    lazyComponent2: component
                } );
            } );
        }
    }
}
```

### 组件代码实例
```jsx
<Tabs
    maxTabLength={3}
    defaultIndex={this.state.tabsIndex8}
    tabs={this.state.tabs3}
    onChange={( key ) => {
        this.lazyRender( key );
    }}
>
    <div key='test1' className='item-content2'>
        <div className='item-content-box'>
            <h1>驾车须知</h1>
            <ul>
                <li>驾车须知.....</li>
                <li>驾车须知.....</li>
                <li>驾车须知.....</li>
                <li>驾车须知.....</li>
                <li>驾车须知.....</li>
                <li>驾车须知.....</li>
                <li>驾车须知.....</li>
            </ul>
        </div>
    </div>
    <div key='test2' className='item-content2'>
        {
            lazyComponent1 ?
                lazyComponent1 :
                <div className='loading-box'>
                    <Icon type='loading' />
                </div>
                            }
    </div>
    <div key='test3' className='item-content2'>
        {
            lazyComponent2 ?
                lazyComponent2 :
                <div className='loading-box'>
                    <Icon type='loading' />
                </div>
        }
    </div>
</Tabs>
```

## Tabs主体内容

需要注意的是，因为主体滑动切换建议主体内容高度保持一致，然后提供滚动展示更多内容。

## 注意事项
如果使用`tabBarPosition=left|right`，必须在父级定义个高度，否则布局会有问题。当`tabBarPosition=left|right`的时候，强制将tabbar的交互方式转为垂直交互。
当使用垂直布局时，应该尽量避免tabbar的滑动，因为浏览器的滚动无法禁止，会导致奇怪的交互现象，应该尽量使用`maxTabLength`将所有的tabbar显示出来
当,当时使用垂直布局的时候建议将`isOpenTabBarScroll`和`isOpenTabContentScroll`设置为`false`。








