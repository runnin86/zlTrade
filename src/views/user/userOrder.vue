<template>
<div class="content" transition="bounce">
  <!--顶部-->
  <div class="com-header">
    <div class="return">
      <a @click="this.$root.back()">
        <i class="iconfont">&#xe624;</i>
      </a>
    </div>
    <div class="header-title">我的订单</div>
  </div>
  <div class="header-h"></div>
    <!--顶部:over-->
    <div class="tabBox-hd-h"></div>
    <div id="tabBox1" class="tabBox">
      <div class="hd">
        <ul>
          <li><a href="javascript:void(0)">全部</a></li>
          <li><a href="javascript:void(0)">购物订单</a></li>
          <li><a href="javascript:void(0)">服务订单</a></li>
          <li><a href="javascript:void(0)">待付款</a></li>
          <li><a href="javascript:void(0)">待收货</a></li>
        </ul>
      </div>
      <div class="bd" id="tabBox1-bd">
        <!--全部-->
        <div class="con">
         <ul>
          <li>
           <a v-link="{path: '/user/orderCont', replace: false}">
             <div class="odlb-top">
               <strong>订单编号：AED48815646</strong>
               <span>交易成功</span>
             </div>
             <div class="odlb-middle">
               <div class="od-img"><span></span><img src="/img/pic-odnr.png"></div>
     			     <div class="od-div">
         			   <div class="od-div-left">
          			    360度可调角度 汽车小圆镜盲点镜倒车镜 两个装
         			    <p>颜色:黑白&nbsp;&nbsp;尺寸:46码</p>
         			   </div>
                 <div class="od-div-right">
                   <p><strong>￥200.00</strong></p>
                   <p>X 1</p>
                 </div>
    		       </div>
             </div>
             <div class="odlb-middle">
               <div class="od-img"><span></span><img src="/img/pic-odnr.png"></div>
   			       <div class="od-div">
         			   <div class="od-div-left">
          			    360度可调角度 汽车小圆镜盲点镜倒车镜 两个装
         			    <p>颜色:黑白&nbsp;&nbsp;尺寸:46码</p>
         			   </div>
       		       <div class="od-div-right">
        			    <p><strong>￥200.00</strong></p>
        			    <p>X 1</p>
        			   </div>
  		        </div>
            </div>
           </a>
           <div class="odlb-bottom">
            <p>共计1件商品  合计:<span>￥200.00</span></p>
            <p><a href="#">删除订单</a></p>
           </div>
          </li>
          <li>
           <a href="#">
            <div class="odlb-top"><strong>订单编号：AED48815646</strong><span>待付款</span></div>
            <div class="odlb-middle">
             <div class="od-img"><span></span><img src="/img/pic-odnr.png"></div>
   			 <div class="od-div">
   			  <div class="od-div-left">
    			   360度可调角度 汽车小圆镜盲点镜倒车镜 两个装
   			   <p>颜色:黑白&nbsp;&nbsp;尺寸:46码</p>
   			  </div>
   		     <div class="od-div-right">
    			  <p><strong>￥200.00</strong></p>
    			  <p>X 1</p>
    			 </div>
  		    </div>
            </div>
           </a>
           <div class="odlb-bottom">
            <p>共计1件商品  合计:<span>￥200.00</span></p>
            <p><a href="#">去付款</a></p>
           </div>
          </li>
         </ul>
        </div>
        <!--全部:over-->
        <!--购物订单-->
        <div class="con">
         <ul>
          <li>
           <a href="#">
            <div class="odlb-top"><strong>订单编号：AED48815646</strong><span>交易成功</span></div>
            <div class="odlb-middle">
             <div class="od-img"><span></span><img src="/img/pic-odnr.png"></div>
   			 <div class="od-div">
   			  <div class="od-div-left">
    			   360度可调角度 汽车小圆镜盲点镜倒车镜 两个装
   			   <p>颜色:黑白&nbsp;&nbsp;尺寸:46码</p>
   			  </div>
   		     <div class="od-div-right">
    			  <p><strong>￥200.00</strong></p>
    			  <p>X 1</p>
    			 </div>
  		    </div>
            </div>
           </a>
           <div class="odlb-bottom">
            <p>共计1件商品  合计:<span>￥200.00</span></p>
            <p><a href="#">删除订单</a></p>
           </div>
          </li>
          <li>
           <a href="#">
            <div class="odlb-top"><strong>订单编号：AED48815646</strong><span>待付款</span></div>
            <div class="odlb-middle">
             <div class="od-img"><span></span><img src="/img/pic-odnr.png"></div>
   			 <div class="od-div">
   			  <div class="od-div-left">
    			   360度可调角度 汽车小圆镜盲点镜倒车镜 两个装
   			   <p>颜色:黑白&nbsp;&nbsp;尺寸:46码</p>
   			  </div>
   		     <div class="od-div-right">
    			  <p><strong>￥200.00</strong></p>
    			  <p>X 1</p>
    			 </div>
  		    </div>
            </div>
           </a>
           <div class="odlb-bottom">
            <p>共计1件商品  合计:<span>￥200.00</span></p>
            <p><a href="#">去付款</a></p>
           </div>
          </li>
         </ul>
        </div>
        <!--购物订单:over-->
        <!--服务订单-->
        <div class="con">
         <ul>
          <li>
           <a href="#">
            <div class="odlb-top"><strong>订单编号：AED48815646</strong><span>交易成功</span></div>
            <div class="odlb-middle">
             <div class="od-img"><span></span><img src="/img/pic-odnr.png"></div>
   			 <div class="od-div">
   			  <div class="od-div-left">
    			   360度可调角度 汽车小圆镜盲点镜倒车镜 两个装
   			   <p>颜色:黑白&nbsp;&nbsp;尺寸:46码</p>
   			  </div>
   		     <div class="od-div-right">
    			  <p><strong>￥200.00</strong></p>
    			  <p>X 1</p>
    			 </div>
  		    </div>
            </div>
           </a>
           <div class="odlb-bottom">
            <p>共计1件商品  合计:<span>￥200.00</span></p>
            <p><a href="#">删除订单</a></p>
           </div>
          </li>
          <li>
           <a href="#">
            <div class="odlb-top"><strong>订单编号：AED48815646</strong><span>待付款</span></div>
            <div class="odlb-middle">
             <div class="od-img"><span></span><img src="/img/pic-odnr.png"></div>
   			 <div class="od-div">
   			  <div class="od-div-left">
    			   360度可调角度 汽车小圆镜盲点镜倒车镜 两个装
   			   <p>颜色:黑白&nbsp;&nbsp;尺寸:46码</p>
   			  </div>
   		     <div class="od-div-right">
    			  <p><strong>￥200.00</strong></p>
    			  <p>X 1</p>
    			 </div>
  		    </div>
            </div>
           </a>
           <div class="odlb-bottom">
            <p>共计1件商品  合计:<span>￥200.00</span></p>
            <p><a href="#">去付款</a></p>
           </div>
          </li>
         </ul>
        </div>
        <!--服务订单:over-->
        <!--待付款-->
        <div class="con">
         <ul>
          <li>
           <a href="#">
            <div class="odlb-top"><strong>订单编号：AED48815646</strong><span>待付款</span></div>
            <div class="odlb-middle">
             <div class="od-img"><span></span><img src="/img/pic-odnr.png"></div>
   			 <div class="od-div">
   			  <div class="od-div-left">
    			   360度可调角度 汽车小圆镜盲点镜倒车镜 两个装
   			   <p>颜色:黑白&nbsp;&nbsp;尺寸:46码</p>
   			  </div>
   		     <div class="od-div-right">
    			  <p><strong>￥200.00</strong></p>
    			  <p>X 1</p>
    			 </div>
  		    </div>
            </div>
           </a>
           <div class="odlb-bottom">
            <p>共计1件商品  合计:<span>￥200.00</span></p>
            <p><a href="#">去付款</a></p>
           </div>
          </li>
         </ul>
        </div>
        <!--待付款:over-->
        <!--待收货-->
        <div class="con">
         <ul>
         <li>
           <a href="#">
            <div class="odlb-top"><strong>订单编号：AED48815646</strong><span>待收货</span></div>
            <div class="odlb-middle">
             <div class="od-img"><span></span><img src="/img/pic-odnr.png"></div>
   			 <div class="od-div">
   			  <div class="od-div-left">
    			   360度可调角度 汽车小圆镜盲点镜倒车镜 两个装
   			   <p>颜色:黑白&nbsp;&nbsp;尺寸:46码</p>
   			  </div>
   		     <div class="od-div-right">
    			  <p><strong>￥200.00</strong></p>
    			  <p>X 1</p>
    			 </div>
  		    </div>
            </div>
           </a>
           <div class="odlb-bottom">
            <p>共计1件商品  合计:<span>￥200.00</span></p>
            <p><a href="#">去收货</a></p>
           </div>
          </li>
          </ul>
        </div>
        <!--待收货:over-->
      </div>
    </div>
</div>
</template>

<script>
import $ from 'zepto'
require('../../assets/js/jquery.min')
let {TouchSlide} = require('../../assets/js/TouchSlide.1.1')

export default {
  ready () {
    $.toast('43')
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
  methods: {
  }
}
</script>

<style scoped>
@import './../../assets/css/tabBox-order.css';

</style>
