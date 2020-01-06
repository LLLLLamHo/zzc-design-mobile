gu骨架屏

## API

适用平台：WEB

## Skeleton

| 属性      | 说明                    | 类型   | 默认值       |
| --------- | ----------------------- | ------ | ------------ |
| prefixCls | 组件的公用className前序 | string | zzc-skeleton |
| className | 样式类名                | string | 无           |
| style     | 自定义样式              | object | {}           |

## SkeletonBox

| 属性      | 说明                    | 类型   | 默认值           |
| --------- | ----------------------- | ------ | ---------------- |
| prefixCls | 组件的公用className前序 | string | zzc-skeleton-box |
| className | 样式类名                | string | 无               |
| style     | 自定义样式              | object | {}               |
| justify   | justify-content样式     | string | 'flex-start'     |
| align     | align-items样式         | string | 'flex-start'     |
| direction | flex-direction样式      | string | 'row'            |

## SkeletonItem

| 属性      | 说明                    | 类型   | 默认值           |
| --------- | ----------------------- | ------ | ---------------- |
| prefixCls | 组件的公用className前序 | string | zzc-skeleton-box |
| className | 样式类名                | string | 无               |
| style     | 自定义样式              | object | {}               |
| height    | 高度                    | string | '100%'     |
| width     | 宽度                    | string | '100%'     |

```jsx
// 通过js调用
<Skeleton>
    <Skeleton.Box justify='space-between'>
        <Skeleton.Item height='34px' width='100px' />
        <Skeleton.Item height='34px' width='80px' />
    </Skeleton.Box>
    <Skeleton.Box style={{ marginTop: '20px' }}>
        <Skeleton.Item height='34px' width='100%' />
    </Skeleton.Box>
    <Skeleton.Box style={{ marginTop: '20px' }}>
        <Skeleton.Item height='54px' width='100%' />
    </Skeleton.Box>
</Skeleton>
```
```html
<!-- 直接在html内编写样式和标签 -->
<!-- 注意在代码中引入样式 -->
<div class="zds-skeleton">
    <div class="zds-skeleton-box" style="align-items: flex-start; justify-content: flex-start; flex-direction: row;">
        <div class="zds-skeleton-item" style="height: 34px; width: 222px;"></div>
    </div>
    <div class="zds-skeleton-box" style="margin-top: 20px; align-items: flex-start; justify-content: flex-start; flex-direction: row;">
        <div class="zds-skeleton-item" style="height: 34px; width: 100%;"></div>
    </div>
    <div class="zds-skeleton-box" style="margin-top: 20px; align-items: flex-start; justify-content: flex-start; flex-direction: row;">
        <div class="zds-skeleton-item" style="height: 54px; width: 100%;"></div>
    </div>
</div>
```

