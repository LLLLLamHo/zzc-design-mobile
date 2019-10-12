全局提示

## API

适用平台：WEB


## Prompt

| 属性        | 说明                                               | 类型     | 默认值     |
| ----------- | -------------------------------------------------- | -------- | ---------- |
| prefixCls   | 组件的公用className前序                            | string   | zds-prompt |
| className   | 定义主体额外className                              | string   | ''         |
| style       | 自定义样式                                         | object   | {}         |
| mode        | prompt类型(可选 defautl,info,click,info*click)     | string   | 'defautl'  |
| type        | 状态类型（可选 defautl,warn,success                | string   | 'defautl'  |
| onClick     | 点击回调函数                                       | function | 无         |
| contextText | 设置通知内容                                       | string   | ''         |
| lineClamp   | 最大溢出隐藏行数,只有通过contextText传入内容才生效 | number   | 0          |

### 可以通过两种方式传入内容
- 通过contextText传入字符串
- 通过Prompt标签包裹，传入子组件（更好自定义内容）

简单的调用demo

```jsx
<Prompt
    lineClamp={3}
    mode='info'
    contextText='设置最多展示3行'
/>
<Prompt>
    <p>中立提示文案</p>
</Prompt>
```

