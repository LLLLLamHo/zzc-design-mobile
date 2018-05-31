标签页

## API

适用平台：WEB

用于让用户在不同的视图中进行切换。


## Tabs

| 属性      | 说明                       | 类型          | 默认值   |
| --------- | -------------------------- | ------------- | -------- |
| prefixCls | 组件的公用className前序    | string        | zzc-tabs |
| tabs      | 标签页组件的item数据       | array        | []       |
| defaultIndex | 默认选中的tab下标值        | number/string | 0        |
| index     | 指定当前激活的tab（受控） | number/string | null     |
| onChange  | 点击tab切换激活的回调事件（当使用受控tab的时候，建议配合使用） | function      | 
| maxTabLength  | 最多同时显示多少个tab | number      |     3     |
| tabDirection  | tab的方向 | string（'horizontal' | 'vertical'）      |     horizontal     |
| animated  | 切换动画 | boolean      |     true     |
| swipeable  | 是否可以内容滑动切换 | boolean      |     true     |


## Tabs主体内容

需要注意的是，因为主体滑动切换建议主体内容高度保持一致，然后提供滚动展示更多内容。







