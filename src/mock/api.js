// 导入插件库
import Mock from 'mockjs'

Mock.mock('/api/user/login', {
    "status": 0,
    "data": {
        "id|10001-11000": 0,
        "username": "@name",   // @cname 是中文的随机姓名
        "email": "1291491915@qq.com",
        "phone": null,
        "role": 0,
        "createTime": 1479048325000,
        "updateTime": 1479048325000
    }
});