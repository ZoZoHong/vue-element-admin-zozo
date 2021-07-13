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
6. 不能触发侧边栏伸缩,父组件监听子组件的参数写错
7. 原本的侧边栏子菜单打得开,现在打不开
   - 问题定位 sidebaritem ![image-20210706161428574](https://gitee.com/zozo042233/zozo-picgo/raw/master/img/20210706161435.png)
8. 整体只是完成最初的布局,侧边栏 导航栏任务栏和显示所选内容
9. **大致编程步骤:**
   1. 画出组件树,划分好各个部分需要什么组件,一个单元一个单元完成
   2. 为了美观,先导入样式,先完成好功能,再研究布局
   3. 双向建立组件树,先完成根的搭建,侧边栏 和 app-main 左右两部分
   4. 主要完成侧边栏的布局和功能实现,先放入部分定义好的路由。
   5. SideBar - > sidebaritem , item , Link
   6. 其他的按照从上到下,完成组件树
   7. 去掉样式,自己写一遍样式
   8. 首页先不写,参与的组件比较多也有学习意义,直接复制没什么进步
   9. 完成以上内容,添加切换权限的组件及路由。
10. **navbar**
    1. screenfull 全屏组件
       - 安装 screenfull@4.2.0
       - 编写组件
    2. search 搜索组件
       1. 下拉组件不显示数据
          - 新的fuse导入多了一层 item 
       2. 改完后可以跳转,但是不知道修改了什么,不能跳转了
          - Cannot read property 'path' of undefined
          - val那里没有item这一层了
11. todolist
    1. 不显示todo项
       1. "filteredTodos" is not defined on the instance but referenced during render.
          1. 解决方法,找到对应位置,修改正确拼写,重新编译
    2. 布局 , 栅格化布局

## 第四章 组件封装

1. todolist 
2. 图表 (掌握)
   1. 完成demo后练习做一个自动生成二维图表的工具
   2. 显示不是想要的高度
      1. 解决办法:是配置项出错了, height:100% 写错了,即默认属性是100% -> height:300px
   3. data 的第一列 为x轴 第二列为y轴
3. 图标 svg (熟悉)

## 第五章 Mock Data

- 详见 

  [数据模拟]: https://panjiachen.github.io/vue-element-admin-site/zh/guide/essentials/mock-api.html#%E6%96%B0%E6%96%B9%E6%A1%88	"Mock 前后端分离"

  

- 新增数据

  

  

## 终章 添加功能 

加上自己喜欢的功能,各类工具箱,部署到githubio



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

