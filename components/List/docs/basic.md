列表布局

## API

适用平台：WEB

## List

| 属性      | 说明                    | 类型   | 默认值   |
| --------- | ----------------------- | ------ | -------- |
| prefixCls | 组件的公用className前序 | string | zzc-card |
| className | 样式类名                | string | 无       |
| style     | 自定义样式              | object | {}       |

## ListItem

| 属性       | 说明                    | 类型                                         | 默认值   |
| ---------- | ----------------------- | -------------------------------------------- | -------- |
| prefixCls  | 组件的公用className前序 | string                                       | zzc-card |
| className  | 样式类名                | string                                       | 无       |
| style      | 自定义样式              | object                                       | {}       |
| title      | title内容               | string                        \| JSX.Element | null     |
| extra      | title右边内容           | string                        \| JSX.Element | null     |
| align      | 自定义样式              | 'center' \| 'top' \| 'bottom'                | 'center' |
| extraClick | extra点击回调           | Function                                     | null     |
| onClick    | item点击回调            | Function                                     | null     |

*注意：只有List和ListItem配合使用才会显示ListItem的特有样式

```JavaScript
<ListItem
    title={<p>只有标题</p>}
/>
<ListItem
    title={<p>标题加上图标</p>}
    extra={<Icon type='success' style={{ width: '20px', height: '30px' }} />}
/>
<ListItem
    title={<p>超级长的图标超级长的图标超级长的图标超级长的图标</p>}
    extra={<Icon type='success' style={{ width: '20px', height: '30px' }} />}
/>
<ListItem
    title={<p>图标点击</p>}
    extra={<Icon type='success' style={{ width: '20px', height: '30px' }} />}
    extraClick={() => {
        Toast.info( '点击图标', 2 );
    }}
/>
<ListItem
    title={<p>带有内容的Item</p>}
    extra={<Icon type='success' style={{ width: '20px', height: '30px' }} />}
    extraClick={() => {
        Toast.info( '点击图标', 2 );
    }}
>
    <div>内容项描述内容项描述内容项描述内容项描述</div>
</ListItem>
```


