<template>
  <!--顶部-->
  <div class="com-header">
    <div class="return"><a href="javascript:history.go(-1)"><i class="iconfont">&#xe624;</i></a></div>
    <div class="header-title">租车</div>
  </div>
  <div class="header-h"></div>
  <!--顶部:over-->
  <!--筛选弹窗-->
  <div class="used-dialog" id="used-light" :style="{'display': (showSel?'block':'none')}">
   <div class="used-dialog-top">
    <a href="javascript:;" @click="showSel=false"><i class="icon">&#xe624;</i></a>
    <h3>价格 · 品牌 · 车型</h3>
   </div>
   <div class="used-dialog-top-h"></div>
   <div class="used-dialog-middle">
   	<div class="sxbox">
   	 <div class="sxbox-top"><strong>价格</strong><span>100-200</span></div>
   	 <div class="sxbox-bottom">
   	 	<div class="sxbox-bottom-container">
   	 		<label>不限</label><label class="active">100-200</label><label>201-400</label><label>401-600</label><label>601-1000</label><label>1001-2000</label><label>2001-4000</label><label>4000+</label>
   	 	</div>
   	 </div>
   	</div>
   	<div class="sxbox">
   	 <div class="sxbox-top"><strong>品牌</strong><span>奥迪</span></div>
   	 <div class="sxbox-bottom">
   	 	<div class="sxbox-bottom-container">
   	 		<label>宝马</label><label class="active">奥迪</label><label>奔驰</label><label>别克</label><label>现代</label><label>大众</label><label>长安</label><label>奔驰</label><label>别克</label><label>现代</label><label>大众</label><label>长安</label><label>奔驰</label><label>别克</label><label>现代</label><label>大众</label><label>长安</label><label>奔驰</label><label>别克</label><label>现代</label><label>大众</label><label>长安</label><label>奔驰</label><label>别克</label><label>现代</label><label>大众</label><label>长安</label>
   	 	</div>
   	 </div>
   	</div>
   	<div class="sxbox">
   	 <div class="sxbox-top"><strong>车型</strong><span>0-5万</span></div>
   	 <div class="sxbox-bottom">
   	 	<div class="sxbox-bottom-container">
   	 		<label>SUV</label><label class="active">经济型</label><label>商务型</label><label>跑车</label><label>皮卡</label><label>面包车</label><label>商务型</label><label>跑车</label><label>皮卡</label><label>面包车</label>
   	 	</div>
   	 </div>
   	</div>
   	<br /><br /><br /><br /><br />
   </div>
   <div class="used-dialog-bottom-h"></div>
   <div class="used-dialog-bottom">
    <input type="button" class="btn-ok"  value="确定"/>
    <input type="button" class="btn-no" value="取消" @click="showSel=false" />
   </div>

  </div>
  <div class="used-black" id="used-fade" :style="{'display': (showSel?'block':'none')}"></div>
 <!--筛选弹窗:over-->
 <link href="/css/tabBox-used.css" rel="stylesheet" />
 <div class="tabBox-hd-h"></div>
 <div id="tabBox1" class="tabBox">
    <div class="hd">
      <ul>
        <li><a href="javascript:void(0)">综合排序</a></li>
        <li><a href="javascript:void(0)">价格</a></li>
        <input type="button" class="sx-btn" value="筛选" @click="showSel=true" />
      </ul>
    </div>
    <div class="bd" id="tabBox1-bd">
      <!--综合排序-->
      <div class="con">
       <ul>
        <li>
         <a v-link="{path: '/page/usedCarCont', replace: false}">
         	<div class="used-img"><span></span><img src="/img/pic-esc1.png"></div>
         	<div class="used-div">
         		<h3>凯美瑞 2012款 俊瑞 2.0S耀动版  </h3>
         		<p>3.1万公里 / 2012年 / 商家</p>
         		<div class="used-price">
         			<span>100</span>天
         		</div>
         	</div>
         </a>
        </li>
        <li>
         <a v-link="{path: '/page/usedCarCont', replace: false}">
         	<div class="used-img"><span></span><img src="/img/pic-esc2.png"></div>
         	<div class="used-div">
         		<h3>凯美瑞 2012款 俊瑞 2.0S耀动版  </h3>
         		<p>3.1万公里 / 2012年 / 商家</p>
         		<div class="used-price">
         			<span>300</span>天
         		</div>
         	</div>
         </a>
        </li>
        <li>
         <a v-link="{path: '/page/usedCarCont', replace: false}">
         	<div class="used-img"><span></span><img src="/img/pic-esc3.png"></div>
         	<div class="used-div">
         		<h3>凯美瑞 2012款 俊瑞 2.0S耀动版  </h3>
         		<p>3.1万公里 / 2012年 / 商家</p>
         		<div class="used-price">
         			<span>200</span>天
         		</div>
         	</div>
         </a>
        </li>
        <li>
         <a v-link="{path: '/page/usedCarCont', replace: false}">
         	<div class="used-img"><span></span><img src="/img/pic-esc1.png"></div>
         	<div class="used-div">
         		<h3>凯美瑞 2012款 俊瑞 2.0S耀动版  </h3>
         		<p>3.1万公里 / 2012年 / 商家</p>
         		<div class="used-price">
         			<span>150</span>天
         		</div>
         	</div>
         </a>
        </li>
        <li>
         <a v-link="{path: '/page/usedCarCont', replace: false}">
         	<div class="used-img"><span></span><img src="/img/pic-esc2.png"></div>
         	<div class="used-div">
         		<h3>凯美瑞 2012款 俊瑞 2.0S耀动版  </h3>
         		<p>3.1万公里 / 2012年 / 商家</p>
         		<div class="used-price">
         			<span>180</span>天
         		</div>
         	</div>
         </a>
        </li>
       </ul>
      </div>
      <!--综合排序:over-->
      <!--价格-->
      <div class="con">
       <li>
         <a v-link="{path: '/page/usedCarCont', replace: false}">
         	<div class="used-img"><span></span><img src="/img/pic-esc1.png"></div>
         	<div class="used-div">
         		<h3>凯美瑞 2012款 俊瑞 2.0S耀动版  </h3>
         		<p>3.1万公里 / 2012年 / 商家</p>
         		<div class="used-price">
         			<span>100</span>天
         		</div>
         	</div>
         </a>
        </li>
        <li>
         <a v-link="{path: '/page/usedCarCont', replace: false}">
         	<div class="used-img"><span></span><img src="/img/pic-esc2.png"></div>
         	<div class="used-div">
         		<h3>凯美瑞 2012款 俊瑞 2.0S耀动版  </h3>
         		<p>3.1万公里 / 2012年 / 商家</p>
         		<div class="used-price">
         			<span>300</span>天
         		</div>
         	</div>
         </a>
        </li>
        <li>
         <a v-link="{path: '/page/usedCarCont', replace: false}">
         	<div class="used-img"><span></span><img src="/img/pic-esc3.png"></div>
         	<div class="used-div">
         		<h3>凯美瑞 2012款 俊瑞 2.0S耀动版  </h3>
         		<p>3.1万公里 / 2012年 / 商家</p>
         		<div class="used-price">
         			<span>200</span>天
         		</div>
         	</div>
         </a>
        </li>
      </div>
      <!--价格:over-->
    </div>
  </div>
</template>

<script>
require('../../assets/js/jquery.min')
let {TouchSlide} = require('../../assets/js/TouchSlide.1.1')

export default {
  ready () {
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
      showSel: false
    }
  },
  methods: {
  }
}
</script>

<style>

</style>
