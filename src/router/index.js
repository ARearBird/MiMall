// 导入插件
import Vue from 'vue'
import Router from 'vue-router'
// 导入页面
import Home from './../pages/home'
import Index from './../pages/index'
import Product from './../pages/product'
import Detail from './../pages/detail'
import Cart from './../pages/cart'
import Order from './../pages/order'
import OrderConfirm from './../pages/orderConfirm'
import OrderList from './../pages/orderList'
import OrderPay from './../pages/orderPay'
import AliPay from './../pages/alipay'

// 加载插件的固定语法
Vue.use(Router);

// 导出 一个对象
export default new Router({
    // 配置
    routes:[
        // 定义一个路由：首页、产品站、产品详情 
        {
            path: '/',
            name: 'home',   // 有相似的部分可以抽取成一个父路由进行复用
            component: Home,
            redirect: '/index',  // 重定向到 ‘/index’ 里面去
            children:[
                {
                    path: '/index', // 首页
                    name: 'index',
                    component: Index
                }, {
                    path: '/product/:id',   // 动态路由。id 是一个参数
                    name: 'product',
                    component: Product
                }, {
                    path: '/detail/:id',
                    name: 'detail',
                    component: Detail
                }
            ]
        }, 
        // 定义一个路由：购物车。单独引用
        {
            path: '/cart',
            name: 'cart',
            component: Cart
        },
        // 定义一个路由：订单
        {
            path: '/order',
            name: 'order',
            component: Order,
            children:[
                {
                    path: 'confirm',
                    name: 'order-confirm',
                    component: OrderConfirm
                }, {
                    path: 'list',
                    name: 'order-list',
                    component: OrderList
                }, {
                    path: 'pay',
                    name: 'order-pay',
                    component: OrderPay
                }, {
                    path: 'alipay',
                    name: 'alipay',
                    component: AliPay
                }
            ]
        }
    ]
});