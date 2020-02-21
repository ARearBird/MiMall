/**
 * sessionStorage 封装
 */
 
const STORAGE_KEY = 'mall';

// 导出一个默认的对象
export default {
    // 存储值
    getItem() {

    },
    // 获取值
    setItem() {

    },
    // 获取整个数据,获取缓存信息
    getStorage() {
        // 先获取信息，然后转成JSON。（所有的读写设置都是通过JSON来操作的）
        return JSON.parse(window.sessionStorage.getItem(STORAGE_KEY) || '{}');
    },
    // 清除某一个值
    clear() {

    }
}