//入口文件
console.log("ok")

import Vue from 'vue'

import {Header} from 'mint-ui'
Vue.component(Header.name, Header);


//导入mui 样式
import './lib/mui/css/mui.min.css'


//导入app根组件
import app from './App.vue'


var vm = new Vue({
  el: '#app',
  render: c => c(app)
});
