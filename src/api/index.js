import ajax from '@/common/request'

export default {
    // 登录
    login(data) {
        return ajax({
            url: '/admin/login',
            data
        })
    },
}