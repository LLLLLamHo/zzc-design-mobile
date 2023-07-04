<h1 align="center">zzc-design-mobile 3</h1>
<p align="center">租租车-移动端UI组件库</p>
<p align='center'>
<img alt='npm' src='https://img.shields.io/npm/v/zzc-design-mobile'/>
<img alt='npm' src='https://img.shields.io/npm/dw/zzc-design-mobile'/>
<img alt='NPM' src='https://img.shields.io/npm/l/zzc-design-mobile'/>
<img alt='zzc' src='https://img.shields.io/badge/company-%E7%A7%9F%E7%A7%9F%E8%BD%A6-blue'/>
<img alt='team' src='https://img.shields.io/badge/team-IRC--FE-yellow'/>
</p>


这是一个基于React实现的UI组件框架。

[查看官网](https://lllllamho.github.io/zzc-design-mobile/index.html)

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

- IOS9和安卓4.4以上版本。

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

#### 温馨提示

UI组件每一个的调用和报错都会提交统计。如果不是十分必要，请勿关闭统计功能。这样我们会更好定位错误位置以及组件的使用情况。

如果必须关闭组件的统计功能的话，可以在window作用域下注入变量：`ZDS_STOP_TJ = true`,即可禁用统计。



