<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
// 当导入文件下面只有一个的时候最下面的文件可以省略，如省略 ‘/index’
// import storage from './storage/index'
export default {
  name: 'app',
    components: {

  },
  data() {
    return {
      res: {}
    }
  },
  mounted() {
    // storage.setItem('a',1);
    // storage.setItem('user',{a:{b:1}})
    // storage.setItem('xz', 10, 'user')
    // storage.clear('a')
    // storage.clear('a', 'user');
  
    this.axios.get('/user/login').then((res)=>{
      this.res = res;
    });

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
