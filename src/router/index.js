import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '@/views/login'
import Admin from '@/views/admin'
import Test from '@/views/admin/chilldren/test'
import Test2 from '@/views/admin/chilldren/test2'

Vue.use(VueRouter)

const routes = [
    { path: '/', redirect: '/login' },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/admin',
        component: Admin,
        name: 'admin',
        redirect: '/admin/test',
        children: [{
                path: 'test',
                component: Test,
                meta: {
                    id: 1
                },
                name: 'test',
            },
            {
                path: 'test2',
                component: Test2,
                meta: {
                    id: 2
                },
                name: 'test2',
            },
        ]
    },

]

// 阻止点击相同路由报错
const VueRouterPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(to) {
    return VueRouterPush.call(this, to).catch(err => err)
}

const router = new VueRouter({
    routes
})

export default router