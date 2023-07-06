import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Plugin from '@/plugin'

Vue.use(Plugin)

window.msg_success = '加载成功'
window.msg_error = '加载失败'


new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')