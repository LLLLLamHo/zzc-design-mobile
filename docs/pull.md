### 贡献指南

这边文章会介绍如何为ZZC Design Mobile贡献自己的力量，请在你要提issue或者pull request之前花几分钟来阅读以下。

### 行为准则

无论你是在哪一个部门，只要使用到React进行页面开发，都可以使用ZZC Design Mobile来简化我们日常的开发工作。任何提交的代码，只能用于React的ui组件用途，不能提交非ui组件，并且组件内不能纯在任何http或https等和后端交互的协议和动作。

### 透明的开发

每一个组件的开发都会在Github上进行开发，不管是固定人员开发或者是外部提交组件，都需要经过同样的流程进行review。

### Bugs

当在使用的过程中发现出现了bug的情况下，应该及时提交issue告知我们，让我们及时fix。最好的能提供如何重现的代码片段让我们更容易重现问题。

### 新增功能

如果你有改进我们的API或者想到了一个新的功能，可以通过issue告知我们。

### 开发组件需要遵守的一些规则

- 所有的组件都应该写在components里面
- 每一个组件内部都必须提供以下的文件
    - \_\_test\_\_ 用于测试
    - components 子组件和当前开发组件的入口js文件
    - docs 当前组件的文档说明
        - config.json 文档配置，用于生成网站
    - index.scss
    - index.tsx
- 每一个组件必须提供完整的ts参数说明文件
- 所有的js文件必须使用ts或者tsx进行编写，要符合typescript和eslint的规范
- demo文件中必须提供对应开发组件的demo页面，可以参考现有的demo页面进行复制，然后二次开发
- 所有组件只要提供到默认文案，都需要在i18n中提供相对应的字段，要求支持中文简体、中文繁体和英文

### 组件统计

每一个组件必须有2处统计代码，分别是统计调用情况和错误情况。

##### 统计组件调用代码：

```JavaScript
// 组件入口js   ./components/button.tsx
import { zzcComponentUse } from '../../_util/gtag'; // 引入统计代码

constructor( props ) {
    super( props );
    zzcComponentUse( 'Button', '组件渲染' );
}
```

##### 统计代码报错代码：

在组件文件下的`index.tsx`是作为容错组件进行包裹。

```JavaScript
import React, { PureComponent } from 'react';
import Error from '../_util/Error'; // 引用容错组件
import Button from './components/button';
import {ButtonProps} from './propsType';

export default class ButtonEntrance extends PureComponent<ButtonProps, any> {
    render() {
        return (
            <Error componentName='Button'>
                <Button {...this.props} />
            </Error>
        );
    }
}
```

* 容错组件使用的`typescript`的`props`统一使用组件自身的`propsType`。
* 需要组件的是class的命名统一使用`<组件名>Entrance`,Error组件接收的参数`componentName = <组件名>`。
* 理论上直接将传入的参数全数传入对应组件即可。

### 开发流程

#### 组件开发
组件开发流程，在根目录下执行`npm install`。

```Shell
npm run svgo //清除多余的svg标识
npm run build //编译整个component到es目录（es6文件）
npm run watch //动态编译整个component到es目录（es6文件）
npm run compile //编译整个es到lib目录（es5文件），并将lib文件复制到demo文件中的node_modlues文件中
npm run test //运行单元测试
```

#### demo开发
```Shell
npm run build //编译demo
npm run watch //编译demo
npm run server //编译demo本地服务
npm run publish //编译demo
```
`publish`和`build`、`watch`有一点不一样，因为`build`和`watch`是开发环境，所以webpack打包的时候会将`zzc-design-mobile`指向外层文件的es文件中去获取。

所以在开发中需要在根目录运行watch，demo目录中也要同时运行watch

#### 本地开发

- 在根目录下运行watch编译ts文件为js文件。
- 在demo目录下运行server动态编译demo文件进行调试。