点击操作响应组件

主要为我们提供按钮这类元素点击后的action动作的样式改变。

## API

适用平台：WEB

| 属性            | 说明                        | 类型     | 默认值 |
| --------------- | --------------------------- | -------- | ------ |
| activeStyle     | 传入action时添加的style     | object   | {}     |
| activeClassName | 传入action时添加的className | string   | ''     |
| disabled        | 是否禁用action响应          | boolean  | false  |
| onTouchStart    | 事件                        | Function | null   |
| onTouchEnd      | 事件                        | Function | null   |
| onTouchCancel   | 事件                        | Function | null   |
| onMouseDown     | 事件                        | Function | null   |
| onMouseUp       | 事件                        | Function | null   |
| onMouseLeave    | 事件                        | Function | null   |

```jsx
<TouchFeedback
    activeClassName='active-class'
>
    <div className='touch-btn'>点击添加ClassName</div>
</TouchFeedback>
<TouchFeedback
    activeStyle={{ background: 'red' }}
>
    <div className='touch-btn'>点击添加Style</div>
</TouchFeedback>
<TouchFeedback
    activeClassName='active-class'
    disabled
>
    <div className='touch-btn'>禁止触发touch</div>
</TouchFeedback>
```