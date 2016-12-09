<template>
  <div class="content" transition="bounce">
  <!--顶部-->
  <div class="com-header">
    <div class="return"><a @click="this.$root.back()"><i class="iconfont">&#xe624;</i></a></div>
    <div class="header-title">商品详情</div>
  </div>
  <div class="header-h"></div>
  <!--顶部:over-->
  <!--图片展示-->
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
  <!--图片展示:over-->
  <div class="cont-title">
    <div class="cont-title1">
      <div class="cont-title1-left">
        <h3>迪加伦 汽车钥匙扣 金属 创意 挂件装饰品 bv编织 卡通 车用钥匙链 </h3>
        <p>￥230.00</p>
      </div>
    </div>
  </div>
  <div id="tabBox1" class="tabBox">
    <div class="hd">
      <ul>
        <li><a href="javascript:void(0)">商品介绍</a></li>
        <li><a href="javascript:void(0)">规格参数</a></li>
      </ul>
    </div>
    <div class="bd" id="tabBox1-bd">
      <!--商品介绍-->
      <div class="con">
        <div class="cont-container">
          <img src="/img/pic-spnr.jpg">
        </div>
      </div>
      <!--商品介绍:over-->
      <!--规格参数-->
      <div class="con">
        <div class="cont-container">
          <p>规格参数后台添加修改规格参数后台添加修改,规格参数后台添加修改规格参数后台添加修改规格参数后台添加修改规格参数后台添加修改规格参数后台添加修改规格参数后台添加修改</p>
          <p>规格参数后台添加修改规格参数后台添加修改,规格参数后台添加修改规格参数后台添加修改规格参数后台添加修改规格参数后台添加修改规格参数后台添加修改规格参数后台添加修改</p>
          <p>规格参数后台添加修改规格参数后台添加修改,规格参数后台添加修改规格参数后台添加修改规格参数后台添加修改规格参数后台添加修改规格参数后台添加修改规格参数后台添加修改</p>
        </div>
      </div>
      <!--规格参数:over-->
    </div>
  </div>
  <!--悬浮-->
  <div class="cont-tool-h"></div>
  <div class="used-tool">
    <input type="button" class="used-btn" style="background-color:#ffb744;"
      value="立即购买" @click="showBuy=true"/>
  </div>
  <!--悬浮:over-->
  <!--购买信息弹窗-->
  <div class="buy-info" id="buy-light" :style="{'display': (showBuy?'block':'none')}">
    <div class="buy-info1">
      <div class="gm-img"><img src="/img/pic-gm.jpg"></div>
      <div class="gm-div">
        <h3>迪加伦 汽车钥匙扣 金属 创意挂件装饰品 bv编织 卡通 车用钥...</h3>
        <p>￥230.00</p>
      </div>
      <div class="gm-close"><i class="icon" @click="showBuy=false">&#xe62f;</i></div>
    </div>
    <div class="buy-info3">
      <strong>购买数量</strong>
      <div class="num">
        <input type="button" class="num-minus" value="-">
        <input type="text" class="num-txt" value="1">
        <input type="button" class="num-add" value="+">
      </div>
    </div>
  </div>
  <div class="black" id="buy-black" @click="showBuy=false" :style="{'display': (showBuy?'block':'none')}"></div>
  <!--购买信息弹窗-->
  </div>
</template>

<script>
require('../../assets/js/jquery.min')
require('../../assets/js/jquery.event.drag-1.5.min')
require('../../assets/js/jquery.touchSlider')
require('../../assets/js/used-banner')
let {TouchSlide} = require('../../assets/js/TouchSlide.1.1')

export default {
  ready () {
    console.log(this.$route.params.id)
    TouchSlide({
      slideCell: '#tabBox1',
      endFun: function (i) {
        // 高度自适应
        var bd = document.getElementById('tabBox1-bd')
        bd.parentNode.style.height = bd.children[i].children[0].offsetHeight + 'px'
        if (i > 0) {
          // 添加动画效果
          bd.parentNode.style.transition = '200ms'
        }
      }
    })
  },
  data () {
    return {
      showBuy: false
    }
  },
  methods: {
  }
}
</script>

<style scoped>
@import './../../assets/css/tabBox-cont.css';

</style>
