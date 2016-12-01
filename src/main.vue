<template>
  <div>
    <bar v-if="isIndex">
      <!-- <bar-item v-show="showPlan" path="/plan" label="购买方案" icon="plan"></bar-item> -->
      <bar-item path="/home" label="首页" icon="&#xe648;"></bar-item>
      <bar-item path="/vicinity" label="附近门店" icon="&#xe65e;"></bar-item>
      <bar-item path="/cart" label="购物车" icon="&#xe600;"></bar-item>
      <bar-item path="/user" label="我" icon="&#xe644;" :b="3"></bar-item>
    </bar>
    <router-view transition-mode="out-in"></router-view>
    <!-- <router-view transition-mode="out-in" keep-alive></router-view> -->
  </div>
</template>

<script>
// import {wxShareConfig} from './util/util'
import Bar from './components/Bar'
import BarItem from './components/BarItem'
import $ from 'zepto'
import wx from 'wx'

export default {
  data () {
    return {
      isIndex: true
    }
  },
  ready () {
    // 处理REM单位核心代码
    let resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize'
    let recalc = function () {
      var clientWidth = document.documentElement.clientWidth
      if (!clientWidth) return
      document.documentElement.style.fontSize = 20 * (clientWidth / 320) + 'px'
      document.getElementsByTagName('body')[0].style.opacity = '1'
    }
    if (!document.addEventListener) return
    window.addEventListener(resizeEvt, recalc, false)
    document.addEventListener('DOMContentLoaded', recalc, false)

    // 微信配置参数
    $.sign = {
      appId: 'wx74e81e3aa7edce63',
      timestamp: Date.parse(new Date()),
      nonceStr: this.randomString(32),
      signature: '{sign.signature}'
    }

    let wxJsApi = [
      'onMenuShareTimeline',
      'onMenuShareAppMessage',
      'onMenuShareQQ',
      'onMenuShareWeibo',
      'onMenuShareQZone'
    ]
    // 微信配置
    wx.config({
      debug: false,
      appId: $.sign.appId, // 必填，公众号的唯一标识
      timestamp: $.sign.timestamp, // 必填，生成签名的时间戳
      nonceStr: $.sign.nonceStr, // 必填，生成签名的随机串
      signature: $.sign.signature, // 必填，签名，见附录1
      jsApiList: wxJsApi // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
    })
    // 微信错误打印
    wx.error((res) => {
      /*
       * config信息验证失败会执行error函数，如签名过期导致验证失败，
       * 具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，
       * 对于SPA可以在这里更新签名。
       */
      console.log(res)
    })
    // 在需要配置分享内容的时候调用
    // wxShareConfig('123')
  },
  methods: {
    back () {
      // $.router.back()
      window.history.back()
      // window.history.go(-1)
    },
    randomString (len) {
      // 默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1
      let $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678'
      let maxPos = $chars.length
      let pwd = ''
      for (let i = 0; i < len; i++) {
        pwd += $chars.charAt(Math.floor(Math.random() * maxPos))
      }
      return pwd
    }
  },
  components: {
    Bar,
    BarItem
  }
}
</script>

<style>
@import './assets/css/global.css';
@import './assets/css/style.css';
[v-cloak] {
  display: none;
}

/*
 平滑切入
 */
.fade-transition {
  transition: opacity .1s ease;
}
.fade-enter, .fade-leave {
  opacity: 0;
}

/*
 从右至左切入
 */
.bounce-enter {
  animation: bounce-in .5s;
}
.bounce-leave {
  animation: bounce-out .5s;
}

@keyframes bounce-in {
  0% {
		opacity: 0;
		-webkit-transform: translateX(100%);
	}
	100% {
		opacity: 1;
		-webkit-transform: translateX(0);
	}
}
@keyframes bounce-out {
  0% {
		opacity: 0;
		-webkit-transform: translateX(0);
	}
	100% {
		opacity: 1;
		-webkit-transform: translateX(100%);
	}
}

/*
 从下至上切入
 */
.pushtop-enter {
  animation: pushtop-in .6s;
}
.pushtop-leave {
  animation: pushtop-out .3s;
}

@keyframes pushtop-in {
  0% {
		opacity: 0;
		-webkit-transform: translateY(100%);
	}
	100% {
		opacity: 1;
		-webkit-transform: translateY(0);
	}
}
@keyframes pushtop-out {
  0% {
		opacity: 0;
		-webkit-transform: translateY(0);
	}
	100% {
		opacity: 1;
		-webkit-transform: translateY(100%);
	}
}
</style>
