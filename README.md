# zzc-design-mobile

这是一个基于React实现的UI组件框架。

#### 简介
zzc-design-mobile是基于react开发的ui框架，用于租租车移动端的ui框架。
由产品设计统一规范的移动端统一样式交互的方案。

其中借鉴了antd的一些写法以及交互样式，并另外定制交互和样式。

#### 特性

- 开箱即用的高质量React组件
- 使用TypeScript开发，提供完整的类型定义文件
- 健全的使用文档以及demo
- 扩展性非常好，容易定义各种自定义样式

#### 支持环境

- IOS9和安卓4.4以上版本

#### 版本

- 稳定版 [![npm package](https://img.shields.io/npm/v/antd-mobile.svg?style=flat-square)](https://www.npmjs.com/package/zzc-design-mobile)

#### 安装

```Shell
npm install zzc-design-mobile --save-dev
```

#### 使用
zzc-design-mobile只支持`import`引入。不支持`cmd`。

引入：

```JavaScript
import { Alert, Modal } from 'zzc-design-mobile';
```

按需引入
```JavaScript
import Alert from 'zzc-design-mobile/lib/alert';
```

#### Development

```Shell
npm run svgo //清除多余的svg标识
npm run build //编译整个component到es目录（es6文件）
npm run watch //动态编译整个component到es目录（es6文件）
npm run publish //编译整个es到lib目录（es5文件）
npm run build_demo //相当于执行publish并将lib文件复制到demo文件中的node_modlues文件中
npm run test //运行单元测试
```

#### demo
```Shell
npm run build //编译demo
npm run watch //编译demo
npm run publish //编译demo
```
`publish`和`build`、`watch`有一点不一样，因为`build`和`watch`是开发环境，所以webpack打包的时候会将`zzc-design-mobile`指向外层文件的es文件中去获取。

所以在开发中需要在根目录运行watch，demo目录中也要同时运行watch