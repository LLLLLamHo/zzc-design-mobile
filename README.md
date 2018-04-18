## zzc-design-mobile

zzc-design-mobile是基于react开发的ui框架，用于租租车移动端的ui框架。
由产品设计统一规范的移动端统一样式交互的方案。

其中借鉴了antd的一些写法以及交互样式，并另外定制交互和样式。

### Install

```shell
npm install zzc-design-mobile --save-dev
```

### Development

```shell
npm run svgo //清除多余的svg标识
npm run build //编译整个component到es目录（es6文件）
npm run watch //动态编译整个component到es目录（es6文件）
npm run publish //编译整个es到lib目录（es5文件）
npm run build_demo //相当于执行publish并将lib文件复制到demo文件中的node_modlues文件中
npm run test //运行单元测试
```

### demo
```shell
npm run build //编译demo
npm run watch //编译demo
npm run publish //编译demo
```
`publish`和`build`、`watch`有一点不一样，因为`build`和`watch`是开发环境，所以webpack打包的时候会将`zzc-design-mobile`指向外层文件的es文件中去获取。

所以在开发中需要在根目录运行watch，demo目录中也要同时运行watch