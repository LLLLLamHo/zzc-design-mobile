动画组件

主要为我们提供组件的动画事件绑定以及class的添加和删除

## API

适用平台：WEB

| 属性          | 说明                                                 | 类型          | 默认值 |
| ------------- | ---------------------------------------------------- | ------------- | ------ |
| animationName | 传入动画的名称                                       | object/string | ''     |
| visible       | 控组组件的动画状态，true执行enter操作，相反执行leave | boolean       | false  |
| onEnd         | 动画结束触发的回调函数（返回enter或leave）                            | function      | null   |

* 注意的是，当执行enter动画的时候，触发visible进行改变并不能对动画生效，必须等到onEnd返回的type是enter之后，才能进行更改。

使用例子：

jsx

```jsx
import React, {Component} from 'react';
import './index.scss';
import '../../../style/style.scss';
import { Button, Animate } from 'zzc-design-mobile';

export default class App extends Component {

    constructor( props ) {
        super( props );
        this.state = {
            visible: false
        };
    }

    showAnimate () {
        this.setState( {
            visible: true
        } );
    }

    closeCallback ( type ) {
        if ( type == 'enter' ) {
            this.setState( {
                visible: false
            } );
        }
    }

    render () {
        const { visible } = this.state;
        return (
            <div className='zzc-demo'>
                <div className='zzc-demo-header'>
                    <h1 className='zzc-demo-title'>Animate 动画</h1>
                </div>
                <div className='zzc-demo-body'>
                    <Button onClick={() => { this.showAnimate(); }}>点击触发动画</Button>
                    <Animate
                        visible={visible}
                        animationName={{
                            enter: 'change-enter',
                            enterActive: 'change-enter-active',
                            leave: 'change-leave',
                            leaveActive: 'change-leave-active'
                        }}
                        onEnd={( type ) => {
                            this.closeCallback( type );
                        }}
                    >
                        <div
                            style={{
                                background: visible ? 'blue' : '#fff'
                            }}
                            className='change-box'
                        >动画</div>
                    </Animate>
                </div>
            </div>

        );
    }
}
```

scss

```scss
.change-box{
    font-size: .28rem;
    background: #fff;
    width: 4rem;
    height: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #e1e1e1;
}
.change-enter{
    position: absolute;
    background: #fff;
    animation-duration: 1s;
    animation-fill-mode: both;
    animation-timing-function: cubic-bezier(.47,.65,.61,.9);
    animation-play-state: paused;
    &.change-enter-active {
        -webkit-animation-name: changeEnter;
        animation-name: changeEnter;
        -webkit-animation-play-state: running;
        animation-play-state: running;
    }
}

.change-leave{
    position: absolute;
    background: blue;
    animation-duration: 1s;
    animation-fill-mode: both;
    animation-play-state: paused;
    &.change-leave-active {
        -webkit-animation-name: changeLeave;
        animation-name: changeLeave;
        -webkit-animation-play-state: running;
        animation-play-state: running;
    }
}

@keyframes changeEnter {
    0% {
        background: #fff;
    }
    100% {
        background: blue;
    }
}

@keyframes changeLeave {
    0% {
        background: blue;
    }
    100% {
        background: #fff;
    }
}
```

onEnd函数会返回一个参数，代表当前动画的状态，返回`enter`或`leave`。