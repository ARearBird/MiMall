import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'

Vue.config.productionTip = false

new Vue({
  store,
  router,   // 当Key和Value一样时，就可以省略Value值。"router:router"
  render: h => h(App)
}).$mount('#app')
