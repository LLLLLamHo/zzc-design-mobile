标签页

## API

适用平台：WEB

用于让用户在不同的视图中进行切换。


## Tabs

| 属性                   | 说明                                                            | 类型                 | 默认值       |
| ---------------------- | --------------------------------------------------------------- | -------------------- | ------------ |
| prefixCls              | 组件的公用className前序                                         | string               | zzc-tabs     |
| className              | 为zzc-tabs-box添加额外class    | string               | ''   |
| style              | 为zzc-tabs-box添加额外style样式    | object               | {}   |
| tabBarPosition         | tabbar的位置'top'、'bottom'、'left'、'right'                    | string               | 'top'        |
| tabs                   | 标签页组件的item数据                                            | array               | []           |
| defaultIndex           | 默认选中的tab下标值                                             | number/string        | 0            |
| index                  | 指定当前激活的tab（受控）                                      | number/string        | null         |
| onChange               | 点击tab切换激活的回调事件（当使用受控tab的时候，建议配合使用） | function             |              |
| maxTabLength           | 最多同时显示多少个tab                                          | number               | 3            |
| animated               | 切换动画                                                        | boolean              | true         |
| swipeable              | 内容是否可以滑动切换                                            | boolean              | true         |
| swipeDirection         | 内容滑动方向                                                    | string（'horizontal' | 'vertical'） | horizontal |
| isOpenTabBarScroll     | 是否可以tabbar滑动滚动                                          | boolean              | true         |
| isOpenTabContentScroll | 是否可以内容滑动滚动                                            | boolean              | true         |
| tabBarUnderlineStyle              | 为下划线添加额外style样式    | object               | {}   |



## Tabs主体内容

需要注意的是，因为主体滑动切换建议主体内容高度保持一致，然后提供滚动展示更多内容。

## 注意事项
如果使用`tabBarPosition=left|right`，必须在父级定义个高度，否则布局会有问题。当`tabBarPosition=left|right`的时候，强制将tabbar的交互方式转为垂直交互。
当使用垂直布局时，应该尽量避免tabbar的滑动，因为浏览器的滚动无法禁止，会导致奇怪的交互现象，应该尽量使用`maxTabLength`将所有的tabbar显示出来
当,当时使用垂直布局的时候建议将`isOpenTabBarScroll`和`isOpenTabContentScroll`设置为`false`。








