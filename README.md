# vue-element-admin-zozo

## 第一章 基础篇

1. 安装 less 

   - npm install --save less less-loader@6.0.0
   - 在main.js中import less from 'less'
   - Vue.use(less)

2. 确认alias配置 vuecli4 已经自带 不需要自己配置

3. 安装 Element-UI

   - npm install --save elementui

   - import Element from 'element-ui'

     import 'element-ui/lib/theme-chalk/index.css'

   - Vue.use(Element)

4. Webpack相关配置已经由VueCli搞定,之后遇到问题再回来搞

5. Mock.js - 模拟请求数据(掌握)

6. Cookie.js

## 第二章 登录篇

1. 如何让路由第一次进入显示登录界面?
   - 需要重定向
   - 如何重定向,判断登录状态
   - 未登录才重定向至login
   - 如何判断未登录 通过设置token ,判断cookie 确定登录状态
   - if !hasToken 重定向 看permission.js
   - 判断完呢, 设置导航守卫 router.beforeEach()
   - 以上就是规范流程
   - 相关文件罗列 
     - src/permission 看这里然后通过导入的模块找到其他相关模块
     - router user.js index.js
     - vuex user.js index.js getters.js
2. 设置以上需要的路由和vuex
   - 相关api 相关utils 相关token 相关vuex 相关网络请求axios 相关cookies
   - 
3. 布局利用element框架
4.  还可以通过登录的账号进行权限分析
5. 遇到问题  error  'Router' is not defined  no-undef
   - 名字写错了
6. 点击登录没反应,promise不进行
   - 查看vuex,token = undefined , 服务器没有响应,没有设置mock.js和dev.
   - 配置vue.config.js
   - 然后是api/user没写
   - 最后是permission 写错 ,addRoute => addRoutes
7. 登录篇 
   - 入手方法,直接编写登录页面,实现功能 按照以上的操作实现。

## 第三章 Layout 布局和侧边栏

1. 侧边栏Sidebar
2. Layout
3. Cannot read property 'getters' of undefined
   - 大概率是vuex modules有文件没写完
4. 布局错乱
   - 全局布局不知道什么时候删了
   - 通过f12检查css,查不到相关css设置
5. 先导入所有css,先把基础功能实现,再去写样式,提高效率
6. 

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

