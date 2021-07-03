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
2. 设置以上需要的路由和vuex
   - 
3. 布局利用element框架
4.  还可以通过登录的账号进行权限分析



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

