import Cookies from 'js-cookie'

// 在此定义相关函数,如果以后更换模块不需要整个项目都修改,这需要修改此处就行了

const TokenKey = 'Admin-Token'
export function getToken () {
    return Cookies.get(TokenKey)
}
export function setToken (token) {
    return Cookies.set(TokenKey, token)
}
export function removeToken () {
    return Cookies.remove(TokenKey)
}