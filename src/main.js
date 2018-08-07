//导入模块， 模块化语法

//ES6中模块化语法
import Vue from 'vue';
import App from './App.vue';

//导入全局样式模块 

//导入bootstrap
// import '../node_modules/bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.css';

//导入index.css
import './assets/css/index.css';

//导入路由模块
import router from './routes/router.js';


new Vue({
  el: '#app',
  render: h => h(App)
})
