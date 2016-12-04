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
        <img src="/img/user-tx.png">
      </a>
    </div>
    <div class="name">
      听说昵称越长越牛逼
      <!-- <img src="/img/icon-vip.png"> -->
    </div>
    <div class="member1-tool">
    	<ul>
        <li><a href="#">0<br/>待付款</a></li>
        <li><a href="#">0<br/>待收货</a></li>
        <li><a href="#">100.00<br/>余额</a></li>
    	</ul>
    </div>
  </div>
  <div class="member2">
    <ul>
      <li>
      <a v-link="{ path: '/user/order', replace: false}">
        <img src="/img/icon-wddd.png">
        <strong>我的订单</strong>
        <i class="icon">&#xe624;</i>
      </a>
      </li>
      <li>
        <a href="user-address.html">
          <img src="/img/icon-shdzgl.png">
          <strong>收货地址管理</strong>
          <i class="icon">&#xe624;</i>
        </a>
      </li>
    </ul>
  </div>
  <div class="member2">
    <ul>
      <li>
        <a href="user-collection.html">
          <img src="/img/icon-wdsc.png">
          <strong>我的收藏</strong>
          <i class="icon">&#xe624;</i>
        </a>
      </li>
      <li>
        <a href="user-exchange.html">
          <img src="/img/icon-dhzq.png">
          <strong>兑换专区</strong>
          <i class="icon">&#xe624;</i>
        </a>
      </li>
    </ul>
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
