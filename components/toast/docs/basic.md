一种轻量级反馈/提示，可以用来显示不会打断用户操作的内容，适合用于页面转场、数据交互的等场景中。


### 规则
- 一次只显示一个 toast。
- 有 Icon 的 Toast，字数为 4-6 个；没有 Icon 的 Toast，字数不宜超过 14 个。


## API

适用平台：WEB
- `Toast.info(content, duration, onClose, parentNode, mask)`
- `Toast.success(content, duration, onClose, parentNode, mask)`
- `Toast.error(content, duration, onClose, parentNode, mask)`
- `Toast.waring(content, duration, onClose, parentNode, mask)`
- `Toast.loading(content, duration, onClose, parentNode, mask)`


组件提供了五个静态方法，参数如下：

| 属性       | 说明                            | 类型                    | 默认值 |
| ---------- | ------------------------------- | ----------------------- | ------ |
| content    | 提示内容                        | React.Element or String | 无     |
| duration   | 自动关闭的延时，单位秒          | number                  | 3      |
| onClose    | 关闭后回调                      | Function                | 无     |
| parentNode | 传入指定创建Toast到那个父级元素（可以通过原生js获取dom元素传入） | DOMElement              | null   |
| mask       | 是否显示透明蒙层，防止触摸穿透  | Boolean                 | true   |

> **注：**  duration = 0 时，onClose 无效，toast 不会消失；隐藏 toast 需要手动调用 hide

还提供了全局配置和全局销毁方法：

- `Toast.hide()`
