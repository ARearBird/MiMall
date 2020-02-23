import Vue from 'vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios' 
import App from './App.vue'
// import env from './env'
// 是靠路径前面的 './' 来区分是不是插件的；如果没有 './' 则认为是一个插件！！
// 一个好的习惯：把插件放在上面，把主件放在下面

/**
 * import 和 require 的区别：
 * import 是预编译加载，在编译的时候，import文件就会被加载进来，就被写入到内存当中。
 * require是在执行的时候加载。当mock是false的时候是不会被加载的。
 */
// mock开关
const mock = true;
if (mock) {
  require('./mock/api');
}


// 根据前端的跨域方式做调整。这里是按照接口代理的方式
axios.defaults.baseURL = '/api';  // 前后端分离的项目，按照江湖规矩：习惯叫 /api
// 设置超时时间为 8s
axios.defaults.timeout = 8000;
// 根据环境变量来获取不同的请求地址(CORS跨域)
// axios.defaults.baseURL = env.baseURL;


// 接口错误拦截
axios.interceptors.response.use(function(response){
  // 获取到接口返回的值
  let res = response.data;
  // 当状态码是 0 的时候代表成功。（这些值是自定义的。希望状态码能够按照业务划分）
  if (res.status == 0) {
    return res.data;
  } else if (res.status == 10) {    // 未登录
    // 跳转到登录页面。注意：main.js里面用路由去跳转是没用的。路由是挂在Vue实例里面的，在每一个页面(app.vue)里面才能用路由去跳转
    window.location.href = '/#/login';  // 本次是 “哈希路由”（有#的）
  } else {
    alert(res.msg);
  }
});

// 注册,加载插件
Vue.use(VueAxios, axios);

// 生产环境的提示
Vue.config.productionTip = false

new Vue({
  store,
  router,   // 当Key和Value一样时，就可以省略Value值。"router:router"
  render: h => h(App)
}).$mount('#app')
