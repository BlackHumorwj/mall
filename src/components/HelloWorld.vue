<template>
  <div class="hello">


    <mt-button type="default" @click="show">default</mt-button>
    <mt-button type="primary">primary</mt-button>
    <mt-button type="danger">danger</mt-button>

    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li>
        <a
          href="https://vuejs.org"
          target="_blank"
        >
          Core Docs
        </a>
      </li>
      <li>
        <a
          href="https://forum.vuejs.org"
          target="_blank"
        >
          Forum
        </a>
      </li>
      <li>
        <a
          href="https://chat.vuejs.org"
          target="_blank"
        >
          Community Chat
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/vuejs"
          target="_blank"
        >
          Twitter
        </a>
      </li>
      <br>
      <li>
        <a
          href="http://vuejs-templates.github.io/webpack/"
          target="_blank"
        >
          Docs for This Template
        </a>
      </li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li>
        <a
          href="http://router.vuejs.org/"
          target="_blank"
        >
          vue-router
        </a>
      </li>
      <li>
        <a
          href="http://vuex.vuejs.org/"
          target="_blank"
        >
          vuex
        </a>
      </li>
      <li>
        <a
          href="http://vue-loader.vuejs.org/"
          target="_blank"
        >
          vue-loader
        </a>
      </li>
      <li>
        <a
          href="https://github.com/vuejs/awesome-vue"
          target="_blank"
        >
          awesome-vue
        </a>
      </li>
    </ul>
  </div>
</template>

<script>

  //js组件使用时 需要导入
  import {Toast} from 'mint-ui';

  export default {
    name: 'HelloWorld',
    created() {
      this.getList();
    },
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
        toastInstance: null
      }
    },
    methods: {
      getList() {
        this.show();
        setTimeout(() => {
          this.toastInstance.close();
        }, 5000)
      },

      show() {
//        Toast("吐司");
        this.toastInstance = Toast({
          message: '吐司了',
          position: 'bottom',
          duration: -1,
          //iconClass: 'icon icon-success',//设置图标的类
          className: 'myToast'//设置吐司的样式,需要自己提供一个类名
        })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .myToast {
    color: red !important;
    font-weight: 800;
  }
</style>
