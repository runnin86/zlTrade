<template>
  <div class="content" transition="bounce">
    <!--顶部-->
    <div class="com-header">
      <div class="return">
        <a @click="this.$root.back()">
          <i class="iconfont">&#xe624;</i>
        </a>
      </div>
      <div class="header-title">修改密码</div>
    </div>
    <div class="header-h"></div>
    <!--顶部:over-->
    <div class="forget-form">
     	<!-- <p>
        <i>
          <span></span>
          <img src="/img/icon-sj.png">
        </i>
        <input type="text" class="for-txt1" placeholder="请输入注册手机号码">
        <input type="button" class="for-btn1" value="获取验证码">
      </p> -->
     	<p>
        <i>
          <span></span>
          <img src="/img/icon-mdd.png">
        </i>
        <input class="for-txt2" type="password" v-model="oldPwd" placeholder="输入旧密码">
      </p>
     	<p>
        <i>
          <span></span>
          <img src="/img/icon-mm.png">
        </i>
        <input class="for-txt2" type="password" v-model="newPwd" placeholder="设置新密码">
      </p>
     	<input type="submit" class="com-btn" value="提交"
        style="height: 2.2rem;margin:1rem auto;" @click="pwd()"/>
    </div>
  </div>
</template>

<script>
import {api} from '../../util/service'
import $ from 'zepto'

export default {
  ready () {
  },
  data () {
    return {
      oldPwd: '',
      newPwd: ''
    }
  },
  methods: {
    pwd () {
      if (!this.oldPwd) {
        $.toast('请输入旧密码')
        return
      }
      if (!this.newPwd) {
        $.toast('请输入新密码')
        return
      }
      let token = window.localStorage.getItem('zlToken')
      this.$http.post(api.pwd, {
        'npass': this.newPwd,
        'opass': this.oldPwd
      }, {
        headers: {
          'x-token': token
        },
        emulateJSON: true
      })
      .then(({data: {code, msg, result}})=>{
        if (code === 1) {
          $.toast('修改成功,需要重新登录!')
          this.newPwd = ''
          this.oldPwd = ''
          this.$route.router.go({path: '/login?from=home', replace: true})
        }
        else {
          $.toast(msg)
        }
      }).catch((e)=>{
        console.error('修改密码失败:' + e)
      })
    }
  }
}
</script>

<style>

</style>
