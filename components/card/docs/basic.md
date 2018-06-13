卡片布局

## API

适用平台：WEB

## Card

| 属性      | 说明                    | 类型    | 默认值   |
| --------- | ----------------------- | ------- | -------- |
| prefixCls | 组件的公用className前序 | string  | zzc-card |
| full      | 是否占满一行            | boolean | false    |
| className | 样式类名                | string  | 无       |
| style     | 自定义样式              | object  | {}       |

## Header

| 属性      | 说明                    | 类型    | 默认值          |
| --------- | ----------------------- | ------- | --------------- |
| prefixCls | 组件的公用className前序 | string  | zds-card-header |
| title     | 标题文字                | string  | 无              |
| extra     | 辅助文字                | string  | 无              |
| noBorder  | 不显示分割线          | boolean | false           |
| className | 样式类名                | string  | 无              |
| style     | 自定义样式              | object  | {}              |

*注意：如果再Header中传入子元素，则会不渲染`title`和`extra`。

```js
//这时只渲染h1标签
<Card.Header title="卡片标题" extra="this is extra"><h1>自定义标题</h1></Card.Header>
```

## Body

| 属性            | 说明                                           | 类型    | 默认值        |
| --------------- | ---------------------------------------------- | ------- | ------------- |
| prefixCls       | 组件的公用className前序                        | string  | zds-card-body |
| full            | 是否占满一行                                   | boolean | false         |
| noBorder        | 是否显示分割线                                 | boolean | false         |
| className       | 样式类名                                       | string  | 无            |
| style           | 自定义样式                                     | object  | {}            |
| borderDirection | 定义分割线开口位置（默认居中）, `left`/`right` | string  | 无            |

```JavaScript
<Card>
    <Card.Header title="卡片标题" extra="this is extra" />
    <Card.Body>
    <div className="card-box1">
            <p>文本内容</p>
        </div>
    </Card.Body>
    <Card.Body>
        <div className="card-box1">
            <p>文本内容</p>
        </div>
    </Card.Body>
</Card>
```

## Footer

| 属性      | 说明                    | 类型    | 默认值          |
| --------- | ----------------------- | ------- | --------------- |
| prefixCls | 组件的公用className前序 | string  | zds-card-footer |
| noBorder  | 是否显示分割线          | boolean | false           |
| className | 样式类名                | string  | 无              |
| style     | 自定义样式              | object  | {}              |

```JavaScript
<Card.Footer>
    <Button noBorder full>按钮</Button>
</Card.Footer>
```

