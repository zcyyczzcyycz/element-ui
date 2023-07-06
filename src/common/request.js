import axios from "axios";
import { Loading, Message } from 'element-ui'
import Vue from 'vue'

Vue.use(Loading);


let loading;

function startLoading() { //开始加载
    loading = Loading.service({
        lock: true,
        text: '拼命加载中...',
        background: 'rgba(0, 0, 0, 0.8)',
    })
}

function endLoading() { //加载结束
    loading.close()
}
// 创建请求实例 并配置
const service = axios.create({
        baseURL: process.env.VUE_APP_BASE_URL,
        timeout: 5000, // request timeout
        method: 'post',
    })
    // 请求拦截器
service.interceptors.request.use((config) => {
    // 加载loading
    startLoading()
    return config
}, (error) => {
    // 关闭loading
    endLoading()
    Message.error('请求超时')
})

// 响应拦截器
service.interceptors.response.use((res) => {
    console.log('res', res);
    // 关闭loading
    endLoading()
    res.data.code > 0 ? Message({
        message: res.data.msg || window.msg_success,
        type: 'success'
    }) : Message({
        message: res.data.msg || window.msg_error,
        type: 'warning'
    });
    return res.data
}, (err) => {
    endLoading()
    Message.error(err)
})

export default service