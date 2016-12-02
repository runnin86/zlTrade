<template>
  <!--顶部-->
<div class="com-header">
  <div class="return"><a @click="this.$root.back()"><i class="iconfont">&#xe624;</i></a></div>
  <div class="header-title">车险代办</div>
</div>
<div class="header-h"></div>
<!--顶部:over-->
<div class="car-cont1">
 <div class="c-img">
 	<span></span><img src="/img/pic-cx1.png">
 </div>
 <div class="c-div">
 	<h3>中国平安保险</h3>
 	<p>车险新贵，折减特惠，<br>极速响应，安心不贵 。</p>
 </div>
</div>
<div class="illegal-form">
<div class="car-cont2">
 <div class="car-cont2-top"><strong>基本信息</strong></div>
 <div class="car-cont2-bottom">

 <form action="" method="">
  <p><i><span></span><img src="/img/icon-xzcs.png"></i><strong>选择城市</strong><input type="text" class="ill-txt" placeholder="选择城市>"></p>
  <p><i><span></span><img src="/img/icon-cphm.png"></i><strong>车牌号码</strong><input type="text" class="ill-txt" placeholder="请输入车牌"></p>
  <p><i><span></span><img src="/img/icon-ppcx.png"></i><strong>品牌车系</strong><input type="text" class="ill-txt" placeholder="请选择品牌>"></p>
  <p><i><span></span><img src="/img/icon-cx.png"></i><strong>车型</strong><input type="text" class="ill-txt" placeholder="请选择车型"></p>
  <p><i><span></span><img src="/img/icon-bxdqsj.png"></i><strong>保险到期时间</strong><input type="text" class="ill-txt" placeholder="请选择日期"></p>

</div>
 </div>
</div>
<div class="car-cont2">
 <div class="car-cont2-bottom">
 	<div class="illegal-form">
  <p><i><span></span><img src="/img/icon-czxm.png"></i><strong>车主姓名</strong><input type="text" class="ill-txt" placeholder="请输入车主姓名"></p>
  <p><i><span></span><img src="/img/icon-sfzh.png"></i><strong>身份证号</strong><input type="text" class="ill-txt" placeholder="请输入身份号码"></p>
</div>
 </div>
</div>
 <div class="img-txt">
 	<a href="javascript:;">
  	<i class="icon">&#xe637;</i>
  	<p>点击添加行车证</p>
 	</a>
 </div>
<input type="button" class="com-btn" value="查询" onClick="location.href='illegal-list.html'">
 </form>

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
