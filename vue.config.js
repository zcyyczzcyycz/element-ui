const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    devServer: {
        proxy: {
            '/api': {
                target: 'http://xhwc.local.misaka-net.com',
                pathRewrite: { '^/api': '' }
            },
            '/map': {
                target: 'https://apis.map.qq.com',
                pathRewrite: { '^/map': '' }
            }
        }
    }
})