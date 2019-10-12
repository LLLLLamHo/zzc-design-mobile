图片滑动框

## API

适用平台：WEB

多张图片的滑动框。

## ImageView

| 属性         | 说明                                              | 类型          | 默认值        |
| ------------ | ------------------------------------------------- | ------------- | ------------- |
| prefixCls    | 组件的公用className前序                           | string        | zds-imageview |
| className    | 定义ImageView最外层元素的class                    | string        | 无            |
| style        | 自定义样式ImageView的body的样式                   | object        | {}            |
| visible      | 控制ImageView是否显示                             | boolean       | false         |
| swipeable    | 是否允许滑动                                      | boolean       | true          |
| imageList    | 显示图片数组                                      | Array<string> | []            |
| defaultIndex | 默认显示那个图片                                  | number        | 0             |
| onClose      | 关闭ImageView的回调                               | Function      |               |
| onChange     | 切换ImageView图片后的回调，返回当前选中图片的下标 | Function      |               |
| animate      | 是否开启动画滑动                                  | boolean       | true          |

* 如果当前传入的图片只有一张或者`swipeable`为`true`，将不提供滑动。
* 考虑到性能问题，提供一个`animate`进行动画的开关，可以手动关闭。

简单的例子

```jsx
<ImageView
    defaultIndex={this.state.index}
    onClose={( index ) => { this.closeImageView( index ); }}
    imageList={this.state.imageList}
    visible={this.state.visible}
    onChange={( index ) => { console.log( index ); }}
/>
```
