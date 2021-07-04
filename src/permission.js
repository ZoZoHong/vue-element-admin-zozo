import router from "@/router";
import store from "@/store";
import { Message } from "element-ui";
import NProgress from "nprogress";
import 'nprogress/nprogress.css'
import { getToken } from "@/utils/auth";
import getPageTitle from "@/utils/get-page-title";
import nProgress from "nprogress";

// 配置进度条
NProgress.configure({ showSpinner: false })
// 白名单
const whiteList = ['/login', 'auth-redirect'] //no redirect whitelist

router.beforeEach(async (to, from, next) => {
    // 打开进度条
    NProgress.start()
    // 设置页面标题
    document.title = getPageTitle(to.meta.title)
    // 是否登录
    const hasToken = getToken()
    if (hasToken) {
        if (to.path === '/login') {
            // to 即将进入的页面,但是我已经登录了
            next({ path: '/' })
            NProgress.done()
        } else {
            // 判断有没有权限
            const hasRoles = store.getters.roles && store.getters.roles.length > 0
            if (hasRoles) {
                next()
            } else {
                try {
                    // get user info
                    // note: roles must be a object array! such as: ['admin'] or ,['developer','editor']
                    const { roles } = await store.dispatch('user/getInfo')
                    //生成可访问路由
                    const accessRoutes = await store.dispatch('permission/generateRoutes', roles)
                    // 添加可访问路由
                    router.addRoute(accessRoutes)
                    // hack method to ensure that addRoutes is complete
                    // set the replace: true, so the navigation will not leave a history record 不留下历史记录
                    next({ ...to, replace: true })
                } catch (error) {
                    // 报错就清除token然后去登录界面重新登录
                    await store.dispatch('user/resetToken')
                    Message.error(error || 'Has Error')
                    next(`/login?redirect=${to.path}`)
                    nProgress.done()
                }
            }
        }
    } else {
        // 我没令牌啊
        if (whiteList.indexOf(to.path) !== -1) {
            // 在白名单里面 直连
            next()
        } else {
            // 没有权限的页面重定向到登录页面
            next(`/login?redirect = ${to.path}`)
            NProgress.done()
        }
    }

})



router.afterEach(() => {
    // 完成就结束掉进度条
    NProgress.done()
})