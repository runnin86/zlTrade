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
        <div class="tx"><img src="/img/fw-escmm.png"><i class="icon">&#xe624;</i></div>
      </a>
    </div>
    <div class="user-info2">
      <p>
        <strong>账户</strong>
        <input type="button" class="txt" :value="user.userPhone">
      </p>
      <p>
        <strong>昵称</strong>
        <input type="button" class="txt" :value="user.userName">
      </p>
    </div>
    <input type="button" @click="logout(this.$route.router)"
      class="com-btn" style="height: 2.2rem;margin:1rem auto;" value="退出登录" />
  </div>
</template>

<script>
import $ from 'zepto'
import {api} from '../../util/service'

export default {
  ready () {
  },
  data () {
    return {
      user: JSON.parse(window.localStorage.getItem('zlUser'))
    }
  },
  methods: {
    /*
     * 退出
     */
    logout (route) {
      let token = window.localStorage.getItem('zlToken')
      this.$http.delete(api.logout, {}, {
        headers: {
          'x-token': token
        },
        emulateJSON: true
      })
      .then(({data: {data, code, msg}})=>{
        if (code === 1) {
          window.localStorage.removeItem('zlUser')
          window.localStorage.removeItem('zlToken')
          route.go({path: '/login', replace: true})
        }
        $.toast(msg)
      }).catch((e)=>{
        console.error('用户退出失败:' + e)
      })
    }
  }
}
</script>

<style>

</style>
