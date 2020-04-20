<template>
  <div id="app" class="app-container">

    <!--固定定位 不占标准流-->
    <mt-header fixed title="固定在顶部"></mt-header>
    <h1>dddd</h1>

    <!--顶部header 区域-->

    <!--中间 router-view 区域-->


    <!--底部tabbar 区域-->
    <!--MUI 的使用：需要手动拷贝-->
    <nav class="mui-bar mui-bar-tab">
      <a class="mui-tab-item mui-active" href="#tabbar">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </a>
      <a class="mui-tab-item" href="#tabbar-with-chat">
        <span class="mui-icon mui-icon-email"><span class="mui-badge">9</span></span>
        <span class="mui-tab-label">消息</span>
      </a>
      <a class="mui-tab-item" href="#tabbar-with-contact">
        <span class="mui-icon mui-icon-contact"></span>
        <span class="mui-tab-label">通讯录</span>
      </a>
      <a class="mui-tab-item" href="#tabbar-with-map">
        <span class="mui-icon mui-icon-gear"></span>
        <span class="mui-tab-label">设置</span>
      </a>
    </nav>
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style>


  .app-container {
    padding-top: 40px;
  }

</style>
