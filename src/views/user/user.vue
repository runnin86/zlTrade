<template>
  <div class="member1">
    <div class="bg-img">
      <img src="/img/bg-user.jpg">
    </div>
    <div class="set">
      <a v-link="{path: '/user/info', replace: false}">
        <img src="/img/icon-set.png">
      </a>
    </div>
    <div class="tx">
      <a>
        <img src="/img/user-tx1.png">
      </a>
    </div>
    <div class="name">
      {{user?user.userName:'尚未登录'}}
      <!-- <img src="/img/icon-vip.png"> -->
    </div>
    <div class="member1-tool" v-if="accountInfo" v-cloak>
    	<ul>
        <li><a href="javascript:void(0)">{{accountInfo.advance}}<br/>预付款</a></li>
        <li><a href="javascript:void(0)">{{accountInfo.brokerage}}<br/>佣金</a></li>
        <li><a href="javascript:void(0)">{{accountInfo.account}}<br/>余额</a></li>
    	</ul>
    </div>
  </div>
  <div class="member2" v-if="user" v-cloak>
    <ul>
      <li>
        <a v-link="{ path: '/user/order', replace: false}">
          <img src="/img/icon-dhzq.png">
          <strong>我的订单</strong>
          <i class="icon">&#xe624;</i>
        </a>
      </li>
      <li>
        <a v-link="{ path: '/user/comm', replace: false}">
          <img src="/img/icon-bxdqsj.png">
          <strong>我的佣金</strong>
          <i class="icon">&#xe624;</i>
        </a>
      </li>
    </ul>
  </div>
  <div class="member2" v-if="user" v-cloak>
    <ul>
      <li>
        <a v-link="{ path: '/user/team', replace: false}">
          <img src="/img/icon-czxm.png">
          <strong>我的团队</strong>
          <i class="icon">&#xe624;</i>
        </a>
      </li>
      <li>
        <a v-link="{ path: '/user/changePwd', replace: false}">
          <img src="/img/icon-wx.png">
          <strong>修改密码</strong>
          <i class="icon">&#xe624;</i>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import {api} from '../../util/service'

export default {
  ready () {
    if (!this.user) {
      this.$route.router.go({path: '/login', replace: true})
    }
    else {
      let token = window.localStorage.getItem('zlToken')
      // 获取账户
      this.getUseAccount(token)
    }
  },
  data () {
    return {
      user: JSON.parse(window.localStorage.getItem('zlUser')),
      accountInfo: null
    }
  },
  methods: {
    /*
     * 获取用户账户
     */
    getUseAccount (token) {
      this.$http.get(api.useAccount, {}, {
        headers: {
          'x-token': token
        },
        emulateJSON: true
      })
      .then(({data: {code, data, msg}})=>{
        if (code === 1) {
          this.accountInfo = data
        }
        else {
          console.log('获取用户账户失败:' + msg)
          // $.alert(msg, ()=>{
          //   window.localStorage.clear()
          //   this.$route.router.go({path: this.path, replace: true})
          //   this.$route.router.go({path: '/login?from=user', replace: true})
          // })
        }
      }).catch((e)=>{
        console.error('获取账户盈利失败:' + e)
      })
    }
  }
}
</script>

<style>

</style>
