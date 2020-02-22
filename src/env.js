/**
 * 一下是 CORS 下面的配置
 * 代理跨域的话只需在项目启动时修改 vue.config.js 即可
 */

let baseURL;

// 根据不同的环境输出不同的 URL 地址
// Node 里面有个process进程，process.env.NODE_ENV 可以获取当前传过来的参数。
switch (process.env.NODE_ENV) {
    case 'development':
        baseURL = 'http://dev-mall-pre.springboot.cn/api';
        break;
    case 'test':
        baseURL = 'http://test-mall-pre.springboot.cn/api';
        break;
    case 'prod':
        baseURL = 'http://mall-pre.springboot.cn/api';
        break;
    default:
        baseURL = 'http://mall-pre.springboot.cn/api';
        break;
}

export default {
    baseURL
}