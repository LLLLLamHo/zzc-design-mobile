按钮组件

点击后会触发一个操作。

## API

适用平台：WEB

属性 | 说明 | 类型 | 默认值
|----|-----|------|------|
| prefixCls | 组件的公用className前序 | string  | zds-button |
| type    | 按钮类型，可选值为`default`/`main`/`main-lh`/`main-dk`/`sub`/`sub-lh`/`sub-dk`或者不设  |   string   |   `default`  |
| size    | 按钮大小，可选值为`lg`、`sm`、`xs` | string | 无|
| activeStyle  | 点击反馈的自定义样式 (设为 false 时表示禁止点击反馈) | {}/false | {} |
| activeClassName  | 点击反馈的自定义类名 | string |  |
| disabled   | 设置禁用  | boolean |    false  |
| onClick    | 点击按钮的点击回调函数 | function |   无  |
| style    | 自定义样式 |   Object  | 无 |
| inline     | 是否设置为行内按钮  | boolean |   false  |
| className  |  样式类名 | string | 无 |
| ghost  |  是否为空中按钮 | boolean | false |
| noBorder  |  不显示边框 | boolean | false |
| noRadius  |  不显示圆角 | boolean | false |
