简易计算器组件

## API

适用平台：WEB

### Steps

| 属性         | 说明                     | 类型   | 默认值                 |
| ------------ | ------------------------ | ------ | ---------------------- |
| className    | 步骤条类名                   | string | 无                     |
| style        | 步骤条样式                   | object | 无                     |
| current      |    指定当前步骤，从 0 开始记数  | number |        0                |
| direction    | 可选值 vertical/horizontal   | string | horizontal               |
| alignCenter  | 居中对齐                      | boolean | false              |

### Step

| 属性         | 说明                     | 类型   | 默认值                 |
| ------------ | ------------------------ | ------ | ---------------------- |
| className    | 步骤类名                   | string | 无                     |
| style        | 步骤样式                   | object | 无                     |
| title        | 步骤的标题                  | string\|ReactNode |        无    |
| direction    | 步骤的详情描述，可选           | string\|ReactNode | 无               |
| tag          | 步骤的标签                   | string\|ReactNode | 无              |

```jsx
<h5>居中的步骤条</h5>
<Steps current={1} alignCenter={true}>
    <Steps.Step title="行程前"/>
    <Steps.Step title="行程中"/>
    <Steps.Step title="行程结束"/>
</Steps>

<h5>竖式步骤条</h5>
<Steps direction="vertical" current={2}>
    <Steps.Step title="行程前"/>
    <Steps.Step title="行程中"/>
    <Steps.Step title="行程结束"/>
</Steps>

<h5>带标签步骤条</h5>
<Steps current={1}>
    <Steps.Step tag="免费取消" title="订单确定"/>
    <Steps.Step tag="扣除一天租金" className="demo-step" title="取车前48小时" description={description}/>
    <Steps.Step tag="扣除全部租金" className="demo-step" title="取车" description={description}/>
    <Steps.Step className="demo-step" title="行程结束"/>
</Steps>
```
