一个简单的手势库

主要是将react0-compnent的Gesture搬过来。

## 调用方式

最简单的调用方式

```javascript
import Gesture from 'rc-gesture';

ReactDOM.render(
  <Gesture
    onTap={(gestureStatus) => { console.log(gestureStatus); }}
  >
    <div>container</div>
  </Gesture>,
container);

```

## API

适用平台：WEB

### 传入参数

| 属性         | 说明                                               | 类型    | 默认值 |
| ------------ | -------------------------------------------------- | ------- | ------ |
| direction    | 控制所需要的方向 ('all', 'vertical', 'horizontal') | string  | all    |
| enablePinch  | 允许缩放手势                                       | boolean | false  |
| enableRotate | 允许旋转手势                                       | boolean | false  |

### Tap&Press事件

| 属性       | 说明                      | 类型     | 默认值 |
| ---------- | ------------------------- | -------- | ------ |
| onTap      | 快速点击事件，少于251毫秒 | function |        |
| onPress    | 长按事件，超过251毫秒     | function |        |
| onPressOut | 长按事件结束事件          | function |        |

### Swipe

| 属性          | 说明         | 类型     | 默认值 |
| ------------- | ------------ | -------- | ------ |
| onSwipe       | 触发滑动事件 | function |        |
| onSwipeLeft   | 向左滑动     | function |        |
| onSwipeRight  | 向右滑动     | function |        |
| onSwipeTop    | 向上滑动     | function |        |
| onSwipeBottom | 向下滑动     | function |        |

### Pan

| 属性        | 说明         | 类型     | 默认值 |
| ----------- | ------------ | -------- | ------ |
| onPan       | 触发pan事件  | function |        |
| onPanStart  | 触发panStart | function |        |
| onPanMove   | 移动事件     | function |        |
| onPanEnd    | 移动结束事件 | function |        |
| onPanCancel | 移动结束事件 | function |        |
| onPanLeft   | 向下移动     | function |        |
| onPanRight  | 向下移动     | function |        |
| onPanTop    | 向下移动     | function |        |
| onPanBottom | 向下移动     | function |        |

### Pinch  

需要传入`props.enablePinch = true`，才能生效。

| 属性         | 说明            | 类型     | 默认值 |
| ------------ | --------------- | -------- | ------ |
| onPinch      | 触发缩放手势    | function |        |
| onPinchStart | 缩放开始        | function |        |
| onPinchMove  | 缩放进行中      | function |        |
| onPinchEnd   | 缩放结束        | function |        |
| onPinCancel  | 缩放取消        | function |        |
| onPinchIn    | 缩放的比率少于1 | function |        |
| onPinchOut   | 缩放的比率大于1 | function |        |

### Rotate

需要传入`props.enableRotate = true`，才能生效。

| 属性         | 说明            | 类型     | 默认值 |
| ------------ | --------------- | -------- | ------ |
| onRotate      | 触发旋转手势    | function |        |
| onRotateStart | 旋转开始        | function |        |
| onRotateMove  | 旋转进行中      | function |        |
| onRotateEnd   | 旋转结束        | function |        |
| onRotateCancel  | 旋转取消        | function |        |

## gestureStatus

在`start、move、end...`这类事件中会返回一个当前手势的状态，参数如下：


```typescript
export interface IGestureStauts {
    /* 触发start事件时记录的手势状态 */
    startTime: number;
    startTouches: Finger[];

    startMutliFingerStatus?: MultiFingerStatus[];

    /* 当前的手势状态 */
    time: number;
    touches: Finger[];

    mutliFingerStatus?: MultiFingerStatus[];

    /* 当移动时会计算出上一次触发事件时的手势状态和当前的手势状态做计算 */
    moveStatus?: SingeFingerMoveStatus;

    /* 是否长按 */
    press?: boolean;

    /* 是否为滑动*/
    swipe?: boolean;
    direction?: number;

    /* 是否缩放 */
    pinch?: boolean;
    scale?: number;

    /* 是否旋转 */
    rotate?: boolean;
    rotation?: number; // Rotation (in deg) that has been done when multi-touch. 0 on a single touch.
};
```