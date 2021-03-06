import { login, logout, getInfo } from '@/api/user'
import { getToken, setToken, removeToken } from '@/utils/auth'
import router, { resetRouter } from '@/router'



const state = {
    token: getToken(),
    name: '',
    avatar: '',
    introduction: '',
    roles: []
}


const mutations = {
    // 同步操作 , 大写 
    SET_TOKEN: (state, token) => {
        state.token = token
    },
    SET_INTRODUCTION: (state, introduction) => {
        state.introduction = introduction
    },
    SET_NAME: (state, name) => {
        state.name = name
    },
    SET_AVATAR: (state, avatar) => {
        state.avatar = avatar
    },
    SET_ROLES: (state, roles) => {
        state.roles = roles
    }
}

const actions = {
    // 异步操作
    login ({ commit }, userInfo) {
        const { username, password } = userInfo
        console.log(`I'm login`);
        return new Promise((resolve, reject) => {
            // .trim() 去除用户名里的空格
            login({ username: username.trim(), password: password }).then(response => {
                const { data } = response
                commit('SET_TOKEN', data.token)
                setToken(data.token)
                console.log(this.state.token);
                resolve()
            }).catch(error => {
                reject(error)
            })
        })
    },

    // get_user_info 与 login分开
    getInfo ({ commit, state }) {
        return new Promise((resolve, reject) => {
            getInfo(state.token).then(response => {
                const { data } = response
                if (!data) {
                    reject('Verification failed, please Login again.')
                }
                const { roles, name, avatar, introduction } = data
                if (!roles || roles.length <= 0) {
                    // 权限不能为无
                    reject('getInfo:role must be a non-null array!')
                }
                commit('SET_ROLES', roles)
                commit('SET_NAME', name)
                commit('SET_AVATAR', avatar)
                commit('SET_INTRODUCTION', introduction)
                resolve(data)
            }).catch(error => {
                reject(error)
            })
        })
    },
    // user logout 注销
    logout ({ commit, state, dispatch }) {
        return new Promise((resolve, reject) => {
            logout(state.token).then(() => {
                commit('SET_TOKEN', '')
                commit('SET_ROLES', [])
                removeToken()
                resetRouter()
                dispatch('tagsView/delAllViews', null, { root: true })
                resolve()
            }).catch(error => {
                reject(error)
            })
        })
    },
    // remove token
    resetToken ({ commit }) {
        return new Promise(resolve => {
            commit('SET_TOKEN', '')
            commit('SET_ROLES', [])
            removeToken()
            resolve()
        })
    },
    // dynamically modify permissions 动态修改权限
    //   异步函数
    async changeRoles ({ commit, dispatch }, role) {
        const token = role + '-token'
        // 默认admin-token
        commit('SET_TOKEN', token)
        setToken(token)
        const { roles } = await dispatch('getInfo')
        resetRouter()

        // generate accessible routes map based on roles 根据权限生成路由
        const accessRoutes = await dispatch('permission/generateRoutes', roles, { root: true })
        // 动态添加路由
        router.addRoutes(accessRoutes)
        // 重置页面
        dispatch('tagsView/delAllViews', null, { root: true })
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}


