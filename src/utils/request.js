import axios from 'axios'
import { MessageBox, Message } from 'element-ui'
import store from '@/store'
import { getToken } from '@/utils/auth'



// 创建axios实例

const service = axios.create({
    baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
    // 此处以vue配置为准,作为纯前端项目,此处使用了mock模拟的服务端
    // withCredentials: true, // send cookies when cross-domain requests
    timeout: 5000 //request timeout
})

// request 拦截器

service.interceptors.request.use(
    config => {
        // do something before request is sent
        // let each request carry token
        // ['X-Token'] is a custom headers key
        // please modify it according to the actual situation
        console.log('kksk!');
        if (store.getters.token) {
            config.headers['X-Token'] = getToken()
        }
        return config
    },
    error => {
        console.log(error);
        return Promise.reject(error)
    }
)


// response拦截器
service.interceptors.response.use(
    /**
     * 如果你想获取http信息,比如headers 或 status 
     * Please return  response => response
     */

    /**
     * Determine the request status by custom code
     * Here is just an example
     * You can also judge the status by HTTP Status Code
     */
    response => {
        const res = response.data
        console.log('kksk');
        // if the custom code is not 20000, it is judged as an error.
        if (res.code !== 20000) {
            Message({
                message: res.message || 'Error',
                type: 'error',
                duration: 5 * 1000
            })

            // 50008: Illegal token; 50012: Other clients logged in; 50014: Token expired;
            if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
                // to re-login
                MessageBox.confirm('You have been logged out, you can cancel to stay on this page, or log in again', 'Confirm logout', {
                    confirmButtonText: 'Re-Login',
                    cancelButtonText: 'Cancel',
                    type: 'warning'
                }).then(() => {
                    store.dispatch('user/resetToken').then(() => {
                        location.reload()
                    })
                })
            }
            return Promise.reject(new Error(res.message || 'Error'))
        } else {
            return res
        }
    },
    error => {
        console.log('err' + error) // for debug
        Message({
            message: error.message,
            type: 'error',
            duration: 5 * 1000
        })
        return Promise.reject(error)
    }
)

export default service