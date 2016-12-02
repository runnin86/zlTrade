<template>
  <div class="content" transition="bounce">
    <!--图片展示-->
    <div class="used-cont-pics">
    	 <div class="return">
         <a href="javascript:history.go(-1)">
           <i class="iconfont">&#xe624;</i>
         </a>
       </div>
      <div class="used-banner">
        <div class="main_visual" style="height: 100%;">
        	<div class="flicking_con">
        		<span>
              <a href="#">1</a>
        		  <a href="#">2</a>
        		  <a href="#">3</a>
        		  <a href="#">4</a>
            </span>
        	</div>
        	<div class="main_image">
        		<ul>
        			<li><span><a href="#"><img src="/img/pic-car1.png"></a></span></li>
        			<li><span><a href="#"><img src="/img/pic-car2.png" style="width:16rem; height: 10.7rem;" alt="" /></a></span></li>
        			<li><span><a href="#"><img src="/img/pic-car1.png" style="width:16rem; height: 10.7rem;" alt="" /></a></span></li>
        			<li><span><a href="#"><img src="/img/pic-car2.png" style="width:16rem; height: 10.7rem;" alt="" /></a></span></li>
        		</ul>
            <a href="javascript:;" id="btn_prev"></a>
        		<a href="javascript:;" id="btn_next"></a>
        	</div>
        </div>
      </div>
    </div>
    <!--图片展示:over-->
    <div class="used-cont-title">
    	<h3>凯美瑞 2012款 俊瑞 2.0S耀动版  </h3>
    	<p><span>￥14.80万</span>参考价：13.05-15.00万元</p>
    </div>
    <div class="used-cont-div">
    	<div class="used-cont-div-top"><strong>基本信息</strong></div>
    	<div class="used-cont-div-middle">
    		<span><label>3.40万公里</label>行驶里程</span>
    		<span><label>2013年9月</label>首次上牌</span>
    		<span><label>自动/2.0L</label>档位/排量</span>
    </div>
    <div class="cont-container">
    	<img src="/img/pic-spnr.jpg">
    </div>
    </div>
    <!--悬浮-->
    <div class="used-tool-h"></div>
    <div class="used-tool">
    	<input type="button" class="used-btn" value="预约看车" />
    </div>
    <!--悬浮:over-->
  </div>
</template>

<script>
require('../../assets/js/jquery.min')
require('../../assets/js/jquery.event.drag-1.5.min')
require('../../assets/js/jquery.touchSlider')
require('../../assets/js/used-banner')

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
