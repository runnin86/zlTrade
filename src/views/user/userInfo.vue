<template>
  <div class="content" transition="bounce">
    <!--顶部-->
    <div class="com-header">
      <div class="return"><a @click="this.$root.back()"><i class="iconfont">&#xe624;</i></a></div>
      <div class="header-title">个人资料</div>
    </div>
    <div class="header-h"></div>
    <!--顶部:over-->
    <div class="user-info1">
      <a href="javascript:;">
        <strong>头像</strong>
        <div class="tx"><img src="/img/user-tx.png"><i class="icon">&#xe624;</i></div>
      </a>
    </div>
    <div class="user-info2">
      <p>
        <strong>账户</strong>
        <input type="text" class="txt" value="18012345678">
      </p>
      <p>
        <strong>昵称</strong>
        <input type="text" class="txt" value="听说昵称越长越牛逼">
      </p>
      <p>
        <strong>性别</strong>
        <select class="sel"><option>女</option><option>男</option></select>
      </p>
    </div>
    <input type="button" class="com-btn" style="height: 2.2rem;margin:1rem auto;" value="退出登录" />
  </div>
</template>

<script>
export default {
  ready () {
  },
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<style>

</style>
