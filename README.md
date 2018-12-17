脚手架：create-react-app
<br/>
技术栈：react, react-router(4.0+), redux, react-redux, redux-saga, mock.js
<br/>
组件库：anted
<br/>

### 先占个坑，会先将页面组织起来，然后逐渐优化

- css方案会酌定选择。
  

### 项目流程

- 登陆(权限登陆)，根据权限展示相应菜单
- 本系统会结合常用的第三方库来进行构建，包括图标，svg的方案选用。图表的绘制，动画功能的展示。
- 最后会对该项目进行优化，利用自己对react，redux的理解，进行优化渲染效率，使数据流向更加明确。
- 本篇章会采用函数式编程来进行构建基础应用

### CRA(create-react-app)如何配置webpack

1.因为CRA已经将webpack这样复杂的工具给封装起来了，但是如果我们需要扩展其中的loader或者插件，怎么办。

2.在package.json里面，有一个命令叫做eject，直接npm run eject就可以了。

3.这样我们就享受不了react-script给我们自动升级包的福利了，需要自己手动进行升级



