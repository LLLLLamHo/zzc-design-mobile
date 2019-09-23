按钮组件

点击后会触发一个操作。

## API

适用平台：WEB

### EasyCalculator

| 属性            | 说明                                       | 类型     | 默认值     |
| --------------- | ------------------------------------------| -------- | ---------- |
| defaultValue    | 初始值                                     | number   |          |
| min              | 最小值                                     | number   | Infinity       |
| max               | 最大值                                   | number  | -Infinity      |
| precision        | 数值精度                                     | number  |       |
| step         | 每次改变步数，可以为小数                           | number | 1         |
| value           | 当前值                                  | number   | 无         |
| onChange          | 变化回调                              | number  | Function(value: number | string)      |

```JavaScript
<EasyCalculator defaultValue={0} />

<EasyCalculator defaultValue={3} step={2} min={0} max={10} />

<EasyCalculator defaultValue={1.2} step={0.2} min={0} max={10} />
```
