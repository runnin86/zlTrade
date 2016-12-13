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
        <img src="/img/touxiang2.png">
      </a>
    </div>
    <div class="name" v-if="accountInfo" v-cloak>
      <span style="margin-left:2.1rem;">
        {{user?user.userName:'尚未登录'}}
      </span>
      <span>
        <a class="wbtn" @click="showWithdraw">提现</a>
        <!-- <img src="/img/icon-vip.png"> -->
      </span>
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
          <img src="/img/icon-wddd.png">
          <strong>我的佣金</strong>
          <i class="icon">&#xe624;</i>
        </a>
      </li>
      <li>
        <a v-link="{ path: '/user/withdraw', replace: false}">
          <img src="/img/icon-bxdqsj.png">
          <strong>我的提现</strong>
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
  <div class="change-dialog" :style="[{'display': (windowShow?'block':'none'),'z-index':1003}]">
    <div class="change-dialog-top">
      <input v-model="withdrawMoney" class="price-txt"
        placeholder="输入提现金额" type="number" min=10 max=10000
        onKeyPress="if(event.keyCode < 48 || event.keyCode > 57) event.returnValue = false;"
        onKeyUp="this.value=this.value.replace(/\D/g,'')"/>
      <!-- <h3>兑换码：<strong>AXS123456</strong></h3> -->
      <p style="color:red;">(提示:提现将有{{toAccountPer}}%金额转为余额)</p>
    </div>
    <div class="change-dialog-bottom">
      <input type="button" class="btn-no" value="取消" @click="windowShow=false">
      <input type="button" class="btn-ok" value="提交" @click="submitWithdraw">
    </div>
  </div>
  <div class="userBlack" :style="{'display': (windowShow?'block':'none')}"></div>
</template>

<script>
import {api} from '../../util/service'
import $ from 'zepto'

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
      accountInfo: null,
      windowShow: false,
      withdrawMoney: null,
      toAccountPer: 10
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
          $.alert(msg, ()=>{
            window.localStorage.clear()
            this.$route.router.go({path: '/login?from=user', replace: true})
          })
        }
      }).catch((e)=>{
        console.error('获取账户盈利失败:' + e)
      })
    },
    showWithdraw () {
      if (!this.windowShow) {
        this.withdrawMoney = null
        this.windowShow = true
      }
    },
    /*
     * 提交提现
     */
    submitWithdraw () {
      if (this.withdrawMoney < 10) {
        $.toast('提现金额必须大于10元!')
        this.withdrawMoney = null
        return
      }
      if (this.withdrawMoney > parseFloat(this.accountInfo.brokerage.replace(',', ''))) {
        $.toast('提现金额大于账户佣金!')
        this.withdrawMoney = null
        return
      }
      let token = window.localStorage.getItem('zlToken')
      this.$http.post(api.withdraw, {
        wamount: this.withdrawMoney,
        per: this.toAccountPer
      }, {
        headers: {
          'x-token': token
        }
      })
      .then(({data: {code, msg}})=>{
        if (code === 1) {
          this.withdrawMoney = null
          this.windowShow = false
          // 查询用户账户
          this.getUseAccount(token)
          $.toast('您的提现申请已经成功提交，请等待管理员审核。')
        }
        else {
          $.toast(msg)
        }
      }).catch((e)=>{
        console.error('提现失败:' + e)
      })
    }
  }
}
</script>

<style>
.wbtn{
  width: 2rem;
  height: 1rem;
  display: inline-block;
  /*position: absolute;*/
  /*top: 50%;*/
  margin-top: -1rem;
  /*right: 0;*/
  z-index: 5;
  background-color: #ffb744;
  border-radius: 0.2rem;
  font-size: 0.6rem;
  color: #fff;
  text-align: center;
  line-height: 1rem;
}
.userBlack {
  display: none;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: rgba(0,0,0,0.5);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1002;
}
</style>
