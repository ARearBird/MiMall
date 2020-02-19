module.exports = {
    devServer:{
        host:'localhost',
        port:8080,
        proxy:{
            '/api':{        // 拦截 - 转发
                target:'https://www.baidu.com',
                changeOrigin:true,
                pathRewrite:{
                    'api':''
                }
            }
        }
    }
}