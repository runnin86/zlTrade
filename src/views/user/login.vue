<template>
  <div class="content" transition="pushtop">
    <!--顶部-->
  <div class="com-header">
    <div class="return"><a href="javascript:history.go(-1)"><i class="iconfont">&#xe624;</i></a></div>
    <div class="header-title">用户登录</div>
  </div>
  <div class="header-h"></div>
  <!--顶部:over-->
  <div class="forget-form">
   	<p><i><span></span><img src="/img/icon-sj.png"></i>
      <input type="text" class="for-txt2" v-model="userName" placeholder="请输入手机号码">
    </p>
   	<p><i><span></span><img src="/img/icon-mm.png"></i>
      <input type="password" class="for-txt2" v-model="password" placeholder="请输入密码">
    </p>
   	<input type="submit" class="com-btn" value="登录" style="height: 2.2rem;margin:1rem auto;"
      @click="login()"/>
  </div>
  <div class="login-link">
  	<!-- <a href="user-forget.html" class="f-fl">找回密码</a> -->
  	<!-- <a href="user-register.html" class="f-fr">注册账号</a> -->
  </div>
  </div>
</template>

<script>
import {userApi} from '../../util/service'
import $ from 'zepto'

export default {
  ready () {
  },
  data () {
    return {
      title: '登录',
      path: '/' + this.$route.query.from,
      userName: window.localStorage.getItem('localPhone') ? window.localStorage.getItem('localPhone') : '',
      password: '',
      submit: false
    }
  },
  methods: {
    login () {
      window.localStorage.setItem('localPhone', this.userName)
      // 登录时清空公告Id对象
      window.localStorage.removeItem('globalNoticeId')
      if (!this.userName || !this.password) {
        $.toast('请输入用户名或密码')
        this.$route.router.go({path: '/home', replace: true})
        return
      }
      this.$http.post(userApi.login, {
        'userName': this.userName,
        'password': this.password
      }).then(({data: {code, msg, info}})=>{
        if (code === 1) {
          if (info.user.user_status === 0) {
            $.toast('账户未激活，充值后激活账户')
          }
          else if (info.user.user_status === 1) {
            $.toast('登录成功')
            window.localStorage.setItem('user', JSON.stringify(info.user))
            window.localStorage.setItem('token', info.token)
            window.localStorage.setItem('imageSwitch', true)
            // 调用公告处理
            this.$root.loadNotice()
            this.$route.router.go({path: this.path, replace: true})
            // 设置购物车图标
            this.$root.setCardBadge()
          }
        }
        else {
          $.toast(msg)
        }
      }).catch((e)=>{
        $.alert('服务器连接中断...')
        console.error('无法连接服务器:' + e)
      })
    }
  },
  watch: {
    'userName': {
      handler: function (newVal, oldVal) {
        if (this.userName && this.password) {
          this.submit = true
        }
      }
    },
    'password': {
      handler: function (newVal, oldVal) {
        if (this.userName && this.password) {
          this.submit = true
        }
      }
    }
  }
}
</script>

<style>

</style>
