/**
 * sessionStorage 封装
 */
 
const STORAGE_KEY = 'mall';

// 导出一个默认的对象
export default {
    // 存储值
    setItem(key, value, module_name) {
        if (module_name) {
            let val = this.getItem(module_name);
            val[key] = value;
            this.setItem(module_name, val);
        } else {
            let val = this.getStorage();
            val[key] = value;
            window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(val));    // val是一个JSON对象，要把val转成字符串
        }    
    },
    // 获取某一个模块下面的属性
    getItem(key, module_name) {
        if (module_name) {
            let val = this.getItem(module_name);    // val 是module_name 返回的值
            if (val) return val[key];
        }
        return this.getStorage()[key];
    },
    // 获取整个数据,获取缓存信息
    getStorage() {
        // 先获取信息，然后转成JSON。（所有的读写设置都是通过JSON来操作的）
        return JSON.parse(window.sessionStorage.getItem(STORAGE_KEY) || '{}');
    },
    // 清除某一个值
    clear(key, module_name) {
        let val = this.getStorage();
        if (module_name) {
            delete val[module_name][key];
        } else {
            delete val[key];
        }
        // 改动完之后要重新把值写进去。  val就是整个 Storage 的信息
        window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(val));
    }
}