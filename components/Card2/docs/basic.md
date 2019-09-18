卡片布局

## API

适用平台：WEB

## Card

| 属性      | 说明                    | 类型   | 默认值   |
| --------- | ----------------------- | ------ | -------- |
| prefixCls | 组件的公用className前序 | string | zzc-card |
| className | 样式类名                | string | 无       |
| style     | 自定义样式              | object | {}       |

## Card.Header

| 属性       | 说明                    | 类型                                         | 默认值   |
| ---------- | ----------------------- | -------------------------------------------- | -------- |
| prefixCls  | 组件的公用className前序 | string                                       | zzc-card |
| className  | 样式类名                | string                                       | 无       |
| style      | 自定义样式              | object                                       | {}       |
| title      | title内容               | string                        \| JSX.Element | null     |
| extra      | title右边内容           | string                        \| JSX.Element | null     |
| align      | 自定义样式              | 'center' \| 'top' \| 'bottom'                | 'center' |
| extraClick | extra点击回调           | Function                                     | null     |

## Card.Body

| 属性      | 说明                    | 类型   | 默认值   |
| --------- | ----------------------- | ------ | -------- |
| prefixCls | 组件的公用className前序 | string | zzc-card |
| className | 样式类名                | string | 无       |
| style     | 自定义样式              | object | {}       |


```JavaScript
<Card2>
    <Card2.Header
        title={<p>只有标题</p>}
    />
</Card2>
<Card2>
    <Card2.Header
        title={<p>标题加上图标</p>}
        extra={<Icon type='success' style={{ width: '20px', height: '30px' }} />}
    />
</Card2>
 <Card2>
    <Card2.Header
        title={<p>带有内容的Item</p>}
        extra={<Icon type='success' style={{ width: '20px', height: '30px' }} />}
        extraClick={() => {
            Toast.info( '点击图标', 2 );
        }}
    >
        <div>内容项描述内容项描述内容项描述内容项描述</div>
    </Card2.Header>
    <Card2.Body>
        <ol>
            <li><p>文本信息</p></li>
            <li><p>文本信息</p></li>
            <li><p>文本信息</p></li>
        </ol>
    </Card2.Body>
</Card2>
```


